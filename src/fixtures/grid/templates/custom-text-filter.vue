<template>
    <div class="h-full flex items-center justify-center">
        <input
            class="rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{ 'pointer-events-none': static }"
            type="text"
            @input="valueChanged()"
            v-model="filterValue"
            @keyup.enter="
                if ($store.get('panel/mobileView')) {
                    //@ts-ignore
                    $event?.target?.blur();
                }
            "
            enterkeyhint="done"
            :placeholder="
                $t('grid.filters.column.label.text', [
                    params.column.colDef.headerName
                ])
            "
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { ColumnDefinition, FilterParams } from '../table-component.vue';

export default defineComponent({
    name: 'GridCustomTextFilterV',
    props: ['params'],
    data() {
        return {
            filterValue: '',
            static: this.params.stateManager.columns[
                this.params.column.colDef.field
            ].filter.static
        };
    },
    beforeMount() {
        // Load previously stored value (if saved in table state manager)
        this.filterValue = this.params.stateManager.getColumnFilterValue(
            this.params.column.colDef.field
        );

        // Apply the default value to the column filter.
        this.valueChanged();
    },

    methods: {
        valueChanged(): void {
            this.params.parentFilterInstance((instance: any) => {
                this.filterValue = this.filterValue ? this.filterValue : '';

                instance.setModel({
                    filterType: 'text',
                    type: 'contains',
                    filter: this.filterValue
                });

                // Save the new filter value in the state manager. Allows for quick recovery if the grid is
                // closed and re-opened.
                this.params.stateManager.setColumnFilterValue(
                    this.params.column.colDef.field,
                    this.filterValue
                );

                this.params.api.onFilterChanged();
            });
        },

        onParentModelChanged(parentModel: any): void {
            if (!parentModel || Object.keys(parentModel).length === 0) {
                this.filterValue = '';
            }
        },

        setModel() {
            return {
                filterType: 'text',
                type: 'contains',
                filter: this.filterValue
            };
        }
    }
});

export interface GridCustomTextFilter {
    filterValue: string;
    colDef: ColumnDefinition;
    params: FilterParams;
}
</script>

<style lang="scss">
.ag-floating-filter-full-body input,
.ag-floating-filter-full-body select,
.rv-global-search {
    @apply bg-transparent text-black-75 h-24 pb-8 border-0 border-b-2;
}
.rv-input {
    @apply m-0 py-1;
}
</style>
