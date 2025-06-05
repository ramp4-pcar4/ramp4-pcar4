<!-- v-focus-list to handle keyboard nav of "list" of mini-icons???? -->

<template>
    <div
        class="default-focus-style break-words text-ellipsis text-[10px] border rounded px-3 min-h-[18px] w-max hover:border-gray-600 hover:bg-gray-300 bg-none border-transparent flex items-center gap-2"
        style="color: rgba(0, 0, 0, 0.75); fill: rgba(0, 0, 0, 0.75)"
        v-tippy="{ placement: 'bottom-start' }"
    >
        <!-- SVG icon to be inserted, if desired -->
        <slot></slot>

        <label v-if="label">{{ label }}</label>
    </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line
const props = defineProps({
    label: String
});
</script>

<style lang="scss" scoped></style>
