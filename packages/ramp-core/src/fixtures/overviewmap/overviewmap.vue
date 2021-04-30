<template>
    <div class="relative">
        <div :style="mapStyle" class="pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm border-4 border-solid border-white bg-white transition-all duration-300 ease-out">
            <!-- map -->
            <div class="overviewmap pointer-events-none h-full w-full"></div>
            <!-- toggle -->
            <div class="absolute h-30 w-30 top-0 right-0">
                <button tabindex="0" class="cursor-pointer absolute h-full w-full" @click="minimized=!minimized">
                    <svg class="absolute  fill-current text-gray-500 transition-all duration-300 ease-out" :style="toggleStyle" xmlns="http://www.w3.org/2000/svg" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                        <g id="apple-keyboard-control">
                            <path d="M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z "></path>
                        </g>
                    </svg>
                </button>
                <tooltip position="left">{{ $t(minimized ? 'overviewmap.expand' : 'overviewmap.minimize') }}</tooltip>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { Extent, Graphic, RampMapConfig } from '@/geo/api';
import { EsriGraphic } from '@/geo/esri'; // TODO bad bad bad! convert to graphic layer or something and avoid this.
import { ConfigStore } from '@/store/modules/config';
import { GlobalEvents } from '../../api/internal';
import { OverviewmapStore } from './store';
import defaultConfig from './default-config';
import { debounce } from 'debounce';

// TODO this file was ignored through most of the dojo removal migration and no longer works.
//      the MapAPI is now too tightly bundled with the API, global events, and other stuff,
//      so we just can't spin off another instance for the overview map (e.g. if we did, extent
//      changes in the overview would start triggering false filter events, etc).
//      Need to build up something else, I'm thinking a custom overview map class that
//      wraps the esri stuff and exposes what we need.
//      It should also wrap all the esri code that is currently hardcoded here.

@Component({})
export default class OverviewmapV extends Vue {
    @Get(OverviewmapStore.mapConfig) mapConfig!: RampMapConfig;
    @Get(OverviewmapStore.startMinimized) startMinimized!: boolean;

    overviewMap!: any; // RampMap; // TODO update after fix
    minimized: boolean = true;

    mounted() {

        /*
        let config = this.mapConfig || defaultConfig;
        this.overviewMap = this.$iApi.geo.maps.createMap(config, this.$el.querySelector('.overviewmap') as HTMLDivElement);
        this.overviewMap.esriView.ui.components = [];
        this.minimized = this.startMinimized;

        // TODO update extent highlighting code to use ramp graphics once GraphicsLayer is implemented
        let symbol = {
            type: "simple-fill",
            color: [0, 0, 0, 0.5],
            outline: null
        };
        let g = new EsriGraphic({ symbol: symbol, visible: true }); // BAD!
        this.overviewMap.esriView.graphics.add(g)

        if (this.$iApi.map.esriView.ready) {
            this.updateOverview(this.$iApi.geo.map.getExtent());
        }
        this.$iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, debounce(this.updateOverview, 300));
        */
    }

    updateOverview(newExtent: Extent) {
        const map = this.$iApi.geo.map;
        const hRatio = map.getPixelHeight() / 200;
        const wRatio = map.getPixelWidth() / 200;
        const overviewScale = map.getScale() * 1.5 * Math.max(hRatio, wRatio);
        this.overviewMap.zoomMapTo(newExtent.center(), overviewScale);

        // this draws the outline of the main map extent.
        // TODO figure out a way to accomplish without using esri internals
        this.overviewMap.esriView.graphics.getItemAt(0).geometry = map.esriView?.extent;
    }

    get mapStyle() {
        return {
            height: `${this.minimized ? 48 : 200}px`,
            width: `${this.minimized ? 48 : 200}px`
        }
    }

    get toggleStyle() {
        return {
            top: `${this.minimized ? -6 : -3}px`,
            right: `${this.minimized ? -6 : -3}px`,
            transform: `rotate(${this.minimized ? 225 : 45}deg)`
        }
    }
}
</script>

<style lang="scss" scoped>
.overviewmap::before {
    @apply absolute w-0 h-0 top-0 right-0 border-solid;
    border-width: 0 40px 40px 0;
    border-color: transparent #eee transparent transparent;
    content: "";
}
</style>
