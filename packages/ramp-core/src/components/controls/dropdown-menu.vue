<template>
    <div>
        <button
            class="text-gray-500 hover:text-black"
            @click="open = !open"
            :content="tooltip"
            v-tippy="{ placement: tooltipPlacement }"
        >
            <slot name="header"></slot>
        </button>
        <div
            v-if="open"
            @blur="open = false"
            :position="position"
            class="rv-dropdown shadow-md border border-gray:200 absolute py-8 bg-white rounded text-center z-10"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class DropdownMenuV extends Vue {
    @Prop({ default: 'bottom-right' }) position!: string;
    @Prop() tooltip?: string;
    @Prop({ default: 'bottom' }) tooltipPlacement?: string;
    open: boolean = false;

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
}
</script>

<style lang="scss" scoped>
.rv-dropdown > * {
    display: block;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: #2d3748;
}
.rv-dropdown > *:hover:not(.disabled) {
    background-color: #eee;
}
.rv-dropdown {
    &[position='right'] {
        @apply right-full top-0 mr-2;
    }
    &[position='left'] {
        @apply left-full top-0 ml-2;
    }
    &[position='top-right'] {
        @apply right-0 bottom-full;
    }
    &[position='top-left'] {
        @apply left-0 bottom-full;
    }
    &[position='right-top'] {
        @apply right-full bottom-0;
    }
    &[position='left-top'] {
        @apply left-full bottom-0;
    }
    &[position='bottom-right'] {
        @apply right-0 top-full;
    }
    &[position='bottom-left'] {
        @apply left-0 top-full;
    }
}
</style>
