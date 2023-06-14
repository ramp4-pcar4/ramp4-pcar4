<template>
    <panel-screen :panel="panel">
        <template #header>{{ t('grid.title') }} </template>
        <template #content>
            <table-component
                class="rv-grid"
                :gridId="currentId"
                :panel="panel"
            ></table-component>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PanelInstance } from '@/api';
import TableComponent from '@/fixtures/grid/table-component.vue';
import { useGridStore } from './store';
import { useI18n } from 'vue-i18n';

defineProps({
    panel: {
        type: PanelInstance,
        required: true
    }
});

const gridStore = useGridStore();
const { t } = useI18n();

const currentId = computed<string>(() => gridStore.currentId!);
</script>

<style lang="scss" scoped>
.ag-floating-filter-full-body input,
.ag-floating-filter-full-body select,
.rv-global-search {
    @apply bg-transparent text-black-75 h-24 pb-8 border-0 border-b-2 min-w-0;
}
.rv-input {
    @apply m-0 py-1;
}
</style>
