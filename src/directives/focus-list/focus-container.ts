import type { Directive } from 'vue';

const enum KEYS {
    Enter = 'Enter',
    Space = ' ',
    Tab = 'Tab'
}

const CONTAINER_ATTR = 'focus-container';
const LIST_ATTR = 'focus-list';
const FOCUS_ATTRS = `[${LIST_ATTR}],[${CONTAINER_ATTR}]`;
const TABBABLE_TAGS = `button,input,select,a,textarea,[contenteditable],.ag-tab-guard,[${LIST_ATTR}],[${CONTAINER_ATTR}]`;

let managers: FocusContainerManager[] = [];

/**
 * The FocusContainer Directive
 *
 * To use; add `v-focus-container` to the element.
 * It will only allow tab access to inner elements when `enter` or `space` are pressed on the container.
 */
export const FocusContainer: Directive = {
    mounted(el: HTMLElement) {
        managers.push(new FocusContainerManager(el));
    },
    beforeUnmount(el: HTMLElement) {
        // filter removes the FocusContainerManager at the same time
        managers = managers.filter((manager: FocusContainerManager) => {
            if (manager.element === el) {
                manager.removeEventListeners();
                return false;
            }
            return true;
        });
    }
};

/**
 * The FocusContainerManager Class
 *
 * Manages the event listeners and callbacks for `FocusContainer`s
 */
class FocusContainerManager {
    element: HTMLElement;

    /**
     * Creates an instance of FocusContainerManager
     *
     * @param element The HTMLElement the directive was placed on
     * @param options The options provided to the directive
     */
    constructor(element: HTMLElement) {
        this.element = element;
        this.element.toggleAttribute(CONTAINER_ATTR, true);
        this.element.tabIndex = 0;
        this.disableTabbing();

        const focusManager = this;
        this.element.addEventListener(
            'keypress',
            function (event: KeyboardEvent) {
                focusManager.onKeypress(event);
            }
        );
        this.element.addEventListener('click', function () {
            focusManager.onClick();
        });
        this.element.addEventListener('focusout', function (event: FocusEvent) {
            focusManager.onFocusOut(event);
        });
        this.element.addEventListener('focus', function () {
            focusManager.onFocus();
        });
    }

    /**
     * Removes all of the event listeners on the container element.
     */
    removeEventListeners() {
        const focusManager = this;
        this.element.removeEventListener(
            'keypress',
            function (event: KeyboardEvent) {
                focusManager.onKeypress(event);
            }
        );
        this.element.removeEventListener('click', function () {
            focusManager.onClick();
        });
        this.element.removeEventListener(
            'focusout',
            function (event: FocusEvent) {
                focusManager.onFocusOut(event);
            }
        );
        this.element.removeEventListener('focus', function () {
            focusManager.onFocus();
        });
    }

    /**
     * Callback for the `keypress` event on the container element
     *
     * @param event The keyboard event
     */
    onKeypress(event: KeyboardEvent) {
        if (event.target !== this.element) {
            return;
        }
        if (event.key === KEYS.Enter || event.key === KEYS.Space) {
            this.enableTabbing();
            const first_tabbable_item = this.element.querySelector(
                TABBABLE_TAGS
            ) as HTMLElement;
            first_tabbable_item.focus();
        }
    }

    /**
     * Callback for the `click` event on the container element
     */
    onClick() {
        this.enableTabbing();
    }

    /**
     * Callback for the `focusout` event on the container element
     *
     * @param event The focus event
     */
    onFocusOut(event: FocusEvent) {
        if (!this.element.contains(event.relatedTarget as HTMLElement)) {
            this.disableTabbing();
        }
    }

    /**
     * Callback for the `focus` event on the container element
     */
    onFocus() {
        this.disableTabbing();
    }

    /**
     * Sets tabindex to -1 for EVERY element under the container element
     */
    disableTabbing() {
        const tab_list = Array.prototype.filter.call(
            this.element.querySelectorAll(TABBABLE_TAGS),
            () => {
                return true;
            }
        ) as HTMLElement[];

        tab_list.forEach((el: HTMLElement) => {
            el.tabIndex = -1;
        });
    }

    /**
     * Sets tabindex to 0 for every VISIBLE element not under a different focus container or list
     */
    enableTabbing() {
        Array.prototype.map.call(
            this.element.querySelectorAll(TABBABLE_TAGS),
            el => {
                // !!el.offsetParent means it is visible
                if (
                    (el.closest(FOCUS_ATTRS) === this.element ||
                        (el.closest(FOCUS_ATTRS) === el &&
                            el.parentElement!.closest(FOCUS_ATTRS) ===
                                this.element)) &&
                    !!el.offsetParent
                ) {
                    el.tabIndex = 0;
                }
            }
        );
    }
}
