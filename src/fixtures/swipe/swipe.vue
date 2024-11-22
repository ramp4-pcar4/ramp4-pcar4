<template>
    <div class="swipe-container">
        <div id="verticalLine" :style="{ left: linePosition, height: lineHeight, bottom: lineBottom }" ref="line"></div>
        <input
            v-model="sliderPosition"
            :id="'layerSlider'"
            type="range"
            ref="slider"
            min="0"
            aria-valuemin="0"
            aria-valuemax="90"
            :aria-valuenow="sliderPosition"
            max="90"
            step="0.5"
            :content="$t('map.layerSwipe.drag')"
            v-tippy="{ followCursor: true }"
        />
    </div>
</template>

<script setup lang="ts">
import { FixtureInstance } from '@/api';
import { computed, inject, onBeforeMount, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue';
import { usePanelStore } from '@/stores/panel';
import type { InstanceAPI } from '@/api';

const iApi = inject<InstanceAPI>('iApi');

const panelStore = usePanelStore();
const slider = useTemplateRef('slider');
const sliderPosition = ref<number>(50);
const clientHeight = ref<number>(0);
const refreshCounter = ref(0);

const linePosition = computed(() => {
    const thumbWidth = 30 + refreshCounter.value - refreshCounter.value;
    const sliderWidth = slider.value?.clientWidth ?? 0;
    const inputToPercentage = +sliderPosition.value / 90;
    const sliderOffset = (sliderWidth - thumbWidth) * inputToPercentage;
    const pos = (slider.value?.getBoundingClientRect().x ?? 0) + sliderOffset + (thumbWidth - 3) / 2;

    const event = new CustomEvent('MoveInput', { detail: pos });
    slider.value?.dispatchEvent(event);

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

onMounted(() => {
    slider.value!.style.background = 'inherit';
    window.addEventListener('resize', () => {
        clientHeight.value = iApi?.$rootEl?.clientHeight ?? clientHeight.value;
        refreshCounter.value++; // used to force update on window resize
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
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', () => {
        clientHeight.value = iApi?.$rootEl?.clientHeight ?? clientHeight.value;
        sliderPosition.value = +sliderPosition.value + 0.000000001; // forces linePosition to update
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

#layerSlider {
    height: 5px;
    width: 90%;
    -webkit-appearance: none;
    appearance: none;
}

#layerSlider::-webkit-slider-thumb {
    width: 30px;
    height: 25px;
    -webkit-appearance: none;
    appearance: none;
    background: black;
    cursor: col-resize;
}

#layerSlider::-moz-range-thumb {
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
