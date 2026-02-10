<template>
    <div class="h-full flex items-center justify-center">
        <select
            class="rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded"
            :class="{
                'cursor-not-allowed': fixed
            }"
            v-model="selectedOption"
            @change="selectionChanged()"
            @mousedown.stop
            :aria-label="selectedOption"
            :disabled="fixed"
        >
            <option v-for="option in options" :value="option" :key="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

/**
 * .stateManager: TableStateManager
 * .column: Column (ag-grid) ??
 * .api: GridApi (ag-grid)
 * .rowData: all row values in the table??? an array indexed rowData[row][column]
 */
const props = defineProps(['params']);

const selectedOption = ref<string>('');
const options = ref<Array<string>>([]);
const fixed = ref<boolean>(props.params.stateManager.columns[props.params.column.colDef.field].filter.static);

const selectionChanged = () => {
    selectedOption.value = selectedOption.value ? selectedOption.value : '';
    const field = props.params.column.colDef.field;
    if (selectedOption.value === '...' || !selectedOption.value) {
        // Clear the selector filter.
        props.params.api.setColumnFilterModel(field, null);
        selectedOption.value = '';
    } else {
        // Filter by the selected option.
        props.params.api.setColumnFilterModel(field, {
            filterType: 'text',
            type: 'contains',
            filter: selectedOption.value
        });
    }

    // Save the new filter value in the state manager. Allows for quick recovery if the grid is
    // closed and re-opened.
    props.params.stateManager.setColumnFilterValue(props.params.column.colDef.field, selectedOption.value);

    props.params.api.onFilterChanged();
};

onBeforeMount(() => {
    // Load previously stored value (if saved in table state manager)
    selectedOption.value = props.params.stateManager.getColumnFilterValue(props.params.column.colDef.field);

    const rowData = props.params.rowData;

    // obtain row data and filter out duplicates for selector list

    const uniqueRowValues = new Set<string>(rowData.map((row: any) => row[props.params.column.colId]));
    options.value = Array.from(uniqueRowValues);

    // add the '...' option to allow clearing the selector
    options.value.unshift('...');

    // Apply the default value to the column filter.
    selectionChanged();
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
