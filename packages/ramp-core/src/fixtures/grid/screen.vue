<template>
    <panel-screen>
        <template #header
            >{{ $t('grid.title') }}: {{ head || $t('grid.layer.loading') }}
        </template>
        <template #controls>
            <pin @click="panel.pin()" :active="panel.isPinned" />
            <minimize @click="panel.minimize()" />
            <close @click="panel.close()" />
        </template>
        <template #content>
            <table-component
                class="rv-grid"
                ref="rvGrid"
                :layerUid="currentUid"
            ></table-component>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { get } from '@/store/pathify-helper';

import { LayerInstance, PanelInstance } from '@/api';
import GridTableComponentV from '@/fixtures/grid/table-component.vue';
import MinimizeV from '@/components/panel-stack/controls/minimize.vue';
import { GridStore } from './store';

import { LayerStore } from '@/store/modules/layer';

export default defineComponent({
    props: {
        panel: PanelInstance,
        header: String
    },

    components: {
        'table-component': GridTableComponentV,
        minimize: MinimizeV
    },

    data() {
        return {
            layers: get(LayerStore.layers),
            currentUid: get(GridStore.currentUid),
            quicksearch: '',
            head: '',
            layer: ref()
        };
    },

    setup() {
        const rvGrid = ref();

        return { rvGrid };
    },

    mounted() {
        // Set the panel name to the name of the layer.
        this.head = this.layerName();
    },

    methods: {
        layerName(): string {
            if (this.rvGrid) {
                this.layer = this.rvGrid.getLayerByUid(this.rvGrid.layerUid);

                if (this.layer !== undefined) {
                    return this.layer.name;
                }
            }
            return '';
        }
    }
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
