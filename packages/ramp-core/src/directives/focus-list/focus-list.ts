enum KEYS {
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
    Enter = 'Enter'
}

const LIST_ATTR = 'focus-list';
const ITEM_ATTR = 'focus-item';
const FOCUSED_CLASS = 'focused';
const TABBABLE_TAGS = `button,input,select,a,textarea,[contenteditable],[${LIST_ATTR}]`;

/**
 * The FocusList Directive
 *
 * To use; add `v-focus-list` to your main element and `focus-item` to sub-items you want to be selectable
 * The directive will assume your list is vertical. To force it to be horizontal set the attribute to have a value of 'horizontal'.
 *
 * **Example**:
 *
 * ```
 * <div v-focus-list="horizontal">
 *     <button focus-item></button>
 *     <button focus-item></button>
 *     <button focus-item></button>
 * </div>
 * ```
 */
export const FocusList = {
    bind(el: HTMLElement, binding: any /*, vnode: any */) {
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
    componentUpdated(el: HTMLElement) {
        syncTabIndex(el);
    }
};

/**
 * Makes sure every "tabbable" element under `element` has the correct tab index. Used when the focus list element is updated.
 *
 * @param {Element} element the element containing the tabbable items
 */
function syncTabIndex(element: HTMLElement) {
    let tabbable = element.querySelectorAll(TABBABLE_TAGS);
    //const tempFocusManager = this;
    tabbable.forEach((el: Element) => {
        // make sure its not part of a sub-list
        if (
            el.closest(`[${LIST_ATTR}]`) === element ||
            (el.closest(`[${LIST_ATTR}]`) === el && el.parentElement!.closest(`[${LIST_ATTR}]`) === element)
        ) {
            // if this element is under a `focused` element in this class list then we dont want to set tabindex to -1
            // this checks if an ancestor with the class `focused` comes before an ancestor that is a `focus-list`
            // ELSE if it is under a `focused` element, set it to 0 in case it was just added to the list
            if (!el.closest(`[${LIST_ATTR}],.${FOCUSED_CLASS}`)!.classList.contains(FOCUSED_CLASS)) {
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
class FocusListManager {
    element: HTMLElement;
    highlightedItem: HTMLElement;
    isHorizontal: boolean;

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

        // remove the ability to tab to sub-items
        this.setTabIndex(-1);

        const focusManager = this;
        element.addEventListener('keydown', function(event: KeyboardEvent) {
            focusManager.onKeydown(event);
        });
        element.addEventListener('click', function(event: MouseEvent) {
            focusManager.onClick(event);
        });
    }

    /**
     * Tries to figure out if the list is horizontal or vertical
     * This function doesn't worry too much about "edge cases" for list layouts as list orientation can be specified
     *
     * @returns `true` iff list is thought to be horizontal
     */
    /* private guessHorizontal() {
        const tempFocusManager = this;
        const items: HTMLElement[] = Array.prototype.filter.call(this.element.querySelectorAll(`[${ITEM_ATTR}]`), (el: Element) => {
            return el.closest(`[${LIST_ATTR}]`) === tempFocusManager.element;
        });
        for (let i = 1; i < items.length; i++) {
            const currPosition = items[i].getBoundingClientRect();
            const prevPosition = items[i - 1].getBoundingClientRect();
            // if the items overlap in y axis and are item 2 is completely to the right of item 1, assume horizontal
            if (currPosition.top < prevPosition.bottom && currPosition.left >= prevPosition.right) {
                return true;
            }
        }
        return false;
    } */

    /**
     * Sets `tabindex` to `value` for every tabbable thing under `focusItem` (or the list if not specified)
     *
     * @param {Number} value the value to give `tabindex` on each tabbable item
     * @param {Element} focusItem the element containing the tabbable items, defaults to the focus list
     */
    setTabIndex(value: number, focusItem: Element = this.element) {
        let tabbable = focusItem.querySelectorAll(TABBABLE_TAGS);
        //const tempFocusManager = this;
        tabbable.forEach((el: Element) => {
            // make sure its not part of a sub-list
            if (
                el.closest(`[${LIST_ATTR}]`) === this.element ||
                (el.closest(`[${LIST_ATTR}]`) === el && el.parentElement!.closest(`[${LIST_ATTR}]`) === this.element)
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
        //this.element.focus();
        this.setTabIndex(-1, item);
    }

    /**
     * Adds 'focused' to the class list of `item` then updates the tabIndex on subitems (setting them to 0).
     *
     * @param {Element} item The element to focus
     */
    focusItem(item: Element) {
        item.classList.add(FOCUSED_CLASS);
        this.setTabIndex(0, item);
    }

    /**
     * Moves the highlight through the `listOfItems` forward (or backward) 1 spot
     *
     * @param {HTMLElement[]}listOfItems The list of items being moved through
     * @param {boolean} reverse true iff the highlight should move back one spot
     */
    shiftHighlight(listOfItems: HTMLElement[], reverse: boolean = false) {
        this.defocusItem(this.highlightedItem);
        if (reverse) {
            // if the main element is highlighted, move it to the last sub-item
            // otherwise move the highlight "back" one item (wrapping if needed)
            if (this.highlightedItem === this.element) {
                this.highlightedItem = listOfItems[listOfItems.length - 1];
            } else {
                let index = Array.prototype.indexOf.call(listOfItems, this.highlightedItem);
                this.highlightedItem = listOfItems[index - 1] || listOfItems[listOfItems.length - 1];
            }
        } else {
            // if the main element is highlighted, move it to the first sub-item
            // otherwise move the highlight "forward" one item (wrapping if needed)
            if (this.highlightedItem === this.element) {
                this.highlightedItem = listOfItems[0];
            } else {
                let index = Array.prototype.indexOf.call(listOfItems, this.highlightedItem);
                this.highlightedItem = listOfItems[index + 1] || listOfItems[0];
            }
        }
        this.focusItem(this.highlightedItem);
    }

    /**
     * Callback for the keydown event listener on the focus list element
     *
     * @param {KeyboardEvent} event keydown event
     */
    onKeydown(event: KeyboardEvent) {
        const tempFocusManager = this;
        const listOfItems: HTMLElement[] = Array.prototype.filter.call(this.element.querySelectorAll(`[${ITEM_ATTR}]`), (el: Element) => {
            return el.closest(`[${LIST_ATTR}]`) === tempFocusManager.element;
        });

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
                    this.element.focus();
                }
                break;
            case KEYS.Enter:
                // if the the list is the target then it has focus, meaning the user is traversing this list
                // and not a list farther down the tree (or a tabbable button, etc.)
                // however if the list is the highlighted item we let the default behaviour through (as it has regular focus)
                if ((event.target as HTMLElement) === this.element && this.highlightedItem !== this.element) {
                    // dont click on the list
                    event.preventDefault();
                    event.stopPropagation();
                    // click on the highlighted focus-item
                    this.highlightedItem.click();
                }
        }
    }

    /**
     * Callback for the click event listener on the focus list element
     *
     * @param {MouseEvent} event click event
     */
    onClick(event: MouseEvent) {
        event.stopPropagation();
        this.defocusItem(this.highlightedItem);

        const targetElement = event.target as HTMLElement;
        this.highlightedItem = (targetElement.closest(`[${ITEM_ATTR}],[${LIST_ATTR}]`) as HTMLElement) || this.highlightedItem;

        // if target element is a focus item then focus the list
        if (targetElement.hasAttribute(`${ITEM_ATTR}`)) {
            this.element.focus();
        }

        if (this.highlightedItem !== this.element) {
            this.focusItem(this.highlightedItem);
        }
    }
}
