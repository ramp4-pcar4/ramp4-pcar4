import type { Ref } from 'vue';
import { onBeforeUnmount } from 'vue';

type TippyButton = HTMLButtonElement & {
    _tippy?: {
        disable: () => void;
        enable: () => void;
        hide: () => void;
        show: () => void;
    };
};

export function usePanelMoveTooltip(buttonRef: Ref<HTMLButtonElement | null>, isActive: () => boolean) {
    let restoreTooltipTimeout: ReturnType<typeof setTimeout> | null = null;
    let detachTransitionListener: (() => void) | null = null;

    const clearPendingRestore = (): void => {
        if (restoreTooltipTimeout) {
            clearTimeout(restoreTooltipTimeout);
            restoreTooltipTimeout = null;
        }

        detachTransitionListener?.();
        detachTransitionListener = null;
    };

    const syncTooltipAfterKeyboardMove = (event: MouseEvent): void => {
        if (event.detail !== 0 || !isActive()) {
            return;
        }

        const button = buttonRef.value as TippyButton | null;
        const tooltip = button?._tippy;

        if (!button || !tooltip) {
            return;
        }

        clearPendingRestore();
        tooltip.disable();
        tooltip.hide();

        const restoreTooltip = (): void => {
            clearPendingRestore();
            tooltip.enable();

            if (document.activeElement === button) {
                tooltip.show();
            }
        };

        const panel = button.closest('[data-cy]') as HTMLElement | null;
        if (panel) {
            const onTransitionEnd = (transitionEvent: TransitionEvent): void => {
                if (transitionEvent.target === panel && transitionEvent.propertyName === 'transform') {
                    restoreTooltip();
                }
            };

            panel.addEventListener('transitionend', onTransitionEnd);
            detachTransitionListener = () => panel.removeEventListener('transitionend', onTransitionEnd);
        }

        restoreTooltipTimeout = setTimeout(restoreTooltip, panel ? 350 : 0);
    };

    onBeforeUnmount(() => {
        clearPendingRestore();
    });

    return {
        syncTooltipAfterKeyboardMove
    };
}
