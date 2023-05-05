<template>
    <div
        class="absolute transition-all duration-300 ease-out"
        :style="{
            'transform-origin': `top center`,
            transform: `rotate(${angle}deg)`,
            left: `${arrowLeft}px`,
            visibility: displayArrow ? `visible` : `hidden`
        }"
        ref="el"
    >
        <span class="northarrow" v-html="arrow"></span>
    </div>
</template>

<script setup lang="ts">
import {
    computed,
    inject,
    onBeforeUnmount,
    onMounted,
    reactive,
    ref
} from 'vue';

import { useNortharrowStore } from './store';
import { GlobalEvents, CommonGraphicLayer, InstanceAPI } from '@/api/internal';
import {
    Graphic,
    Extent,
    LayerType,
    Point,
    type PointIconStyleOptions,
    type PointMarkerStyleOptions,
    PointStyle,
    PointStyleType
} from '@/geo/api';
import flag from './flag.json';
import { debounce } from 'throttle-debounce';
import { POLE_MARKER_LAYER_ID } from '.'; // imports from index.ts

const northarrowStore = useNortharrowStore();
const iApi = inject('iApi') as InstanceAPI;
const el = ref();

const arrowIcon = computed(() => northarrowStore.arrowIcon);
const poleIcon = computed(() => northarrowStore.poleIcon);
const angle = ref(0);
const arrowLeft = ref(0);
const displayArrow = ref(false);
const arrow =
    ref(`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`);
const poleMarkerAdded = ref(false);
const handlers = reactive<Array<string>>([]);

onMounted(() => {
    if (arrowIcon?.value) {
        arrow.value = `<img width='25' src='${arrowIcon.value}'>`;
    }
    // don't think this condition should be needed but sometimes errors at startup without it
    // TODO could this type of thing be moved to the `initialized()` handler of the FixtureInstance, once implemented?
    if (iApi.geo.map.esriView?.ready) {
        updateNortharrow(iApi.geo.map.getExtent());
    }

    handlers.push(
        iApi.event.on(
            GlobalEvents.MAP_EXTENTCHANGE,
            debounce(300, updateNortharrow)
        )
    );
});

onBeforeUnmount(() => {
    handlers.forEach(h => iApi.event.off(h));
});

const updateNortharrow = async (newExtent: Extent) => {
    const innerShell = document.querySelector('.inner-shell')!;
    const arrowWidth = el.value
        .querySelector('.northarrow')!
        .getBoundingClientRect().width;
    const appbarWidth = document.querySelector('.appbar')?.clientWidth || 0;
    const sr = newExtent.sr;

    if (sr.isWebMercator()) {
        // mercator projection, always in center of viewer with no rotation
        displayArrow.value = true;
        angle.value = 0;
        arrowLeft.value =
            appbarWidth +
            (innerShell.clientWidth - appbarWidth - arrowWidth) / 2;
    } else {
        // north value (set longitude to be half of Canada extent (141° W, 52° W))
        const pole: Point = new Point('pole', { x: -96, y: 90 });
        const projPole = (await iApi.geo.proj.projectGeometry(
            sr,
            pole
        )) as Point;
        const poleScreenPos = iApi.geo.map.mapPointToScreenPoint(projPole);
        if (poleScreenPos.screenY < 0) {
            // draw arrow if pole not visibile
            displayArrow.value = true;
            // get angle from bottom centre
            const bcScreenPos = {
                screenX: innerShell.clientWidth / 2,
                screenY: innerShell.clientHeight
            };
            angle.value =
                (Math.atan(
                    (poleScreenPos.screenX - bcScreenPos.screenX) /
                        (bcScreenPos.screenY - poleScreenPos.screenY)
                ) *
                    180) /
                Math.PI;
            arrowLeft.value =
                innerShell.clientWidth / 2 +
                innerShell.clientHeight *
                    Math.tan((angle.value * Math.PI) / 180) -
                arrowWidth / 2;
            // make sure arrow is within visible part of map
            arrowLeft.value = Math.max(
                appbarWidth - arrowWidth / 2,
                Math.min(
                    iApi.geo.map.getPixelWidth() - arrowWidth / 2,
                    arrowLeft.value
                )
            );
        } else {
            // add pole marker if visible
            displayArrow.value = false;
            if (!poleMarkerAdded.value) {
                poleMarkerAdded.value = true;

                let poleStyleParams;
                if (poleIcon.value) {
                    // fixture config has provided a custom image.
                    // TODO do we need to parameterize the additonal options? offsets? height?
                    //      we would need to expand what our config schema accepts. Right now
                    //      you can only specify an icon image. Maybe we should allow the option
                    //      to pass any Option param object that a PointStyle class can accept.
                    poleStyleParams = {
                        style: PointStyleType.ICON,
                        icon: poleIcon.value,
                        height: 16.5,
                        width: 16.5
                    };
                } else {
                    // grab data from our default in flag.json
                    poleStyleParams = flag;
                }

                const poleLayer = iApi.geo.layer.createLayer({
                    id: POLE_MARKER_LAYER_ID,
                    layerType: LayerType.GRAPHIC,
                    url: '',
                    cosmetic: true // mark this layer as a cosmetic layer
                });
                iApi.geo.map.addLayer(poleLayer);

                const poleGraphic = new Graphic(projPole, 'northpole');
                const poleStyle = new PointStyle(
                    poleStyleParams as
                        | PointIconStyleOptions
                        | PointMarkerStyleOptions
                );
                poleGraphic.style = poleStyle;

                (poleLayer as CommonGraphicLayer).addGraphic(poleGraphic);
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
