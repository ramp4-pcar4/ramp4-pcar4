<template>
    <div class="absolute transition-all duration-300 ease-out" :style="getArrowStyle()">
        <span class="northarrow" v-html="arrow"></span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { get } from '@/store/pathify-helper';
import { NortharrowStore } from './store';
import { GlobalEvents } from '@/api/internal';
import { Extent, Point } from '@/geo/api';
import flag from './flag.json';
import { debounce } from 'throttle-debounce';

export default defineComponent({
    name: 'NortharrowV',
    data() {
        return {
            arrowIcon: get(NortharrowStore.arrowIcon),
            poleIcon: get(NortharrowStore.poleIcon),
            angle: 0,
            arrowLeft: 0,
            displayArrow: false,
            arrow: `<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`,
            poleMarkerAdded: false
        };
    },

    mounted() {
        if (this.arrowIcon.value) {
            this.arrow = `<img width='25' src='${this.arrowIcon.value}'>`;
        }
        // don't think this condition should be needed but sometimes errors at startup without it
        if (this.$iApi.geo.map.esriView?.ready) {
            this.updateNortharrow(this.$iApi.geo.map.getExtent());
        }
        this.$iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, debounce(300, this.updateNortharrow));
    },

    methods: {
        async updateNortharrow(newExtent: Extent) {
            const innerShell = document.querySelector('.inner-shell')!;
            const arrowWidth = this.$el.querySelector('.northarrow')!.getBoundingClientRect().width;
            const appbarWidth = document.querySelector('.appbar')?.clientWidth || 0;
            const sr = newExtent.sr;
            const mercator = [900913, 3587, 54004, 41001, 102113, 102100, 3785];
            if (
                (sr.wkid && mercator.includes(sr.wkid)) ||
                (sr.latestWkid && mercator.includes(sr.latestWkid))
            ) {
                // mercator projection, always in center of viewer with no rotation
                this.displayArrow = true;
                this.angle = 0;
                this.arrowLeft =
                    appbarWidth + (innerShell.clientWidth - appbarWidth - arrowWidth) / 2;
            } else {
                // north value (set longitude to be half of Canada extent (141° W, 52° W))
                const pole: Point = new Point('pole', { x: -96, y: 90 });
                const projPole = (await this.$iApi.geo.utils.proj.projectGeometry(
                    sr,
                    pole
                )) as Point;
                const poleScreenPos = this.$iApi.geo.map.mapPointToScreenPoint(projPole);
                if (poleScreenPos.screenY < 0) {
                    // draw arrow if pole not visibile
                    this.displayArrow = true;
                    // get angle from bottom centre
                    const bcScreenPos = {
                        screenX: innerShell.clientWidth / 2,
                        screenY: innerShell.clientHeight
                    };
                    this.angle =
                        (Math.atan(
                            (poleScreenPos.screenX - bcScreenPos.screenX) /
                                (bcScreenPos.screenY - poleScreenPos.screenY)
                        ) *
                            180) /
                        Math.PI;
                    this.arrowLeft =
                        innerShell.clientWidth / 2 +
                        innerShell.clientHeight * Math.tan((this.angle * Math.PI) / 180) -
                        arrowWidth / 2;
                    // make sure arrow is within visible part of map
                    this.arrowLeft = Math.max(
                        appbarWidth - arrowWidth / 2,
                        Math.min(
                            this.$iApi.geo.map.getPixelWidth() - arrowWidth / 2,
                            this.arrowLeft
                        )
                    );
                } else {
                    // add pole marker if visible
                    this.displayArrow = false;
                    if (!this.poleMarkerAdded) {
                        this.poleMarkerAdded = true;
                        // TODO update to use RAMP API Styles once Highlight Layer implements an api that accepts RAMP Graphics. Get rid of all ESRI stuff when that happens
                        let markerSymbol: any = flag;
                        if (this.poleIcon.value) {
                            // convert data uri to esri symbol json
                            const [, contentType, , imageData] = this.poleIcon.value.split(/[:;,]/);
                            markerSymbol = {
                                width: 16.5,
                                height: 16.5,
                                type: 'esriPMS',
                                contentType: contentType,
                                imageData: imageData
                            };
                        }
                        // add pole marker to a highlight layer
                        // TODO the whole highlight layer needs to be revisited after the no-dojo migration.
                        //      it is currently acting like a normal layer. since highlights do not go into the
                        //      layer config / config store / etc, we are duplicating a lot of normal layer loading
                        //      here. hack city for now.

                        // check if we need to load the layer class
                        const lType = 'highlight';
                        if (!this.$iApi.geo.layer.layerDefExists(lType)) {
                            await this.$iApi.geo.layer.addLayerDef(lType);
                        }
                        const poleLayer = await this.$iApi.geo.layer.createLayer({
                            layerId: 'PoleMarker',
                            markerSymbol: markerSymbol,
                            layerType: 'highlight'
                        });
                        await poleLayer.initiate();
                        (poleLayer as any).addMarker(projPole); // since addMarker is not a standard layer interface function, we need to cast as any.
                        this.$iApi.geo.map.addLayer(poleLayer);
                    }
                }
            }
        },

        getArrowStyle() {
            return {
                'transform-origin': `top center`,
                transform: `rotate(${this.angle}deg)`,
                left: `${this.arrowLeft}px`,
                visibility: this.displayArrow ? `visible` : `hidden`
            };
        }
    }
});
</script>

<style lang="scss"></style>
