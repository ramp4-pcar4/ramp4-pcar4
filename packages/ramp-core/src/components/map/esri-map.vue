<template>
    <div class="h-full"></div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import GapiLoader, { RampMap, GeoApi, RampMapConfig, MapClick, ApiBundle as GeoApiBundle } from 'ramp-geoapi';
import { GlobalEvents } from '../../api/internal';
import { APIInterface, RampGeo } from '../../api';
// import { window } from '@/main';

import { ConfigStore } from '@/store/modules/config';
import { LayerStore, layer } from '@/store/modules/layer';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

@Component
export default class EsriMap extends Vue {
    @Get(ConfigStore.getMapConfig) mapConfig!: RampMapConfig;

    @Get(LayerStore.layers) layers!: BaseLayer[];

    gapi!: GeoApi;
    map!: RampMap;

    created() {
        // temporarily print out loaded layers to console for grid testing purposes.
        console.log(this.layers);
    }

    @Watch('layers')
    onLayerArrayChange(newValue: BaseLayer[], oldValue: BaseLayer[]) {
        newValue.forEach(layer => {
            // TODO add a proper check for this after
            // if (!oldValue.includes(layer)) {
            this.map.addLayer(layer);
            // }
        });
    }

    @Watch('mapConfig')
    onMapConfigChange(newValue: RampMapConfig, oldValue: RampMapConfig) {
        if (newValue === oldValue) {
            return;
        }
        this.map = RAMP.geoapi.maps.createMap(this.mapConfig, this.$el as HTMLDivElement);
        // FIXME: temporarily store map in global, remove line below when map API is complete
        this.$iApi.map = this.map;
        this.$iApi.event.emit(GlobalEvents.MAP_CREATED, this.$iApi.map);

        // TODO wire up more events from map to main bus. or migrate into "map API" if that happens
        this.$iApi.map.mapClicked.listen((payload: MapClick) => {
            this.$iApi.event.emit(GlobalEvents.MAPCLICK, payload);
        });
        this.$iApi.map.mapDoubleClicked.listen((payload: MapClick) => {
            this.$iApi.event.emit(GlobalEvents.MAPDOUBLECLICK, payload);
        });
        this.$iApi.map.extentChanged.listen((payload: GeoApiBundle.Extent) => {
            this.$iApi.event.emit(GlobalEvents.MAPEXTENTCHANGE, payload);
        });

        this.onLayerArrayChange(this.layers, []);
    }
}
</script>

<style lang="scss" scoped></style>
