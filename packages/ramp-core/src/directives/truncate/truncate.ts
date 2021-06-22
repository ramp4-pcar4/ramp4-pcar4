//@ts-ignore
import { tippy } from 'vue-tippy';

const TRUNCATE_ATTR = 'truncate-text';
const TRIGGER_ATTR = 'truncate-trigger';

/**
 * The Truncate Directive
 *
 * It makes the text truncate as needed and adds a tooltip that shows IFF the text is actually truncated.
 *
 * The binding value looks like:
 * ```
 * {
 *      externalTrigger: boolean,
 *      options: tippyOptions
 * }
 * ```
 * if externalTrigger is present you must put the attribute `truncate-trigger` on the element you wish to be the tooltip trigger (this element must be an ancestor of the element with v-truncate)
 *
 */
export const Truncate: Vue.DirectiveOptions = {
    bind(el: HTMLElement) {
        if (!el.classList.contains('truncate')) {
            el.classList.add('truncate');
        }

        el.toggleAttribute(TRUNCATE_ATTR, true);
    },
    inserted(el: HTMLElement, binding: Vue.VNodeDirective) {
        let triggerElement;
        if (binding.value && binding.value.externalTrigger) {
            // el.closest gets closes ancestor that maches the selector (moves up the parent chain)
            triggerElement = el.closest(`[${TRIGGER_ATTR}]`);
        }
        tippy(el, {
            content: el.textContent,
            onShow: onShow,
            placement: 'bottom-start',
            flip: false,
            boundary: 'window',
            multiple: true,
            triggerTarget: triggerElement
        });

        if (binding.value && binding.value.options) {
            (el as any)._tippy.set(binding.value.options);
        }
    },
    componentUpdated(el: HTMLElement, binding: Vue.VNodeDirective) {
        // update content and options
        (el as any)._tippy.setContent(el.textContent);
        if (binding.value && binding.value.options) {
            (el as any)._tippy.set(binding.value.options);
        }
    },
    unbind(el: HTMLElement) {
        // destroy tippy instance
        if ((el as any)._tippy) {
            (el as any)._tippy.destroy();
        }
    }
};

/**
 * The callback for the onShow lifecycle hook of tooltips
 *
 * @param instance tippy instance, automatically given to this on callback
 * @returns false IFF the text is not being truncated and the tooltip should not be shown
 */
function onShow(instance: any) {
    // cancel showing the tooltip if the text isn't truncated
    // clientWidth is the visible width of the element, scrollWidth is the width of the content
    if (instance.reference.clientWidth >= instance.reference.scrollWidth) {
        // returning false tells tippy to cancel
        return false;
    }
}
