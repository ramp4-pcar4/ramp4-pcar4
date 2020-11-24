<template>
    <div>
        <div :style="{ visibility: minimized ? 'hidden' : 'visible' }" class="pointer-events-auto absolute top-0 right-0 mt-12 mr-12 w-180 h-180 shadow-tm overflow-hidden bg-gray-200">
            <!-- map -->
            <div class="overviewmap pointer-events-none absolute h-full w-full"></div>
            <!-- extent highlight -->
            <div class="extent absolute opacity-50 bg-blue-500" :style="extentStyle"></div>
        </div>
        <div v-if="minimized" class="pointer-events-auto absolute top-0 right-0 mt-12 mr-12 w-48 h-48 shadow-tm bg-gray-200"></div>
        <!-- overview toggle -->
        <div class="pointer-events-auto cursor-pointer absolute top-0 right-0 mt-12 mr-12 h-24 w-24 transition-all duration-300 ease-out" @click="minimized=!minimized" :style="{ transform: `rotate(${minimized ? 225 : 45}deg)` }">
            <svg xmlns="http://www.w3.org/2000/svg" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false"><g id="apple-keyboard-control"><path d="M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z "></path></g></svg>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { FixtureInstance } from '@/api';
import { RampMap, ApiBundle, RampMapConfig } from 'ramp-geoapi'
import { GlobalEvents } from '../../api/internal';
import { debounce } from 'debounce';

@Component({})
export default class OverviewmapV extends Vue {

    overviewMap!: RampMap;

    minimized = false;

    extentWidth = 0;
    extentHeight = 0;

    get extentStyle() {
        return {
            left: `calc(50% - ${this.extentWidth}px / 2)`,
            top: `calc(50% - ${this.extentHeight}px / 2)`,
            width: `${this.extentWidth}px`,
            height: `${this.extentHeight}px`
        }
    }

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

        this.overviewMap = RAMP.geoapi.maps.createMap(config, this.$el.querySelector('.overviewmap') as HTMLDivElement);
        this.overviewMap._innerView.ui.components = [];
        this.$iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, debounce(this.updateOverview, 300));
    }

    updateOverview(newExtent: ApiBundle.Extent) {
        const mapScale = this.$iApi.map.getScale();
        const mapHeight = this.$iApi.map.getPixelHeight();
        const mapWidth = this.$iApi.map.getPixelWidth()

        const hRatio = mapHeight / this.overviewMap.getPixelHeight();
        const wRatio = mapWidth / this.overviewMap.getPixelWidth();
        const overviewScale = mapScale * 2 * Math.max(hRatio, wRatio);
        const point = newExtent.center();
        this.overviewMap.zoomMapTo(point, overviewScale).then(() => {
            this.extentWidth = mapWidth / this.overviewMap.getScale() * mapScale;
            this.extentHeight = mapHeight / this.overviewMap.getScale() * mapScale;
        });
    }
}
</script>

<style lang="scss" scoped></style>
