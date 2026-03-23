<template>
    <div class="relative">
        <button
            ref="buttonRef"
            type="button"
            class="p-8"
            :class="{
                'text-gray-500 hover:text-black focus:text-black': active,
                'text-gray-300': !active
            }"
            @click="syncTooltipAfterKeyboardMove"
            :content="t('panels.controls.moveRight')"
            :aria-label="t('panels.controls.moveRight')"
            v-tippy="{
                placement: 'bottom',
                theme: 'ramp4',
                animation: 'scale'
            }"
        >
            <svg class="fill-current w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="4 4 16 16">
                <path d="M 8.59 16.34 L 13.17 11.75 L 8.59 7.16 L 10 5.75 L 16 11.75 L 10 17.75 Z" />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePanelMoveTooltip } from './use-panel-move-tooltip';

const { t } = useI18n();
const props = defineProps({
    active: Boolean
});
const buttonRef = ref<HTMLButtonElement | null>(null);
const { syncTooltipAfterKeyboardMove } = usePanelMoveTooltip(buttonRef, () => !!props.active);
</script>

<style lang="scss" scoped></style>
