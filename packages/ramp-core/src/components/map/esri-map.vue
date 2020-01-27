<template>
    <div class="h-full"></div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import GapiLoader, { Map, GeoApi, RampMapConfig, RampLayerConfig } from 'ramp-geoapi';

import { ConfigStore } from '@/store/modules/config';
// import { LayerStore, layer } from '@/store/modules/layer';

@Component
export default class EsriMap extends Vue {
    @Get(ConfigStore.getMapConfig) esriMapConfig!: RampMapConfig;

    gapi!: GeoApi;
    map!: Map;

    created(): void {
        const gapiPromise: Promise<GeoApi> = GapiLoader(window);

        gapiPromise.then((gapi: GeoApi) => {
            this.gapi = gapi;
            this.map = gapi.maps.createMap(this.esriMapConfig, this.$el as HTMLDivElement);
        });
    }
}
</script>

<style lang="scss" scoped></style>
