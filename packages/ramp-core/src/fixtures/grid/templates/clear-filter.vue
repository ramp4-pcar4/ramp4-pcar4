<template>
    <button
        class="
            clearFilterButton
            flex
            items-center
            justify-center
            w-full
            h-full
            disabled:opacity-30 disabled:cursor-default
        "
        @click="clearFilters"
        :content="$t('grid.filters.clear')"
        v-tippy="{ placement: 'bottom' }"
        :disabled="!params.stateManager.filtered"
        tabindex="-1"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            class="h-24 w-24 fill-current"
            viewBox="0 0 24 24"
        >
            <g><rect fill="none" height="24" width="24" /></g>
            <g>
                <g>
                    <path
                        d="M19.79,5.61C20.3,4.95,19.83,4,19,4H6.83l7.97,7.97L19.79,5.61z"
                    />
                    <path
                        d="M2.81,2.81L1.39,4.22L10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2.17l5.78,5.78l1.41-1.41L2.81,2.81z"
                    />
                </g>
            </g>
        </svg>
    </button>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';
import { directive as tippyDirective } from 'vue-tippy';

export default defineComponent({
    name: 'GridClearFilterV',
    directives: {
        tippy: tippyDirective
    },
    data(props) {
        return {
            params: props.params as any
        };
    },
    async mounted() {
        // need to hoist events to top level cell wrapper to be keyboard accessible
        await nextTick;
        const headerCell = this.$el.closest('.ag-header-cell');
        const grid = headerCell.closest('.ag-pinned-left-header');
        headerCell.addEventListener('keydown', async (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.stopPropagation();
                this.clearFilters();
                await nextTick;
                grid.querySelector(
                    '.ag-header-cell.ag-floating-filter'
                ).focus();
            }
        });

        headerCell.addEventListener('focus', () => {
            (this.$el as any)._tippy.show();
        });
        headerCell.addEventListener('blur', () => {
            (this.$el as any)._tippy.hide();
        });
    },
    beforeUnmount() {
        const headerCell = this.$el.closest('.ag-header-cell');
        const grid = headerCell.closest('.ag-pinned-left-header');
        headerCell.removeEventListener('keydown', async (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.stopPropagation();
                this.clearFilters();
                await nextTick;
                grid.querySelector(
                    '.ag-header-cell.ag-floating-filter'
                ).focus();
            }
        });

        headerCell.removeEventListener('focus', () => {
            (this.$el as any)._tippy.show();
        });
        headerCell.removeEventListener('blur', () => {
            (this.$el as any)._tippy.hide();
        });
    },
    methods: {
        clearFilters(): void {
            this.params.clearFilters();
        },
        setModel(): void {
            return;
        },
        onParentModelChange(): void {
            return;
        }
    }
});
</script>

<style lang="scss" scoped></style>
