<template>
    <div class="pointer-events-auto absolute top-0 right-0 mt-12 mr-12 w-180 h-180 border border-solid border-black overflow-hidden">
        <div class="overviewmap absolute h-full w-full"></div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { FixtureInstance } from '@/api';
import { RampMap, ApiBundle } from 'ramp-geoapi'
import { GlobalEvents } from '../../api/internal';
import { debounce } from 'debounce';

@Component({})
export default class OverviewmapV extends Vue {

    overviewMap!: RampMap;

    mounted() {
        let config = {
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
            basemaps: [
                {
                    id: 'esriTopo',
                    tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                    layers: [
                        {
                            layerType: 'esriTile',
                            url: 'http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                        }
                    ]
                }
            ],
            initialBasemapId: 'esriTopo'
        };
        const overviewEl = this.$el.querySelector('.overviewmap') as HTMLDivElement
        this.overviewMap = RAMP.geoapi.maps.createMap(config, overviewEl);
        this.overviewMap._innerView.ui.components = [];
        this.$iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, debounce(this.updateOverview, 300));
    }

    updateOverview(newExtent: ApiBundle.Extent) {
        const point = newExtent.center();
        const hRatio = this.$iApi.map.getPixelHeight() / this.overviewMap.getPixelHeight();
        const wRatio = this.$iApi.map.getPixelWidth() / this.overviewMap.getPixelWidth();
        const scaleRatio = Math.max(hRatio, wRatio);
        const scale = this.$iApi.map.getScale() * 2 * scaleRatio;
        console.log("new scale", scale)
        this.overviewMap.zoomMapTo(point, scale).then(() => {
        console.log("actual scale", this.overviewMap.getScale())
        });
    }
}
</script>

<style lang="scss" scoped></style>
