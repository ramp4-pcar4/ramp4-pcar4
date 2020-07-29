<template>
    <div class="rv-geosearch-bottom-filters">
        <div class="bg-white">
            <label class="ml-4"
                ><input
                    type="checkbox"
                    class="form-checkbox border-2 mx-8 border-gray-600"
                    :checked="resultsVisible"
                    @change="updateMapExtent($event.target.checked)"
                />{{ $t('visible') }}</label
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { ApiBundle as GeoApiBundle } from 'ramp-geoapi';
import { GlobalEvents } from '../../api/internal';
import { GeosearchStore } from './store';
import { debounce } from 'debounce';

@Component
export default class GeosearchBottomFilters extends Vue {
    @Get(GeosearchStore.resultsVisible) resultsVisible!: any;

    // import required geosearch store actions
    @Call(GeosearchStore.setMapExtent) setMapExtent!: (mapExtent: any) => void;

    created() {
        // TODO decide if this event handler should go into the default ramp events, or remain as hard-bound to geosearch.
        //      hard-bound means no one outside can un-hook and replace with a different reaction.
        //      going default means the handler function needs to be public / on the geosearch api.
        this.$iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, this.onMapExtentChange, 'geosearch_map_extent');
    }

    /**
     * beforeDestroy lifecycle hook
     *
     * This is called while the component is still functional right before everything is removed.
     */
    beforeDestroy() {
        this.$iApi.event.off('geosearch_map_extent');
    }

    // update geosearch results to match those in current view if visible is checked
    updateMapExtent(visible: boolean): void {
        this.setMapExtent({
            extent: this.$iApi.map.getExtent(),
            visible: visible
        });
    }

    // update store map extent and geosearch results on map view change with debounce
    onMapExtentChange = debounce((newExtent: GeoApiBundle.Extent) => {
        this.setMapExtent({
            extent: newExtent,
            visible: this.resultsVisible
        });
    }, 300);
}
</script>

<style></style>
