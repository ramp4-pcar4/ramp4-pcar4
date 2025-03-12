import { q as queryElementRoots, c as closestElementCrossShadowBoundary } from './dom-ukL0J7Ft.js';
import { cG as h } from './main-h0RsJOaN.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

/**
 * Any form <Component> with a `calcite<Component>Input` event needs to be included in this array.
 */
const componentsWithInputEvent = [
    "calcite-input",
    "calcite-input-number",
    "calcite-input-text",
    "calcite-text-area",
];
/**
 * Get the event name to listen for that, when emitted, will clear the
 * validation message that displays after form submission. Only validation
 * messages that are set by the browser will be cleared. If a user sets
 * validationMessage to a custom value, they are responsible for clearing it.
 *
 * Exported for testing purposes.
 *
 * @param componentTag the tag of the component, e.g. "calcite-input"
 * @returns the event name
 */
function getClearValidationEventName(componentTag) {
    const componentTagCamelCase = componentTag
        .split("-")
        .map((part, index) => index === 0 ? part : `${part[0].toUpperCase()}${part.slice(1)}`)
        .join("");
    const clearValidationEvent = `${componentTagCamelCase}${componentsWithInputEvent.includes(componentTag) ? "Input" : "Change"}`;
    return clearValidationEvent;
}
/**
 * Exported for testing purposes.
 */
const hiddenFormInputSlotName = "hidden-form-input";
function isCheckable(component) {
    return "checked" in component;
}
const onFormResetMap = new WeakMap();
const formComponentSet = new WeakSet();
/**
 * This helps determine if our form component is part of a composite form-associated component.
 *
 * @param form
 * @param formComponentEl
 */
function hasRegisteredFormComponentParent(form, formComponentEl) {
    // if we have a parent component using the form ID attribute, we assume it is form-associated
    const hasParentComponentWithFormIdSet = closestElementCrossShadowBoundary(formComponentEl.parentElement, "[form]");
    if (hasParentComponentWithFormIdSet) {
        return true;
    }
    // we use events as a way to test for nested form-associated components across shadow bounds
    const formComponentRegisterEventName = "calciteInternalFormComponentRegister";
    let hasRegisteredFormComponentParent = false;
    form.addEventListener(formComponentRegisterEventName, (event) => {
        hasRegisteredFormComponentParent = event
            .composedPath()
            .some((element) => formComponentSet.has(element));
        event.stopPropagation();
    }, { once: true });
    formComponentEl.dispatchEvent(new CustomEvent(formComponentRegisterEventName, {
        bubbles: true,
        composed: true,
    }));
    return hasRegisteredFormComponentParent;
}
function clearFormValidation(component) {
    "status" in component && (component.status = "idle");
    "validationIcon" in component && (component.validationIcon = false);
    "validationMessage" in component && (component.validationMessage = "");
}
function setInvalidFormValidation(component, message) {
    "status" in component && (component.status = "invalid");
    "validationIcon" in component && !component.validationIcon && (component.validationIcon = true);
    "validationMessage" in component &&
        !component.validationMessage &&
        (component.validationMessage = message);
}
function displayValidationMessage(event) {
    // target is the hidden input, which is slotted in the actual form component
    const hiddenInput = event?.target;
    // not necessarily a calcite-input, but we don't have an HTMLCalciteFormElement type
    const formComponent = hiddenInput?.parentElement;
    const componentTag = formComponent?.nodeName?.toLowerCase();
    const componentTagParts = componentTag?.split("-");
    if (componentTagParts.length < 2 || componentTagParts[0] !== "calcite") {
        return;
    }
    // prevent the browser from showing the native validation popover
    event?.preventDefault();
    setInvalidFormValidation(formComponent, hiddenInput?.validationMessage);
    if (formComponent?.validationMessage !== hiddenInput?.validationMessage) {
        return;
    }
    const clearValidationEvent = getClearValidationEventName(componentTag);
    formComponent.addEventListener(clearValidationEvent, () => clearFormValidation(formComponent), {
        once: true,
    });
}
/**
 * Helper to submit a form.
 *
 * @param component
 * @returns true if its associated form was submitted, false otherwise.
 */
function submitForm(component) {
    const { formEl } = component;
    if (!formEl) {
        return false;
    }
    formEl.addEventListener("invalid", displayValidationMessage, true);
    formEl.requestSubmit();
    formEl.removeEventListener("invalid", displayValidationMessage, true);
    requestAnimationFrame(() => {
        const invalidEls = formEl.querySelectorAll("[status=invalid]");
        // focus the first invalid element that has a validation message
        for (const el of invalidEls) {
            if (el?.validationMessage) {
                el?.setFocus();
                break;
            }
        }
    });
    return true;
}
/**
 * Helper to reset a form.
 *
 * @param component
 */
function resetForm(component) {
    component.formEl?.reset();
}
/**
 * Helper to set up form interactions on connectedCallback.
 *
 * @param component
 */
function connectForm(component) {
    const { el, value } = component;
    const associatedForm = findAssociatedForm(component);
    if (!associatedForm || hasRegisteredFormComponentParent(associatedForm, el)) {
        return;
    }
    component.formEl = associatedForm;
    component.defaultValue = value;
    if (isCheckable(component)) {
        component.defaultChecked = component.checked;
    }
    const boundOnFormReset = (component.onFormReset || onFormReset).bind(component);
    associatedForm.addEventListener("reset", boundOnFormReset);
    onFormResetMap.set(component.el, boundOnFormReset);
    formComponentSet.add(el);
}
/**
 * Utility method to find a form-component's associated form element.
 *
 * @param component
 */
function findAssociatedForm(component) {
    const { el, form } = component;
    return form
        ? queryElementRoots(el, { id: form })
        : closestElementCrossShadowBoundary(el, "form");
}
function onFormReset() {
    clearFormValidation(this);
    if (isCheckable(this)) {
        this.checked = this.defaultChecked;
        return;
    }
    this.value = this.defaultValue;
}
/**
 * Helper to tear down form interactions on disconnectedCallback.
 *
 * @param component
 */
function disconnectForm(component) {
    const { el, formEl } = component;
    if (!formEl) {
        return;
    }
    const boundOnFormReset = onFormResetMap.get(el);
    formEl.removeEventListener("reset", boundOnFormReset);
    onFormResetMap.delete(el);
    component.formEl = null;
    formComponentSet.delete(el);
}
const internalHiddenInputInputEvent = "calciteInternalHiddenInputInput";
const hiddenInputInputHandler = (event) => {
    event.target.dispatchEvent(new CustomEvent(internalHiddenInputInputEvent, { bubbles: true }));
};
const removeHiddenInputChangeEventListener = (input) => input.removeEventListener("input", hiddenInputInputHandler);
/**
 * Helper for maintaining a form-associated's hidden input in sync with the component.
 *
 * Based on Ionic's approach: https://github.com/ionic-team/ionic-framework/blob/e4bf052794af9aac07f887013b9250d2a045eba3/core/src/utils/helpers.ts#L198
 *
 * @param component
 */
function syncHiddenFormInput(component) {
    const { el, formEl, name, value } = component;
    const { ownerDocument } = el;
    const inputs = el.querySelectorAll(`input[slot="${hiddenFormInputSlotName}"]`);
    if (!formEl || !name) {
        inputs.forEach((input) => {
            removeHiddenInputChangeEventListener(input);
            input.remove();
        });
        return;
    }
    const values = Array.isArray(value) ? value : [value];
    const extra = [];
    const seen = new Set();
    inputs.forEach((input) => {
        const valueMatch = values.find((val) => 
        /* intentional non-strict equality check */
        val == input.value);
        if (valueMatch != null) {
            seen.add(valueMatch);
            defaultSyncHiddenFormInput(component, input, valueMatch);
        }
        else {
            extra.push(input);
        }
    });
    let docFrag;
    values.forEach((value) => {
        if (seen.has(value)) {
            return;
        }
        let input = extra.pop();
        if (!input) {
            input = ownerDocument.createElement("input");
            input.slot = hiddenFormInputSlotName;
        }
        if (!docFrag) {
            docFrag = ownerDocument.createDocumentFragment();
        }
        docFrag.append(input);
        // emits when hidden input is autofilled
        input.addEventListener("input", hiddenInputInputHandler);
        defaultSyncHiddenFormInput(component, input, value);
    });
    if (docFrag) {
        el.append(docFrag);
    }
    extra.forEach((input) => {
        removeHiddenInputChangeEventListener(input);
        input.remove();
    });
}
function defaultSyncHiddenFormInput(component, input, value) {
    const { defaultValue, disabled, form, name, required } = component;
    // keep in sync to prevent losing reset value
    input.defaultValue = defaultValue;
    input.disabled = disabled;
    input.name = name;
    input.required = required;
    input.tabIndex = -1;
    // we set the attr as the prop is read-only
    if (form) {
        input.setAttribute("form", form);
    }
    else {
        input.removeAttribute("form");
    }
    if (isCheckable(component)) {
        input.checked = component.checked;
        // keep in sync to prevent losing reset value
        input.defaultChecked = component.defaultChecked;
        // heuristic to support default/on mode from https://html.spec.whatwg.org/multipage/input.html#dom-input-value-default-on
        input.value = component.checked ? value || "on" : "";
    }
    else {
        input.value = value || "";
    }
    component.syncHiddenFormInput?.(input);
}
/**
 * Helper to render the slot for form-associated component's hidden input.
 *
 * If the component has a default slot, this must be placed at the bottom of the component's root container to ensure it is the last child.
 *
 * render(): VNode {
 *   <Host>
 *     <div class={CSS.container}>
 *     // ...
 *     <HiddenFormInputSlot component={this} />
 *     </div>
 *   </Host>
 * }
 *
 * Note that the hidden-form-input Sass mixin must be added to the component's style to apply specific styles.
 *
 * @param root0
 * @param root0.component
 */
const HiddenFormInputSlot = ({ component, }) => {
    syncHiddenFormInput(component);
    return h("slot", { name: hiddenFormInputSlotName });
};

export { HiddenFormInputSlot as H, connectForm as c, disconnectForm as d, findAssociatedForm as f, internalHiddenInputInputEvent as i, resetForm as r, submitForm as s };
