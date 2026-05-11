<template>
    <panel-screen :panel="panel">
        <template #header>
            <div class="rv-header-title">
                <span>{{ t('draw.inspector.title') }}</span>
                <span v-if="selectedGraphic" class="rv-header-subtitle">{{ inspectorSubtitle }}</span>
            </div>
        </template>

        <template #content>
            <div class="rv-details-content flex flex-col">
                <div class="rv-tab-list" role="tablist" :aria-label="t('draw.inspector.title')">
                    <button
                        v-for="tab in tabs"
                        :key="tab.id"
                        type="button"
                        class="rv-tab-button"
                        :class="{ 'rv-active-tab': activeTab === tab.id }"
                        role="tab"
                        :aria-selected="activeTab === tab.id"
                        tabindex="0"
                        @click="activeTab = tab.id"
                        @keydown="activateTabFromKeyboard($event, tab.id)"
                    >
                        {{ t(tab.labelKey) }}
                    </button>
                </div>

                <div v-if="!selectedGraphic" class="rv-empty-state">
                    {{ t('draw.inspector.empty') }}
                </div>

                <div v-else class="rv-tab-panels">
                    <div v-if="activeTab === 'details'" key="details" role="tabpanel" class="rv-tab-panel">
                        <div class="rv-summary-card">
                            <div class="rv-detail-row">
                                <span class="rv-detail-label">{{ t('draw.details.shapeType') }}</span>
                                <span class="rv-detail-value">{{ shapeTypeLabel }}</span>
                            </div>
                            <div class="rv-detail-row">
                                <span class="rv-detail-label">{{ t('draw.details.segments') }}</span>
                                <span class="rv-detail-value">{{ segmentCount }}</span>
                            </div>
                            <div class="rv-detail-row">
                                <span class="rv-detail-label">{{ t('draw.details.vertexCount') }}</span>
                                <span class="rv-detail-value">{{ vertexCount || t('draw.details.notAvailable') }}</span>
                            </div>
                        </div>

                        <div class="rv-details-section-header">
                            <span class="rv-details-section-title" role="heading" aria-level="3">{{
                                t('draw.details.measurements')
                            }}</span>
                        </div>

                        <div class="rv-subsection rv-detail-grid">
                            <template v-if="measurementRows.length">
                                <template v-for="row in measurementRows" :key="row.key">
                                    <div class="rv-detail-row">
                                        <span class="rv-detail-label">{{ row.label }}</span>
                                        <span class="rv-detail-value">{{ row.value }}</span>
                                    </div>
                                </template>
                            </template>
                            <template v-else>
                                <div class="rv-detail-row">
                                    <span class="rv-detail-label">{{ t('draw.details.measurements') }}</span>
                                    <span class="rv-detail-value">{{
                                        detailsLoading ? t('draw.details.loading') : t('draw.details.notAvailable')
                                    }}</span>
                                </div>
                            </template>
                        </div>

                        <div class="rv-details-section-header">
                            <span class="rv-details-section-title" role="heading" aria-level="3">{{
                                t('draw.details.featureCounts')
                            }}</span>
                            <button
                                type="button"
                                class="rv-action-button"
                                :title="t('draw.details.action.runIdentify')"
                                :aria-label="t('draw.details.action.runIdentify')"
                                :disabled="featureCounts?.loading"
                                @click="runIdentify"
                            >
                                <identify-icon class="w-16 h-16"></identify-icon>
                                <span>{{ t('draw.details.action.runIdentify') }}</span>
                            </button>
                        </div>

                        <div class="rv-subsection">
                            <div class="rv-detail-grid">
                                <div class="rv-detail-row">
                                    <span class="rv-detail-label">{{ t('draw.details.featureCounts.shape') }}</span>
                                    <span class="rv-detail-value">{{ countDisplay(featureCounts?.shape) }}</span>
                                </div>
                                <template v-if="hasBuffer">
                                    <div class="rv-detail-row">
                                        <span class="rv-detail-label">{{
                                            t('draw.details.featureCounts.buffer')
                                        }}</span>
                                        <span class="rv-detail-value">{{ countDisplay(featureCounts?.buffer) }}</span>
                                    </div>
                                </template>
                                <div class="rv-detail-row">
                                    <span class="rv-detail-label rv-inline-label">
                                        {{ t('draw.details.featureCounts.total') }}
                                        <button
                                            type="button"
                                            class="rv-info-button"
                                            :aria-label="featureTotalHint"
                                            :content="featureTotalHint"
                                            v-tippy="{ placement: 'top', theme: 'ramp4', animation: 'scale' }"
                                        >
                                            <info-icon class="w-16 h-16"></info-icon>
                                        </button>
                                    </span>
                                    <span class="rv-detail-value">{{ countDisplay(featureCounts?.total) }}</span>
                                </div>
                            </div>
                            <div v-if="featureCounts?.loading" class="rv-muted mt-6">
                                {{ t('draw.details.identify.loading') }}
                            </div>
                        </div>

                        <div class="rv-details-section-header">
                            <span class="rv-details-section-title" role="heading" aria-level="3">{{
                                t('draw.inspector.geometry')
                            }}</span>
                        </div>

                        <div class="rv-subsection rv-detail-grid">
                            <div class="rv-detail-row">
                                <span class="rv-detail-label">{{ t('draw.inspector.geometry.coordinateSystem') }}</span>
                                <span class="rv-detail-value">{{ coordinateSystemLabel }}</span>
                            </div>
                        </div>

                        <div class="rv-subsection">
                            <div class="rv-detail-label mb-4">{{ t('draw.details.location.centroid') }}</div>
                            <div class="rv-inline-value">
                                <span class="rv-coordinate-text">{{ centroidCoordinates }}</span>
                                <button
                                    type="button"
                                    class="rv-icon-button"
                                    :title="t('draw.details.action.copyCoordinates')"
                                    :aria-label="t('draw.details.action.copyCoordinates')"
                                    @click="copyCoordinates(centroidCoordinates)"
                                >
                                    <copy-icon class="w-16 h-16"></copy-icon>
                                </button>
                            </div>
                        </div>

                        <div class="rv-subsection">
                            <div class="rv-detail-label mb-4">{{ t('draw.details.extent') }}</div>
                            <div class="rv-bounds-card">
                                <div class="rv-bounds-line">
                                    <span><strong>N</strong> {{ boundsValue('north') }}</span>
                                    <span><strong>S</strong> {{ boundsValue('south') }}</span>
                                </div>
                                <div class="rv-bounds-line">
                                    <span><strong>E</strong> {{ boundsValue('east') }}</span>
                                    <span><strong>W</strong> {{ boundsValue('west') }}</span>
                                </div>
                            </div>
                        </div>

                        <template v-if="showSegmentsSection">
                            <button
                                type="button"
                                class="rv-details-section-header rv-collapsible-header"
                                :aria-expanded="segmentsExpanded"
                                @click="segmentsExpanded = !segmentsExpanded"
                            >
                                <span class="rv-details-section-title" role="heading" aria-level="3">{{
                                    t('draw.details.segments')
                                }}</span>
                                <span class="rv-count-badge">{{ segmentCount }}</span>
                                <span class="rv-section-chevron" :class="{ 'rv-expanded': segmentsExpanded }"></span>
                            </button>

                            <transition name="rv-collapse">
                                <div v-if="segmentsExpanded" class="rv-collapse-body">
                                    <div class="rv-subsection">
                                        <div
                                            class="rv-segment-list"
                                            :class="{ 'rv-scrollable-list': segmentsScrollable }"
                                        >
                                            <div class="rv-segment-rows">
                                                <div
                                                    v-for="segment in segmentRows"
                                                    :key="segment.key"
                                                    class="rv-segment-row"
                                                    :class="{ 'rv-active-row': isSegmentActive(segment.key) }"
                                                    role="button"
                                                    tabindex="0"
                                                    @mouseenter="highlightSegment(segment.key)"
                                                    @mouseleave="clearSegmentHighlight"
                                                    @focus="highlightSegment(segment.key)"
                                                    @blur="clearSegmentHighlight"
                                                    @click="selectSegment(segment.key)"
                                                    @keydown="activateSegmentFromKeyboard($event, segment.key)"
                                                >
                                                    <span class="rv-detail-label rv-segment-letter">{{
                                                        segment.letter
                                                    }}</span>
                                                    <span class="rv-segment-pair">{{ segment.pair }}</span>
                                                    <span class="rv-detail-value">{{ segment.length }}</span>
                                                    <button
                                                        type="button"
                                                        class="rv-icon-button"
                                                        :title="t('draw.details.action.copySegment')"
                                                        :aria-label="t('draw.details.action.copySegment')"
                                                        @click.stop="copySegment(segment.copyText)"
                                                    >
                                                        <copy-icon class="w-16 h-16"></copy-icon>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="rv-section-actions">
                                            <button
                                                type="button"
                                                class="rv-action-button"
                                                :title="t('draw.details.action.copyAllSegments')"
                                                :aria-label="t('draw.details.action.copyAllSegments')"
                                                @click="copySegment(allSegmentDetails)"
                                            >
                                                <copy-icon class="w-16 h-16"></copy-icon>
                                                <span>{{ t('draw.details.action.copyAllCoordinatesShort') }}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </template>

                        <template v-if="showVerticesSection">
                            <button
                                type="button"
                                class="rv-details-section-header rv-collapsible-header rv-collapsible-header-spaced"
                                :aria-expanded="verticesExpanded"
                                @click="verticesExpanded = !verticesExpanded"
                            >
                                <span class="rv-details-section-title" role="heading" aria-level="3">{{
                                    t('draw.details.vertices')
                                }}</span>
                                <span class="rv-count-badge">{{ vertexCount }}</span>
                                <span class="rv-section-chevron" :class="{ 'rv-expanded': verticesExpanded }"></span>
                            </button>

                            <transition name="rv-collapse">
                                <div v-if="verticesExpanded" class="rv-collapse-body">
                                    <div class="rv-subsection">
                                        <div
                                            class="rv-vertex-list"
                                            :class="{ 'rv-scrollable-list': verticesScrollable }"
                                        >
                                            <div class="rv-vertex-rows">
                                                <div
                                                    v-for="vertex in formattedVertices"
                                                    :key="vertex.key"
                                                    class="rv-vertex-row"
                                                    :class="{ 'rv-active-row': isVertexActive(vertex.key) }"
                                                    role="button"
                                                    tabindex="0"
                                                    @mouseenter="highlightVertex(vertex.key)"
                                                    @mouseleave="clearVertexHighlight"
                                                    @focus="highlightVertex(vertex.key)"
                                                    @blur="clearVertexHighlight"
                                                    @click="selectVertex(vertex.key)"
                                                    @keydown="activateVertexFromKeyboard($event, vertex.key)"
                                                >
                                                    <span class="rv-detail-label">{{ vertex.index }}</span>
                                                    <span class="rv-coordinate-text">{{ vertex.coordinates }}</span>
                                                    <button
                                                        type="button"
                                                        class="rv-icon-button"
                                                        :title="t('draw.details.action.copyCoordinates')"
                                                        :aria-label="t('draw.details.action.copyCoordinates')"
                                                        @click.stop="copyCoordinates(vertex.coordinates)"
                                                    >
                                                        <copy-icon class="w-16 h-16"></copy-icon>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="rv-section-actions">
                                            <button
                                                type="button"
                                                class="rv-action-button"
                                                :title="t('draw.details.action.copyAllCoordinates')"
                                                :aria-label="t('draw.details.action.copyAllCoordinates')"
                                                @click="copyCoordinates(allVertexCoordinates)"
                                            >
                                                <copy-icon class="w-16 h-16"></copy-icon>
                                                <span>{{ t('draw.details.action.copyAllCoordinatesShort') }}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </transition>
                        </template>

                        <div class="rv-content-actions">
                            <button
                                type="button"
                                class="rv-action-button"
                                :title="t('draw.export.shape.tooltip')"
                                :aria-label="t('draw.export.shape.tooltip')"
                                @click="exportShape"
                            >
                                <download-icon class="w-16 h-16"></download-icon>
                                <span>{{ t('draw.export.action.exportShort') }}</span>
                            </button>
                        </div>
                    </div>

                    <div v-else-if="activeTab === 'style'" key="style" role="tabpanel" class="rv-tab-panel">
                        <p class="rv-notice">{{ t('draw.inspector.style.notice') }}</p>

                        <div class="rv-subsection">
                            <span class="rv-details-section-title block mb-8">{{
                                t('draw.inspector.style.presets')
                            }}</span>
                            <div class="rv-preset-grid">
                                <button
                                    v-for="preset in stylePresets"
                                    :key="preset.key"
                                    type="button"
                                    class="rv-preset-button"
                                    @click="applyStylePreset(preset.key)"
                                >
                                    <span class="rv-preset-swatch" :style="{ backgroundColor: preset.color }"></span>
                                    <span>{{ t(preset.labelKey) }}</span>
                                </button>
                            </div>
                        </div>

                        <div class="rv-subsection">
                            <div class="rv-style-preview">
                                <span
                                    class="rv-style-preview-shape"
                                    :style="{
                                        backgroundColor: selectedStyle.fillColor,
                                        borderColor: selectedStyle.borderColor,
                                        opacity: selectedStyle.opacity / 100
                                    }"
                                ></span>
                                <span
                                    class="rv-style-preview-buffer"
                                    :style="{ borderColor: selectedStyle.bufferColor }"
                                >
                                </span>
                            </div>
                        </div>

                        <div class="rv-details-section-header">
                            <span class="rv-details-section-title" role="heading" aria-level="3">{{
                                t('draw.settings.appearance')
                            }}</span>
                        </div>

                        <div class="rv-subsection flex flex-col gap-12">
                            <draw-color-control
                                :label="t('draw.inspector.style.fillColor')"
                                :color="selectedStyle.fillColor"
                                control-id="draw-selected-fill-color"
                                @update:color="drawStore.setSelectedGraphicFillColor"
                            />
                            <draw-color-control
                                :label="t('draw.inspector.style.borderColor')"
                                :color="selectedStyle.borderColor"
                                control-id="draw-selected-border-color"
                                @update:color="drawStore.setSelectedGraphicBorderColor"
                            />
                            <draw-color-control
                                :label="t('draw.inspector.style.bufferColor')"
                                :color="selectedStyle.bufferColor"
                                control-id="draw-selected-buffer-color"
                                @update:color="drawStore.setSelectedGraphicBufferColor"
                            />
                        </div>

                        <div class="rv-settings-divider"></div>

                        <div class="rv-subsection">
                            <label class="rv-label" for="draw-selected-opacity">
                                {{ t('draw.settings.opacity') }}
                            </label>
                            <div class="flex flex-row items-center">
                                <vue-slider
                                    id="draw-selected-opacity"
                                    class="mr-16"
                                    v-model="selectedOpacity"
                                    :width="220"
                                    :min="0"
                                    :max="100"
                                />
                                <span class="w-40 text-right">{{ selectedStyle.opacity }}%</span>
                            </div>
                        </div>
                    </div>

                    <div v-else key="edit" role="tabpanel" class="rv-tab-panel">
                        <div
                            ref="editBanner"
                            class="rv-edit-banner"
                            tabindex="-1"
                            role="status"
                            :aria-label="t('draw.inspector.edit.active')"
                        >
                            <strong>{{ t('draw.inspector.edit.active') }}</strong>
                            <span>{{ t('draw.inspector.edit.guidance') }}</span>
                            <span>{{ t('draw.inspector.edit.vertexToggleHint') }}</span>
                        </div>

                        <div class="rv-subsection rv-detail-grid">
                            <div class="rv-detail-row">
                                <span class="rv-detail-label">{{ t('draw.inspector.edit.shapeId') }}</span>
                                <span class="rv-detail-value">{{ selectedGraphicId }}</span>
                            </div>
                        </div>

                        <div class="rv-details-section-header">
                            <span class="rv-details-section-title" role="heading" aria-level="3">{{
                                t('draw.details.measurements')
                            }}</span>
                        </div>

                        <div class="rv-subsection rv-detail-grid">
                            <template v-if="measurementRows.length">
                                <template v-for="row in measurementRows" :key="row.key">
                                    <div class="rv-detail-row">
                                        <span class="rv-detail-label">{{ row.label }}</span>
                                        <span class="rv-detail-value">{{ row.value }}</span>
                                    </div>
                                </template>
                            </template>
                            <div class="rv-detail-row">
                                <span class="rv-detail-label">{{ t('draw.details.vertices') }}</span>
                                <span class="rv-detail-value">{{ vertexCount || t('draw.details.notAvailable') }}</span>
                            </div>
                            <div class="rv-detail-row">
                                <span class="rv-detail-label">{{ t('draw.details.segments') }}</span>
                                <span class="rv-detail-value">{{ segmentCount }}</span>
                            </div>
                        </div>

                        <div class="rv-details-section-header">
                            <span class="rv-details-section-title" role="heading" aria-level="3">{{
                                t('draw.inspector.edit.aids')
                            }}</span>
                        </div>

                        <fieldset class="rv-subsection rv-map-options">
                            <label class="rv-checkbox-row" :class="{ 'rv-disabled-option': !supportsAreaLabel }">
                                <input v-model="areaLabelOnMap" type="checkbox" :disabled="!supportsAreaLabel" />
                                <span>{{ t('draw.details.showOnMap.areaLabel') }}</span>
                            </label>
                            <label class="rv-checkbox-row">
                                <input v-model="segmentLengthOnMap" type="checkbox" />
                                <span>{{ t('draw.details.showOnMap.segmentLength') }}</span>
                            </label>
                            <label class="rv-checkbox-row">
                                <input v-model="segmentLettersOnMap" type="checkbox" />
                                <span>{{ t('draw.details.showOnMap.segmentLetters') }}</span>
                            </label>
                            <label class="rv-checkbox-row">
                                <input v-model="vertexNumbersOnMap" type="checkbox" />
                                <span>{{ t('draw.details.showOnMap.vertexNumbers') }}</span>
                            </label>
                        </fieldset>

                        <div class="rv-details-section-header">
                            <span class="rv-details-section-title" role="heading" aria-level="3">{{
                                t('draw.settings.buffer')
                            }}</span>
                        </div>

                        <div class="rv-subsection">
                            <label class="rv-label" for="draw-selected-buffer-distance">
                                {{ t('draw.settings.buffer.distance') }}
                            </label>
                            <div class="flex flex-row gap-8">
                                <input
                                    id="draw-selected-buffer-distance"
                                    class="rv-input rv-buffer-distance-input"
                                    type="number"
                                    min="0"
                                    max="9999999999"
                                    step="1"
                                    v-model.number="selectedBufferDistance"
                                />
                                <select class="rv-select" v-model="selectedBufferUnit">
                                    <option v-for="unit in DRAW_BUFFER_UNITS" :key="unit.value" :value="unit.value">
                                        {{ t(unit.labelKey) }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <fieldset class="rv-subsection">
                            <legend class="rv-label">{{ t('draw.settings.identifyBufferUses') }}</legend>
                            <div class="flex flex-col gap-8">
                                <label class="flex items-start gap-8">
                                    <input type="radio" value="shape-buffer" v-model="selectedIdentifyBufferMode" />
                                    <span>{{ t('draw.settings.identify.shapeAndBuffer') }}</span>
                                </label>
                                <label class="flex items-start gap-8">
                                    <input type="radio" value="shape" v-model="selectedIdentifyBufferMode" />
                                    <span>{{ t('draw.settings.identify.originalShapeOnly') }}</span>
                                </label>
                                <label class="flex items-start gap-8">
                                    <input type="radio" value="buffer-only" v-model="selectedIdentifyBufferMode" />
                                    <span>{{ t('draw.settings.identify.bufferOnly') }}</span>
                                </label>
                            </div>
                        </fieldset>

                        <div class="rv-content-actions" :class="{ 'rv-confirm-actions': confirmDeleteVisible }">
                            <template v-if="confirmDeleteVisible">
                                <span class="rv-confirm-text">{{ t('draw.inspector.delete.confirm') }}</span>
                                <span class="rv-confirm-buttons">
                                    <button
                                        type="button"
                                        class="rv-action-button"
                                        @click="confirmDeleteVisible = false"
                                    >
                                        {{ t('draw.inspector.action.cancel') }}
                                    </button>
                                    <button
                                        type="button"
                                        class="rv-action-button rv-danger-action-button"
                                        @click="confirmDeleteShape"
                                    >
                                        {{ t('draw.inspector.action.yesDelete') }}
                                    </button>
                                </span>
                            </template>
                            <template v-else>
                                <button
                                    type="button"
                                    class="rv-action-button rv-danger-action-button"
                                    :title="t('draw.details.action.deleteShape')"
                                    :aria-label="t('draw.details.action.deleteShape')"
                                    @click="confirmDeleteVisible = true"
                                >
                                    <delete-icon class="w-16 h-16"></delete-icon>
                                    <span>{{ t('draw.details.action.deleteShapeShort') }}</span>
                                </button>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, onUnmounted, ref, toRaw, watch } from 'vue';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

import type { PanelInstance } from '@/api';
import type { InstanceAPI } from '@/api/internal';
import { Point, SpatialReference } from '@/geo/api';
import { EsriCentroidOperator, EsriPoint, EsriPolygon, EsriPolyline } from '@/geo/esri';
import type { EsriGeometry } from '@/geo/esri';

import CopyIcon from './icons/copy-icon.vue';
import DeleteIcon from './icons/delete-icon.vue';
import DownloadIcon from './icons/download-icon.vue';
import IdentifyIcon from './icons/identify-icon.vue';
import InfoIcon from './icons/info-icon.vue';
import DrawColorControl from './color-control.vue';
import {
    buildDrawSegments,
    buildDrawVertices,
    formatDrawLength,
    loadDrawMeasurementOperators,
    measureDrawPolygonPerimeterMeters,
    measureDrawPolygonSquareMeters,
    measureDrawPolylineMeters
} from './measurement-utils';
import {
    cloneDrawBufferSettings,
    cloneDrawStyleSettings,
    createDrawBufferGeometry,
    DRAW_BUFFER_UNITS,
    loadDrawBufferOperators,
    resolveGraphicBufferSettings,
    resolveGraphicIdentifyBufferMode,
    resolveGraphicMapLabelSettings,
    resolveGraphicStyleSettings
} from './settings';
import type { DrawBufferSettings, DrawBufferUnit, DrawIdentifyBufferMode, DrawMapLabelSettings } from './settings';
import { createDrawShapesFileName, downloadDrawShapes } from './shape-io';
import { useDrawStore } from './store';

type InspectorTab = 'details' | 'style' | 'edit';
type DetailRow = {
    key: string;
    label: string;
    value: string;
};
type SegmentRow = {
    key: string;
    letter: string;
    pair: string;
    length: string;
    lengthMeters: number;
    copyText: string;
};
type FormattedVertex = {
    index: number;
    key: string;
    coordinates: string;
};

const props = defineProps({
    panel: { type: Object as PropType<PanelInstance>, required: true },
    initialTab: { type: String as PropType<InspectorTab>, default: 'details' },
    tabRequestId: { type: Number, default: 0 }
});

const { t, locale } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const drawStore = useDrawStore();
const activeTab = ref<InspectorTab>(props.initialTab);
const detailsLoading = ref(false);
const measurementRows = ref<DetailRow[]>([]);
const segmentRows = ref<SegmentRow[]>([]);
const formattedVertices = ref<FormattedVertex[]>([]);
const centroidCoordinates = ref('');
const extentRows = ref<DetailRow[]>([]);
const editBanner = ref<HTMLElement | null>(null);
const segmentsExpanded = ref(false);
const verticesExpanded = ref(false);
const confirmDeleteVisible = ref(false);
let refreshId = 0;

const tabs: Array<{ id: InspectorTab; labelKey: string }> = [
    { id: 'details', labelKey: 'draw.inspector.tab.details' },
    { id: 'style', labelKey: 'draw.inspector.tab.style' },
    { id: 'edit', labelKey: 'draw.inspector.tab.edit' }
];

const selectedGraphic = computed(() => drawStore.getSelectedGraphic());
const selectedGraphicId = computed(() => selectedGraphic.value?.id ?? selectedGraphic.value?.attributes?.id);
const selectedGeometry = computed(() => toRaw(selectedGraphic.value?.geometry) as EsriGeometry | undefined);
const selectedAttributes = computed(() => selectedGraphic.value?.attributes);
const selectedStyle = computed(() => resolveGraphicStyleSettings(selectedAttributes.value));
const selectedBuffer = computed<DrawBufferSettings>(() => resolveGraphicBufferSettings(selectedAttributes.value));
const selectedMapLabels = computed<DrawMapLabelSettings>(() =>
    resolveGraphicMapLabelSettings(selectedAttributes.value)
);
const shapeType = computed(
    () => selectedGraphic.value?.type ?? selectedAttributes.value?.type ?? selectedGeometry.value?.type
);
const shapeTypeLabel = computed(() => t(`draw.details.shapeType.${shapeType.value ?? 'unknown'}`));
const inspectorSubtitle = computed(() => {
    const type = shapeTypeLabel.value;
    const segmentText =
        segmentCount.value > 0
            ? t('draw.inspector.subtitle.segments', { count: segmentCount.value })
            : t('draw.inspector.subtitle.selected');
    return `${type} - ${segmentText}`;
});
const showVerticesSection = computed(() => ['polyline', 'polygon', 'rectangle'].includes(shapeType.value ?? ''));
const showSegmentsSection = computed(() => showVerticesSection.value && segmentRows.value.length > 0);
const vertexCount = computed(() => formattedVertices.value.length);
const supportsAreaLabel = computed(() => selectedGeometry.value?.type === 'polygon');
const hasBuffer = computed(() => selectedBuffer.value.distance > 0);
const identifyBufferMode = computed(() =>
    resolveGraphicIdentifyBufferMode(selectedAttributes.value, drawStore.identifyBufferMode)
);
const coordinateSystemLabel = computed(() => {
    const spatialReference = selectedGeometry.value?.spatialReference as
        | { wkid?: number; latestWkid?: number; isGeographic?: boolean; isWebMercator?: boolean }
        | undefined;
    if (!spatialReference) return t('draw.details.notAvailable');

    const wkid = spatialReference.wkid ?? spatialReference.latestWkid;
    if (wkid) return `WKID ${wkid}`;
    if (spatialReference.isWebMercator) return 'Web Mercator';
    if (spatialReference.isGeographic) return 'Geographic';
    return t('draw.details.notAvailable');
});
const featureCounts = computed(() => {
    const id = selectedGraphicId.value;
    return id ? drawStore.shapeFeatureCounts[id] : undefined;
});
const segmentCount = computed(() => segmentRows.value.length);
const allVertexCoordinates = computed(() =>
    formattedVertices.value.map(vertex => `${vertex.index}. ${vertex.coordinates}`).join('\n')
);
const allSegmentDetails = computed(() => segmentRows.value.map(segment => segment.copyText).join('\n'));
const segmentsScrollable = computed(() => segmentRows.value.length > 10);
const verticesScrollable = computed(() => formattedVertices.value.length > 10);
const boundsValue = (key: string): string =>
    extentRows.value.find(row => row.key === key)?.value ?? t('draw.details.notAvailable');

const selectedOpacity = computed({
    get: () => selectedStyle.value.opacity,
    set: (value: number) => drawStore.setSelectedGraphicOpacity(value)
});

const selectedBufferDistance = computed({
    get: () => selectedBuffer.value.distance,
    set: (value: number) => drawStore.setSelectedGraphicBufferDistance(value)
});

const selectedBufferUnit = computed({
    get: () => selectedBuffer.value.unit,
    set: (value: DrawBufferUnit) => drawStore.setSelectedGraphicBufferUnit(value)
});

const selectedIdentifyBufferMode = computed({
    get: () => identifyBufferMode.value,
    set: (value: DrawIdentifyBufferMode) => drawStore.setSelectedGraphicIdentifyBufferMode(value)
});

const stylePresets = [
    { key: 'default', labelKey: 'draw.inspector.style.preset.default', color: '#0099db' },
    { key: 'highlight', labelKey: 'draw.inspector.style.preset.highlight', color: '#2563eb' },
    { key: 'muted', labelKey: 'draw.inspector.style.preset.muted', color: '#64748b' },
    { key: 'alert', labelKey: 'draw.inspector.style.preset.alert', color: '#dc2626' }
];

const featureTotalHint = computed(() => {
    if (!hasBuffer.value) {
        return t('draw.details.featureCounts.totalHint.noBuffer');
    }

    switch (identifyBufferMode.value) {
        case 'shape':
            return t('draw.details.featureCounts.totalHint.shape');
        case 'buffer-only':
            return t('draw.details.featureCounts.totalHint.bufferOnly');
        default:
            return t('draw.details.featureCounts.totalHint.shapeBuffer');
    }
});

const updateSelectedMapLabelSettings = (settings: Partial<DrawMapLabelSettings>) => {
    const id = selectedGraphicId.value;
    if (!id) return;

    drawStore.setGraphicMapLabelSettings(String(id), settings);
};

const areaLabelOnMap = computed({
    get: () => selectedMapLabels.value.areaLabel,
    set: (value: boolean) => updateSelectedMapLabelSettings({ areaLabel: supportsAreaLabel.value && value })
});

const segmentLengthOnMap = computed({
    get: () => selectedMapLabels.value.segmentLength,
    set: (value: boolean) => updateSelectedMapLabelSettings({ segmentLength: value })
});

const segmentLettersOnMap = computed({
    get: () => selectedMapLabels.value.segmentLetters,
    set: (value: boolean) => updateSelectedMapLabelSettings({ segmentLetters: value })
});

const vertexNumbersOnMap = computed({
    get: () => selectedMapLabels.value.vertexNumbers,
    set: (value: boolean) => updateSelectedMapLabelSettings({ vertexNumbers: value })
});

const formatNumber = (value: number, maximumFractionDigits: number): string =>
    value.toLocaleString(locale.value, {
        maximumFractionDigits,
        minimumFractionDigits: 0
    });

const formatLength = (meters: number): string => {
    return formatDrawLength(meters, locale.value).display;
};

const formatArea = (squareMeters: number): string => {
    const absSquareMeters = Math.abs(squareMeters);
    if (absSquareMeters >= 1000000) {
        const squareKilometers = absSquareMeters / 1000000;
        return `${formatNumber(squareKilometers, squareKilometers >= 10 ? 1 : 2)} km\u00b2`;
    }

    if (absSquareMeters >= 10000) {
        const hectares = absSquareMeters / 10000;
        return `${formatNumber(hectares, hectares >= 10 ? 1 : 2)} ha`;
    }

    return `${formatNumber(absSquareMeters, absSquareMeters >= 100 ? 0 : absSquareMeters >= 10 ? 1 : 2)} m\u00b2`;
};

const buildMeasurementRows = async (
    geometry: EsriGeometry | undefined,
    bufferSettings: DrawBufferSettings
): Promise<DetailRow[]> => {
    if (!geometry) return [];

    await loadDrawMeasurementOperators();
    await loadDrawBufferOperators();

    const rows: DetailRow[] = [];
    let shapeArea: number | undefined;

    if (geometry.type === 'polyline') {
        const length = measureDrawPolylineMeters(geometry as EsriPolyline);
        if (length !== undefined) {
            rows.push({
                key: 'length',
                label: t('draw.details.measurements.length'),
                value: formatLength(length)
            });
        }
    }

    if (geometry.type === 'polygon') {
        const polygon = geometry as EsriPolygon;
        const perimeter = measureDrawPolygonPerimeterMeters(polygon);
        const area = measureDrawPolygonSquareMeters(polygon);

        if (perimeter !== undefined) {
            rows.push({
                key: 'perimeter',
                label: t('draw.details.measurements.perimeter'),
                value: formatLength(perimeter)
            });
        }

        if (area !== undefined) {
            shapeArea = area;
            rows.push({
                key: 'area',
                label: t('draw.details.measurements.area'),
                value: formatArea(area)
            });
        }
    }

    if (bufferSettings.distance > 0) {
        const bufferGeometry = createDrawBufferGeometry(geometry, bufferSettings);
        if (bufferGeometry) {
            const bufferArea = measureDrawPolygonSquareMeters(bufferGeometry);
            const bufferPerimeter = measureDrawPolygonPerimeterMeters(bufferGeometry);
            const shapeAreaToSubtract = geometry.type === 'polygon' ? shapeArea : 0;
            const actualBufferArea =
                bufferArea !== undefined && shapeAreaToSubtract !== undefined
                    ? Math.max(0, bufferArea - shapeAreaToSubtract)
                    : undefined;

            if (actualBufferArea !== undefined) {
                rows.push({
                    key: 'buffer-area',
                    label: t('draw.details.measurements.bufferArea'),
                    value: formatArea(actualBufferArea)
                });
            }

            if (bufferPerimeter !== undefined) {
                rows.push({
                    key: 'buffer-perimeter',
                    label: t('draw.details.measurements.bufferPerimeter'),
                    value: formatLength(bufferPerimeter)
                });
            }
        }
    }

    return rows;
};

const buildSegmentRows = async (
    geometry: EsriGeometry | undefined,
    graphicId: string | undefined
): Promise<SegmentRow[]> => {
    if (!geometry || !graphicId || !showVerticesSection.value) return [];

    await loadDrawMeasurementOperators();

    return buildDrawSegments(geometry, graphicId).map(segment => {
        const length = formatLength(segment.lengthMeters);
        const pair = `${segment.startVertexIndex} -> ${segment.endVertexIndex}`;

        return {
            key: segment.key,
            letter: segment.letter,
            pair,
            length,
            lengthMeters: segment.lengthMeters,
            copyText: `${segment.letter} ${pair} ${length}`
        };
    });
};

const centroidPoint = (geometry: EsriGeometry | undefined): EsriPoint | undefined => {
    if (!geometry) return undefined;

    if (geometry.type === 'point') {
        return geometry as EsriPoint;
    }

    if (geometry.type === 'polygon') {
        try {
            const centroid = EsriCentroidOperator(geometry as EsriPolygon);
            if (centroid) return centroid;
        } catch {
            // Fall back to extent center below.
        }
    }

    const extent = geometry.extent;
    if (!extent) return undefined;

    return new EsriPoint({
        x: (extent.xmin + extent.xmax) / 2,
        y: (extent.ymin + extent.ymax) / 2,
        spatialReference: geometry.spatialReference
    });
};

const esriPointToRampPoint = (point: EsriPoint): Point =>
    new Point(
        'draw-coordinate',
        [point.x, point.y],
        point.spatialReference ? SpatialReference.fromESRI(point.spatialReference) : SpatialReference.latLongSR(),
        true
    );

const fallbackPointText = (point: EsriPoint): string => `${formatNumber(point.y, 5)}, ${formatNumber(point.x, 5)}`;

const formatPoint = async (point: EsriPoint | undefined): Promise<string> => {
    if (!point) return t('draw.details.notAvailable');

    try {
        return await iApi.geo.map.caption.formatLatLongDD(esriPointToRampPoint(point));
    } catch {
        return fallbackPointText(point);
    }
};

const decimalDirection = (value: number, positive: string, negative: string): string =>
    `${formatNumber(Math.abs(value), 5)}\u00b0 ${value >= 0 ? positive : negative}`;

const projectPointToLatLong = async (point: EsriPoint): Promise<Point> =>
    (await iApi.geo.proj.projectGeometry(4326, esriPointToRampPoint(point))) as Point;

const formatExtentAxis = async (
    point: EsriPoint,
    axis: 'x' | 'y',
    positive: string,
    negative: string
): Promise<string> => {
    try {
        const latLongPoint = await projectPointToLatLong(point);
        const value = axis === 'x' ? latLongPoint.x : latLongPoint.y;
        return decimalDirection(value, positive, negative);
    } catch {
        return fallbackPointText(point);
    }
};

const buildExtentRows = async (geometry: EsriGeometry | undefined): Promise<DetailRow[]> => {
    const extent = geometry?.extent;
    if (!extent || !geometry) {
        return [
            { key: 'north', label: t('draw.details.extent.north'), value: t('draw.details.notAvailable') },
            { key: 'south', label: t('draw.details.extent.south'), value: t('draw.details.notAvailable') },
            { key: 'east', label: t('draw.details.extent.east'), value: t('draw.details.notAvailable') },
            { key: 'west', label: t('draw.details.extent.west'), value: t('draw.details.notAvailable') }
        ];
    }

    const centerX = (extent.xmin + extent.xmax) / 2;
    const centerY = (extent.ymin + extent.ymax) / 2;
    const makePoint = (x: number, y: number) =>
        new EsriPoint({
            x,
            y,
            spatialReference: geometry.spatialReference
        });

    return [
        {
            key: 'north',
            label: t('draw.details.extent.north'),
            value: await formatExtentAxis(makePoint(centerX, extent.ymax), 'y', 'N', 'S')
        },
        {
            key: 'south',
            label: t('draw.details.extent.south'),
            value: await formatExtentAxis(makePoint(centerX, extent.ymin), 'y', 'N', 'S')
        },
        {
            key: 'east',
            label: t('draw.details.extent.east'),
            value: await formatExtentAxis(makePoint(extent.xmax, centerY), 'x', 'E', 'W')
        },
        {
            key: 'west',
            label: t('draw.details.extent.west'),
            value: await formatExtentAxis(makePoint(extent.xmin, centerY), 'x', 'E', 'W')
        }
    ];
};

const refreshDetails = async () => {
    const currentRefresh = ++refreshId;
    const geometry = selectedGeometry.value;
    const bufferSettings = selectedBuffer.value;

    if (!selectedGraphic.value || !geometry) {
        measurementRows.value = [];
        segmentRows.value = [];
        formattedVertices.value = [];
        centroidCoordinates.value = '';
        extentRows.value = [];
        detailsLoading.value = false;
        return;
    }

    detailsLoading.value = true;
    const centroid = centroidPoint(geometry);
    const graphicId = selectedGraphicId.value ? String(selectedGraphicId.value) : undefined;
    const vertices = showVerticesSection.value && graphicId ? buildDrawVertices(geometry, graphicId) : [];
    const vertexPoints = vertices.map(
        vertex =>
            new EsriPoint({
                x: vertex.vertex[0],
                y: vertex.vertex[1],
                spatialReference: geometry.spatialReference
            })
    );

    const [measurements, segments, centroidText, vertexTexts, extentDetails] = await Promise.all([
        buildMeasurementRows(geometry, bufferSettings),
        buildSegmentRows(geometry, graphicId),
        formatPoint(centroid),
        Promise.all(vertexPoints.map(vertex => formatPoint(vertex))),
        buildExtentRows(geometry)
    ]);

    if (currentRefresh !== refreshId) return;

    measurementRows.value = measurements;
    segmentRows.value = segments;
    centroidCoordinates.value = centroidText;
    formattedVertices.value = vertexTexts.map((coordinates, index) => ({
        index: index + 1,
        key: vertices[index].key,
        coordinates
    }));
    extentRows.value = extentDetails;
    detailsLoading.value = false;
};

const countDisplay = (value: number | null | undefined): string => {
    if (featureCounts.value?.loading && value == null) {
        return t('draw.details.loading');
    }

    return typeof value === 'number' ? formatNumber(value, 0) : t('draw.details.notAvailable');
};

const copyCoordinates = async (coordinates: string) => {
    try {
        await navigator.clipboard.writeText(coordinates);
        iApi.updateAlert(t('draw.details.coordinatesCopied'));
    } catch {
        iApi.updateAlert(t('draw.details.coordinatesCopyFailed'));
    }
};

const copySegment = async (segmentText: string) => {
    try {
        await navigator.clipboard.writeText(segmentText);
        iApi.updateAlert(t('draw.details.segmentCopied'));
    } catch {
        iApi.updateAlert(t('draw.details.segmentCopyFailed'));
    }
};

const activateTabFromKeyboard = (event: KeyboardEvent, tab: InspectorTab) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activeTab.value = tab;
        return;
    }

    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    event.preventDefault();
    const currentIndex = tabs.findIndex(item => item.id === activeTab.value);
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (currentIndex + delta + tabs.length) % tabs.length;
    activeTab.value = tabs[nextIndex].id;
};

const highlightSegment = (key: string) => {
    drawStore.setHoveredSegmentKey(key);
    drawStore.setHoveredVertexKey(null);
};

const clearSegmentHighlight = () => {
    drawStore.setHoveredSegmentKey(null);
};

const selectSegment = (key: string) => {
    drawStore.setSelectedSegmentKey(key);
    drawStore.setSelectedVertexKey(null);
};

const highlightVertex = (key: string) => {
    drawStore.setHoveredVertexKey(key);
    drawStore.setHoveredSegmentKey(null);
};

const clearVertexHighlight = () => {
    drawStore.setHoveredVertexKey(null);
};

const selectVertex = (key: string) => {
    drawStore.setSelectedVertexKey(key);
    drawStore.setSelectedSegmentKey(null);
};

const isSegmentActive = (key: string): boolean => drawStore.activeSegmentKey === key;

const isVertexActive = (key: string): boolean => drawStore.activeVertexKey === key;

const activateSegmentFromKeyboard = (event: KeyboardEvent, key: string) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    selectSegment(key);
};

const activateVertexFromKeyboard = (event: KeyboardEvent, key: string) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    selectVertex(key);
};

const requestFeatureCountsIfNeeded = () => {
    const id = selectedGraphicId.value;
    if (id && !drawStore.shapeFeatureCounts[id]) {
        drawStore.requestRefreshSelectedGraphicFeatureCounts();
    }
};

const runIdentify = () => {
    drawStore.requestIdentifySelectedGraphic();
};

const confirmDeleteShape = () => {
    confirmDeleteVisible.value = false;
    drawStore.requestDeleteSelectedGraphic();
};

const exportShape = () => {
    const graphic = selectedGraphic.value;
    if (!graphic) return;

    const type = graphic.attributes?.type ?? graphic.type ?? 'shape';
    const exported = downloadDrawShapes([graphic], createDrawShapesFileName(`ramp-draw-${type}`));
    iApi.updateAlert(t(exported ? 'draw.export.shape.success' : 'draw.export.none'));
};

const resetSelectedStyle = () => {
    drawStore.setSelectedGraphicStyleSettings(cloneDrawStyleSettings(drawStore.styleSettings));
    drawStore.setSelectedGraphicBufferSettings(cloneDrawBufferSettings(drawStore.bufferSettings));
    drawStore.setSelectedGraphicIdentifyBufferMode(drawStore.identifyBufferMode);
};

const applyStylePreset = (preset: string) => {
    if (preset === 'default') {
        resetSelectedStyle();
        return;
    }

    const presets: Record<string, { fillColor: string; borderColor: string; bufferColor: string; opacity: number }> = {
        highlight: { fillColor: '#2563eb', borderColor: '#1e3a8a', bufferColor: '#93c5fd', opacity: 42 },
        muted: { fillColor: '#64748b', borderColor: '#334155', bufferColor: '#cbd5e1', opacity: 30 },
        alert: { fillColor: '#dc2626', borderColor: '#7f1d1d', bufferColor: '#fca5a5', opacity: 42 }
    };
    const style = presets[preset];
    if (!style) return;

    drawStore.setSelectedGraphicStyleSettings({
        ...style,
        borderColorManual: true,
        bufferColorManual: true
    });
};

watch(
    () => props.tabRequestId,
    () => {
        activeTab.value = props.initialTab;
    }
);

watch(
    activeTab,
    tab => {
        confirmDeleteVisible.value = false;
        drawStore.setShapeDetailsActiveTab(tab);
        drawStore.setShapeDetailsLabelsVisible(tab === 'details' || tab === 'style');
        drawStore.setShapeDetailsLabelsUseSettings(tab === 'edit');

        if (tab === 'edit') {
            if (selectedGraphicId.value && drawStore.activeTool !== 'edit') {
                drawStore.setActiveTool('edit');
                drawStore.requestEditSelectedGraphic();
            }
            nextTick(() => editBanner.value?.focus());
            return;
        }

        if (drawStore.activeTool === 'edit') {
            drawStore.requestStopEditMode(false);
        }
    },
    { immediate: true }
);

watch(selectedGraphicId, () => {
    segmentsExpanded.value = false;
    verticesExpanded.value = false;
    confirmDeleteVisible.value = false;
    void refreshDetails();
    requestFeatureCountsIfNeeded();
});

watch(
    () => [
        selectedGeometry.value,
        selectedBuffer.value.distance,
        selectedBuffer.value.unit,
        drawStore.selectedGraphicSettingsUpdateRequestId
    ],
    () => {
        void refreshDetails();
        requestFeatureCountsIfNeeded();
    },
    { immediate: true }
);

onUnmounted(() => {
    drawStore.setShapeDetailsActiveTab('details');
    drawStore.setShapeDetailsLabelsVisible(false);
    drawStore.setShapeDetailsLabelsUseSettings(false);
});
</script>

<style lang="scss" scoped>
.rv-header-title {
    display: flex;
    flex-direction: column;
    min-width: 0;
}
.rv-header-subtitle {
    @apply text-xs text-gray-600;
    font-weight: 400;
    line-height: 1.2;
}
.rv-details-content {
    height: calc(100% + 16px);
    min-height: calc(100% + 16px);
    margin: -8px -8px -8px;
    overflow-x: hidden;
    position: relative;
}
.rv-empty-state {
    @apply p-12 text-sm text-gray-700;
}
.rv-content-actions {
    position: sticky;
    bottom: -8px;
    z-index: 2;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 6px;
    line-height: 1.2;
    margin-top: auto;
    padding: 8px;
    background: #fff;
    border-top: 1px solid #eee;
}
.rv-tab-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 40px;
}
.rv-tab-button {
    @apply text-sm font-bold text-gray-700 bg-white;
    border: 1px solid #ddd;
    border-bottom-color: #cbd5e1;
    min-height: 34px;
    padding: 0 8px;
}
.rv-tab-button + .rv-tab-button {
    border-left: 0;
}
.rv-tab-button.rv-active-tab {
    color: #1d4ed8;
    background: #eff6ff;
    border-bottom-color: #1d4ed8;
    box-shadow: inset 0 -2px 0 #1d4ed8;
}
.rv-tab-button:focus {
    outline: none;
}
.rv-tab-button:focus-visible {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
    z-index: 1;
}
.rv-tab-panels {
    display: flex;
    flex: 1 1 auto;
    min-height: 0;
    min-width: 0;
}
.rv-tab-panel {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
}
.rv-summary-card {
    @apply p-8;
    border-bottom: 1px solid #eee;
}
.rv-subsection {
    @apply p-8;
}
.rv-details-section-header {
    @apply flex items-center justify-between gap-8 text-sm font-bold;
    background: #f5f8fc;
    border: 1px solid #e3eaf3;
    border-radius: 3px;
    box-sizing: border-box;
    color: #1f2937;
    line-height: 1.25;
    min-height: 40px;
    padding: 7px 9px;
    width: 100%;
}
.rv-details-section-title {
    flex: 1 1 auto;
    min-width: 0;
    overflow-wrap: anywhere;
}
.rv-label {
    @apply flex items-center text-sm font-bold text-gray-700;
}
.rv-compact-label {
    @apply mb-4 text-sm text-gray-600;
}
.rv-detail-grid {
    @apply flex flex-col;
}
.rv-detail-row {
    display: grid;
    grid-template-columns: minmax(132px, max-content) minmax(0, 1fr);
    gap: 12px;
    align-items: start;
    margin: 0 -6px;
    padding: 4px 6px;
}
.rv-detail-grid .rv-detail-row:nth-child(even),
.rv-segment-rows .rv-segment-row:nth-child(even),
.rv-vertex-rows .rv-vertex-row:nth-child(even) {
    background: #f7f7f7;
}
.rv-active-row,
.rv-segment-rows .rv-segment-row.rv-active-row,
.rv-vertex-rows .rv-vertex-row.rv-active-row {
    background: #dbeafe;
    box-shadow: inset 3px 0 0 #2563eb;
}
.rv-detail-label {
    @apply text-sm font-bold text-gray-700;
}
.rv-detail-row > .rv-detail-label {
    white-space: nowrap;
}
.rv-detail-value {
    justify-self: end;
    overflow-wrap: anywhere;
    text-align: right;
}
.rv-coordinate-text {
    @apply text-sm text-gray-900;
    overflow-wrap: anywhere;
}
.rv-inline-value {
    @apply flex items-center justify-between gap-6;
    width: 100%;
}
.rv-inline-value .rv-coordinate-text {
    min-width: 0;
}
.rv-inline-label {
    display: inline-flex;
    align-items: center;
    gap: 4px;
}
.rv-info-button {
    @apply inline-flex items-center justify-center text-gray-600 bg-white;
    border: 0;
    height: 20px;
    padding: 0;
    width: 20px;
}
.rv-info-button:hover,
.rv-info-button:focus {
    @apply text-black;
}
.rv-info-button:focus-visible {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
}
.rv-bounds-card {
    border: 1px solid #e3eaf3;
    border-radius: 4px;
    background: transparent;
    padding: 8px 10px;
}
.rv-bounds-line {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    line-height: 1.45;
}
.rv-bounds-line + .rv-bounds-line {
    margin-top: 4px;
}
.rv-bounds-line span {
    @apply text-sm text-gray-800;
    min-width: 0;
}
.rv-collapsible-header {
    cursor: pointer;
    text-align: left;
}
.rv-collapsible-header-spaced {
    margin-top: 8px;
}
.rv-collapsible-header:focus {
    outline: none;
}
.rv-collapsible-header:focus-visible {
    outline: 2px solid #4f46e5;
    outline-offset: -2px;
}
.rv-section-chevron {
    border-bottom: 2px solid #475569;
    border-right: 2px solid #475569;
    flex: 0 0 auto;
    height: 8px;
    transform: rotate(45deg);
    transition: transform 180ms ease;
    width: 8px;
}
.rv-section-chevron.rv-expanded {
    transform: rotate(-135deg);
    margin-top: 4px;
}
.rv-collapse-enter-active,
.rv-collapse-leave-active {
    overflow: hidden;
    transition:
        max-height 180ms ease,
        opacity 180ms ease;
}
.rv-collapse-enter-from,
.rv-collapse-leave-to {
    max-height: 0;
    opacity: 0;
}
.rv-collapse-enter-to,
.rv-collapse-leave-from {
    max-height: 480px;
    opacity: 1;
}
.rv-section-actions {
    @apply flex justify-end;
    margin-top: 8px;
}
.rv-segment-list,
.rv-vertex-list {
    @apply flex flex-col;
    overflow-x: hidden;
}
.rv-scrollable-list {
    max-height: 180px;
    overflow-y: auto;
}
.rv-segment-rows,
.rv-vertex-rows {
    @apply flex flex-col;
    width: 100%;
}
.rv-segment-row {
    display: grid;
    grid-template-columns: 24px 56px minmax(0, 1fr) 28px;
    gap: 6px;
    align-items: center;
    margin: 0;
    min-height: 32px;
    padding: 4px 6px;
    width: 100%;
}
.rv-segment-row[role='button'],
.rv-vertex-row[role='button'] {
    cursor: pointer;
}
.rv-segment-row[role='button']:focus,
.rv-vertex-row[role='button']:focus {
    outline: 2px solid #4f46e5;
    outline-offset: -2px;
}
.rv-segment-letter {
    color: #1d4ed8;
}
.rv-segment-pair {
    @apply text-sm font-bold text-gray-700;
    white-space: nowrap;
}
.rv-vertex-row {
    display: grid;
    grid-template-columns: 20px minmax(0, 1fr) 28px;
    gap: 6px;
    align-items: center;
    margin: 0;
    padding: 4px 6px;
    width: 100%;
}
.rv-vertex-row .rv-coordinate-text {
    justify-self: end;
    min-width: 0;
    text-align: right;
}
.rv-icon-button {
    @apply inline-flex items-center justify-center text-gray-700 bg-white;
    border: 1px solid #ddd;
    width: 28px;
    height: 28px;
    flex: 0 0 28px;
    line-height: 0;
    padding: 0;
}
.rv-icon-button svg,
.rv-action-button svg {
    display: block;
    height: 16px;
    width: 16px;
}
.rv-icon-button:disabled,
.rv-action-button:disabled {
    @apply text-gray-400;
}
.rv-icon-button:focus,
.rv-action-button:focus,
.rv-preset-button:focus {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
}
.rv-count-badge {
    @apply inline-flex items-center justify-center text-xs font-bold text-gray-700 bg-gray-100;
    border: 1px solid #cbd5e1;
    border-radius: 9999px;
    flex: 0 0 24px;
    height: 24px;
    min-width: 24px;
    padding: 0 4px;
}
.rv-action-button {
    @apply inline-flex items-center justify-center gap-4 text-sm text-gray-700 bg-white;
    border: 1px solid #ddd;
    min-height: 30px;
    padding: 0 8px;
    white-space: nowrap;
}
.rv-confirm-text {
    @apply text-sm text-gray-800;
    align-self: center;
    flex: 1 1 100%;
    line-height: 1.25;
    margin: 0;
}
.rv-confirm-actions {
    justify-content: flex-start;
}
.rv-confirm-buttons {
    display: flex;
    gap: 6px;
    justify-content: flex-end;
    margin-left: auto;
}
.rv-danger-action-button {
    @apply text-red-700;
    border-color: #f0b4b4;
}
.rv-map-options {
    @apply flex flex-col gap-6;
    border: 0;
    margin: 0;
    padding: 8px;
}
.rv-checkbox-row {
    @apply flex items-center gap-8 text-sm text-gray-800;
    padding-left: 10px;
}
.rv-checkbox-row input {
    flex: 0 0 auto;
}
.rv-disabled-option {
    @apply text-gray-500;
}
.rv-muted {
    @apply text-sm text-gray-600;
}
.rv-select,
.rv-input {
    @apply p-5 bg-white;
    border-bottom: 1px solid #ddd;
    margin-bottom: 1px;
    width: 100%;
}
.rv-select:focus,
.rv-input:focus {
    outline: none;
    border-bottom: 2px solid #ddd;
    margin-bottom: 0px;
}
.rv-buffer-distance-input {
    width: 112px;
}
.rv-notice {
    @apply p-8 text-sm text-gray-700;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
    margin: 0;
}
.rv-settings-divider {
    @apply block;
    border-bottom: 1px solid #eee;
    margin: 0;
}
.rv-preset-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
}
.rv-preset-button {
    @apply inline-flex items-center gap-6 text-sm text-gray-700 bg-white;
    border: 1px solid #ddd;
    min-height: 30px;
    padding: 0 8px;
}
.rv-preset-swatch {
    border: 1px solid #9ca3af;
    border-radius: 3px;
    height: 16px;
    width: 16px;
}
.rv-style-preview {
    position: relative;
    height: 72px;
    border: 1px solid #e5e7eb;
    background: linear-gradient(45deg, #f8fafc 25%, transparent 25%),
        linear-gradient(-45deg, #f8fafc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f8fafc 75%),
        linear-gradient(-45deg, transparent 75%, #f8fafc 75%);
    background-size: 18px 18px;
    background-position:
        0 0,
        0 9px,
        9px -9px,
        -9px 0px;
}
.rv-style-preview-shape {
    position: absolute;
    inset: 18px 72px 18px 72px;
    border: 3px solid;
}
.rv-style-preview-buffer {
    position: absolute;
    inset: 10px 52px 10px 52px;
    border: 2px dashed;
}
.rv-edit-banner {
    @apply flex flex-col gap-4 p-8 text-sm text-indigo-900;
    background: #eef2ff;
    border-bottom: 1px solid #c7d2fe;
}
.rv-edit-banner:focus {
    outline: 2px solid #4f46e5;
    outline-offset: -2px;
}
</style>
