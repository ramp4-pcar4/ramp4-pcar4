import { useTippy } from 'vue-tippy';
import type { TippyContent } from 'vue-tippy';
import linkifyHtml from 'linkify-html';
import type { Directive, DirectiveBinding } from 'vue';

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
export const Truncate: Directive = {
    beforeMount(el: HTMLElement) {
        if (!el.classList.contains('truncate')) {
            el.classList.add('truncate');
        }

        el.toggleAttribute(TRUNCATE_ATTR, true);
    },
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        let triggerElement;
        if (binding.value && binding.value.externalTrigger) {
            // el.closest gets closes ancestor that maches the selector (moves up the parent chain)
            triggerElement = el.closest(`[${TRIGGER_ATTR}]`);
        }

        useTippy(el, {
            content: linkifyContent(el.textContent),
            onShow: onShow,
            allowHTML: true,
            placement: 'bottom-start',
            //flip: false, // can't find a replacement for Vue3
            //boundary: 'window',
            triggerTarget: triggerElement,
            ...(binding.value?.options || {})
        });
    },
    updated(el: HTMLElement, binding: DirectiveBinding) {
        // update content and options
        if ((el as any)._tippy) {
            (el as any)._tippy.setContent(linkifyContent(el.textContent));
            if (binding.value && binding.value.options) {
                (el as any)._tippy.setProps(binding.value.options);
            }
        }
    },
    unmounted(el: HTMLElement) {
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

const escapeHtml = (content: string) => {
    const specialChars = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    // @ts-ignore
    return content.replace(/[<>"']/g, m => specialChars[m]);
};

/**
 * Applies hyperlinks to any URLs in the provided content.
 *
 * @param the text content
 * @returns a string with any URLs hyperlinked.
 */
function linkifyContent(content: string | null): TippyContent {
    if (content === null) {
        return '';
    }
    const escapedContent = escapeHtml(content);
    return <TippyContent>linkifyHtml(escapedContent, {
        target: '_blank',
        validate: {
            url: (value: string) => /^https?:\/\//.test(value) // only links that begin with a protocol will be hyperlinked
        }
    });
}
