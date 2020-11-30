<template>
    <div class="relative">
        <div :style="mapStyle" class="pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm overflow-hidden border-4 border-solid border-white bg-white transition-all duration-300 ease-out">
            <!-- map -->
            <div class="overviewmap pointer-events-none h-full w-full"></div>
            <!-- toggle -->
            <div class="cursor-pointer fill-current text-gray-500 absolute h-30 w-30 transition-all duration-300 ease-out z-10" @click="minimized=!minimized" :style="toggleStyle">
                <svg xmlns="http://www.w3.org/2000/svg" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false"><g id="apple-keyboard-control"><path d="M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z "></path></g></svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { RampMap, ApiBundle, RampMapConfig } from 'ramp-geoapi'
import { ConfigStore } from '@/store/modules/config';
import { GlobalEvents } from '../../api/internal';
import { OverviewmapStore } from './store';
import defaultConfig from './default-config';
import { debounce } from 'debounce';

@Component({})
export default class OverviewmapV extends Vue {
    @Get(OverviewmapStore.mapConfig) mapConfig!: RampMapConfig;

    overviewMap!: RampMap;
    minimized: boolean = false;

    mounted() {
        let config = this.mapConfig || defaultConfig;
        this.overviewMap = RAMP.geoapi.maps.createMap(config, this.$el.querySelector('.overviewmap') as HTMLDivElement);
        this.overviewMap._innerView.ui.components = [];

        // TODO update extent highlighting code to use ramp graphics once GraphicsLayer is implemented
        let symbol = {
            type: "simple-fill",
            color: [0, 0, 0, 0.5],
            outline: null
        };
        let g = new RAMP.geoapi.esriBundle.Graphic({ symbol: symbol, visible: true })
        this.overviewMap._innerView.graphics.add(g)

        if (this.$iApi.map._innerView.ready) {
            this.updateOverview(this.$iApi.map.getExtent());
        }
        this.$iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, debounce(this.updateOverview, 300));
    }

    updateOverview(newExtent: ApiBundle.Extent) {
        const hRatio = this.$iApi.map.getPixelHeight() / 200;
        const wRatio = this.$iApi.map.getPixelWidth() / 200;
        const overviewScale = this.$iApi.map.getScale() * 1.5 * Math.max(hRatio, wRatio);
        this.overviewMap.zoomMapTo(newExtent.center(), overviewScale);
        this.overviewMap._innerView.graphics.getItemAt(0).geometry = this.$iApi.map._innerView.extent;
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
    @apply absolute w-0 h-0 top-0 right-0 border-solid z-10;
    border-width: 0 40px 40px 0;
    border-color: transparent #eee transparent transparent;
    content: "";
}
</style>
