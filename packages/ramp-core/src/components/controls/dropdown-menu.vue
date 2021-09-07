<template>
    <div>
        <button
            class="text-gray-500 hover:text-black dropdown-button"
            @click="open = !open"
            :content="tooltip"
            v-tippy="{
                placement: tooltipPlacement,
                theme: tooltipTheme,
                animation: tooltipAnimation
            }"
            ref="dropdown-trigger"
        >
            <slot name="header"></slot>
        </button>
        <div
            v-show="open"
            @blur="open = false"
            class="rv-dropdown shadow-md border border-gray:200 py-8 bg-white rounded text-center z-10"
            ref="dropdown"
        >
            <slot v-bind:close="closeDropdown"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createPopper, Placement } from '@popperjs/core';

export default defineComponent({
    name: 'DropdownMenuV',
    props: {
        position: {
            type: String,
            default: 'bottom'
        },
        tooltip: { type: String },
        tooltipPlacement: { type: String, default: 'bottom' },
        tooltipTheme: { type: String, default: 'ramp4' },
        tooltipAnimation: { type: String, default: 'scale' }
    },
    data() {
        return {
            open: false,
            popper: null as any
        };
    },
    mounted() {
        window.addEventListener(
            'click',
            event => {
                if (event.target instanceof HTMLElement && !this.$el.contains(event.target)) {
                    this.open = false;
                }
            },
            { capture: true }
        );

        // $nextTick should prevent any race conditions by letting the child elements render before trying to place them using popper
        this.$nextTick(() => {
            this.popper = createPopper(
                this.$refs['dropdown-trigger'] as Element,
                this.$refs['dropdown'] as HTMLElement,
                {
                    placement: (this.position || 'bottom') as Placement,
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 5]
                            }
                        }
                    ]
                }
            );
        });
    },
    beforeUnmount() {
        window.removeEventListener(
            'click',
            event => {
                if (event.target instanceof HTMLElement && !this.$el.contains(event.target)) {
                    this.open = false;
                }
            },
            { capture: true }
        );
    },
    watch: {
        open() {
            this.popper.update();
        }
    },
    methods: {
        closeDropdown() {
            this.open = false;
        }
    }
});
</script>

<style lang="scss">
.rv-dropdown > * {
    display: block;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: #2d3748;
}
.rv-dropdown > *:hover:not(.disabled) {
    background-color: #eee;
}
</style>
