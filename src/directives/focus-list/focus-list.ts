import type { Directive, DirectiveBinding } from 'vue';

const enum KEYS {
    ArrowDown = 'ArrowDown',
    ArrowDownIE = 'Down',
    ArrowLeft = 'ArrowLeft',
    ArrowLeftIE = 'Left',
    ArrowUp = 'ArrowUp',
    ArrowUpIE = 'Up',
    ArrowRight = 'ArrowRight',
    ArrowRightIE = 'Right',
    Escape = 'Escape',
    EscapeIE = 'Esc',
    Enter = 'Enter',
    Space = ' '
}

const LIST_ATTR = 'focus-list';
const ITEM_ATTR = 'focus-item';
const CONTAINER_ATTR = 'focus-container';
const FOCUS_ATTRS = `[${LIST_ATTR}],[${CONTAINER_ATTR}]`;
const TRUNCATE_ATTR = 'truncate-text';
const SHOW_TRUNCATE = 'show-truncate';
const FOCUSED_CLASS = 'focused';
const TABBABLE_TAGS = `button,input,select,a,textarea,[contenteditable],[${LIST_ATTR}]`;

// TODO: Figure out a way to put the control scheme into the description of the focus-list for screen readers (hidden text?), or see if the help file would be sufficient.

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
export const FocusList: Directive = {
    mounted(
        el: HTMLElement,
        binding: DirectiveBinding /*, vnode: Vue.VNode */
    ) {
        // make it tabbable if it isn't
        // NOTE: +<string> = the string as a number, +<null> = 0
        if (+el.getAttribute('tabindex')! <= 0) {
            el.setAttribute('tabindex', '0');
        }
        // add the focus list attribute since the directive attribute will only stick around if its bound (i.e. :v-focus-list=...)
        el.toggleAttribute(LIST_ATTR, true);
        // create a focus list manager for this element ONLY on the first time its focused
        // this helps prevent any weird DOM race condition where tabindex is being changed
        // before the element is on screen and populated, etc. etc.
        new FocusListManager(el, binding.value);
    },
    updated(el: HTMLElement) {
        syncTabIndex(el);
    }
};

/**
 * Makes sure every "tabbable" element under `element` has the correct tab index. Used when the focus list element is updated.
 *
 * @param {Element} element the element containing the tabbable items
 */
function syncTabIndex(element: HTMLElement) {
    const tabbable = element.querySelectorAll(TABBABLE_TAGS);
    //const tempFocusManager = this;
    tabbable.forEach((el: Element) => {
        // make sure its not part of a sub-list
        if (
            el.closest(FOCUS_ATTRS) === element ||
            (el.closest(FOCUS_ATTRS) === el &&
                el.parentElement!.closest(FOCUS_ATTRS) === element)
        ) {
            // if this element is under a `focused` element in this class list then we dont want to set tabindex to -1
            // this checks if an ancestor with the class `focused` comes before an ancestor that is a `focus-list`
            // ELSE if it is under a `focused` element, set it to 0 in case it was just added to the list
            if (
                !el
                    .closest(`[${LIST_ATTR}],.${FOCUSED_CLASS}`)!
                    .classList.contains(FOCUSED_CLASS)
            ) {
                el.setAttribute('tabindex', '-1');
                return;
            } else {
                el.setAttribute('tabindex', '0');
            }
        }
    });
}

/**
 * The FocusListManager class
 *
 * Each instance of this class is tied to an element. These are created in the bind function for the `FocusList` directive.
 * This class manages the focus within the element, mainly moving between `focus-item`s with arrow keys.
 */
export class FocusListManager {
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
    constructor(element: HTMLElement, attributeValue: string) {
        this.element = element;
        this.highlightedItem = this.element;

        this.isHorizontal = attributeValue === 'horizontal';

        this.isClicked = false;
        this.isTapped = false;

        // remove the ability to tab to sub-items
        this.setTabIndex(-1);

        // needs to be marked with group role to allow the aria-activedescendant attribute
        this.element.setAttribute('role', 'group');

        const focusManager = this;
        element.addEventListener('keydown', function (event: KeyboardEvent) {
            focusManager.onKeydown(event);
        });
        element.addEventListener('click', function (event: MouseEvent) {
            focusManager.onClick(event);
        });
        element.addEventListener('focus', function () {
            focusManager.onFocus();
        });
        element.addEventListener('blur', function () {
            focusManager.onBlur();
        });
        element.addEventListener('mousedown', function () {
            focusManager.onMousedown();
        });
        element.addEventListener('touchstart', function () {
            focusManager.onTouchstart();
        });
    }

    /**
     * Sets `tabindex` to `value` for every tabbable thing under `focusItem` (or the list if not specified)
     *
     * @param {Number} value the value to give `tabindex` on each tabbable item
     * @param {Element} focusItem the element containing the tabbable items, defaults to the focus list
     */
    setTabIndex(value: number, focusItem: Element = this.element) {
        const tabbable = focusItem.querySelectorAll(TABBABLE_TAGS);
        tabbable.forEach((el: Element) => {
            // set tab index if not under a sublist OR it is under a `.focused` item of a sublist
            // always set tabindex to -1 if wanted (if focus moves away from an item you want sublists to all be untabbable as well)
            if (
                value === -1 ||
                el.closest(FOCUS_ATTRS) === this.element ||
                (el.closest(FOCUS_ATTRS) === el &&
                    el.parentElement!.closest(FOCUS_ATTRS) === this.element) ||
                el
                    .closest(`[${LIST_ATTR}],.${FOCUSED_CLASS}`)!
                    .classList.contains(FOCUSED_CLASS)
            ) {
                el.setAttribute('tabindex', value.toString());
            }
        });
    }

    /**
     * Removes 'focused' to the class list of `item` then updates the tabIndex on subitems (setting them to -1).
     *
     * @param {Element} item The element to defocus
     */
    defocusItem(item: Element) {
        item.classList.remove(FOCUSED_CLASS);
        this.setTabIndex(-1, item);
        if ((item as any)._tippy) {
            (item as any)._tippy.hide();
        }
        if (item.getAttribute(ITEM_ATTR) === SHOW_TRUNCATE) {
            (item.querySelector(`[${TRUNCATE_ATTR}]`)! as any)?._tippy?.hide();
        }
    }

    /**
     * Adds 'focused' to the class list of `item` then updates the tabIndex on subitems (setting them to 0).
     *
     * @param {Element} item The element to focus
     */
    focusItem(item: HTMLElement) {
        item.classList.add(FOCUSED_CLASS);
        this.setAriaActiveDescendant(item);
        this.setTabIndex(0, item);
        item.scrollIntoView({ block: 'nearest' });
        if ((item as any)._tippy && !this.isTapped) {
            (item as any)._tippy.show();
        }
        if (item.getAttribute(ITEM_ATTR) === SHOW_TRUNCATE) {
            (item.querySelector(`[${TRUNCATE_ATTR}]`)! as any)?._tippy?.show();
        }
        this.isTapped = false;
    }

    /**
     * Updates the list's `aria-activedescendant` to be `item`
     *
     * @param item The element that should be the active descendant
     */
    setAriaActiveDescendant(item: HTMLElement) {
        this.element.setAttribute(
            'aria-activedescendant',
            item.getAttribute('id')!
        );
    }

    /**
     * Moves the highlight through the `listOfItems` forward (or backward) 1 spot
     *
     * @param {HTMLElement[]}listOfItems The list of items being moved through
     * @param {boolean} reverse true iff the highlight should move back one spot
     */
    shiftHighlight(listOfItems: HTMLElement[], reverse = false) {
        this.defocusItem(this.highlightedItem);
        if (reverse) {
            // if the main element is highlighted, move it to the last sub-item
            // otherwise move the highlight "back" one item (wrapping if needed)
            if (this.highlightedItem === this.element) {
                this.highlightedItem = listOfItems[listOfItems.length - 1];
            } else {
                const index = Array.prototype.indexOf.call(
                    listOfItems,
                    this.highlightedItem
                );
                this.highlightedItem =
                    listOfItems[index - 1] ||
                    listOfItems[listOfItems.length - 1];
            }
        } else {
            // if the main element is highlighted, move it to the first sub-item
            // otherwise move the highlight "forward" one item (wrapping if needed)
            if (this.highlightedItem === this.element) {
                this.highlightedItem = listOfItems[0];
            } else {
                const index = Array.prototype.indexOf.call(
                    listOfItems,
                    this.highlightedItem
                );
                this.highlightedItem = listOfItems[index + 1] || listOfItems[0];
            }
        }
        // moves focus from any sub-items
        this.element.focus();
        this.focusItem(this.highlightedItem);
    }

    /**
     * Callback for the keydown event listener on the focus list element
     *
     * @param {KeyboardEvent} event keydown event
     */
    onKeydown(event: KeyboardEvent) {
        const tempFocusManager = this;
        const listOfItems: HTMLElement[] = Array.prototype.filter.call(
            this.element.querySelectorAll(`[${ITEM_ATTR}]`),
            (el: HTMLElement) => {
                // !!el.offsetParent == true if the element is visible
                return (
                    el.closest(`[${LIST_ATTR}]`) === tempFocusManager.element &&
                    !!el.offsetParent
                );
            }
        );

        if (listOfItems.length === 0) {
            return;
        }

        switch (event.key) {
            case KEYS.ArrowUpIE:
            case KEYS.ArrowUp:
                if (this.isHorizontal) {
                    break;
                }
                event.preventDefault();
                event.stopPropagation();
                // shift highlight ⬆ (backwards)
                this.shiftHighlight(listOfItems, true);
                break;

            case KEYS.ArrowDownIE:
            case KEYS.ArrowDown:
                if (this.isHorizontal) {
                    break;
                }
                event.preventDefault();
                event.stopPropagation();
                // shift highlight ⬇
                this.shiftHighlight(listOfItems);
                break;

            case KEYS.ArrowLeftIE:
            case KEYS.ArrowLeft:
                if (!this.isHorizontal) {
                    break;
                }
                event.preventDefault();
                event.stopPropagation();
                // shift highlight ⬅ (backwards)
                this.shiftHighlight(listOfItems, true);
                break;

            case KEYS.ArrowRightIE:
            case KEYS.ArrowRight:
                if (!this.isHorizontal) {
                    break;
                }
                event.preventDefault();
                event.stopPropagation();
                // shift highlight ➡
                this.shiftHighlight(listOfItems);
                break;

            case KEYS.EscapeIE:
            case KEYS.Escape:
                // we only care about escape presses if the highlighted item isnt the list
                if (this.highlightedItem !== this.element) {
                    event.preventDefault();
                    event.stopPropagation();
                    // defocus current item, move focus to the list
                    this.defocusItem(this.highlightedItem);
                    this.highlightedItem = this.element;
                    this.element.removeAttribute('aria-activedescendant');
                    this.element.focus();
                }
                break;

            case KEYS.Enter:
            case KEYS.Space:
                // if the the list is the target then it has focus, meaning the user is traversing this list
                // and not a list farther down the tree (or a tabbable button, etc.)
                // however if the list is the highlighted item we let the default behaviour through (as it has regular focus)
                if (
                    (event.target as HTMLElement) === this.element &&
                    this.highlightedItem !== this.element
                ) {
                    // dont click on the list
                    event.preventDefault();
                    event.stopPropagation();
                    // click on the highlighted focus-item
                    this.highlightedItem.click();
                }
                break;
        }
    }

    /**
     * Callback for the click event listener on the focus list element
     *
     * @param {MouseEvent} event click event
     */
    onClick(event: MouseEvent) {
        this.defocusItem(this.highlightedItem);

        let targetElement = event.target as HTMLElement;

        // This block restricts the search space to valid choices.
        if (!targetElement.hasAttribute(LIST_ATTR)) {
            // if we're in a sublist => loop
            while (
                targetElement.parentElement!.closest(`[${LIST_ATTR}]`) !==
                this.element
            ) {
                targetElement = targetElement.parentElement!.closest(
                    `[${LIST_ATTR}]`
                )! as HTMLElement;
            }
            // targetElement is now the root of the closest sublist to *this* focus list
        }

        this.highlightedItem =
            (targetElement.closest(`[${ITEM_ATTR}]`) as HTMLElement) ||
            (targetElement.closest(`[${LIST_ATTR}]`) as HTMLElement) ||
            this.highlightedItem;

        // if target element is a focus item then focus the list
        if (targetElement.hasAttribute(`${ITEM_ATTR}`)) {
            this.element.focus();
        }

        if (this.highlightedItem !== this.element) {
            this.focusItem(this.highlightedItem);
        } else {
            this.element.removeAttribute('aria-activedescendant');
        }
    }

    /**
     * Callback for the focus event listener on the focus list element.
     * NOTE: this is only called when the LIST ELEMENT is focused, not any descendant
     *
     * This is used to pull back the `focusedItem` id and the aria-activedescendant attribute when a list is focused
     */
    onFocus() {
        // If the highlighted item has a tooltip then show it
        // Don't show if the list was clicked, it will cause the tooltip to flicker
        if (this.highlightedItem && !this.isClicked) {
            if ((this.highlightedItem as any)._tippy) {
                (this.highlightedItem as any)._tippy.show();
            }

            if (
                this.highlightedItem.getAttribute(ITEM_ATTR) === SHOW_TRUNCATE
            ) {
                (
                    this.highlightedItem.querySelector(
                        `[${TRUNCATE_ATTR}]`
                    )! as any
                )?._tippy?.show();
            }
        }

        this.isClicked = false;

        if (
            !(
                this.element.hasAttribute('aria-activedescendant') ||
                this.highlightedItem === this.element
            )
        ) {
            this.setAriaActiveDescendant(this.highlightedItem);
        }

        syncTabIndex(this.element);
    }

    /**
     * Callback for the BLUR event listener on the focus list element.
     * NOTE: this is only called when the list element stops being focused, not a descendant
     */
    onBlur() {
        // If the highlighted item has a tooltip hide it since focus is going away from the list
        if (this.highlightedItem) {
            if ((this.highlightedItem as any)._tippy) {
                (this.highlightedItem as any)._tippy.hide();
            }

            if (
                this.highlightedItem.getAttribute(ITEM_ATTR) === SHOW_TRUNCATE
            ) {
                (
                    this.highlightedItem.querySelector(
                        `[${TRUNCATE_ATTR}]`
                    )! as any
                )?._tippy?.hide();
            }
        }
    }

    /**
     * Callback for the MOUSEDOWN event listener on the focus list element.
     */
    onMousedown() {
        // set clicked flag so focus event knows its been triggered by a click and isn't currently being traversed by keyboard
        this.isClicked = true;
    }

    /**
     * Callback for the TOUCHSTART event listener on the focus list element.
     */
    onTouchstart() {
        this.isTapped = true;
    }
}
