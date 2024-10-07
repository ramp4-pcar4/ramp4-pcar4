<!-- v-focus-list to handle keyboard nav of "list" of mini-icons???? -->

<template>
    <div
        class="default-focus-style break-words text-ellipsis text-[10px] border rounded-md px-3 min-h-[18px] w-max hover:border-gray-600 focus:border-gray-600 border-gray-400 hover:bg-gray-300 focus:bg-gray-300 bg-gray-100 flex items-center gap-2"
        v-tippy="{ placement: 'bottom-start' }"
    >
        <!-- SVG icon to be inserted, if desired -->
        <slot></slot>

        <label v-if="label">{{ label }}</label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: String
});
</script>

<style lang="scss" scoped></style>
