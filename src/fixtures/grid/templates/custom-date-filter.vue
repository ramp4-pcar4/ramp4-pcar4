<template>
    <div class="h-full flex items-center justify-center w-full">
        <input
            class="m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{
                'cursor-not-allowed': fixed
            }"
            type="date"
            :placeholder="t('grid.filters.date.min')"
            :aria-label="t('grid.filters.date.min')"
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
            :disabled="fixed"
        />

        <span class="w-12" />

        <input
            class="m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{
                'cursor-not-allowed': fixed
            }"
            type="date"
            :placeholder="t('grid.filters.date.max')"
            :aria-label="t('grid.filters.date.max')"
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
            :disabled="fixed"
        />
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePanelStore } from '@/stores/panel';

const panelStore = usePanelStore();
const { t } = useI18n();

/**
 * .stateManager: TableStateManager
 * .column: Column (ag-grid) ??
 * .api: GridApi (ag-grid)
 */
const props = defineProps(['params']);

const minVal = ref<string>('');
const maxVal = ref<string>('');
const fixed = ref<boolean>(props.params.stateManager.columns[props.params.column.colDef.field].filter.static);

const minValChanged = () => {
    setFilterModel();
    // Save the new filter value in the state manager. Allows for quick recovery if the grid is
    // closed and re-opened.
    props.params.stateManager.setColumnFilterValue(props.params.column.colDef.field, minVal.value, 'min');
};

const maxValChanged = () => {
    setFilterModel();
    // Save the new filter value in the state manager. Allows for quick recovery if the grid is
    // closed and re-opened.
    props.params.stateManager.setColumnFilterValue(props.params.column.colDef.field, maxVal.value, 'max');
};

const setFilterModel = () => {
    const field = props.params.column.colDef.field;
    if (maxVal.value === '' && minVal.value === '') {
        // If neither value is set, clear the date filter.
        props.params.api.setColumnFilterModel(field, null);
    } else if (maxVal.value !== '' && minVal.value !== '') {
        // If both values are set, display all items that occur between the two dates.
        props.params.api.setColumnFilterModel(field, {
            filterType: 'date',
            type: 'inRange',
            dateFrom: minVal.value,
            dateTo: maxVal.value
        });
    } else if (minVal.value === '') {
        // If only the maximum value is set, display all dates that occur before it.
        props.params.api.setColumnFilterModel(field, {
            filterType: 'date',
            type: 'lessThan',
            dateFrom: maxVal.value
        });
    } else {
        // If only the minimum value is set, display all dates that occur after it.
        props.params.api.setColumnFilterModel(field, {
            filterType: 'date',
            type: 'greaterThan',
            dateFrom: minVal.value
        });
    }
    props.params.api.onFilterChanged();
};

onBeforeMount(() => {
    // Load previously stored values (if saved in table state manager)
    minVal.value = props.params.stateManager.getColumnFilterValue(props.params.column.colDef.field, 'min') || '';
    maxVal.value = props.params.stateManager.getColumnFilterValue(props.params.column.colDef.field, 'max') || '';
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
