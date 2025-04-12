import { cI as forceUpdate } from './main-ba570a3b.js';
import { c as createObserver } from './observers-dc73c44d.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const observed = new Set();
let mutationObserver;
const observerOptions = { childList: true };
/**
 * Helper to set up a conditional slot component on connectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function connectConditionalSlotComponent(component) {
    if (!mutationObserver) {
        mutationObserver = createObserver("mutation", processMutations);
    }
    mutationObserver.observe(component.el, observerOptions);
}
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 *
 * @param component
 * @deprecated Use `onSlotchange` event with `slotChangeHasAssignedElement` DOM utility instead.
 *
 * ```
 * <slot onSlotchange={(event) => this.mySlotHasElement = slotChangeHasAssignedElement(event)} />}
 * ```
 */
function disconnectConditionalSlotComponent(component) {
    observed.delete(component.el);
    // we explicitly process queued mutations and disconnect and reconnect
    // the observer until MutationObserver gets an `unobserve` method
    // see https://github.com/whatwg/dom/issues/126
    processMutations(mutationObserver.takeRecords());
    mutationObserver.disconnect();
    for (const [element] of observed.entries()) {
        mutationObserver.observe(element, observerOptions);
    }
}
function processMutations(mutations) {
    mutations.forEach(({ target }) => {
        forceUpdate(target);
    });
}

export { connectConditionalSlotComponent as c, disconnectConditionalSlotComponent as d };
