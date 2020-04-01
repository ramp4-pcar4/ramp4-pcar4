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
 */
export const FocusItem: Vue.DirectiveOptions = {
    bind(el: HTMLElement /*, binding: Vue.VNodeDirective , vnode: Vue.VNode */) {
        if (!el.hasAttribute('id')) {
            el.setAttribute('id', generateID());
        }
        // add the focus item attribute since the directive attribute will only stick around if its bound (i.e. :v-focus-item=...)
        el.toggleAttribute(ITEM_ATTR, true);
    }
};

function generateID(): string {
    let newID;
    do {
        newID =
            'focus-item-' +
            Math.random()
                .toString(36)
                .substring(2, 9);
    } while (document.getElementById(newID) !== null);

    return newID;
}
