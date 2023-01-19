<template>
    <panel-screen :panel="panel">
        <template #header>{{ $t('grid.title') }} </template>
        <template #content>
            <table-component
                class="rv-grid"
                :layerId="currentId"
                :layerUid="currentUid"
                :panel="panel"
            ></table-component>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeMount, ref } from 'vue';
import { PanelInstance, type InstanceAPI } from '@/api';
import TableComponent from '@/fixtures/grid/table-component.vue';
import { GridStore } from './store';
import { useStore } from 'vuex';

defineProps({
    panel: {
        type: PanelInstance,
        required: true
    },
    header: {
        type: String
    }
});

const iApi = inject<InstanceAPI>('iApi')!;
const store = useStore();

const currentId = computed<string>(() => store.get(GridStore.currentId)!);
const currentUid = ref<string>('');

onBeforeMount(() => {
    currentUid.value = iApi.geo.layer.getLayer(currentId.value)!.uid;
});
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
