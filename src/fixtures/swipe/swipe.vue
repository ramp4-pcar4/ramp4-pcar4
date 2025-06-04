<template>
    <div class="swipe-container">
        <div class="verticalLine" :style="{ left: linePosition, height: lineHeight, bottom: lineBottom }"></div>
        <input
            v-model="sliderPosition"
            :id="'layerSlider' + iApi.$element._uid"
            class="layerSliderElement"
            type="range"
            ref="slider"
            min="0"
            aria-valuemin="0"
            aria-valuemax="90"
            :aria-valuenow="sliderPosition"
            :aria-label="$t('map.layerSwipe.label')"
            max="90"
            step="0.5"
            :content="$t('map.layerSwipe.drag')"
            v-tippy="{ followCursor: true, trigger: 'mouseenter' }"
            :style="{ 'z-index': 10 }"
        />
        <arcgis-swipe
            direction="horizontal"
            :swipe-position="swipeComponentPosition"
            :view="view"
            auto-destroy-disable
            ref="swipeComponent"
        ></arcgis-swipe>
    </div>
</template>

<script setup lang="ts">
import { FixtureInstance, GlobalEvents } from '@/api';
import { computed, inject, onBeforeMount, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue';
import { usePanelStore } from '@/stores/panel';
import type { InstanceAPI, LayerInstance } from '@/api';
import type { EsriMapView } from '@/geo/esri';
import type { BasemapChange } from '@/geo/api';

const iApi = inject<InstanceAPI>('iApi')!;

const panelStore = usePanelStore();
const slider = useTemplateRef('slider');
const sliderPosition = ref<number>(45);
const clientHeight = ref<number>(0);
const refreshCounter = ref(0);
const swipeComponentPosition = ref<number>(50);
const view = ref<EsriMapView>();
const swipeComponent = ref<HTMLArcgisSwipeElement | null | undefined>();

const linePosition = computed(() => {
    const thumbWidth = 30 + refreshCounter.value - refreshCounter.value;
    const sliderWidth = slider.value?.getBoundingClientRect()
        ? slider.value?.getBoundingClientRect().right - slider.value?.getBoundingClientRect().left
        : 0;
    const inputToPercentage = +sliderPosition.value / 90; // Percentage of the slider that the slider thumb has surpassed
    const sliderOffset = (sliderWidth - thumbWidth) * inputToPercentage; // Number of pixels within slider that slider thumb has surpassed
    const pos = (slider.value?.getBoundingClientRect().x ?? 0) + sliderOffset + (thumbWidth - 5.25) / 2; // Left position of the vertical line

    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    swipeComponentPosition.value = (pos / iApi.$rootEl.clientWidth) * 100 + 0.2;

    return `${pos}px`;
});

const lineHeight = computed(() => {
    return `${clientHeight.value}px`;
});

const lineBottom = computed(() => {
    return `${-clientHeight.value / 2 - 18}px`;
});

defineProps({
    fixture: {
        type: FixtureInstance,
        required: true
    },
    message: String
});

onBeforeMount(() => {
    clientHeight.value = iApi.$rootEl?.clientHeight ?? 1200;
});

const resizeHandler = () => {
    clientHeight.value = iApi.$rootEl?.clientHeight ?? clientHeight.value;
    refreshCounter.value++; // used to force update on window resize
    setTimeout(() => {
        refreshCounter.value++; // window minimizing/maximizing requires a second, delayed update
    }, 50);
};

const sliderFocus = () => {
    panelStore.setOpacity(0.1);
    slider.value!.style.background = '';
};

const sliderBlur = () => {
    panelStore.setOpacity(1);
    slider.value!.style.background = 'inherit';
};

onMounted(async () => {
    // Used to detect if device has touch capabilities and no mouse. If not, then we make the slider track invisible
    const isTouch = 'ontouchstart' in document.documentElement || !window.matchMedia('(pointer:fine)').matches;
    if (!isTouch) {
        slider.value!.style.background = 'inherit';
    }
    window.addEventListener('resize', resizeHandler);
    slider.value?.addEventListener('focus', sliderFocus);
    slider.value?.addEventListener('blur', sliderBlur);
    slider.value?.addEventListener('mouseover', sliderFocus);
    slider.value?.addEventListener('mouseleave', sliderBlur);
    slider.value?.addEventListener('touchstart', sliderFocus);
    slider.value?.addEventListener('touchend', sliderBlur);
    // TODO: make tooltip follow touch location

    setTimeout(() => {
        refreshCounter.value++;
    }, 50);

    await initializeSwipe();

    // Upon a basemap schema change, geo.map.esriView gets set to a new MapView, meaning that the one used by the
    // swipe component wouldn't exist. So, we must reinitialize the swipe component
    iApi.event.on(GlobalEvents.MAP_BASEMAPCHANGE, async (payload: BasemapChange) => {
        if (payload.schemaChanged) {
            // Remove all layers
            swipeComponent.value?.trailingLayers.forEach(layer => {
                swipeComponent.value?.trailingLayers.remove(layer);
            });
            swipeComponent.value?.leadingLayers.forEach(layer => {
                swipeComponent.value?.leadingLayers.remove(layer);
            });

            await initializeSwipe();
        }
    });

    // When a layer is reloaded, remove it and add it back to the swipe component. Note that timing
    // will not be considered. Layers will be re-added based on what reloads fastest
    iApi.event.on(GlobalEvents.LAYER_RELOAD_END, (reloadedLayer: LayerInstance) => {
        swipeComponent.value?.trailingLayers.forEach(layer => {
            if (layer.id === reloadedLayer.id) {
                swipeComponent.value?.trailingLayers.remove(layer);
                swipeComponent.value?.trailingLayers.add(reloadedLayer.esriLayer!);
            }
        });

        swipeComponent.value?.leadingLayers.forEach(layer => {
            if (layer.id === reloadedLayer.id) {
                swipeComponent.value?.leadingLayers.remove(layer);
                swipeComponent.value?.leadingLayers.add(reloadedLayer.esriLayer!);
            }
        });
    });

    // When a layer is removed, remove it from the swipe component
    iApi.event.on(GlobalEvents.LAYER_REMOVE, (removedLayer: LayerInstance) => {
        swipeComponent.value?.trailingLayers.forEach(layer => {
            if (layer.id === removedLayer.id) {
                swipeComponent.value?.trailingLayers.remove(layer);
            }
        });

        swipeComponent.value?.leadingLayers.forEach(layer => {
            if (layer.id === removedLayer.id) {
                swipeComponent.value?.leadingLayers.remove(layer);
            }
        });
    });
});

const initializeSwipe = async (): Promise<void> => {
    await iApi.geo.map.viewPromise;
    view.value = iApi.geo.map.esriView;

    const trailing = ['Nature', 'WFSLayer'];
    const leading = ['Water', 'GeoMet'];

    trailing.forEach(layerId => {
        iApi.geo.layer.awaitLayer(layerId, true).then((layerInstance: LayerInstance) => {
            if (layerInstance.esriLayer) {
                swipeComponent.value?.trailingLayers.add(layerInstance.esriLayer);
            } else {
                console.warn(`Invalid layer instance: ${layerId}`);
            }
        });
    });

    leading.forEach(layerId => {
        iApi.geo.layer.awaitLayer(layerId, true).then((layerInstance: LayerInstance) => {
            if (layerInstance.esriLayer) {
                swipeComponent.value?.leadingLayers.add(layerInstance.esriLayer);
            } else {
                console.warn(`Invalid layer instance: ${layerId}`);
            }
        });
    });
};

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler);
    slider.value?.removeEventListener('focus', () => sliderFocus);
    slider.value?.removeEventListener('blur', () => sliderBlur);
    slider.value?.removeEventListener('mouseover', sliderFocus);
    slider.value?.removeEventListener('mouseleave', sliderBlur);
    slider.value?.removeEventListener('touchstart', sliderFocus);
    slider.value?.removeEventListener('touchend', sliderBlur);
});
</script>

<style lang="scss" scoped>
.swipe-container {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 50%;
    z-index: 0;
}

.layerSliderElement {
    height: 5px;
    width: 90%;
    -webkit-appearance: none;
    appearance: none;
}

.layerSliderElement:focus {
    border: none;
    outline: none;
}

.layerSliderElement::-webkit-slider-thumb {
    width: 30px;
    height: 25px;
    -webkit-appearance: none;
    appearance: none;
    background: black;
    cursor: col-resize;
}

.layerSliderElement::-moz-range-thumb {
    width: 30px;
    height: 25px;
    -webkit-appearance: none;
    appearance: none;
    background: black;
    cursor: col-resize;
}

.verticalLine {
    display: flex;
    align-items: center;
    position: absolute;
    padding-right: 5px;
    z-index: -15;
    background-color: black;
}
</style>
