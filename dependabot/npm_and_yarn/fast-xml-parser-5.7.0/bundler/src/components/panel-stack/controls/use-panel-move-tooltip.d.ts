import { Ref } from '../../../../vue/dist/vue.esm-bundler.js';
export declare function usePanelMoveTooltip(buttonRef: Ref<HTMLButtonElement | null>, isActive: () => boolean): {
    syncTooltipAfterKeyboardMove: (event: MouseEvent) => void;
};
