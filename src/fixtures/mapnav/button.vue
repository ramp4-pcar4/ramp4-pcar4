<template>
    <div class="relative w-32 h-32 text-gray-600 hover:text-black" tabindex="-1">
        <button
            type="button"
            class="w-full h-full default-focus-style"
            :class="[
                showOutline
                    ? 'focus:outline focus:outline-2 focus:outline-blue-400 focus:absolute focus:z-50'
                    : 'focus:outline-none'
            ]"
            @click="onClickFunction()"
            v-focus-item
            :content="tooltip"
            :aria-label="typeof tooltip === 'string' ? tooltip : ''"
            v-tippy="{ placement: 'left' }"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps({
    onClickFunction: {
        type: Function,
        required: true
    },
    tooltip: {
        type: [String, Boolean],
        default: false
    },
    showOutline: {
        type: Boolean,
        default: false
    }
});
</script>

<style lang="scss" scoped></style>
