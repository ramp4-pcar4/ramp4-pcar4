<template>
    <panel-screen>
        <template #header>
            <geosearch-bar></geosearch-bar>
        </template>

        <template #controls>
            <pin @click="panel.pin()" :active="isPinned"></pin>
            <close @click="panel.close()"></close>
        </template>

        <template #content>
            <geosearch-top-filters></geosearch-top-filters>
            <loading-bar class="p-4 mx-2 mb-2" v-if="loadingResults"></loading-bar>
            <div class="px-5 mt-10 truncate">
                <span class="relative h-48" v-if="searchVal && searchResults.length === 0 && !loadingResults"
                    >{{ $t('noResults') }}<span class="font-bold text-blue-600">{{ searchVal }}</span></span
                >
            </div>
            <ul
                class="rv-results-list h-500 border-t border-b border-gray-600 overflow-hidden overflow-y-auto"
                v-focus-list
                v-if="searchResults.length > 0"
            >
                <li class="relative h-48" v-for="(result, idx) in searchResults" v-bind:key="idx">
                    <button
                        class="absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style"
                        @click="zoomIn(result)"
                        v-focus-item
                    >
                        <div class="rv-result-description flex px-8">
                            <div class="flex-1 text-left truncate">
                                <span v-html="highlightSearchTerm(result.name, result.location.province)"></span>
                                <span v-if="result.location.province" class="text-gray-600 text-sm">
                                    {{
                                        result.location.city
                                            ? result.location.city + ', ' + result.location.province.abbr
                                            : result.location.province.abbr
                                    }}</span
                                >
                            </div>
                            <span class="flex-2 text-right font-bold truncate" v-if="result.type" style="max-width: 50%">{{
                                result.type
                            }}</span>
                        </div>
                    </button>
                </li>
            </ul>
            <geosearch-bottom-filters class="absolute bottom-0 mb-32"></geosearch-bottom-filters>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { PanelInstance } from '@/api';

import { GeosearchStore } from './store';
import { RampMap } from 'ramp-geoapi';

import GeosearchBar from './geosearch-bar.vue';
import GeosearchTopFilters from './geosearch-top-filters.vue';
import GeosearchBottomFilters from './geosearch-bottom-filters.vue';
import LoadingBar from './loading-bar.vue';
import messages from './lang';

@Component({
    components: {
        GeosearchBar,
        GeosearchTopFilters,
        GeosearchBottomFilters,
        LoadingBar
    },
    i18n: {
        messages
    }
})
export default class GeosearchComponent extends Vue {
    @Prop() panel!: PanelInstance;
    // fetch store properties/data
    @Get(GeosearchStore.searchVal) searchVal!: string;
    @Get(GeosearchStore.searchResults) searchResults!: Array<any>;
    @Get(GeosearchStore.loadingResults) loadingResults!: boolean;

    get isPinned(): boolean {
        return this.panel.isPinned;
    }

    // zoom in to a clicked result
    zoomIn(result: any): void {
        let zoomPoint = new RAMP.GEO.Point('zoomies', result.position);
        this.$iApi.map.zoomMapTo(zoomPoint, 50000);
    }

    // highlight the search term in each listed geosearch result
    highlightSearchTerm(name: string, province: any) {
        // wrap matched search term in results inside span with styling
        const highlightedResult = name.replace(
            new RegExp(`${this.searchVal}`, 'gi'),
            match => '<span class="font-bold text-blue-600">' + match + '</span>'
        );
        // add comma to new highlighted result if a province/location is provided
        return province ? highlightedResult + ',' : highlightedResult;
    }
}
</script>

<style lang="scss" scoped></style>
