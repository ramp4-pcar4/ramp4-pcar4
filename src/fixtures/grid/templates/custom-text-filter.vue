<template>
    <div class="h-full flex items-center justify-center">
        <input
            class="rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{ 'pointer-events-none': fixed }"
            type="text"
            @input="valueChanged()"
            v-model="filterValue"
            @mousedown.stop
            @keypress.enter.prevent
            @keyup.enter="
                if (panelStore.mobileView) {
                    ($event.target as HTMLInputElement).blur();
                }
            "
            enterkeyhint="done"
            :placeholder="
                t('grid.filters.column.label.text', [
                    params.column.colDef.headerName
                ])
            "
        />
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePanelStore } from '@/stores/panel';
import type { ColumnDefinition, FilterParams } from '../table-component.vue';

export interface GridCustomTextFilter {
    filterValue: string;
    colDef: ColumnDefinition;
    params: FilterParams;
}

const panelStore = usePanelStore();
const { t } = useI18n();
const props = defineProps(['params']);

const filterValue = ref<string>('');
const fixed = ref<boolean>(
    props.params.stateManager.columns[props.params.column.colDef.field].filter
        .static
);

const valueChanged = (): void => {
    props.params.parentFilterInstance((instance: any) => {
        filterValue.value = filterValue.value ? filterValue.value : '';

        instance.setModel({
            filterType: 'text',
            type: 'contains',
            filter: filterValue.value
        });

        // Save the new filter value in the state manager. Allows for quick recovery if the grid is
        // closed and re-opened.
        props.params.stateManager.setColumnFilterValue(
            props.params.column.colDef.field,
            filterValue.value
        );

        props.params.api.onFilterChanged();
    });
};

// const onParentModelChanged = (parentModel: any): void => {
//     if (!parentModel || Object.keys(parentModel).length === 0) {
//         filterValue.value = '';
//     }
// };

// const setModel = () => {
//     return {
//         filterType: 'text',
//         type: 'contains',
//         filter: filterValue.value
//     };
// };

onBeforeMount(() => {
    // Load previously stored value (if saved in table state manager)
    filterValue.value = props.params.stateManager.getColumnFilterValue(
        props.params.column.colDef.field
    );

    // Apply the default value to the column filter.
    valueChanged();
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
