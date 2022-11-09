<template>
    <panel-screen :panel="panel">
        <template #header>{{ $t('geosearch.title') }}</template>

        <template #content>
            <div class="flex flex-col h-full">
                <geosearch-bar></geosearch-bar>
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
                        class="relative h-56"
                        v-for="(result, idx) in searchResults"
                        v-bind:key="idx"
                    >
                        <button
                            type="button"
                            class="absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style"
                            @click="zoomIn(result)"
                            v-focus-item="'show-truncate'"
                            style="border-bottom: 1px solid lightgray"
                        >
                            <div class="rv-result-description px-8" v-truncate>
                                <div
                                    class="flex-1 text-left truncate font-bold"
                                >
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
                                                ? ' ' +
                                                  result.location.city +
                                                  ', ' +
                                                  result.location.province.abbr
                                                : ' ' +
                                                  result.location.province.abbr
                                        }}</span
                                    >
                                </div>
                                <div
                                    class="flex-1 text-left truncate text-sm"
                                    v-if="result.type"
                                >
                                    {{ result.type }}
                                </div>
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
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { PanelInstance } from '@/api';
import { Point } from '@/geo/api';

import { GeosearchStore } from './store';

import GeosearchSearchBarV from './search-bar.vue';
import GeosearchTopFiltersV from './top-filters.vue';
import GeosearchBottomFiltersV from './bottom-filters.vue';
import GeosearchLoadingBarV from './loading-bar.vue';

export default defineComponent({
    name: 'GeosearchScreenV',

    props: {
        panel: {
            type: Object as PropType<PanelInstance>
        }
    },

    // Import required components.
    components: {
        'geosearch-bar': GeosearchSearchBarV,
        'geosearch-top-filters': GeosearchTopFiltersV,
        'geosearch-bottom-filters': GeosearchBottomFiltersV,
        'loading-bar': GeosearchLoadingBarV
    },

    // fetch store properties/data
    data() {
        return {
            searchVal: this.get(GeosearchStore.searchVal),
            searchResults: this.get(GeosearchStore.searchResults),
            loadingResults: this.get(GeosearchStore.loadingResults)
        };
    },
    methods: {
        // zoom in to a clicked result
        zoomIn(result: any): void {
            let zoomPoint = new Point('zoomies', result.position);
            this.$iApi.geo.map.zoomMapTo(zoomPoint);
        },

        // highlight the search term in each listed geosearch result
        highlightSearchTerm(name: string, province: any) {
            // wrap matched search term in results inside span with styling
            const highlightedResult = name.replace(
                new RegExp(`${this.searchVal.value}`, 'gi'),
                match =>
                    '<span class="font-bold text-blue-600">' + match + '</span>'
            );
            // add comma to new highlighted result if a province/location is provided
            return province ? highlightedResult + ',' : highlightedResult;
        }
    }
});
</script>

<style lang="scss" scoped></style>
