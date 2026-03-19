<template>
    <div class="relative">
        <button
            ref="buttonRef"
            type="button"
            class="p-8 move-left"
            :class="{
                'text-gray-500 hover:text-black focus:text-black': active,
                'text-gray-300': !active
            }"
            @click="syncTooltipAfterKeyboardMove"
            :content="t('panels.controls.moveLeft')"
            :aria-label="t('panels.controls.moveLeft')"
            v-tippy="{
                placement: 'bottom',
                theme: 'ramp4',
                animation: 'scale'
            }"
        >
            <svg class="fill-current w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="4 4 16 16">
                <path d="M 15.41 16.09 L 10.83 11.5 L 15.41 6.91 L 14 5.5 L 8 11.5 L 14 17.5 Z" />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePanelMoveTooltip } from './use-panel-move-tooltip';

const props = defineProps({
    active: Boolean
});
const { t } = useI18n();
const buttonRef = ref<HTMLButtonElement | null>(null);
const { syncTooltipAfterKeyboardMove } = usePanelMoveTooltip(buttonRef, () => !!props.active);
</script>

<style lang="scss" scoped></style>
