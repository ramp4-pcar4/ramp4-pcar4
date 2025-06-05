<template>
    <div
        :class="{ active: drawStore.activeTool || drawStore.activeTool == '' }"
        class="mapnav-section bg-white-75 hover:bg-white"
    >
        <mapnav-button
            v-for="tool in filteredDrawingTools"
            :key="tool.type"
            @mousedown="mouseFocus"
            :onClickFunction="() => toggleTool(tool.type as ActiveToolList)"
            :tooltip="t(`draw.${tool.type}.tooltip`)"
            :class="{ 'active-tool': drawStore.activeTool === tool.type }"
            ref="mapNavEl"
        >
            <component :is="tool.icon" class="fill-current w-32 h-20"></component>
        </mapnav-button>
    </div>
</template>

<script setup lang="ts">
import { useDrawStore } from './store';
import type { ActiveToolList } from './store';
import { useI18n } from 'vue-i18n';
import { markRaw, defineAsyncComponent, computed, inject, useTemplateRef } from 'vue';
import { InstanceAPI } from '@/api/internal';

const iApi = inject('iApi') as InstanceAPI;
const { t } = useI18n();
const drawStore = useDrawStore();

drawStore.mapNavEl = useTemplateRef<HTMLElement>('mapNavEl');

const drawingTools = [
    {
        type: 'point',
        icon: markRaw(defineAsyncComponent(() => import('./icons/point-icon.vue')))
    },
    {
        type: 'polyline',
        icon: markRaw(defineAsyncComponent(() => import('./icons/polyline-icon.vue')))
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

// only show tools listed in config
const filteredDrawingTools = computed(() => {
    const fTools = drawingTools.filter(tool => drawStore.supportedTypes.some(item => item.type === tool.type));
    fTools.push({
        type: 'edit',
        icon: markRaw(defineAsyncComponent(() => import('./icons/edit-icon.vue')))
    });
    return fTools;
});

const toggleTool = (toolType: ActiveToolList) => {
    // If the tool is already active, deactivate it
    if (drawStore.activeTool === toolType) {
        drawStore.setActiveTool(null);
    } else {
        // Activate the selected tool
        drawStore.setActiveTool(toolType);
    }
};

const mouseFocus = () => {
    // clicked on draw button, focus moves to map - don't want crosshairs
    iApi.geo.map.setMouseFocus();
};
</script>

<style lang="scss" scoped>
.active-tool {
    @apply ring-1 ring-indigo-500 bg-indigo-50;
}
div.active {
    @apply shadow-xl ring-1 ring-indigo-500;
}
</style>
