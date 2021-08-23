<template>
    <div>
        <!-- <button
            class="text-gray-500 hover:text-black dropdown-button"
            @click="open = !open"
            :content="tooltip"
            v-tippy="{ placement: tooltipPlacement }"
            ref="dropdown-trigger"
        > -->
        <button
            class="text-gray-500 hover:text-black dropdown-button"
            @click="open = !open"
            :content="tooltip"
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
import { Vue, Prop, Watch } from 'vue-property-decorator';
// @ts-ignore
import { createPopper, Placement } from '@popperjs/core';

export default class DropdownMenuV extends Vue {
    @Prop({ default: 'bottom' }) position!: Placement;
    @Prop() tooltip?: string;
    @Prop({ default: 'bottom' }) tooltipPlacement?: string;

    open: boolean = false;
    popper: any;

    closeDropdown() {
        this.open = false;
    }

    @Watch('open')
    updatePopperPositioning() {
        this.popper.update();
    }

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
                    placement: this.position || 'bottom',
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
    }

    beforeDestroy() {
        window.removeEventListener(
            'click',
            event => {
                if (event.target instanceof HTMLElement && !this.$el.contains(event.target)) {
                    this.open = false;
                }
            },
            { capture: true }
        );
    }
}
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
