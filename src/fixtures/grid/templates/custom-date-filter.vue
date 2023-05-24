<template>
    <div class="h-full flex items-center justify-center w-full">
        <input
            class="m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{ 'pointer-events-none': fixed }"
            type="date"
            placeholder="date min"
            v-model="minVal"
            @input="minValChanged()"
            @mousedown.stop
            @keypress.enter.prevent
            @keyup.enter="
                if (panelStore.mobileView) {
                    ($event.target as HTMLInputElement).blur();
                }
            "
            enterkeyhint="done"
        />
        <span class="w-12" />
        <input
            class="m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{ 'pointer-events-none': fixed }"
            type="date"
            placeholder="date max"
            v-model="maxVal"
            @input="maxValChanged()"
            @mousedown.stop
            @keypress.enter.prevent
            @keyup.enter="
                if (panelStore.mobileView) {
                    ($event.target as HTMLInputElement).blur();
                }
            "
            enterkeyhint="done"
        />
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import type { ColumnDefinition, FilterParams } from '../table-component.vue';
import { usePanelStore } from '@/stores/panel';

export interface GridCustomDateFilter {
    minVal: any;
    maxVal: any;
    colDef: ColumnDefinition;
    params: FilterParams;
}

const panelStore = usePanelStore();

const props = defineProps(['params']);

const minVal = ref<string>('');
const maxVal = ref<string>('');
const fixed = ref<boolean>(
    props.params.stateManager.columns[props.params.column.colDef.field].filter
        .static
);

const minValChanged = () => {
    props.params.parentFilterInstance((instance: any) => {
        setFilterModel(instance);
        // Save the new filter value in the state manager. Allows for quick recovery if the grid is
        // closed and re-opened.
        props.params.stateManager.setColumnFilterValue(
            props.params.column.colDef.field,
            minVal.value,
            'min'
        );
    });
};

const maxValChanged = () => {
    props.params.parentFilterInstance((instance: any) => {
        setFilterModel(instance);
        // Save the new filter value in the state manager. Allows for quick recovery if the grid is
        // closed and re-opened.
        props.params.stateManager.setColumnFilterValue(
            props.params.column.colDef.field,
            maxVal.value,
            'max'
        );
    });
};

const setFilterModel = (instance: any) => {
    if (maxVal.value === '' && minVal.value === '') {
        // If neither value is set, clear the date filter.
        instance.setModel(null);
    } else if (maxVal.value !== '' && minVal.value !== '') {
        // If both values are set, display all items that occur between the two dates.
        instance.setModel({
            filterType: 'date',
            type: 'inRange',
            dateFrom: minVal.value,
            dateTo: maxVal.value
        });
    } else if (minVal.value === '') {
        // If only the maximum value is set, display all dates that occur before it.
        instance.setModel({
            filterType: 'date',
            type: 'lessThan',
            dateFrom: maxVal.value
        });
    } else if (maxVal.value === '') {
        // If only the minimum value is set, display all dates that occur after it.
        instance.setModel({
            filterType: 'date',
            type: 'greaterThan',
            dateFrom: minVal.value
        });
    }
    props.params.api.onFilterChanged();
};

// const onParentModelChanged = (parentModel: any) => {
//     if (!parentModel || Object.keys(parentModel).length === 0) {
//         minVal.value = '';
//         maxVal.value = '';
//     }
// };
// const setModel = () => {
//     return {
//         filterType: 'date',
//         type: 'inRange',
//         filter: minVal.value,
//         filterTo: maxVal.value
//     };
// };

onBeforeMount(() => {
    // Load previously stored values (if saved in table state manager)
    minVal.value =
        props.params.stateManager.getColumnFilterValue(
            props.params.column.colDef.field,
            'min'
        ) || '';
    maxVal.value =
        props.params.stateManager.getColumnFilterValue(
            props.params.column.colDef.field,
            'max'
        ) || '';
    // Apply the default values to the column filter.
    minValChanged();
    maxValChanged();
});
</script>

<script lang="ts">
// AG grid can't recognize required method using Composition API
// Use Options API instead, fixes console warnings
export default {
    methods: {
        onParentModelChanged() {}
    }
};
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
