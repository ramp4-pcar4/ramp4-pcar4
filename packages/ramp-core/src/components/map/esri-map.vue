<template>
    <div class="h-full"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import GapiLoader, { Map, GeoApi, RampMapConfig } from 'ramp-geoapi';

@Component
export default class EsriMap extends Vue {
    created(): void {
        const gapiPromise: Promise<GeoApi> = GapiLoader('https://js.arcgis.com/4.14', window);

        gapiPromise.then((gapi: GeoApi) => {
            const esriMapConfig: RampMapConfig = {
                extent: {
                    xmax: -5007771.626060756,
                    xmin: -16632697.354854,
                    ymax: 10015875.184845109,
                    ymin: 5022907.964742964,
                    spatialReference: {
                        wkid: 102100,
                        latestWkid: 3857
                    }
                },
                lods: gapi.maps.defaultLODs(gapi.maps.defaultTileSchemas()[1]), // idx 1 = mercator
                basemaps: [
                    {
                        id: 'esriImagery',
                        tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                        layers: [
                            {
                                layerType: 'esriTile',
                                url: 'http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ]
                    }
                ],
                initialBasemapId: 'esriImagery'
            };

            const map: Map = gapi.maps.createMap(esriMapConfig, this.$el as HTMLDivElement);
        });
    }
}
</script>

<style lang="scss" scoped></style>
