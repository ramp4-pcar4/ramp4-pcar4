<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('draw.defaults.title') }}
        </template>

        <template #content>
            <div class="rv-settings-shell flex flex-col">
                <div class="rv-settings-body">
                    <p class="rv-help-text">
                        {{ t('draw.defaults.helper') }}
                    </p>

                    <span class="rv-subheader">{{ t('draw.settings.appearance') }}</span>
                    <div class="rv-settings-divider"></div>

                    <div class="rv-subsection flex flex-col gap-12">
                        <draw-color-control
                            :label="t('draw.defaults.color.shape')"
                            :color="drawStore.styleSettings.fillColor"
                            control-id="draw-default-fill-color"
                            @update:color="drawStore.setFillColor"
                        />

                        <draw-color-control
                            :label="t('draw.defaults.color.border')"
                            :color="drawStore.styleSettings.borderColor"
                            control-id="draw-default-border-color"
                            @update:color="drawStore.setBorderColor"
                        />

                        <draw-color-control
                            :label="t('draw.defaults.color.buffer')"
                            :color="drawStore.styleSettings.bufferColor"
                            control-id="draw-default-buffer-color"
                            @update:color="drawStore.setBufferColor"
                        />
                    </div>

                    <div class="rv-settings-divider"></div>

                    <div class="rv-subsection">
                        <div class="rv-label">
                            <div v-html="svgIcons.opacity" class="p-8 pl-0"></div>
                            {{ t('draw.defaults.opacity') }}
                        </div>
                        <div class="flex flex-row items-center pl-30">
                            <vue-slider class="mr-16" v-model="opacity" :width="220" :min="0" :max="100" />
                            <span class="rv-opacity-value">{{ drawStore.styleSettings.opacity }}%</span>
                        </div>
                    </div>

                    <span class="rv-subheader">{{ t('draw.settings.buffer') }}</span>
                    <div class="rv-settings-divider"></div>

                    <div class="rv-subsection">
                        <div class="rv-label">
                            <div v-html="svgIcons.box" class="p-8 pl-0"></div>
                            {{ t('draw.defaults.buffer.distance') }}
                        </div>
                        <div class="flex flex-row gap-8 pl-30">
                            <input
                                class="rv-input rv-buffer-distance-input"
                                type="number"
                                min="0"
                                max="9999999999"
                                step="1"
                                v-model.number="bufferDistance"
                                :aria-label="t('draw.defaults.buffer.distance')"
                            />
                            <select class="rv-select" v-model="bufferUnit" :aria-label="t('draw.settings.buffer.unit')">
                                <option v-for="unit in DRAW_BUFFER_UNITS" :key="unit.value" :value="unit.value">
                                    {{ t(unit.labelKey) }}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="rv-settings-divider"></div>

                    <fieldset class="rv-subsection">
                        <legend class="rv-label">
                            <div v-html="svgIcons.location" class="p-8 pl-0"></div>
                            {{ t('draw.defaults.identifyBufferUses') }}
                        </legend>
                        <div class="flex flex-col gap-8 pl-30">
                            <label class="flex items-start gap-8">
                                <input type="radio" value="shape-buffer" v-model="identifyBufferMode" />
                                <span>
                                    <span class="font-bold">{{ t('draw.settings.identify.shapeAndBuffer') }}</span>
                                    <span class="block text-sm text-gray-600">{{
                                        t('draw.settings.identify.shapeAndBuffer.description')
                                    }}</span>
                                </span>
                            </label>
                            <label class="flex items-start gap-8">
                                <input type="radio" value="shape" v-model="identifyBufferMode" />
                                <span>
                                    <span class="font-bold">{{ t('draw.settings.identify.originalShapeOnly') }}</span>
                                    <span class="block text-sm text-gray-600">{{
                                        t('draw.settings.identify.originalShapeOnly.description')
                                    }}</span>
                                </span>
                            </label>
                            <label class="flex items-start gap-8">
                                <input type="radio" value="buffer-only" v-model="identifyBufferMode" />
                                <span>
                                    <span class="font-bold">{{ t('draw.settings.identify.bufferOnly') }}</span>
                                    <span class="block text-sm text-gray-600">{{
                                        t('draw.settings.identify.bufferOnly.description')
                                    }}</span>
                                </span>
                            </label>
                        </div>
                    </fieldset>
                </div>

                <div class="rv-content-actions">
                    <button
                        type="button"
                        class="rv-action-button"
                        :class="{ 'rv-active-action-button': importOpen }"
                        :title="t('draw.import.tooltip')"
                        :aria-label="t('draw.import.tooltip')"
                        :aria-pressed="importOpen"
                        @click="toggleImport"
                    >
                        <upload-icon class="w-16 h-16"></upload-icon>
                        <span>{{ t('draw.import.action.importShort') }}</span>
                    </button>

                    <button
                        type="button"
                        class="rv-action-button"
                        :title="t('draw.export.all.tooltip')"
                        :aria-label="t('draw.export.all.tooltip')"
                        @click="exportAllShapes"
                    >
                        <download-icon class="w-16 h-16"></download-icon>
                        <span>{{ t('draw.export.action.exportShort') }}</span>
                    </button>
                </div>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

import type { PanelInstance } from '@/api';
import type { InstanceAPI } from '@/api/internal';
import { usePanelStore } from '@/stores/panel';

import { svgIcons } from '../settings/templates/icons';
import DrawColorControl from './color-control.vue';
import DownloadIcon from './icons/download-icon.vue';
import UploadIcon from './icons/upload-icon.vue';
import { isPanelOpen } from './panel-utils';
import { DRAW_BUFFER_UNITS, DRAW_IMPORT_PANEL_ID } from './settings';
import { createDrawShapesFileName, downloadDrawShapes } from './shape-io';
import type { DrawBufferUnit, DrawIdentifyBufferMode } from './settings';
import { useDrawStore } from './store';

defineProps({
    panel: { type: Object as PropType<PanelInstance>, required: true }
});

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const drawStore = useDrawStore();
const panelStore = usePanelStore();

const opacity = computed({
    get: () => drawStore.styleSettings.opacity,
    set: (value: number) => drawStore.setOpacity(value)
});

const bufferDistance = computed({
    get: () => drawStore.bufferSettings.distance,
    set: (value: number) => drawStore.setBufferDistance(value)
});

const bufferUnit = computed({
    get: () => drawStore.bufferSettings.unit,
    set: (value: DrawBufferUnit) => drawStore.setBufferUnit(value)
});

const identifyBufferMode = computed({
    get: () => drawStore.identifyBufferMode,
    set: (value: DrawIdentifyBufferMode) => drawStore.setIdentifyBufferMode(value)
});

const importOpen = computed(() => isPanelOpen(panelStore, DRAW_IMPORT_PANEL_ID));

const exportAllShapes = () => {
    const exported = downloadDrawShapes(drawStore.graphics, createDrawShapesFileName('ramp-draw-shapes'));
    iApi.updateAlert(t(exported ? 'draw.export.all.success' : 'draw.export.none'));
};

const toggleImport = () => {
    iApi.panel.toggle(DRAW_IMPORT_PANEL_ID);
};

</script>

<style lang="scss" scoped>
.rv-settings-shell {
    min-height: calc(100% + 16px);
    margin: -8px -8px -8px;
    position: relative;
}
.rv-settings-body {
    flex: 1 1 auto;
    min-height: 0;
}
.rv-content-actions {
    position: sticky;
    bottom: -8px;
    z-index: 2;
    display: flex;
    flex-wrap: nowrap;
    gap: 6px;
    justify-content: flex-end;
    flex: 0 0 auto;
    width: 100%;
    box-sizing: border-box;
    margin-top: auto;
    padding: 8px;
    background: #fff;
    border-top: 1px solid #eee;
}
.rv-subsection {
    @apply p-8;
}
.rv-help-text {
    @apply p-8 text-sm text-gray-700;
}
.rv-subheader {
    @apply p-8 pt-15 text-lg text-gray-600;
}
.rv-settings-divider {
    @apply block;
    border-bottom: 1px solid #eee;
    margin: 0;
}
.rv-label {
    @apply flex items-center;
}
.rv-action-button {
    @apply inline-flex items-center justify-center gap-4 text-sm text-gray-700 bg-white;
    border: 1px solid #ddd;
    min-height: 30px;
    padding: 0 8px;
    white-space: nowrap;
}
.rv-opacity-value {
    flex: 0 0 48px;
    min-width: 48px;
    text-align: right;
    white-space: nowrap;
}
.rv-action-button svg {
    display: block;
    height: 16px;
    width: 16px;
}
.rv-active-action-button {
    @apply text-indigo-700 bg-indigo-50;
    border-color: #6366f1;
}
.rv-action-button:focus {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
}
.rv-input,
.rv-select {
    @apply p-5 bg-white;
    border-bottom: 1px solid #ddd;
    margin-bottom: 1px;
}
.rv-input:focus,
.rv-select:focus {
    outline: none;
    border-bottom: 2px solid #ddd;
    margin-bottom: 0px;
}
.rv-select {
    width: 100%;
}
.rv-buffer-distance-input {
    width: 112px;
}
</style>
