<template>
    <div class="h-full"></div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import GapiLoader, { Map, GeoApi, RampMapConfig } from 'ramp-geoapi';
// import { window } from '@/main';

import { ConfigStore } from '@/store/modules/config';
import { LayerStore, layer } from '@/store/modules/layer';
import FeatureLayer from 'ramp-geoapi/dist/layer/FeatureLayer';

@Component
export default class EsriMap extends Vue {
    @Get(ConfigStore.getMapConfig) mapConfig!: RampMapConfig;

    @Get(LayerStore.layers) layers!: FeatureLayer[];

    gapi!: GeoApi;
    map!: Map;

    @Watch('layers')
    onLayerArrayChange(newValue: FeatureLayer[], oldValue: FeatureLayer[]) {
        newValue.forEach(layer => {
            if (!oldValue.includes(layer)) {
                this.map.addLayer(layer);
            }
        });
    }

    @Watch('mapConfig')
    onMapConfigChange(newValue: RampMapConfig, oldValue: RampMapConfig) {
        if (newValue === oldValue) {
            return;
        }
        this.map = (window as any).RAMP.geoapi.maps.createMap(this.mapConfig, this.$el as HTMLDivElement);
        this.onLayerArrayChange(this.layers, []);
    }
}
</script>

<style lang="scss" scoped></style>
