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
                <li class="relative h-48" v-for="(result, idx) in searchResults" v-bind:key="idx">
                    <button class="absolute inset-0 h-full w-full hover:bg-gray-300" @click="zoomIn(result)">
                        <div class="rv-result-description flex px-32">
                            <div class="flex-1 text-left truncate">
                                <span>{{ result.name }},</span>
                                <span v-if="result.province">{{ result.province }}</span>
                            </div>
                            <span class="font-bold max-w-10 truncate" v-if="result.type">{{ result.type }}</span>
                        </div>
                    </button>
                </li>
            </ul>
            <div class="rv-geosearch-divider border-b border-gray-600"></div>
            <geosearch-bottom-filters
                v-bind:visibleOnly="queryParams.resultsVisible"
                class="absolute bottom-0 mb-32"
            ></geosearch-bottom-filters>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { PanelItemAPI } from '@/api';

import { GeosearchStore } from './store';

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
    @Prop() panel!: PanelItemAPI;
    // fetch defined province and type filters
    get provinces() {
        return this.$iApi.$vApp.$store.get('geosearch/getProvinces');
    }
    get types() {
        return this.$iApi.$vApp.$store.get('geosearch/getTypes');
    }
    // get search value, query param filters and current geosearch search results
    get searchVal() {
        return this.$iApi.$vApp.$store.get('geosearch/searchVal');
    }
    get queryParams() {
        return this.$iApi.$vApp.$store.get('geosearch/queryParams');
    }
    get searchResults() {
        return this.$iApi.$vApp.$store.get('geosearch/searchResults');
    }
    get isPinned(): boolean {
        return this.panel.isPinned;
    }

    runQuery() {
        return this.$iApi.$vApp.$store.dispatch('geosearch/runQuery');
    }

    zoomIn(result: any): void {
        // TODO: call some geosearch store action
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
