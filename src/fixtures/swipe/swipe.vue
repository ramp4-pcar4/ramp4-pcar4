<template>
    <div class="swipe-container">
        <div id="verticalLine" :style="{ left: linePosition, height: lineHeight, bottom: lineBottom }"></div>
        <input
            v-model="sliderPosition"
            :id="'layerSlider' + iApi?.$element._uid"
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
            v-tippy="{ followCursor: true }"
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
import type MapView from '@arcgis/core/views/MapView';
import type { BasemapChange } from '@/geo/api';

const iApi = inject<InstanceAPI>('iApi');

const panelStore = usePanelStore();
const slider = useTemplateRef('slider');
const sliderPosition = ref<number>(45);
const clientHeight = ref<number>(0);
const refreshCounter = ref(0);
const swipeComponentPosition = ref<number>(50);
const view = ref<MapView>();
const swipeComponent = ref<HTMLArcgisSwipeElement | null | undefined>();

const linePosition = computed(() => {
    const thumbWidth = 30 + refreshCounter.value - refreshCounter.value;
    const sliderWidth = slider.value?.clientWidth ?? 0;
    const inputToPercentage = +sliderPosition.value / 90; // Percentage of slider that slider thumb has surpassed
    const sliderOffset = (sliderWidth - thumbWidth) * inputToPercentage; // Number of pixels in slider that slider thumb has surpassed
    const pos = (slider.value?.getBoundingClientRect().x ?? 0) + sliderOffset + (thumbWidth - 4) / 2;

    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    if (iApi) swipeComponentPosition.value = (pos / iApi.$rootEl.clientWidth) * 100;

    return `${pos}px`;
});

const lineHeight = computed(() => {
    return `${clientHeight.value}px`;
});

const lineBottom = computed(() => {
    return `${-clientHeight.value / 2 - 16}px`;
});

defineProps({
    fixture: {
        type: FixtureInstance,
        required: true
    },
    message: String
});

onBeforeMount(() => {
    clientHeight.value = iApi?.$rootEl?.clientHeight ?? 1200;
});

onMounted(async () => {
    // Used to detect if device has touch capabilities and no mouse. If not, then we make the slider track invisible
    const isTouch = 'ontouchstart' in document.documentElement || !window.matchMedia('(pointer:fine)').matches;
    if (!isTouch) {
        slider.value!.style.background = 'inherit';
    }
    window.addEventListener('resize', () => {
        clientHeight.value = iApi?.$rootEl?.clientHeight ?? clientHeight.value;
        refreshCounter.value++; // used to force update on window resize
        setTimeout(() => {
            refreshCounter.value++; // window minimizing/maximizing requires a second, delayed update
        }, 50);
    });
    slider.value?.addEventListener('focus', () => panelStore.setOpacity(0.1));
    slider.value?.addEventListener('blur', () => panelStore.setOpacity(1));
    slider.value?.addEventListener('mouseover', () => {
        panelStore.setOpacity(0.1);
        slider.value!.style.background = '';
    });
    slider.value?.addEventListener('mouseleave', () => {
        panelStore.setOpacity(1);
        slider.value!.style.background = 'inherit';
    });
    slider.value?.addEventListener('touchstart', () => {
        panelStore.setOpacity(0.1);
        slider.value!.style.background = '';
    });
    slider.value?.addEventListener('touchend', () => {
        panelStore.setOpacity(1);
        slider.value!.style.background = '';
    });
    // TODO: make tooltip follow touch location

    setTimeout(() => {
        refreshCounter.value++;
    }, 50);

    await initializeSwipe();

    // Upon a basemap schema change, geo.map.esriView gets set to a new MapView, meaning that the one used by the
    // swipe component wouldn't exist. So, we must reinitialize the swipe component
    iApi?.event.on(GlobalEvents.MAP_BASEMAPCHANGE, async (payload: BasemapChange) => {
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
    iApi?.event.on(GlobalEvents.LAYER_RELOAD_END, (reloadedLayer: LayerInstance) => {
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
    iApi?.event.on(GlobalEvents.LAYER_REMOVE, (removedLayer: LayerInstance) => {
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
    await iApi?.geo.map.viewPromise;
    view.value = iApi?.geo.map.esriView;

    const trailing = ['Nature', 'WFSLayer'];
    const leading = ['Water', 'GeoMet'];

    trailing.forEach(layerId => {
        iApi?.geo.layer.awaitLayer(layerId, true).then((layerInstance: LayerInstance) => {
            if (layerInstance.esriLayer) {
                swipeComponent.value?.trailingLayers.add(layerInstance.esriLayer);
            } else {
                console.warn(`Invalid layer instance: ${layerId}`);
            }
        });
    });

    leading.forEach(layerId => {
        iApi?.geo.layer.awaitLayer(layerId, true).then((layerInstance: LayerInstance) => {
            if (layerInstance.esriLayer) {
                swipeComponent.value?.leadingLayers.add(layerInstance.esriLayer);
            } else {
                console.warn(`Invalid layer instance: ${layerId}`);
            }
        });
    });
};

onBeforeUnmount(() => {
    window.removeEventListener('resize', () => {
        clientHeight.value = iApi?.$rootEl?.clientHeight ?? clientHeight.value;
        refreshCounter.value++; // used to force update on window resize
        setTimeout(() => {
            refreshCounter.value++; // window minimizing/maximizing requires a second, delayed update
        }, 50);
    });
    slider.value?.removeEventListener('focus', () => panelStore.setOpacity(0.1));
    slider.value?.removeEventListener('blur', () => panelStore.setOpacity(1));
    slider.value?.removeEventListener('mouseover', () => {
        panelStore.setOpacity(0.1);
        slider.value!.style.background = '';
    });
    slider.value?.removeEventListener('mouseleave', () => {
        panelStore.setOpacity(1);
        slider.value!.style.background = 'inherit';
    });
    slider.value?.removeEventListener('touchstart', () => {
        panelStore.setOpacity(0.1);
        slider.value!.style.background = '';
    });
    slider.value?.removeEventListener('touchend', () => {
        panelStore.setOpacity(1);
        slider.value!.style.background = '';
    });
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

#verticalLine {
    display: flex;
    align-items: center;
    position: absolute;
    padding-right: 5px;
    z-index: -15;
    background: linear-gradient(#000, #000) no-repeat center/4px 100%;
}
</style>
