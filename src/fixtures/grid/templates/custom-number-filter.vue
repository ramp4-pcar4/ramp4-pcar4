<template>
    <div class="h-full flex items-center justify-center">
        <input
            class="rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{ 'pointer-events-none': fixed }"
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
        />
        <span class="w-12" />
        <input
            class="rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{ 'pointer-events-none': fixed }"
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
        />
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePanelStore } from '@/stores/panel';
import type { ColumnDefinition, FilterParams } from '../table-component.vue';

export interface GridCustomNumberFilter {
    minVal: any;
    maxVal: any;
    colDef: ColumnDefinition;
    params: FilterParams;
}

const panelStore = usePanelStore();
const { t } = useI18n();
const props = defineProps(['params']);

const minVal = ref<any>('');
const maxVal = ref<any>('');
const fixed = ref<boolean>(
    props.params.stateManager.columns[props.params.column.colDef.field].filter
        .static
);

const minValChanged = () => {
    minVal.value =
        minVal.value !== '' && !isNaN(minVal.value) ? minVal.value : null;
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
    maxVal.value =
        maxVal.value !== '' && !isNaN(maxVal.value) ? maxVal.value : null;
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
    // If the value is not a number, or is null, set its value to the empty string.
    if (isNaN(minVal.value) || minVal.value === null) minVal.value = '';
    if (isNaN(maxVal.value) || maxVal.value === null) maxVal.value = '';

    if (maxVal.value !== '' && minVal.value !== '') {
        // If both min and max values are set, set the filter to display
        // all items in between the two numbers.
        instance.setModel({
            filterType: 'number',
            type: 'inRange',
            filter: minVal.value,
            filterTo: maxVal.value
        });
    } else if (minVal.value === '') {
        // If only the maximum value is set, set the filter to display all items
        // that are lower than it.
        instance.setModel({
            filterType: 'number',
            type: 'lessThanOrEqual',
            filter: maxVal.value
        });
    } else if (maxVal.value === '') {
        // If only the minimum value is set, set the filter to display all items
        // that are higher than it.
        instance.setModel({
            filterType: 'number',
            type: 'greaterThanOrEqual',
            filter: minVal.value
        });
    } else {
        // Clear the filter if neither value is set.
        instance.setModel(null);
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
//         filterType: 'number',
//         type: 'inRange',
//         filter: minVal.value,
//         filterTo: maxVal.value
//     };
// };

onBeforeMount(() => {
    // Load previously stored values (if saved in table state manager)
    minVal.value = props.params.stateManager.getColumnFilterValue(
        props.params.column.colDef.field,
        'min'
    );
    maxVal.value = props.params.stateManager.getColumnFilterValue(
        props.params.column.colDef.field,
        'max'
    );

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
