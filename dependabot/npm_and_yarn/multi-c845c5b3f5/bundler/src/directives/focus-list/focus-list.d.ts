import { Directive } from '../../../vue/dist/vue.esm-bundler.js';
/**
 * The FocusList Directive
 *
 * To use; add `v-focus-list` to your main element and `v-focus-item` to sub-items you want to be selectable
 * The directive will assume your list is vertical. To force it to be horizontal set the attribute to have a value of 'horizontal'.
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
export declare const FocusList: Directive;
/**
 * The FocusListManager class
 *
 * Each instance of this class is tied to an element. These are created in the bind function for the `FocusList` directive.
 * This class manages the focus within the element, mainly moving between `focus-item`s with arrow keys.
 */
export declare class FocusListManager {
    element: HTMLElement;
    highlightedItem: HTMLElement;
    isHorizontal: boolean;
    isClicked: boolean;
    isTapped: boolean;
    /**
     * Creates an instance of FocusListManager
     *
     * @param {HTMLElement} element The focus list's element
     * @param {string} attributeValue The value of the `v-focus-list` attribute which tells the focus list manager the orientation of the list. 'horizontal' means the list should be traversed horizontally, and other value will make the list vertical (including no value).
     */
    constructor(element: HTMLElement, attributeValue: string);
    /**
     * Sets `tabindex` to `value` for every tabbable thing under `focusItem` (or the list if not specified)
     *
     * @param {Number} value the value to give `tabindex` on each tabbable item
     * @param {Element} focusItem the element containing the tabbable items, defaults to the focus list
     */
    setTabIndex(value: number, focusItem?: Element): void;
    /**
     * Removes 'focused' to the class list of `item` then updates the tabIndex on subitems (setting them to -1).
     *
     * @param {Element} item The element to defocus
     */
    defocusItem(item: Element): void;
    /**
     * Adds 'focused' to the class list of `item` then updates the tabIndex on subitems (setting them to 0).
     *
     * @param {Element} item The element to focus
     */
    focusItem(item: HTMLElement): void;
    /**
     * Updates the list's `aria-activedescendant` to be `item`
     *
     * @param item The element that should be the active descendant
     */
    setAriaActiveDescendant(item: HTMLElement): void;
    /**
     * Moves the highlight through the `listOfItems` forward (or backward) 1 spot
     *
     * @param {HTMLElement[]}listOfItems The list of items being moved through
     * @param {boolean} reverse true iff the highlight should move back one spot
     */
    shiftHighlight(listOfItems: HTMLElement[], reverse?: boolean): void;
    /**
     * Callback for the keydown event listener on the focus list element
     *
     * @param {KeyboardEvent} event keydown event
     */
    onKeydown(event: KeyboardEvent): void;
    /**
     * Callback for the click event listener on the focus list element
     *
     * @param {MouseEvent} event click event
     */
    onClick(event: MouseEvent): void;
    /**
     * Callback for the focus event listener on the focus list element.
     * NOTE: this is only called when the LIST ELEMENT is focused, not any descendant
     *
     * This is used to pull back the `focusedItem` id and the aria-activedescendant attribute when a list is focused
     */
    onFocus(): void;
    /**
     * Callback for the BLUR event listener on the focus list element.
     * NOTE: this is only called when the list element stops being focused, not a descendant
     */
    onBlur(): void;
    /**
     * Callback for the MOUSEDOWN event listener on the focus list element.
     */
    onMousedown(): void;
    /**
     * Callback for the TOUCHSTART event listener on the focus list element.
     */
    onTouchstart(): void;
}
