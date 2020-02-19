<template>
    <panel-screen>
        <template #header>
            <geosearch-bar :searchTerm="searchVal"></geosearch-bar>
        </template>

        <template #controls>
            <pin @click="panel.pin()" :active="isPinned"></pin>
            <close @click="panel.close()"></close>
        </template>

        <template #content>
            <geosearch-top-filters
                :provinces="provinces"
                :types="types"
                :selectedProvince="queryParams.province"
                :selectedType="queryParams.type"
            ></geosearch-top-filters>
            <ul class="rv-results-list">
                <li class="mt h-12" v-for="(result, idx) in searchResults" v-bind:key="idx">
                    <button class="h-full w-full inline-block hover:bg-gray-300" @click="zoomIn(result)">
                        <div class="rv-result-description">
                            <div class="w-3/4">
                                <span class="float-left">{{ result.name }},</span>
                                <span class="float-left px" v-if="result.province">{{ result.province }}</span>
                            </div>
                            <span class="font-bold w-1/4 float-right truncate" v-if="result.type">{{ result.type }}</span>
                        </div>
                    </button>
                </li>
            </ul>
            <div class="rv-geosearch-divider border-b border-gray-600"></div>
            <geosearch-bottom-filters
                v-bind:visibleOnly="queryParams.resultsVisible"
                class="absolute bottom-0 mb-8"
            ></geosearch-bottom-filters>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { PanelItemAPI } from '@/api';

import { GeosearchStore } from '@/store/modules/geosearch';

import GeosearchBar from './geosearch-bar.vue';
import GeosearchTopFilters from './geosearch-top-filters.vue';
import GeosearchBottomFilters from './geosearch-bottom-filters.vue';

@Component({
    components: {
        GeosearchBar,
        GeosearchTopFilters,
        GeosearchBottomFilters
    }
})
export default class GeosearchComponent extends Vue {
    // fetch defined province and type filters
    @Get(GeosearchStore.getProvinces) provinces!: Array<string>;
    @Get(GeosearchStore.getTypes) types!: Array<string>;
    // get search value, query param filters and current geosearch search results
    @Get(GeosearchStore.searchVal) searchVal!: string;
    @Get(GeosearchStore.queryParams) queryParams!: any;
    @Get(GeosearchStore.searchResults) searchResults!: Array<any>;

    @Prop() panel!: PanelItemAPI;

    @Call(GeosearchStore.runQuery) runQuery!: () => Array<any>;

    zoomIn(result: any): void {
        // TODO: call some geosearch store action
    }

    // ✔ create a computer property from the `pinned` value exposed on the API
    get isPinned(): boolean {
        return this.panel.isPinned;
    }

    // @watch only seemed to be working on individual param attributes
    @Watch('searchVal')
    onSearchValChange(newSearchVal: any, oldSearchVal: any) {
        if (newSearchVal !== oldSearchVal) {
            this.runQuery();
        }
    }

    @Watch('queryParams.province')
    onProvinceChange(newProv: any, oldProv: any) {
        if (newProv !== oldProv) {
            this.runQuery();
        }
    }

    @Watch('queryParams.type')
    onTypeChange(newType: any, oldType: any) {
        if (newType !== oldType) {
            this.runQuery();
        }
    }
}
</script>

<style lang="scss" scoped></style>
