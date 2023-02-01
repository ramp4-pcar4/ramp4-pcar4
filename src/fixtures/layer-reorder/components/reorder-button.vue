<template>
    <button
        type="button"
        v-if="!disabled"
        :class="`pb-10 text-gray-500 hover:text-black p-8 ${
            direction === 'up' ? 'rotate-180' : ''
        }`"
        :content="t(`layer-reorder.move.${direction}`)"
        v-tippy="{
            placement: 'top-start',
            aria: 'describedby'
        }"
        v-focus-item
        :aria-label="t(`layer-reorder.move.${direction}`)"
    >
        <svg class="fill-current w-20 h-20" viewBox="0 0 23 21">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
    </button>
    <button
        type="button"
        v-else
        :class="`pb-10 text-gray-300 p-8 ${
            direction === 'up' ? 'rotate-180' : ''
        }`"
        :disabled="disabled"
        :aria-label="t(`layer-reorder.move.${direction}`)"
    >
        <svg class="fill-current w-20 h-20" viewBox="0 0 23 21">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
    </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
    disabled: {
        type: Boolean
    },
    direction: {
        type: String,
        required: true
    }
});
</script>

<style lang="scss" scoped>
.rotate-180 {
    transform: rotate(-180deg);
}
</style>
