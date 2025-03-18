<template>
    <div class="mapnav-section bg-white-75 hover:bg-white">
        <mapnav-button
            v-for="tool in drawingTools"
            :key="tool.type"
            :onClickFunction="() => toggleTool(tool.type)"
            :tooltip="t(`draw.${tool.type}.tooltip`)"
            :class="{ 'active-tool': drawStore.activeTool === tool.type }"
        >
            <component :is="tool.icon" class="fill-current w-32 h-20"></component>
        </mapnav-button>
    </div>
</template>

<script setup lang="ts">
import { useDrawStore } from './store';
import { useI18n } from 'vue-i18n';
import { markRaw, defineAsyncComponent } from 'vue';

const { t } = useI18n();
const drawStore = useDrawStore();

const drawingTools = [
    {
        type: 'point',
        icon: markRaw(defineAsyncComponent(() => import('./icons/point-icon.vue')))
    },
    {
        type: 'polyline',
        icon: markRaw(defineAsyncComponent(() => import('./icons/line-icon.vue')))
    },
    {
        type: 'polygon',
        icon: markRaw(defineAsyncComponent(() => import('./icons/polygon-icon.vue')))
    },
    {
        type: 'circle',
        icon: markRaw(defineAsyncComponent(() => import('./icons/circle-icon.vue')))
    },
    {
        type: 'rectangle',
        icon: markRaw(defineAsyncComponent(() => import('./icons/rectangle-icon.vue')))
    }
];

const toggleTool = (toolType: string) => {
    // If the tool is already active, deactivate it
    if (drawStore.activeTool === toolType) {
        drawStore.setActiveTool('');
    } else {
        // Activate the selected tool
        drawStore.setActiveTool(toolType);
    }
};
</script>

<style lang="scss" scoped>
.active-tool {
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
