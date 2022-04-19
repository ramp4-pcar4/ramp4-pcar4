import type { Directive, DirectiveBinding } from 'vue';
const ITEM_ATTR = 'focus-item';

/**
 * The FocusItem Directive
 *
 * This is to be used within `FocusList`s. Add this to every element you want to traverse between using the arrow keys (see FocusList for more info).
 * This directive adds an id for accessibility if there isn't one on the element already.
 *
 * **Example**:
 *
 * ```
 * <div v-focus-list="'horizontal'">
 *     <button v-focus-item></button>
 *     <button v-focus-item></button>
 *     <button v-focus-item></button>
 * </div>
 * ```
 *
 * You can show the tooltips of truncated text when this is focussed by supplying the value 'show-truncate' to the directive.
 */
export const FocusItem: Directive = {
    beforeMount(
        el: HTMLElement,
        binding: DirectiveBinding /*, vnode: Vue.VNode */
    ) {
        if (!el.hasAttribute('id')) {
            el.setAttribute('id', generateID());
        }
        // add the focus item attribute since the directive attribute will only stick around if its bound (i.e. :v-focus-item=...)
        if (binding.value) {
            el.setAttribute(ITEM_ATTR, binding.value);
        } else {
            el.toggleAttribute(ITEM_ATTR, true);
        }
    }
};

export function generateID(): string {
    let newID;
    do {
        newID = 'focus-item-' + Math.random().toString(36).substring(2, 9);
    } while (document.getElementById(newID) !== null);

    return newID;
}
