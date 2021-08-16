<template>
    <div class="relative inset-x-0 w-full h-48 text-center">
        <!-- <button
            class="text-gray-400 w-full h-full focus:outline-none hover:text-white"
            @click="open = !open"
            v-focus-item
            :content="$t('appbar.more')"
            v-tippy="{ placement: 'right' }"
        > -->
        <button
            class="text-gray-400 w-full h-full focus:outline-none hover:text-white"
            @click="open = !open"
            :content="t('appbar.more')"
        >
            <svg
                class="fill-current w-24 h-24 m-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
            </svg>
        </button>
        <div
            v-show="open"
            @blur="open = false"
            :position="position"
            id="dropdown"
            class="dropdown shadow-md border border-gray:200 absolute py-8 w-64 bg-white rounded text-center z-10"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Vue, Prop } from 'vue-property-decorator';

export default defineComponent({
    name: 'MoreAppbarButtonV',
    props: {
        position: {
            type: String,
            default: 'bottom-right'
        },
        tooltip: String,
        tooltipPlacement: {
            type: String,
            default: 'bottom'
        },
        t: Function
    },

    data() {
        return {
            open: false
        };
    },

    mounted() {
        window.addEventListener(
            'click',
            event => {
                if (
                    event.target instanceof HTMLElement &&
                    !this.$el.contains(event.target)
                ) {
                    this.open = false;
                }
            },
            { capture: true }
        );
    }
});
</script>

<style lang="scss" scoped>
.dropdown > * {
    display: block;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: #2d3748;
    &:hover:not(.disabled) {
        background-color: #eee;
    }
}
.dropdown {
    @apply left-full bottom-0;
}
</style>
