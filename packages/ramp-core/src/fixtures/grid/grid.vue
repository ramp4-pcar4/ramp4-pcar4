<template>
    <panel-screen>
        <template #header>{{ header }}</template>
        <template #controls>
            <input
                @keyup="updateQuickSearch()"
                v-model="quicksearch"
                placeholder="Search table"
                class="rv-global-search rv-input"
                aria-invalid="false"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fit=""
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                focusable="false"
                class="fill-current w-24 h-24"
                v-if="quicksearch.length < 3"
            >
                <g id="search_cache224">
                    <path
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    ></path>
                </g>
            </svg>
            <svg
                data-v-486a0302=""
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                class="fill-current w-18 h-18 ml-6 cursor-pointer"
                @click="resetQuickSearch()"
                v-else
            >
                <path
                    data-v-486a0302=""
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
            </svg>
            <panel-options-menu>
                <a href="#" @click="clearFilters()">Clear Filters</a>
            </panel-options-menu>
            <pin @click="panel.pin()" :active="panel.isPinned"></pin>
            <close @click="panel.close()"></close>
        </template>
        <template #content>
            <TableComponent class="rv-grid" ref="rvGrid" :layerUid="open"></TableComponent>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { PanelInstance } from '@/api';
import TableComponent from '@/fixtures/grid/table/table.vue';

import { LayerStore, layer } from '@/store/modules/layer';
import FeatureLayer from 'ramp-geoapi/dist/layer/FeatureLayer';

@Component({
    components: {
        TableComponent
    }
})
export default class Screen1 extends Vue {
    @Prop() panel!: PanelInstance;
    @Prop() header!: String;

    @Get(LayerStore.layers) layers!: FeatureLayer[];
    @Get('grid/open') open: any;

    quicksearch: String = '';
    grid: any = undefined;

    mounted() {
        this.grid = this.$refs.rvGrid;
    }

    updateQuickSearch(): void {
        this.grid.quicksearch = this.quicksearch;
        this.grid.updateQuickSearch();
    }

    resetQuickSearch(): void {
        this.grid.quicksearch = this.quicksearch = '';
        this.grid.updateQuickSearch();
    }

    clearFilters(): void {
        this.resetQuickSearch();
        this.grid.clearFilters();
    }
}
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
