<template>
    <div class="h-full flex items-center justify-center w-full">
        <input
            class="m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{ 'pointer-events-none': static }"
            type="date"
            placeholder="date min"
            v-model="minVal"
            @input="minValChanged()"
            @keyup.enter="
                if ($store.get('panel/mobileView')) {
                    //@ts-ignore
                    $event?.target?.blur();
                }
            "
            enterkeyhint="done"
        />
        <span class="w-12" />
        <input
            class="m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{ 'pointer-events-none': static }"
            type="date"
            placeholder="date max"
            v-model="maxVal"
            @input="maxValChanged()"
            @keyup.enter="
                if ($store.get('panel/mobileView')) {
                    //@ts-ignore
                    $event?.target?.blur();
                }
            "
            enterkeyhint="done"
        />
    </div>
</template>

<script lang="ts">
import type { FilterParams } from '@/geo/api';
import { defineComponent } from 'vue';
import type { ColumnDefinition } from '../table-component.vue';

export default defineComponent({
    name: 'GridCustomDateFilterV',
    props: ['params'],
    data() {
        return {
            minVal: '' as any,
            maxVal: '' as any,
            static: this.params.stateManager.columns[
                this.params.column.colDef.field
            ].filter.static
        };
    },

    beforeMount() {
        // Load previously stored values (if saved in table state manager)
        this.minVal =
            this.params.stateManager.getColumnFilterValue(
                this.params.column.colDef.field,
                'min'
            ) || '';
        this.maxVal =
            this.params.stateManager.getColumnFilterValue(
                this.params.column.colDef.field,
                'max'
            ) || '';
        // Apply the default values to the column filter.
        this.minValChanged();
        this.maxValChanged();
    },

    methods: {
        minValChanged() {
            this.params.parentFilterInstance((instance: any) => {
                this.setFilterModel(instance);
                // Save the new filter value in the state manager. Allows for quick recovery if the grid is
                // closed and re-opened.
                this.params.stateManager.setColumnFilterValue(
                    this.params.column.colDef.field,
                    this.minVal,
                    'min'
                );
            });
        },

        maxValChanged() {
            this.params.parentFilterInstance((instance: any) => {
                this.setFilterModel(instance);
                // Save the new filter value in the state manager. Allows for quick recovery if the grid is
                // closed and re-opened.
                this.params.stateManager.setColumnFilterValue(
                    this.params.column.colDef.field,
                    this.maxVal,
                    'max'
                );
            });
        },

        setFilterModel(instance: any) {
            if (this.maxVal === '' && this.minVal === '') {
                // If neither value is set, clear the date filter.
                instance.setModel(null);
            } else if (this.maxVal !== '' && this.minVal !== '') {
                // If both values are set, display all items that occur between the two dates.
                instance.setModel({
                    filterType: 'date',
                    type: 'inRange',
                    dateFrom: this.minVal,
                    dateTo: this.maxVal
                });
            } else if (this.minVal === '') {
                // If only the maximum value is set, display all dates that occur before it.
                instance.setModel({
                    filterType: 'date',
                    type: 'lessThan',
                    dateFrom: this.maxVal
                });
            } else if (this.maxVal === '') {
                // If only the minimum value is set, display all dates that occur after it.
                instance.setModel({
                    filterType: 'date',
                    type: 'greaterThan',
                    dateFrom: this.minVal
                });
            }
            this.params.api.onFilterChanged();
        },

        onParentModelChanged(parentModel: any) {
            if (!parentModel || Object.keys(parentModel).length === 0) {
                this.minVal = '';
                this.maxVal = '';
            }
        },

        setModel() {
            return {
                filterType: 'date',
                type: 'inRange',
                filter: this.minVal,
                filterTo: this.maxVal
            };
        }
    }
});

export interface GridCustomDateFilter {
    minVal: any;
    maxVal: any;
    colDef: ColumnDefinition;
    params: FilterParams;
}
</script>

<style lang="scss" scoped>
.ag-floating-filter-full-body input,
.ag-floating-filter-full-body select,
.rv-global-search {
    @apply bg-transparent text-black-75 h-24 pb-8 border-0 border-b-2;
}
.rv-input {
    @apply m-0 py-1;
}
</style>
<style lang="scss">
.rv-input[type='date']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
}

.rv-input[type='date']::-webkit-calendar-picker-indicator {
    margin: 0;
}
</style>
