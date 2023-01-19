<template>
    <div class="h-full flex items-center justify-center">
        <input
            class="rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{ 'pointer-events-none': static }"
            style="width: 45%"
            type="number"
            v-model="minVal"
            @input="minValChanged()"
            @keyup.enter="
                if ($store.get('panel/mobileView')) {
                    //@ts-ignore
                    $event?.target?.blur();
                }
            "
            enterkeyhint="done"
            :placeholder="$t('grid.filters.number.min')"
        />
        <span class="w-12" />
        <input
            class="rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{ 'pointer-events-none': static }"
            style="width: 45%"
            type="number"
            v-model="maxVal"
            @input="maxValChanged()"
            @keyup.enter="
                if ($store.get('panel/mobileView')) {
                    //@ts-ignore
                    $event?.target?.blur();
                }
            "
            enterkeyhint="done"
            :placeholder="$t('grid.filters.number.max')"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { ColumnDefinition, FilterParams } from '../table-component.vue';

export default defineComponent({
    name: 'GridCustomNumberFilterV',
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
        this.minVal = this.params.stateManager.getColumnFilterValue(
            this.params.column.colDef.field,
            'min'
        );
        this.maxVal = this.params.stateManager.getColumnFilterValue(
            this.params.column.colDef.field,
            'max'
        );

        // Apply the default values to the column filter.
        this.minValChanged();
        this.maxValChanged();
    },

    methods: {
        minValChanged() {
            this.minVal =
                this.minVal !== '' && !isNaN(this.minVal) ? this.minVal : null;
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
            this.maxVal =
                this.maxVal !== '' && !isNaN(this.maxVal) ? this.maxVal : null;
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
            // If the value is not a number, or is null, set its value to the empty string.
            if (isNaN(this.minVal) || this.minVal === null) this.minVal = '';
            if (isNaN(this.maxVal) || this.maxVal === null) this.maxVal = '';

            if (this.maxVal !== '' && this.minVal !== '') {
                // If both min and max values are set, set the filter to display
                // all items in between the two numbers.
                instance.setModel({
                    filterType: 'number',
                    type: 'inRange',
                    filter: this.minVal,
                    filterTo: this.maxVal
                });
            } else if (this.minVal === '') {
                // If only the maximum value is set, set the filter to display all items
                // that are lower than it.
                instance.setModel({
                    filterType: 'number',
                    type: 'lessThanOrEqual',
                    filter: this.maxVal
                });
            } else if (this.maxVal === '') {
                // If only the minimum value is set, set the filter to display all items
                // that are higher than it.
                instance.setModel({
                    filterType: 'number',
                    type: 'greaterThanOrEqual',
                    filter: this.minVal
                });
            } else {
                // Clear the filter if neither value is set.
                instance.setModel(null);
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
                filterType: 'number',
                type: 'inRange',
                filter: this.minVal,
                filterTo: this.maxVal
            };
        }
    }
});

export interface GridCustomNumberFilter {
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
