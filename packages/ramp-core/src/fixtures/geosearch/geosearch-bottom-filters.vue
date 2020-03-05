<template>
    <div class="rv-geosearch-bottom-filters">
        <label class="inline-flex">
            <div class="bg-white shadow">
                <input type="checkbox" class="form-checkbox border-2 mx-8 border-gray-600" :value="resultsVisible" @change="updateExtentFilters" />
                <span class="ml-4">Visible on map</span>
            </div>
        </label>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { GeosearchStore } from './store';

@Component({})
export default class GeosearchBottomFilters extends Vue {
    @Get(GeosearchStore.resultsVisible) resultsVisible!: any;

    updateExtentFilters(): void {
        // TODO: implement + call geosearch store action
    }
}
</script>

<style></style>
