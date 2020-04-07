<template>
    <div class="rv-geosearch-bottom-filters">
        <label class="inline-flex">
            <div class="bg-white shadow">
                <input
                    type="checkbox"
                    class="form-checkbox border-2 mx-8 border-gray-600"
                    :checked="resultsVisible"
                    @change="updateMapExtent($event.target.checked)"
                />
                <span class="ml-4">Visible on map</span>
            </div>
        </label>
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { GeosearchStore } from './store';
import { debounce } from 'debounce';

@Component({})
export default class GeosearchBottomFilters extends Vue {
    @Get(GeosearchStore.resultsVisible) resultsVisible!: any;

    // import required geosearch store actions
    @Call(GeosearchStore.setMapExtent) setMapExtent!: (mapExtent: any) => void;

    created() {
        // TODO: temp call to watch for map extent changes, replace later?
        this.$iApi.map.innerView.watch('extent', this.onMapExtentChange);
    }

    // update geosearch results to match those in current view if visible is checked
    updateMapExtent(visible: boolean): void {
        this.setMapExtent({
            extent: this.$iApi.map.getExtent(),
            visible: visible
        });
    }

    // update store map extent and geosearch results on map view change with debounce
    onMapExtentChange = debounce((newExtent: any, oldExtent: any) => {
        if (newExtent !== oldExtent) {
            this.setMapExtent({
                extent: this.$iApi.map.getExtent(),
                visible: this.resultsVisible
            });
        }
    }, 300);
}
</script>

<style></style>
