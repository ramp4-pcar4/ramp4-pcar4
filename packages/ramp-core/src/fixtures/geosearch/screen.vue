<template>
    <panel-screen :panel="panel">
        <template #header>
            <geosearch-bar></geosearch-bar>
        </template>
        <template #controls>
            <pin
                @click="panel.pin()"
                :active="isPinned"
                v-if="$iApi.screenSize !== 'xs'"
            ></pin>
            <close
                @click="panel.close()"
                v-if="$iApi.screenSize !== 'xs'"
            ></close>
        </template>

        <template #content>
            <div class="flex flex-col h-full">
                <geosearch-top-filters></geosearch-top-filters>
                <loading-bar
                    class="flex-none"
                    :class="{ invisible: !loadingResults }"
                ></loading-bar>
                <div class="px-5 mb-10 truncate">
                    <span
                        class="relative h-48"
                        v-if="
                            searchVal &&
                                searchResults.length === 0 &&
                                !loadingResults
                        "
                        >{{ $t('geosearch.noResults')
                        }}<span class="font-bold text-blue-600"
                            >"{{ searchVal }}"</span
                        ></span
                    >
                </div>
                <ul
                    class="rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-hidden overflow-y-auto"
                    v-focus-list
                    v-if="searchResults.length > 0"
                >
                    <li
                        class="relative h-48"
                        v-for="(result, idx) in searchResults"
                        v-bind:key="idx"
                    >
                        <button
                            class="absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style"
                            @click="zoomIn(result)"
                            v-focus-item="'show-truncate'"
                        >
                            <div
                                class="rv-result-description flex px-8"
                                v-truncate
                            >
                                <div class="flex-1 text-left truncate">
                                    <span
                                        v-html="
                                            highlightSearchTerm(
                                                result.name,
                                                result.location.province
                                            )
                                        "
                                    ></span>
                                    <span
                                        v-if="result.location.province"
                                        class="text-gray-600 text-sm"
                                    >
                                        {{
                                            result.location.city
                                                ? result.location.city +
                                                  ', ' +
                                                  result.location.province.abbr
                                                : result.location.province.abbr
                                        }}</span
                                    >
                                </div>
                                <span
                                    class="flex-2 text-right font-bold truncate"
                                    v-if="result.type"
                                    style="max-width: 50%"
                                    >{{ result.type }}</span
                                >
                            </div>
                        </button>
                    </li>
                </ul>
                <geosearch-bottom-filters
                    class="mt-auto"
                ></geosearch-bottom-filters>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';
import { get } from '@/store/pathify-helper';
import { PanelInstance } from '@/api';

import { GeosearchStore } from './store';

import GeosearchSearchBarV from './search-bar.vue';
import GeosearchTopFiltersV from './top-filters.vue';
import GeosearchBottomFiltersV from './bottom-filters.vue';
import GeosearchLoadingBarV from './loading-bar.vue';

@Options({
    components: {
        'geosearch-bar': GeosearchSearchBarV,
        'geosearch-top-filters': GeosearchTopFiltersV,
        'geosearch-bottom-filters': GeosearchBottomFiltersV,
        'loading-bar': GeosearchLoadingBarV
    }
})
export default class GeosearchScreenV extends Vue {
    @Prop() panel!: PanelInstance;
    // fetch store properties/data
    searchVal: string = get(GeosearchStore.searchVal);
    searchResults: Array<any> = get(GeosearchStore.searchResults);
    loadingResults: boolean = get(GeosearchStore.loadingResults);
    // @Get(GeosearchStore.searchVal) searchVal!: string;
    // @Get(GeosearchStore.searchResults) searchResults!: Array<any>;
    // @Get(GeosearchStore.loadingResults) loadingResults!: boolean;

    get isPinned(): boolean {
        return this.panel.isPinned;
    }

    // zoom in to a clicked result
    zoomIn(result: any): void {
        let zoomPoint = new RAMP.GEO.Point('zoomies', result.position);
        this.$iApi.geo.map.zoomMapTo(zoomPoint, 50000);
    }

    // highlight the search term in each listed geosearch result
    highlightSearchTerm(name: string, province: any) {
        // wrap matched search term in results inside span with styling
        const highlightedResult = name.replace(
            new RegExp(`${this.searchVal}`, 'gi'),
            match =>
                '<span class="font-bold text-blue-600">' + match + '</span>'
        );
        // add comma to new highlighted result if a province/location is provided
        return province ? highlightedResult + ',' : highlightedResult;
    }
}
</script>

<style lang="scss" scoped></style>
