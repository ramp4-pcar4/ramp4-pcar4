import { c_ as h, d2 as proxyCustomElement, d3 as H, d4 as Host, jP as CSS_UTILITY, f2 as createEvent, d0 as forceUpdate } from './main-C4Zge2Yj.js';
import { r as setRequestedIcon, g as getElementDir, x as isPrimaryPointerButton, n as getSlotted, t as toAriaBoolean } from './dom-BGy5LjKF.js';
import { s as submitForm, c as connectForm, i as internalHiddenInputInputEvent, d as disconnectForm, H as HiddenFormInputSlot } from './form-DJsNLTkR.js';
import { u as updateHostInteraction, I as InteractiveContainer } from './interactive-DNMhmiGt.js';
import { n as numberStringFormatter, i as isValidNumber, p as parseNumberString, s as sanitizeNumberString, a as addLocalizedTrailingDecimalZeros, c as connectLocalized, d as disconnectLocalized, B as BigDecimal, b as numberKeys } from './locale-C5zo_30B.js';
import { c as connectLabel, d as disconnectLabel, g as getLabelText } from './label-CSNG04Df.js';
import { s as setUpLoadableComponent, a as setComponentLoaded, c as componentFocusable } from './loadable-L00hvG9h.js';
import { c as createObserver } from './observers-CGCAhNZz.js';
import { u as updateMessages, c as connectMessages, d as disconnectMessages, s as setUpMessages } from './t9n-BnJaPbkv.js';
import { g as getIconScale } from './component-Dp1lfHT8.js';
import { d as defineCustomElement$3 } from './icon-D1Pivdst.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

const CSS$1 = {
    validationContainer: "validation-container",
};
const Validation = ({ scale, status, id, icon, message, }) => (h("div", { class: CSS$1.validationContainer },
    h("calcite-input-message", { "aria-live": "polite", icon: icon, id: id, scale: scale, status: status }, message)));

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
/**
 * Exported for testing purposes only
 */
const minMaxStepTypes = ["date", "datetime-local", "month", "number", "range", "time", "week"];
/**
 * Exported for testing purposes only
 */
const patternTypes = ["email", "password", "search", "tel", "text", "url"];
/**
 * Exported for testing purposes only
 */
const minMaxLengthTypes = ["email", "password", "search", "tel", "text", "textarea", "url"];
function updateConstraintValidation(inputComponent, input, propName, matchesType) {
    const attributeName = propName.toLowerCase();
    const value = inputComponent[propName];
    if (matchesType && value != null) {
        input.setAttribute(attributeName, `${value}`);
    }
    else {
        // we remove the attribute to ensure validation-constraints are properly reset
        input.removeAttribute(attributeName);
    }
}
/**
 * Synchronizes the hidden form input with the validation-related input properties.
 *
 * Note: loss of precision is expected due to the hidden input's value and validation-constraint props being strings.
 *
 * @param type - The input type.
 * @param inputComponent
 * @param hiddenFormInput
 */
function syncHiddenFormInput(type, inputComponent, hiddenFormInput) {
    hiddenFormInput.type = type === "textarea" ? "text" : type;
    const isMinMaxStepType = minMaxStepTypes.includes(type);
    const numericInputComponent = inputComponent;
    updateConstraintValidation(numericInputComponent, hiddenFormInput, "min", isMinMaxStepType);
    updateConstraintValidation(numericInputComponent, hiddenFormInput, "max", isMinMaxStepType);
    updateConstraintValidation(numericInputComponent, hiddenFormInput, "step", isMinMaxStepType);
    const isMinMaxLengthType = minMaxLengthTypes.includes(type);
    const textualInputComponent = inputComponent;
    updateConstraintValidation(textualInputComponent, hiddenFormInput, "minLength", isMinMaxLengthType);
    updateConstraintValidation(textualInputComponent, hiddenFormInput, "maxLength", isMinMaxLengthType);
    const isPatternType = patternTypes.includes(type);
    updateConstraintValidation(textualInputComponent, hiddenFormInput, "pattern", isPatternType);
}

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

const StatusIconDefaults = {
    valid: "check-circle",
    invalid: "exclamation-mark-triangle",
    idle: "information",
};

const inputMessageCss = ":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteInputMessageStyle0 = inputMessageCss;

const InputMessage = /*@__PURE__*/ proxyCustomElement(class InputMessage extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.icon = undefined;
        this.iconFlipRtl = false;
        this.scale = "m";
        this.status = "idle";
    }
    handleIconEl() {
        this.requestedIcon = setRequestedIcon(StatusIconDefaults, this.icon, this.status);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        this.requestedIcon = setRequestedIcon(StatusIconDefaults, this.icon, this.status);
    }
    render() {
        const hidden = this.el.hidden;
        return (h(Host, { key: 'c7d1b37721cec28dee1020b81ff66dee7fc8bc44', "calcite-hydrated-hidden": hidden }, this.renderIcon(this.requestedIcon), h("slot", { key: '7147d81e906765c154b4a61e31706a72c1ef3ae0' })));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    renderIcon(iconName) {
        if (iconName) {
            return (h("calcite-icon", { class: "calcite-input-message-icon", flipRtl: this.iconFlipRtl, icon: iconName, scale: "s" }));
        }
    }
    get el() { return this; }
    static get watchers() { return {
        "status": ["handleIconEl"],
        "icon": ["handleIconEl"]
    }; }
    static get style() { return CalciteInputMessageStyle0; }
}, [1, "calcite-input-message", {
        "icon": [520],
        "iconFlipRtl": [516, "icon-flip-rtl"],
        "scale": [513],
        "status": [513]
    }, undefined, {
        "status": ["handleIconEl"],
        "icon": ["handleIconEl"]
    }]);
function defineCustomElement$2() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-input-message", "calcite-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-input-message":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, InputMessage);
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
    } });
}
defineCustomElement$2();

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

const progressCss = ":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background-color:var(--calcite-progress-background-color, var(--calcite-color-border-3))}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-progress-fill-color, var(--calcite-color-brand))}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-progress-text-color, var(--calcite-color-text-2))}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteProgressStyle0 = progressCss;

const Progress = /*@__PURE__*/ proxyCustomElement(class Progress extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.type = "determinate";
        this.value = 0;
        this.label = undefined;
        this.text = undefined;
        this.reversed = false;
    }
    render() {
        const isDeterminate = this.type === "determinate";
        const barStyles = isDeterminate ? { width: `${this.value * 100}%` } : {};
        const dir = getElementDir(this.el);
        return (h("div", { key: '92597fefec948e4494425db28cd87bfad3cc76f8', "aria-label": this.label || this.text, "aria-valuemax": 1, "aria-valuemin": 0, "aria-valuenow": this.value, role: "progressbar" }, h("div", { key: 'd2a8ec085909b4bd35f443d0e831d645fb159317', class: "track" }, h("div", { key: '2dd26e56a0f344d02f1b4068167f61d9da4d2cbd', class: {
                bar: true,
                indeterminate: this.type === "indeterminate",
                [CSS_UTILITY.rtl]: dir === "rtl",
                reversed: this.reversed,
            }, style: barStyles })), this.text ? h("div", { class: "text" }, this.text) : null));
    }
    get el() { return this; }
    static get style() { return CalciteProgressStyle0; }
}, [1, "calcite-progress", {
        "type": [513],
        "value": [2],
        "label": [1],
        "text": [1],
        "reversed": [516]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-progress"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-progress":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Progress);
            }
            break;
    } });
}
defineCustomElement$1();

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

const CSS = {
    loader: "loader",
    clearButton: "clear-button",
    editingEnabled: "editing-enabled",
    inlineChild: "inline-child",
    inputIcon: "icon",
    prefix: "prefix",
    suffix: "suffix",
    numberButtonWrapper: "number-button-wrapper",
    buttonItemHorizontal: "number-button-item--horizontal",
    wrapper: "element-wrapper",
    inputWrapper: "wrapper",
    actionWrapper: "action-wrapper",
    resizeIconWrapper: "resize-icon-wrapper",
    numberButtonItem: "number-button-item",
};
const IDS = {
    validationMessage: "inputValidationMessage",
};
const INPUT_TYPE_ICONS = {
    tel: "phone",
    password: "lock",
    email: "email-address",
    date: "calendar",
    time: "clock",
    search: "search",
};
const SLOTS = {
    action: "action",
};

const inputCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input,textarea{text-overflow:ellipsis;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input:placeholder-shown,textarea:placeholder-shown{text-overflow:ellipsis}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly],textarea[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto)}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto)}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:input::-webkit-calendar-picker-indicator{display:none}input[type=date]::-webkit-input-placeholder{visibility:hidden !important}textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteInputStyle0 = inputCss;

const Input = /*@__PURE__*/ proxyCustomElement(class Input extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteInternalInputFocus = createEvent(this, "calciteInternalInputFocus", 6);
        this.calciteInternalInputBlur = createEvent(this, "calciteInternalInputBlur", 6);
        this.calciteInputInput = createEvent(this, "calciteInputInput", 7);
        this.calciteInputChange = createEvent(this, "calciteInputChange", 6);
        /** keep track of the rendered child type */
        this.childElType = "input";
        this.previousValueOrigin = "initial";
        this.mutationObserver = createObserver("mutation", () => this.setDisabledAction());
        this.userChangedValue = false;
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.keyDownHandler = (event) => {
            if (this.readOnly || this.disabled || event.defaultPrevented) {
                return;
            }
            if (this.isClearable && event.key === "Escape") {
                this.clearInputValue(event);
                event.preventDefault();
            }
            if (event.key === "Enter") {
                if (submitForm(this)) {
                    event.preventDefault();
                }
            }
        };
        this.clearInputValue = (nativeEvent) => {
            this.setValue({
                committing: true,
                nativeEvent,
                origin: "user",
                value: "",
            });
        };
        this.emitChangeIfUserModified = () => {
            if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
                this.calciteInputChange.emit();
                this.setPreviousEmittedValue(this.value);
            }
        };
        this.inputBlurHandler = () => {
            window.clearInterval(this.nudgeNumberValueIntervalId);
            this.calciteInternalInputBlur.emit();
            this.emitChangeIfUserModified();
        };
        this.clickHandler = (event) => {
            if (this.disabled) {
                return;
            }
            const composedPath = event.composedPath();
            if (!composedPath.includes(this.inputWrapperEl) ||
                composedPath.includes(this.actionWrapperEl)) {
                return;
            }
            this.setFocus();
        };
        this.inputFocusHandler = () => {
            this.calciteInternalInputFocus.emit();
        };
        this.inputChangeHandler = () => {
            if (this.type === "file") {
                this.files = this.childEl.files;
            }
        };
        this.inputInputHandler = (nativeEvent) => {
            if (this.disabled || this.readOnly) {
                return;
            }
            this.setValue({
                nativeEvent,
                origin: "user",
                value: nativeEvent.target.value,
            });
        };
        this.inputKeyDownHandler = (event) => {
            if (this.disabled || this.readOnly) {
                return;
            }
            if (event.key === "Enter") {
                this.emitChangeIfUserModified();
            }
        };
        this.inputNumberInputHandler = (nativeEvent) => {
            if (this.disabled || this.readOnly) {
                return;
            }
            if (this.value === "Infinity" || this.value === "-Infinity") {
                return;
            }
            const value = nativeEvent.target.value;
            numberStringFormatter.numberFormatOptions = {
                locale: this.effectiveLocale,
                numberingSystem: this.numberingSystem,
                useGrouping: this.groupSeparator,
            };
            const delocalizedValue = numberStringFormatter.delocalize(value);
            if (nativeEvent.inputType === "insertFromPaste") {
                if (!isValidNumber(delocalizedValue)) {
                    nativeEvent.preventDefault();
                }
                this.setValue({
                    nativeEvent,
                    origin: "user",
                    value: parseNumberString(delocalizedValue),
                });
                this.childNumberEl.value = this.displayedValue;
            }
            else {
                this.setValue({
                    nativeEvent,
                    origin: "user",
                    value: delocalizedValue,
                });
            }
        };
        this.inputNumberKeyDownHandler = (event) => {
            if (this.type !== "number" || this.disabled || this.readOnly) {
                return;
            }
            if (this.value === "Infinity" || this.value === "-Infinity") {
                event.preventDefault();
                if (event.key === "Backspace" || event.key === "Delete") {
                    this.clearInputValue(event);
                }
                return;
            }
            if (event.key === "ArrowUp") {
                /* prevent default behavior of moving cursor to the beginning of the input when holding down ArrowUp */
                event.preventDefault();
                this.nudgeNumberValue("up", event);
                return;
            }
            if (event.key === "ArrowDown") {
                this.nudgeNumberValue("down", event);
                return;
            }
            const supportedKeys = [
                ...numberKeys,
                "ArrowLeft",
                "ArrowRight",
                "Backspace",
                "Delete",
                "Enter",
                "Escape",
                "Tab",
            ];
            if (event.altKey || event.ctrlKey || event.metaKey) {
                return;
            }
            const isShiftTabEvent = event.shiftKey && event.key === "Tab";
            if (supportedKeys.includes(event.key) || isShiftTabEvent) {
                if (event.key === "Enter") {
                    this.emitChangeIfUserModified();
                }
                return;
            }
            numberStringFormatter.numberFormatOptions = {
                locale: this.effectiveLocale,
                numberingSystem: this.numberingSystem,
                useGrouping: this.groupSeparator,
            };
            if (event.key === numberStringFormatter.decimal) {
                if (!this.value && !this.childNumberEl.value) {
                    return;
                }
                if (this.value && this.childNumberEl.value.indexOf(numberStringFormatter.decimal) === -1) {
                    return;
                }
            }
            if (/[eE]/.test(event.key)) {
                if (!this.value && !this.childNumberEl.value) {
                    return;
                }
                if (this.value && !/[eE]/.test(this.childNumberEl.value)) {
                    return;
                }
            }
            if (event.key === "-") {
                if (!this.value && !this.childNumberEl.value) {
                    return;
                }
                if (this.value && this.childNumberEl.value.split("-").length <= 2) {
                    return;
                }
            }
            event.preventDefault();
        };
        this.nudgeNumberValue = (direction, nativeEvent) => {
            if ((nativeEvent instanceof KeyboardEvent && nativeEvent.repeat) || this.type !== "number") {
                return;
            }
            const inputMax = this.maxString ? parseFloat(this.maxString) : null;
            const inputMin = this.minString ? parseFloat(this.minString) : null;
            const valueNudgeDelayInMs = 150;
            this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
            if (this.nudgeNumberValueIntervalId) {
                window.clearInterval(this.nudgeNumberValueIntervalId);
            }
            let firstValueNudge = true;
            this.nudgeNumberValueIntervalId = window.setInterval(() => {
                if (firstValueNudge) {
                    firstValueNudge = false;
                    return;
                }
                this.incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent);
            }, valueNudgeDelayInMs);
        };
        this.numberButtonPointerUpAndOutHandler = () => {
            window.clearInterval(this.nudgeNumberValueIntervalId);
        };
        this.numberButtonPointerDownHandler = (event) => {
            if (!isPrimaryPointerButton(event)) {
                return;
            }
            event.preventDefault();
            const direction = event.target.dataset.adjustment;
            if (!this.disabled) {
                this.nudgeNumberValue(direction, event);
            }
        };
        this.onHiddenFormInputInput = (event) => {
            if (event.target.name === this.name) {
                this.setValue({
                    value: event.target.value,
                    origin: "direct",
                });
            }
            this.setFocus();
            event.stopPropagation();
        };
        this.setChildElRef = (el) => {
            this.childEl = el;
        };
        this.setChildNumberElRef = (el) => {
            this.childNumberEl = el;
        };
        this.setInputValue = (newInputValue) => {
            if (this.type === "text" && !this.childEl) {
                return;
            }
            if (this.type === "number" && !this.childNumberEl) {
                return;
            }
            this[`child${this.type === "number" ? "Number" : ""}El`].value = newInputValue;
        };
        this.setPreviousEmittedValue = (value) => {
            this.previousEmittedValue = this.normalizeValue(value);
        };
        this.setPreviousValue = (value) => {
            this.previousValue = this.normalizeValue(value);
        };
        this.setValue = ({ committing = false, nativeEvent, origin, previousValue, value, }) => {
            this.setPreviousValue(previousValue ?? this.value);
            this.previousValueOrigin = origin;
            if (this.type === "number") {
                numberStringFormatter.numberFormatOptions = {
                    locale: this.effectiveLocale,
                    numberingSystem: this.numberingSystem,
                    useGrouping: this.groupSeparator,
                    signDisplay: "never",
                };
                const isValueDeleted = this.previousValue?.length > value.length || this.value?.length > value.length;
                const hasTrailingDecimalSeparator = value.charAt(value.length - 1) === ".";
                const sanitizedValue = hasTrailingDecimalSeparator && isValueDeleted ? value : sanitizeNumberString(value);
                const newValue = value && !sanitizedValue
                    ? isValidNumber(this.previousValue)
                        ? this.previousValue
                        : ""
                    : sanitizedValue;
                let newLocalizedValue = numberStringFormatter.localize(newValue);
                if (origin !== "connected" && !hasTrailingDecimalSeparator) {
                    newLocalizedValue = addLocalizedTrailingDecimalZeros(newLocalizedValue, newValue, numberStringFormatter);
                }
                // adds localized trailing decimal separator
                this.displayedValue =
                    hasTrailingDecimalSeparator && isValueDeleted
                        ? `${newLocalizedValue}${numberStringFormatter.decimal}`
                        : newLocalizedValue;
                this.userChangedValue = origin === "user" && this.value !== newValue;
                // don't sanitize the start of negative/decimal numbers, but
                // don't set value to an invalid number
                this.value = ["-", "."].includes(newValue) ? "" : newValue;
            }
            else {
                this.userChangedValue = origin === "user" && this.value !== value;
                this.value = value;
            }
            if (origin === "direct") {
                this.setInputValue(value);
                this.previousEmittedValue = value;
            }
            if (nativeEvent) {
                const calciteInputInputEvent = this.calciteInputInput.emit();
                if (calciteInputInputEvent.defaultPrevented) {
                    this.value = this.previousValue;
                    this.displayedValue =
                        this.type === "number"
                            ? numberStringFormatter.localize(this.previousValue)
                            : this.previousValue;
                }
                else if (committing) {
                    this.emitChangeIfUserModified();
                }
            }
        };
        this.inputKeyUpHandler = () => {
            window.clearInterval(this.nudgeNumberValueIntervalId);
        };
        this.alignment = "start";
        this.autofocus = undefined;
        this.clearable = false;
        this.disabled = false;
        this.enterKeyHint = undefined;
        this.form = undefined;
        this.groupSeparator = false;
        this.icon = undefined;
        this.iconFlipRtl = false;
        this.inputMode = undefined;
        this.label = undefined;
        this.loading = false;
        this.numberingSystem = undefined;
        this.localeFormat = false;
        this.max = undefined;
        this.min = undefined;
        this.maxLength = undefined;
        this.minLength = undefined;
        this.validationMessage = undefined;
        this.validationIcon = undefined;
        this.validity = {
            valid: false,
            badInput: false,
            customError: false,
            patternMismatch: false,
            rangeOverflow: false,
            rangeUnderflow: false,
            stepMismatch: false,
            tooLong: false,
            tooShort: false,
            typeMismatch: false,
            valueMissing: false,
        };
        this.name = undefined;
        this.numberButtonType = "vertical";
        this.placeholder = undefined;
        this.prefixText = undefined;
        this.readOnly = false;
        this.required = false;
        this.scale = "m";
        this.status = "idle";
        this.step = undefined;
        this.autocomplete = undefined;
        this.pattern = undefined;
        this.accept = undefined;
        this.multiple = false;
        this.suffixText = undefined;
        this.editingEnabled = false;
        this.type = "text";
        this.value = "";
        this.files = undefined;
        this.messages = undefined;
        this.messageOverrides = undefined;
        this.defaultMessages = undefined;
        this.effectiveLocale = "";
        this.displayedValue = undefined;
        this.slottedActionElDisabledInternally = false;
    }
    //--------------------------------------------------------------------------
    //
    //  Global attributes
    //
    //--------------------------------------------------------------------------
    handleGlobalAttributesChanged() {
        forceUpdate(this);
    }
    disabledWatcher() {
        this.setDisabledAction();
    }
    /** watcher to update number-to-string for max */
    maxWatcher() {
        this.maxString = this.max?.toString() || null;
    }
    /** watcher to update number-to-string for min */
    minWatcher() {
        this.minString = this.min?.toString() || null;
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    valueWatcher(newValue, previousValue) {
        if (!this.userChangedValue) {
            if (this.type === "number" && (newValue === "Infinity" || newValue === "-Infinity")) {
                this.displayedValue = newValue;
                this.previousEmittedValue = newValue;
                return;
            }
            this.setValue({
                origin: "direct",
                previousValue,
                value: newValue == null || newValue == ""
                    ? ""
                    : this.type === "number"
                        ? isValidNumber(newValue)
                            ? newValue
                            : this.previousValue || ""
                        : newValue,
            });
            this.warnAboutInvalidNumberValue(newValue);
        }
        this.userChangedValue = false;
    }
    updateRequestedIcon() {
        this.requestedIcon = setRequestedIcon(INPUT_TYPE_ICONS, this.icon, this.type);
    }
    get isClearable() {
        return !this.isTextarea && (this.clearable || this.type === "search") && this.value?.length > 0;
    }
    get isTextarea() {
        return this.childElType === "textarea";
    }
    effectiveLocaleChange() {
        updateMessages(this, this.effectiveLocale);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        connectLocalized(this);
        connectMessages(this);
        this.inlineEditableEl = this.el.closest("calcite-inline-editable");
        if (this.inlineEditableEl) {
            this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
        }
        connectLabel(this);
        connectForm(this);
        this.mutationObserver?.observe(this.el, { childList: true });
        this.setDisabledAction();
        this.el.addEventListener(internalHiddenInputInputEvent, this.onHiddenFormInputInput);
    }
    disconnectedCallback() {
        disconnectLabel(this);
        disconnectForm(this);
        disconnectLocalized(this);
        disconnectMessages(this);
        this.mutationObserver?.disconnect();
        this.el.removeEventListener(internalHiddenInputInputEvent, this.onHiddenFormInputInput);
    }
    async componentWillLoad() {
        setUpLoadableComponent(this);
        this.childElType = this.type === "textarea" ? "textarea" : "input";
        this.maxString = this.max?.toString();
        this.minString = this.min?.toString();
        this.requestedIcon = setRequestedIcon(INPUT_TYPE_ICONS, this.icon, this.type);
        await setUpMessages(this);
        this.setPreviousEmittedValue(this.value);
        this.setPreviousValue(this.value);
        if (this.type === "number") {
            if (this.value === "Infinity" || this.value === "-Infinity") {
                this.displayedValue = this.value;
                this.previousEmittedValue = this.value;
            }
            else {
                this.warnAboutInvalidNumberValue(this.value);
                this.setValue({
                    origin: "connected",
                    value: isValidNumber(this.value) ? this.value : "",
                });
            }
        }
    }
    componentDidLoad() {
        setComponentLoaded(this);
    }
    componentShouldUpdate(newValue, oldValue, property) {
        if (this.type === "number" && property === "value" && newValue && !isValidNumber(newValue)) {
            this.setValue({
                origin: "reset",
                value: oldValue,
            });
            return false;
        }
        return true;
    }
    componentDidRender() {
        updateHostInteraction(this);
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Sets focus on the component. */
    async setFocus() {
        await componentFocusable(this);
        if (this.type === "number") {
            this.childNumberEl?.focus();
        }
        else {
            this.childEl?.focus();
        }
    }
    /** Selects the text of the component's `value`. */
    async selectText() {
        if (this.type === "number") {
            this.childNumberEl?.select();
        }
        else {
            this.childEl?.select();
        }
    }
    onLabelClick() {
        this.setFocus();
    }
    incrementOrDecrementNumberValue(direction, inputMax, inputMin, nativeEvent) {
        const { value } = this;
        if (value === "Infinity" || value === "-Infinity") {
            return;
        }
        const adjustment = direction === "up" ? 1 : -1;
        const inputStep = this.step === "any" ? 1 : Math.abs(this.step || 1);
        const inputVal = new BigDecimal(value !== "" ? value : "0");
        const nudgedValue = inputVal.add(`${inputStep * adjustment}`);
        const nudgedValueBelowInputMin = () => typeof inputMin === "number" &&
            !isNaN(inputMin) &&
            nudgedValue.subtract(`${inputMin}`).isNegative;
        const nudgedValueAboveInputMax = () => typeof inputMax === "number" &&
            !isNaN(inputMax) &&
            !nudgedValue.subtract(`${inputMax}`).isNegative;
        const finalValue = nudgedValueBelowInputMin()
            ? `${inputMin}`
            : nudgedValueAboveInputMax()
                ? `${inputMax}`
                : nudgedValue.toString();
        this.setValue({
            committing: true,
            nativeEvent,
            origin: "user",
            value: finalValue,
        });
    }
    syncHiddenFormInput(input) {
        syncHiddenFormInput(this.type, this, input);
    }
    setDisabledAction() {
        const slottedActionEl = getSlotted(this.el, "action");
        if (!slottedActionEl) {
            return;
        }
        if (this.disabled) {
            if (slottedActionEl.getAttribute("disabled") == null) {
                this.slottedActionElDisabledInternally = true;
            }
            slottedActionEl.setAttribute("disabled", "");
        }
        else if (this.slottedActionElDisabledInternally) {
            slottedActionEl.removeAttribute("disabled");
            this.slottedActionElDisabledInternally = false;
        }
    }
    normalizeValue(value) {
        return this.type === "number" ? (isValidNumber(value) ? value : "") : value;
    }
    warnAboutInvalidNumberValue(value) {
        if (this.type === "number" && value && !isValidNumber(value)) {
            console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
        }
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const dir = getElementDir(this.el);
        const loader = (h("div", { key: 'ed9acea9dbc18f4cfc5e7095c1e2de0b1adfdf35', class: CSS.loader }, h("calcite-progress", { key: '58321a27c25dd848a648d2e3d5ca6dfc3f5fd649', label: this.messages.loading, type: "indeterminate" })));
        const inputClearButton = (h("button", { key: '348d8dee0c032afe986b1e253c9d667256f3d9f0', "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: -1, type: "button" }, h("calcite-icon", { key: '334b68a283b767c0e9bea09ccfd83d09c8c17711', icon: "x", scale: getIconScale(this.scale) })));
        const iconEl = (h("calcite-icon", { key: '4ab83aa9268277a38449ebe4a6e3db4dc9badcae', class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: getIconScale(this.scale) }));
        const isHorizontalNumberButton = this.numberButtonType === "horizontal";
        const numberButtonsHorizontalUp = (h("button", { key: '2dd700034d38581aaea39c019e626ffa1a2c1c16', "aria-hidden": "true", class: {
                [CSS.numberButtonItem]: true,
                [CSS.buttonItemHorizontal]: isHorizontalNumberButton,
            }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, h("calcite-icon", { key: '6ca9a7c93aa14520292ad8c800c4e099bd46f30d', icon: "chevron-up", scale: getIconScale(this.scale) })));
        const numberButtonsHorizontalDown = (h("button", { key: 'cdbd88ddd308bd82b6d239a83f365a2c5e226cfc', "aria-hidden": "true", class: {
                [CSS.numberButtonItem]: true,
                [CSS.buttonItemHorizontal]: isHorizontalNumberButton,
            }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, h("calcite-icon", { key: 'f1b9cf329da9add564d690c517ddcc414c4fbfa3', icon: "chevron-down", scale: getIconScale(this.scale) })));
        const numberButtonsVertical = (h("div", { key: '247efdce33568f219b1bf3bf252b8b19a74d03ea', class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
        const prefixText = h("div", { key: '01819a850399fb20a29471861e011695bf80af97', class: CSS.prefix }, this.prefixText);
        const suffixText = h("div", { key: 'dcc073305f3824a0eb72ef230bd217dabdb72104', class: CSS.suffix }, this.suffixText);
        const autofocus = this.el.autofocus || this.el.hasAttribute("autofocus") ? true : null;
        const enterKeyHint = this.el.enterKeyHint || this.el.getAttribute("enterkeyhint");
        const inputMode = this.el.inputMode || this.el.getAttribute("inputmode");
        const localeNumberInput = this.type === "number" ? (h("input", { accept: this.accept, "aria-errormessage": IDS.validationMessage, "aria-invalid": toAriaBoolean(this.status === "invalid"), "aria-label": getLabelText(this), autocomplete: this.autocomplete, autofocus: autofocus, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: enterKeyHint, inputMode: inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, multiple: this.multiple, name: undefined, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, ref: this.setChildNumberElRef, type: "text", value: this.displayedValue })) : null;
        const childEl = this.type !== "number"
            ? [
                h(this.childElType, { accept: this.accept, "aria-errormessage": IDS.validationMessage, "aria-invalid": toAriaBoolean(this.status === "invalid"), "aria-label": getLabelText(this), autocomplete: this.autocomplete, autofocus: autofocus, class: {
                        [CSS.editingEnabled]: this.editingEnabled,
                        [CSS.inlineChild]: !!this.inlineEditableEl,
                    }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: enterKeyHint, inputMode: inputMode, max: this.maxString, maxLength: this.maxLength, min: this.minString, minLength: this.minLength, multiple: this.multiple, name: this.name, onBlur: this.inputBlurHandler, onChange: this.inputChangeHandler, onFocus: this.inputFocusHandler, onInput: this.inputInputHandler, onKeyDown: this.inputKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, ref: this.setChildElRef, required: this.required ? true : null, step: this.step, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: this.type, value: this.value }),
                this.isTextarea ? (h("div", { class: CSS.resizeIconWrapper }, h("calcite-icon", { icon: "chevron-down", scale: getIconScale(this.scale) }))) : null,
            ]
            : null;
        return (h(Host, { key: '23d6092960315f172a56105b9af75ddc6497874c', onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, h(InteractiveContainer, { key: '1bb063f39c14a829a376465fa8c2bbc288046ac7', disabled: this.disabled }, h("div", { key: '7f3644f002b7cb75d93d9c0218508b502ddcfd0b', class: { [CSS.inputWrapper]: true, [CSS_UTILITY.rtl]: dir === "rtl" }, ref: (el) => (this.inputWrapperEl = el) }, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
            ? numberButtonsHorizontalDown
            : null, this.prefixText ? prefixText : null, h("div", { key: '0d01898e4949a60e0853c1a72669f5c9d6c91ba5', class: CSS.wrapper }, localeNumberInput, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), h("div", { key: '42e7adec440e417128feb9845c36d0444e6c1ae4', class: CSS.actionWrapper, ref: (el) => (this.actionWrapperEl = el) }, h("slot", { key: 'f391b035ad9fc108d1f99c4cedf539425c20a36d', name: SLOTS.action })), this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly
            ? numberButtonsVertical
            : null, this.suffixText ? suffixText : null, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
            ? numberButtonsHorizontalUp
            : null, h(HiddenFormInputSlot, { key: 'df415df551b4a9a16565c8f554454d01aa89327e', component: this })), this.validationMessage && this.status === "invalid" ? (h(Validation, { icon: this.validationIcon, id: IDS.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status })) : null)));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "autofocus": ["handleGlobalAttributesChanged"],
        "enterkeyhint": ["handleGlobalAttributesChanged"],
        "inputmode": ["handleGlobalAttributesChanged"],
        "disabled": ["disabledWatcher"],
        "max": ["maxWatcher"],
        "min": ["minWatcher"],
        "messageOverrides": ["onMessagesChange"],
        "value": ["valueWatcher"],
        "icon": ["updateRequestedIcon"],
        "type": ["updateRequestedIcon"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return CalciteInputStyle0; }
}, [1, "calcite-input", {
        "alignment": [513],
        "autofocus": [4],
        "clearable": [516],
        "disabled": [516],
        "enterKeyHint": [1, "enter-key-hint"],
        "form": [513],
        "groupSeparator": [516, "group-separator"],
        "icon": [520],
        "iconFlipRtl": [516, "icon-flip-rtl"],
        "inputMode": [1, "input-mode"],
        "label": [1],
        "loading": [516],
        "numberingSystem": [513, "numbering-system"],
        "localeFormat": [4, "locale-format"],
        "max": [514],
        "min": [514],
        "maxLength": [514, "max-length"],
        "minLength": [514, "min-length"],
        "validationMessage": [1, "validation-message"],
        "validationIcon": [520, "validation-icon"],
        "validity": [1040],
        "name": [513],
        "numberButtonType": [513, "number-button-type"],
        "placeholder": [1],
        "prefixText": [1, "prefix-text"],
        "readOnly": [516, "read-only"],
        "required": [516],
        "scale": [513],
        "status": [513],
        "step": [520],
        "autocomplete": [1],
        "pattern": [1],
        "accept": [1],
        "multiple": [4],
        "suffixText": [1, "suffix-text"],
        "editingEnabled": [1540, "editing-enabled"],
        "type": [513],
        "value": [1025],
        "files": [16],
        "messages": [1040],
        "messageOverrides": [1040],
        "defaultMessages": [32],
        "effectiveLocale": [32],
        "displayedValue": [32],
        "slottedActionElDisabledInternally": [32],
        "setFocus": [64],
        "selectText": [64]
    }, undefined, {
        "autofocus": ["handleGlobalAttributesChanged"],
        "enterkeyhint": ["handleGlobalAttributesChanged"],
        "inputmode": ["handleGlobalAttributesChanged"],
        "disabled": ["disabledWatcher"],
        "max": ["maxWatcher"],
        "min": ["minWatcher"],
        "messageOverrides": ["onMessagesChange"],
        "value": ["valueWatcher"],
        "icon": ["updateRequestedIcon"],
        "type": ["updateRequestedIcon"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-input", "calcite-icon", "calcite-input-message", "calcite-progress"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Input);
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "calcite-input-message":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "calcite-progress":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { Input as I, defineCustomElement$1 as a, defineCustomElement$2 as b, defineCustomElement as d };
