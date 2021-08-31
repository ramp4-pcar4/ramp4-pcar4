<template>
    <div class="relative w-32 h-32 text-gray-600 hover:text-black" tabindex="-1">
        <button
            class="w-full h-full default-focus-style focus:outline-none"
            @click="onClickFunction()"
            v-focus-item
            :content="tooltip"
            v-tippy="{ placement: 'left' }"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MapnavButtonV',
    props: {
        onClickFunction: {
            type: Function,
            required: true
        },
        tooltip: {
            type: [String, Boolean],
            default: false
        }
    }
});
</script>

<style lang="scss" scoped></style>
