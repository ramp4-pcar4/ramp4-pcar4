<template>
    <div class="relative" tabindex="-1">
        <button
            type="button"
            class="py-6 w-full h-full"
            @click="
                () => {
                    onClickFunction();
                    onClick();
                }
            "
            v-focus-item
            :content="tooltip"
            v-tippy="{ placement: 'right' }"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script setup lang="ts">
import { GlobalEvents } from '@/api';
import type { InstanceAPI } from '@/api';
import { inject } from 'vue';

const iApi = inject<InstanceAPI>('iApi');

const props = defineProps({
    onClickFunction: {
        type: Function,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    tooltip: {
        type: [String, Boolean],
        default: false
    }
});

const onClick = () =>
    iApi?.event.emit(GlobalEvents.APPBAR_BUTTON_CLICK, props.id);
</script>

<style lang="scss" scoped>
button {
    outline: none !important;

    &.focused {
        @apply bg-blue-900 text-white;
    }
}
</style>
