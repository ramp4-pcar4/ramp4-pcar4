<template>
    <div class="swipe-container">
        <div id="verticalLine" :style="{ left: linePosition, height: lineHeight, top: lineTop }" ref="line"></div>
        <input
            v-model="sliderPosition"
            id="layerSlider"
            type="range"
            ref="slider"
            min="5"
            max="95"
            step="0.5"
            v-tippy="{ content: 'Drag and slide to move', followCursor: true }"
        />
    </div>
</template>

<script setup lang="ts">
import { FixtureInstance } from '@/api';
import { onBeforeMount, computed, onMounted, ref, useTemplateRef, onBeforeUnmount } from 'vue';
import { usePanelStore } from '@/stores/panel';

const panelStore = usePanelStore();
const slider = useTemplateRef('slider');
const sliderPosition = ref<number>(50);
const innerShellHeight = ref<number>(0);
const line = useTemplateRef('line');
const linePosition = computed(() => {
    const diff = +sliderPosition.value - 50;
    const position = 50 + 0.99 * diff;
    return `${position}%`;
});

const lineHeight = computed(() => {
    return `${innerShellHeight.value}px`;
});

const lineTop = computed(() => {
    return `${-innerShellHeight.value * 0.91}px`;
});

defineProps({
    fixture: {
        type: FixtureInstance,
        required: true
    },
    message: String
});

onBeforeMount(() => {
    const innerShell = document.querySelector('.inner-shell');
    innerShellHeight.value = innerShell?.clientHeight ?? 1000;
});

onMounted(() => {
    window.addEventListener('resize', () => {
        const innerShell = document.querySelector('.inner-shell');
        innerShellHeight.value = innerShell?.clientHeight ?? innerShellHeight.value;
    });
    slider.value?.addEventListener('focus', () => panelStore.setOpacity(0.1));
    slider.value?.addEventListener('blur', () => panelStore.setOpacity(1));
    slider.value?.addEventListener('mouseover', () => panelStore.setOpacity(0.1));
    slider.value?.addEventListener('mouseleave', () => panelStore.setOpacity(1));
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', () => {
        const innerShell = document.querySelector('.inner-shell');
        innerShellHeight.value = innerShell?.clientHeight ?? innerShellHeight.value;
    });
    slider.value?.removeEventListener('focus', () => panelStore.setOpacity(0.1));
    slider.value?.removeEventListener('blur', () => panelStore.setOpacity(1));
    slider.value?.removeEventListener('mouseover', () => panelStore.setOpacity(0.1));
    slider.value?.removeEventListener('mouseleave', () => panelStore.setOpacity(1));
});
</script>

<style lang="scss" scoped>
.swipe-container {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 5%;
    padding-top: 20px;
    padding-bottom: 20px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 5%, #4caf50 5%, #4caf50 95%, rgba(0, 0, 0, 0) 95%);
    z-index: 0;
}

#layerSlider {
    height: 5px;
    width: 90%;
    opacity: 0.7;
    -webkit-appearance: none;
    appearance: none;
    //background: inherit;
}

#layerSlider:hover {
    opacity: 1;
}

#layerSlider::-webkit-slider-thumb {
    width: 25px;
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
