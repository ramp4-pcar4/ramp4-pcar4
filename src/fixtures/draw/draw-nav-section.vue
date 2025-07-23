<template>
    <div class="mapnav-section bg-white-75 hover:bg-white">
        <mapnav-button
            v-for="(tool, index) in filteredDrawingTools"
            :key="tool.type"
            @mousedown="mouseFocus"
            :onClickFunction="() => toggleTool(tool.type as ActiveToolList)"
            :tooltip="t(`draw.${tool.type}.tooltip`)"
            :class="{
                'active-tool': drawStore.activeTool === tool.type
            }"
            :style="{ marginBottom: index !== filteredDrawingTools.length - 1 ? '0px' : '0' }"
            :showOutline="showOutline"
        >
            <component :is="tool.icon" class="fill-current w-32 h-20"></component>
        </mapnav-button>
    </div>
</template>

<script setup lang="ts">
import { useDrawStore } from './store';
import type { ActiveToolList } from './store';
import { useI18n } from 'vue-i18n';
import { markRaw, defineAsyncComponent, computed, inject } from 'vue';
import { InstanceAPI } from '@/api/internal';

defineProps({
    showOutline: {
        type: Boolean,
        default: false
    }
});

const iApi = inject('iApi') as InstanceAPI;
const { t } = useI18n();
const drawStore = useDrawStore();

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
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
