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
            <ul class="rv-results-list h-500 border-t border-gray-600 overflow-hidden overflow-y-auto" v-focus-list>
                <li class="relative h-48" v-for="(result, idx) in searchResults" v-bind:key="idx">
                    <button class="absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style" @click="zoomIn(result)" focus-item>
                        <div class="rv-result-description flex px-8">
                            <div class="flex-1 text-left truncate">
                                <span v-html="highlightSearchTerm(result.name) + ','"></span>
                                <span v-if="result.location.province" class="text-gray-600 text-sm">
                                    {{
                                        result.location.city
                                            ? result.location.city + ', ' + result.location.province.abbr
                                            : result.location.province.abbr
                                    }}</span
                                >
                            </div>
                            <span class="font-bold truncate" v-if="result.type">{{ result.type }}</span>
                        </div>
                    </button>
                </li>
            </ul>
            <div class="rv-geosearch-divider border-b border-gray-600"></div>
            <geosearch-bottom-filters class="absolute bottom-0 mb-32"></geosearch-bottom-filters>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { PanelItemAPI } from '@/api';

import { GeosearchStore } from './store';
import { Map } from 'ramp-geoapi';

import GeosearchBar from './geosearch-bar.vue';
import GeosearchTopFilters from './geosearch-top-filters.vue';
import GeosearchBottomFilters from './geosearch-bottom-filters.vue';

// TODO: temporary import for map zoom call
import { ApiBundle } from 'ramp-geoapi';

@Component({
    components: {
        GeosearchBar,
        GeosearchTopFilters,
        GeosearchBottomFilters
    }
})
export default class GeosearchComponent extends Vue {
    @Prop() panel!: PanelItemAPI;
    // fetch search val + search results from store
    @Get(GeosearchStore.searchVal) searchVal!: string;
    @Get(GeosearchStore.searchResults) searchResults!: Array<any>;

    get isPinned(): boolean {
        return this.panel.isPinned;
    }

    // zoom in to a clicked result
    zoomIn(result: any): void {
        // TODO: replace with ramp api once complete - RAMP.GEO.Point()?
        let zoomPoint = new ApiBundle.Point('zoomies', result.position);
        this.$iApi.map.zoomMapTo(zoomPoint, 50000);
    }

    // highlight the search term in each listed geosearch result
    highlightSearchTerm(name: string) {
        // wrap matched search term in results inside span with styling
        return name.replace(new RegExp(`${this.searchVal}`, 'gi'), match => '<span class="font-bold text-blue-600">' + match + '</span>');
    }
}
</script>

<style lang="scss" scoped></style>
