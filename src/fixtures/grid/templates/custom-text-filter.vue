<template>
    <div class="h-full flex items-center justify-center">
        <input
            class="rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded"
            :class="{
                'cursor-not-allowed': fixed
            }"
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
            :placeholder="t('grid.filters.column.label.text', [params.column.colDef.headerName])"
            :aria-label="t('grid.filters.column.label.text', [params.column.colDef.headerName])"
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

const filterValue = ref<string>('');
const fixed = ref<boolean>(props.params.stateManager.columns[props.params.column.colDef.field].filter.static);

const valueChanged = (): void => {
    filterValue.value = filterValue.value ? filterValue.value : '';
    const field = props.params.column.colDef.field;
    if (!filterValue.value) {
        props.params.api.setColumnFilterModel(field, null);
    } else {
        props.params.api.setColumnFilterModel(field, {
            filterType: 'text',
            type: 'contains',
            filter: filterValue.value
        });
    }

    // Save the new filter value in the state manager. Allows for quick recovery if the grid is
    // closed and re-opened.
    props.params.stateManager.setColumnFilterValue(props.params.column.colDef.field, filterValue.value);

    props.params.api.onFilterChanged();
};

onBeforeMount(() => {
    // Load previously stored value (if saved in table state manager)
    filterValue.value = props.params.stateManager.getColumnFilterValue(props.params.column.colDef.field).toString();
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
