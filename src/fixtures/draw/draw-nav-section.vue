<template>
    <div
        v-if="filteredDrawingTools.length"
        :class="{
            active: drawStore.activeTool || drawStore.activeTool == '' || detailsButtonActive || settingsOpen
        }"
        class="mapnav-section bg-white-75 hover:bg-white"
    >
        <mapnav-button
            v-for="(tool, index) in filteredDrawingTools"
            :key="tool.type"
            @mousedown="mouseFocus"
            :onClickFunction="() => toggleTool(tool.type as ActiveToolList)"
            :tooltip="t(`draw.${tool.type}.tooltip`)"
            :ariaLabel="t(`draw.${tool.type}.tooltip`)"
            :ariaPressed="drawStore.activeTool === tool.type"
            :style="{ marginBottom: index !== filteredDrawingTools.length - 1 ? '0px' : '0' }"
            :showOutline="showOutline"
            :class="{ 'active-tool': drawStore.activeTool === tool.type }"
            ref="mapNavEl"
        >
            <component :is="tool.icon" class="fill-current w-32 h-20"></component>
        </mapnav-button>
        <mapnav-button
            :onClickFunction="toggleShapeDetailsPick"
            :tooltip="t('draw.details.tooltip')"
            :ariaLabel="t('draw.details.tooltip')"
            :ariaPressed="detailsButtonActive"
            :disabled="!hasShapes"
            :showOutline="showOutline"
            :class="{ 'active-tool': detailsButtonActive }"
        >
            <info-icon class="fill-current w-32 h-20"></info-icon>
        </mapnav-button>
        <mapnav-button
            :onClickFunction="toggleSettings"
            :tooltip="t('draw.settings.tooltip')"
            :ariaLabel="t('draw.settings.tooltip')"
            :ariaPressed="settingsOpen"
            :showOutline="showOutline"
            :class="{ 'active-tool': settingsOpen }"
        >
            <settings-icon class="fill-current w-32 h-20"></settings-icon>
        </mapnav-button>
    </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, inject, markRaw, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n';

import type { InstanceAPI } from '@/api/internal';
import { usePanelStore } from '@/stores/panel';

import InfoIcon from './icons/info-icon.vue';
import SettingsIcon from './icons/settings-icon.vue';
import { isPanelOpen, openDrawShapeDetailsPanel } from './panel-utils';
import type { DrawShapeDetailsTab } from './panel-utils';
import { DRAW_SETTINGS_PANEL_ID, DRAW_SHAPE_DETAILS_PANEL_ID } from './settings';
import { useDrawStore } from './store';
import type { ActiveToolList } from './store';

defineProps({
    showOutline: {
        type: Boolean,
        default: false
    }
});

const iApi = inject('iApi') as InstanceAPI;
const { t } = useI18n();
const drawStore = useDrawStore();
const panelStore = usePanelStore();

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
        type: 'rectangle',
        icon: markRaw(defineAsyncComponent(() => import('./icons/rectangle-icon.vue')))
    },
    {
        type: 'circle',
        icon: markRaw(defineAsyncComponent(() => import('./icons/circle-icon.vue')))
    }
];

// only show tools listed in config
const filteredDrawingTools = computed(() => {
    if (!drawStore.configParsed) {
        return [];
    }

    return drawingTools.filter(tool => drawStore.supportedTypes.some(item => item.type === tool.type));
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

const toggleShapeDetailsPick = () => {
    if (!hasShapes.value) {
        return;
    }

    const nextEnabled = !drawStore.shapeDetailsPickEnabled;
    drawStore.setShapeDetailsPickEnabled(nextEnabled);

    if (!nextEnabled) {
        if (detailsOpen.value) {
            iApi.panel.close(DRAW_SHAPE_DETAILS_PANEL_ID);
        }
        return;
    }

    drawStore.setActiveTool(null);
    drawStore.clearSelection();

    if (!panelStore.mobileView) {
        openShapeInspector('details');
    }
};

const settingsOpen = computed(() => isPanelOpen(panelStore, DRAW_SETTINGS_PANEL_ID));

const detailsOpen = computed(() => isPanelOpen(panelStore, DRAW_SHAPE_DETAILS_PANEL_ID));

const hasShapes = computed(() => drawStore.graphics.length > 0);
const detailsButtonActive = computed(() => hasShapes.value && drawStore.shapeDetailsPickEnabled);

const toggleSettings = () => {
    if (settingsOpen.value) {
        iApi.panel.close(DRAW_SETTINGS_PANEL_ID);
        return;
    }

    iApi.panel.open(DRAW_SETTINGS_PANEL_ID);
};

const openShapeInspector = (tab: Extract<DrawShapeDetailsTab, 'details' | 'edit'>) => {
    openDrawShapeDetailsPanel(iApi, tab, { focusExisting: true });
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
