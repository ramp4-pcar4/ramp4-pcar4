import { cG as h, cI as proxyCustomElement, cJ as H, cK as Host, jD as CSS_UTILITY, eL as createEvent } from './main-48Jy8Lgr.js';
import { o as setRequestedIcon, g as getElementDir, a as getSlotted, v as isPrimaryPointerButton } from './dom-ukL0J7Ft.js';
import { s as submitForm, c as connectForm, i as internalHiddenInputInputEvent, d as disconnectForm, H as HiddenFormInputSlot } from './form-CdMPJlZp.js';
import { c as connectInteractive, d as disconnectInteractive, u as updateHostInteraction, I as InteractiveContainer } from './interactive-5c5JZJ54.js';
import { n as numberStringFormatter, i as isValidNumber, p as parseNumberString, e as sanitizeNumberString, f as addLocalizedTrailingDecimalZeros, u as updateMessages, c as connectLocalized, a as connectMessages, d as disconnectLocalized, b as disconnectMessages, s as setUpMessages, B as BigDecimal, g as numberKeys } from './t9n-DKbrvFl-.js';
import { c as connectLabel, d as disconnectLabel, g as getLabelText } from './label2-C45Ay0f2.js';
import { s as setUpLoadableComponent, a as setComponentLoaded, c as componentFocusable } from './loadable-9WJhtkI2.js';
import { c as createObserver } from './observers-CNLHWjIv.js';
import { g as getIconScale } from './component-e8PY7-zZ.js';
import { d as defineCustomElement$3 } from './icon-Dc19mWxP.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const CSS$1 = {
    validationContainer: "validation-container",
};
const Validation = ({ scale, status, icon, message, }) => (h("div", { class: CSS$1.validationContainer },
    h("calcite-input-message", { icon: icon, scale: scale, status: status }, message)));

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
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
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

var StatusIconDefaults;
(function (StatusIconDefaults) {
    StatusIconDefaults["valid"] = "check-circle";
    StatusIconDefaults["invalid"] = "exclamation-mark-triangle";
    StatusIconDefaults["idle"] = "information";
})(StatusIconDefaults || (StatusIconDefaults = {}));

const inputMessageCss = ":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}";

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
        return (h(Host, { "calcite-hydrated-hidden": hidden }, this.renderIcon(this.requestedIcon), h("slot", null)));
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
    static get style() { return inputMessageCss; }
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
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const progressCss = ":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background:var(--calcite-color-border-3)}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-color-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}";

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
        return (h("div", { "aria-label": this.label || this.text, "aria-valuemax": 1, "aria-valuemin": 0, "aria-valuenow": this.value, role: "progressbar" }, h("div", { class: "track" }, h("div", { class: {
                bar: true,
                indeterminate: this.type === "indeterminate",
                [CSS_UTILITY.rtl]: dir === "rtl",
                reversed: this.reversed,
            }, style: barStyles })), this.text ? h("div", { class: "text" }, this.text) : null));
    }
    get el() { return this; }
    static get style() { return progressCss; }
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
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
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

const inputCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input,textarea{text-overflow:ellipsis;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input:placeholder-shown,textarea:placeholder-shown{text-overflow:ellipsis}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly],textarea[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:input::-webkit-calendar-picker-indicator{display:none}input[type=date]::-webkit-input-placeholder{visibility:hidden !important}textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";

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
            if (this.readOnly || this.disabled) {
                return;
            }
            if (this.isClearable && event.key === "Escape") {
                this.clearInputValue(event);
                event.preventDefault();
            }
            if (event.key === "Enter" && !event.defaultPrevented) {
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
            const slottedActionEl = getSlotted(this.el, "action");
            if (event.target !== slottedActionEl) {
                this.setFocus();
            }
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
        this.autofocus = false;
        this.clearable = false;
        this.disabled = false;
        this.form = undefined;
        this.groupSeparator = false;
        this.icon = undefined;
        this.iconFlipRtl = false;
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
        this.inputMode = "text";
        this.enterKeyHint = undefined;
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
        connectInteractive(this);
        connectLocalized(this);
        connectMessages(this);
        this.inlineEditableEl = this.el.closest("calcite-inline-editable");
        if (this.inlineEditableEl) {
            this.editingEnabled = this.inlineEditableEl.editingEnabled || false;
        }
        connectLabel(this);
        connectForm(this);
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
        this.mutationObserver?.observe(this.el, { childList: true });
        this.setDisabledAction();
        this.el.addEventListener(internalHiddenInputInputEvent, this.onHiddenFormInputInput);
    }
    disconnectedCallback() {
        disconnectInteractive(this);
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
        const loader = (h("div", { class: CSS.loader }, h("calcite-progress", { label: this.messages.loading, type: "indeterminate" })));
        const inputClearButton = (h("button", { "aria-label": this.messages.clear, class: CSS.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: -1, type: "button" }, h("calcite-icon", { icon: "x", scale: getIconScale(this.scale) })));
        const iconEl = (h("calcite-icon", { class: CSS.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: getIconScale(this.scale) }));
        const isHorizontalNumberButton = this.numberButtonType === "horizontal";
        const numberButtonsHorizontalUp = (h("button", { "aria-hidden": "true", class: {
                [CSS.numberButtonItem]: true,
                [CSS.buttonItemHorizontal]: isHorizontalNumberButton,
            }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, h("calcite-icon", { icon: "chevron-up", scale: getIconScale(this.scale) })));
        const numberButtonsHorizontalDown = (h("button", { "aria-hidden": "true", class: {
                [CSS.numberButtonItem]: true,
                [CSS.buttonItemHorizontal]: isHorizontalNumberButton,
            }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, h("calcite-icon", { icon: "chevron-down", scale: getIconScale(this.scale) })));
        const numberButtonsVertical = (h("div", { class: CSS.numberButtonWrapper }, numberButtonsHorizontalUp, numberButtonsHorizontalDown));
        const prefixText = h("div", { class: CSS.prefix }, this.prefixText);
        const suffixText = h("div", { class: CSS.suffix }, this.suffixText);
        const localeNumberInput = this.type === "number" ? (h("input", { accept: this.accept, "aria-label": getLabelText(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, key: "localized-input", maxLength: this.maxLength, minLength: this.minLength, multiple: this.multiple, name: undefined, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputNumberInputHandler, onKeyDown: this.inputNumberKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, type: "text", value: this.displayedValue,
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: this.setChildNumberElRef })) : null;
        const childEl = this.type !== "number"
            ? [
                h(this.childElType, { accept: this.accept, "aria-label": getLabelText(this), autocomplete: this.autocomplete, autofocus: this.autofocus ? true : null, class: {
                        [CSS.editingEnabled]: this.editingEnabled,
                        [CSS.inlineChild]: !!this.inlineEditableEl,
                    }, defaultValue: this.defaultValue, disabled: this.disabled ? true : null, enterKeyHint: this.enterKeyHint, inputMode: this.inputMode, max: this.maxString, maxLength: this.maxLength, min: this.minString, minLength: this.minLength, multiple: this.multiple, name: this.name, onBlur: this.inputBlurHandler, onChange: this.inputChangeHandler, onFocus: this.inputFocusHandler, onInput: this.inputInputHandler, onKeyDown: this.inputKeyDownHandler, onKeyUp: this.inputKeyUpHandler, pattern: this.pattern, placeholder: this.placeholder || "", readOnly: this.readOnly, required: this.required ? true : null, step: this.step, tabIndex: this.disabled || (this.inlineEditableEl && !this.editingEnabled) ? -1 : null, type: this.type, value: this.value,
                    // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
                    ref: this.setChildElRef }),
                this.isTextarea ? (h("div", { class: CSS.resizeIconWrapper }, h("calcite-icon", { icon: "chevron-down", scale: getIconScale(this.scale) }))) : null,
            ]
            : null;
        return (h(Host, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, h(InteractiveContainer, { disabled: this.disabled }, h("div", { class: { [CSS.inputWrapper]: true, [CSS_UTILITY.rtl]: dir === "rtl" } }, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
            ? numberButtonsHorizontalDown
            : null, this.prefixText ? prefixText : null, h("div", { class: CSS.wrapper }, localeNumberInput, childEl, this.isClearable ? inputClearButton : null, this.requestedIcon ? iconEl : null, this.loading ? loader : null), h("div", { class: CSS.actionWrapper }, h("slot", { name: SLOTS.action })), this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly
            ? numberButtonsVertical
            : null, this.suffixText ? suffixText : null, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly
            ? numberButtonsHorizontalUp
            : null, h(HiddenFormInputSlot, { component: this })), this.validationMessage && this.status === "invalid" ? (h(Validation, { icon: this.validationIcon, message: this.validationMessage, scale: this.scale, status: this.status })) : null)));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "disabled": ["disabledWatcher"],
        "max": ["maxWatcher"],
        "min": ["minWatcher"],
        "messageOverrides": ["onMessagesChange"],
        "value": ["valueWatcher"],
        "icon": ["updateRequestedIcon"],
        "type": ["updateRequestedIcon"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return inputCss; }
}, [1, "calcite-input", {
        "alignment": [513],
        "autofocus": [516],
        "clearable": [516],
        "disabled": [516],
        "form": [513],
        "groupSeparator": [516, "group-separator"],
        "icon": [520],
        "iconFlipRtl": [516, "icon-flip-rtl"],
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
        "inputMode": [1, "input-mode"],
        "enterKeyHint": [1, "enter-key-hint"],
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
