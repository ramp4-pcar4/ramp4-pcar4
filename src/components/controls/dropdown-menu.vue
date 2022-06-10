<template>
    <div @focusout="closeDropdown">
        <button
            class="text-gray-500 hover:text-black dropdown-button"
            @click="open = !open"
            :content="tooltip"
            v-tippy="{
                placement: tooltipPlacement,
                theme: tooltipTheme,
                animation: tooltipAnimation,
                appendTo: 'parent'
            }"
            ref="dropdown-trigger"
        >
            <slot name="header"></slot>
        </button>
        <div
            v-show="open"
            @click="popper.update()"
            class="rv-dropdown shadow-md border border-gray:200 py-8 bg-white rounded z-10"
            :class="{ 'text-center': centered }"
            ref="dropdown"
        >
            <slot v-bind:close="closeDropdown"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { createPopper } from '@popperjs/core';
import type { Placement } from '@popperjs/core';
export default defineComponent({
    name: 'DropdownMenuV',
    props: {
        position: {
            type: String,
            default: 'bottom'
        },
        popperOptions: {
            type: Object,
            default: {}
        },
        tooltip: { type: String },
        tooltipPlacement: { type: String, default: 'bottom' },
        tooltipTheme: { type: String, default: 'ramp4' },
        tooltipAnimation: { type: String, default: 'scale' },
        centered: { type: Boolean, default: true }
    },
    data() {
        return {
            open: false,
            popper: null as any,
            watchers: [] as Array<Function>
        };
    },

    created() {
        this.watchers.push(
            this.$watch('open', () => {
                this.popper.update();
            })
        );
    },

    mounted() {
        window.addEventListener(
            'click',
            event => {
                if (!this.$el.contains(event.target)) {
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
                    ],
                    ...this.popperOptions
                }
            );
        });
    },
    beforeUnmount() {
        this.watchers.forEach(unwatch => unwatch());
        window.removeEventListener(
            'click',
            event => {
                if (!this.$el.contains(event.target)) {
                    this.open = false;
                }
            },
            { capture: true }
        );
        this.open = false;
    },

    methods: {
        closeDropdown(e: Event) {
            if (!e.currentTarget.contains(e.relatedTarget)) {
                this.open = false;
            }
        }
    }
});
</script>

<style lang="scss">
.rv-dropdown > * {
    display: block;
    padding: 0.5rem 1rem;
    color: #2d3748;
}
.rv-dropdown > *:hover:not(.disabled) {
    background-color: #eee;
}
</style>
