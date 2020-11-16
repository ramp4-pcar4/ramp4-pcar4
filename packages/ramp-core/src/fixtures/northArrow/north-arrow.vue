<template>
    <div class="absolute transition-all duration-300 ease-out" :style="arrowStyle">
        <span class="north-arrow" v-html="arrow"></span>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { NorthArrowStore } from './store';
import { GlobalEvents } from '../../api/internal';
import { ApiBundle, HighlightLayer } from 'ramp-geoapi';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';
import flag from './flag.json';
import { debounce } from 'debounce';

@Component({})
export default class NorthArrowV extends Vue {
    @Get(NorthArrowStore.arrowIcon) arrowIcon!: string;
    @Get(NorthArrowStore.poleIcon) poleIcon!: string;

    angle: number = 0;
    arrowLeft: number = 0;
    displayArrow: boolean = false;
    arrow: string = `<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
            <g id="northarrow" transform="translate(-285.24 -142.234)">
                <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
            </g>
        </svg>`;
    poleMarkerAdded: boolean = false;

    mounted() {
        if (this.arrowIcon) {
            this.arrow = `<img width='25' src='${this.arrowIcon}'>`;
        }
        // don't think this condition should be needed but sometimes errors at startup without it 
        if (this.$iApi.map._innerView.ready) {
            this.updateNorthArrow(this.$iApi.map.getExtent())
        }
        this.$iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, debounce(this.updateNorthArrow, 300));
    }

    async updateNorthArrow(newExtent: ApiBundle.Extent) {
        const innerShell = document.querySelector('.inner-shell')!;
        const arrowWidth = document.querySelector('.north-arrow')!.getBoundingClientRect().width;
        const appbarWidth = document.querySelector('.appbar')?.clientWidth || 0;
        const sr = newExtent.sr;
        const mercator = [900913, 3587, 54004, 41001, 102113, 102100, 3785];
        if (mercator.includes(sr.wkid) || mercator.includes(sr.latestWkid)) {
            // mercator projection, always in center of viewer with no rotation 
            this.displayArrow = true;
            this.angle = 0;
            this.arrowLeft = appbarWidth + (innerShell.clientWidth - appbarWidth - arrowWidth) / 2;
        } else {
            // north value (set longitude to be half of Canada extent (141° W, 52° W))
            const pole: ApiBundle.Point = new ApiBundle.Point("pole", { x: -96, y: 90 });   
            const projPole = await RAMP.geoapi.utils.proj.projectGeometry(sr, pole) as ApiBundle.Point;
            const poleScreenPos = this.$iApi.map.mapPointToScreenPoint(projPole);
            if (poleScreenPos.y < 0) {
                // draw arrow if pole not visibile
                this.displayArrow = true;
                // get angle from bottom centre 
                const bottomCentre = new ApiBundle.Point("point", { x: newExtent.center().x, y: newExtent.ymin }, sr);
                const bc = await RAMP.geoapi.utils.proj.projectGeometry("EPSG:4326", bottomCentre) as ApiBundle.Point;
                // set info on longitude and latitude
                const dLon = (bc.x - pole.x) * Math.PI / 180;
                const lat1 = pole.y * Math.PI / 180;
                const lat2 = bc.y * Math.PI / 180;
                // calculate bearing
                const y = Math.sin(dLon) * Math.cos(lat2);
                const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
                const bearing = Math.atan2(y, x) * 180 / Math.PI;
                // calculate style
                this.angle = (bearing + 360) % 360 - 180;
                this.arrowLeft = poleScreenPos.x - innerShell.clientLeft + ((poleScreenPos.y - innerShell.clientTop) * Math.tan(this.angle * Math.PI / 180) - arrowWidth / 2);
                // make sure arrow is within visible part of map
                this.arrowLeft = Math.max(appbarWidth - arrowWidth / 2, Math.min(this.$iApi.map.getPixelWidth() - arrowWidth / 2, this.arrowLeft))
            } else {
                // add pole marker if visible
                this.displayArrow = false;
                if (!this.poleMarkerAdded) {
                    this.poleMarkerAdded = true;
                    let markerSymbol: any = flag;
                    if (this.poleIcon) {
                        // convert data uri to esri symbol json
                        const [, contentType, , imageData] = this.poleIcon.split(/[:;,]/);
                        markerSymbol = {
                            width: 16.5,
                            height: 16.5,
                            type: "esriPMS",
                            contentType: contentType,
                            imageData: imageData
                        } 
                    }
                    // add pole marker to a highlight layer
                    const esriP = RAMP.geoapi.utils.geom.convPointToEsri(projPole);
                    const poleLayer = RAMP.geoapi.layers.createHighlightLayer({ layerId: "PoleMarker", markerSymbol: markerSymbol });
                    poleLayer.addMarker(esriP)
                    this.$iApi.map.addHighlightLayer(poleLayer);
                }
            }
        }
    }

    get arrowStyle() {
        return { 
            'transform-origin': `top center`,
            transform: `rotate(${this.angle}deg)`, 
            left: `${this.arrowLeft}px`,  
            visibility: this.displayArrow ? `visible` : `hidden`
        }
    }
}

</script>

<style lang="scss" scoped></style>

