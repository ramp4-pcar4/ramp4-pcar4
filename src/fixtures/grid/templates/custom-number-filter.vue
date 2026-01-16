<template>
    <div class="h-full flex items-center justify-center">
        <input
            class="rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{
                'cursor-not-allowed': fixed
            }"
            style="width: 45%"
            type="number"
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
            :placeholder="t('grid.filters.number.min')"
            :aria-label="t('grid.filters.number.min')"
            :disabled="fixed"
        />
        <span class="w-12" />

        <input
            class="rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{
                'cursor-not-allowed': fixed
            }"
            style="width: 45%"
            type="number"
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
            :placeholder="t('grid.filters.number.max')"
            :aria-label="t('grid.filters.number.max')"
            :disabled="fixed"
        />
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePanelStore } from '@/stores/panel';
import type { RangeFilterValue } from '../store';

const panelStore = usePanelStore();
const { t } = useI18n();

/**
 * .stateManager: TableStateManager
 * .column: Column (ag-grid) ??
 * .api: GridApi (ag-grid)
 */
const props = defineProps(['params']);

const minVal = ref<RangeFilterValue>('');
const maxVal = ref<RangeFilterValue>('');
const fixed = ref<boolean>(!!props.params.stateManager.columns[props.params.column.colDef.field].filter.static);

const minValChanged = () => {
    setFilterModel();

    // Save the new filter value in the state manager. Allows for quick recovery if the grid is
    // closed and re-opened.
    props.params.stateManager.setColumnFilterValue(props.params.column.colDef.field, minVal.value, 'min');
};

const maxValChanged = (): void => {
    setFilterModel();

    // Save the new filter value in the state manager. Allows for quick recovery if the grid is
    // closed and re-opened.
    props.params.stateManager.setColumnFilterValue(props.params.column.colDef.field, maxVal.value, 'max');
};

const invalidNumber = (testValue: RangeFilterValue): boolean => {
    // if data type is not a number, or its number but NaN value, return true
    return typeof testValue !== 'number' || isNaN(testValue);
};

const setFilterModel = (): void => {
    // If the value is not a valid number set its value to the empty string.

    if (minVal.value !== '' && invalidNumber(minVal.value)) {
        minVal.value = '';
    }

    if (maxVal.value !== '' && invalidNumber(maxVal.value)) {
        maxVal.value = '';
    }

    const field = props.params.column.colDef.field as string;
    if (maxVal.value === '' && minVal.value === '') {
        // Clear the filter if neither value is set.
        props.params.api.setColumnFilterModel(field, null);
    } else if (maxVal.value !== '' && minVal.value !== '') {
        // If both min and max values are set, set the filter to display
        // all items in between the two numbers.
        props.params.api.setColumnFilterModel(field, {
            filterType: 'number',
            type: 'inRange',
            filter: minVal.value,
            filterTo: maxVal.value
        });
    } else if (minVal.value === '') {
        // If only the maximum value is set, set the filter to display all items
        // that are lower than it.
        props.params.api.setColumnFilterModel(field, {
            filterType: 'number',
            type: 'lessThanOrEqual',
            filter: maxVal.value
        });
    } else {
        // If only the minimum value is set, set the filter to display all items
        // that are higher than it.
        props.params.api.setColumnFilterModel(field, {
            filterType: 'number',
            type: 'greaterThanOrEqual',
            filter: minVal.value
        });
    }
    props.params.api.onFilterChanged();
};

onBeforeMount(() => {
    // Load previously stored values (if saved in table state manager)
    minVal.value = props.params.stateManager.getColumnFilterValue(props.params.column.colDef.field, 'min');
    maxVal.value = props.params.stateManager.getColumnFilterValue(props.params.column.colDef.field, 'max');

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
