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

            // temporary testing fun. delete once things just work
            /*
            const rampFeatureLayerConfig = {
                    id: 'fancyTest',
                    url: 'http://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/9',
                    state: {
                        opacity: 0.8
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            };

            const fancyLayer: FeatureLayer = gapi.layers.createFeatureLayer(rampFeatureLayerConfig);

            map.addLayer(fancyLayer);

            fancyLayer.isLayerLoaded().then(() => {

                // fake an identify
                const p: IdentifyParameters = {
                    map,
                    geometry: {
                        x: -10807419.367799999,
                        y: 6365343.1120999977,
                        spatialReference: { wkid: 102100 },
                        type: 'esriGeometryPoint'
                    },
                    returnGeometry: true
                };
                const ident: IdentifyResultSet = fancyLayer.identify(p);
                console.log('identify result', ident);
            });
            */
        });
    }
}
</script>

<style lang="scss" scoped></style>
