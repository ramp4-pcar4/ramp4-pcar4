import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';

import type { DrawTypeConfig } from '../api/drawApi';
import {
    cloneDrawBufferSettings,
    cloneDrawMapLabelSettings,
    cloneDrawStyleSettings,
    createDefaultDrawBufferSettings,
    createDefaultDrawStyleSettings,
    darkenHexColor,
    lightenHexColor,
    normalizeDrawIdentifyBufferMode,
    normalizeHexColor
} from '../settings';
import type {
    DrawBufferSettings,
    DrawBufferUnit,
    DrawIdentifyBufferMode,
    DrawMapLabelSettings,
    DrawStyleSettings
} from '../settings';
import type { DrawShapeImportRecord } from '../shape-io';

// DrawTypeConfig is a type that defines the configuration for each draw type

export type ActiveToolList = 'circle' | 'point' | 'polygon' | 'polyline' | 'rectangle' | 'edit' | '' | null;
export type DrawShapeInspectorTab = 'details' | 'style' | 'edit';

export interface DrawShapeFeatureCounts {
    shape: number | null;
    buffer: number | null;
    total: number | null;
    loading: boolean;
    updatedAt?: number;
}

export const useDrawStore = defineStore('draw', () => {
    let graphicIdCounter = 0;

    const supportedTypes = ref<DrawTypeConfig[]>([]);
    const configParsed = ref(false);
    const activeTool = ref<ActiveToolList>(null);
    const graphics = reactive<any[]>([]);
    const selectedGraphicId = ref<string | null>(null);
    const mapNavEl = ref<unknown | null>(null);
    const measurementsEnabled = ref(false);
    const hoveredSegmentKey = ref<string | null>(null);
    const selectedSegmentKey = ref<string | null>(null);
    const hoveredVertexKey = ref<string | null>(null);
    const selectedVertexKey = ref<string | null>(null);
    const shapeDetailsPickEnabled = ref(false);
    const shapeDetailsLabelsVisible = ref(false);
    const shapeDetailsLabelsUseSettings = ref(false);
    const shapeDetailsActiveTab = ref<DrawShapeInspectorTab>('details');
    const deleteSelectedGraphicRequestId = ref(0);
    const editSelectedGraphicRequestId = ref(0);
    const identifySelectedGraphicRequestId = ref(0);
    const shapePanelFocusRequestId = ref(0);
    const stopEditModeRequestId = ref(0);
    const stopEditModeClearSelection = ref(true);
    const cancelEditModeRequestId = ref(0);
    const cancelEditModeClearSelection = ref(false);
    const refreshSelectedGraphicFeatureCountsRequestId = ref(0);
    const selectedGraphicSettingsUpdateRequestId = ref(0);
    const selectedGraphicSettingsUpdatedGraphicId = ref<string | null>(null);
    const mapLabelSettingsUpdateRequestId = ref(0);
    const mapLabelSettingsUpdatedGraphicId = ref<string | null>(null);
    const importShapesRequestId = ref(0);
    const importShapeRecords = ref<DrawShapeImportRecord[]>([]);
    const identifyGeometryGraphicId = ref<string | null>(null);
    const styleSettings = reactive<DrawStyleSettings>(createDefaultDrawStyleSettings());
    const bufferSettings = reactive<DrawBufferSettings>(createDefaultDrawBufferSettings());
    const identifyBufferMode = ref<DrawIdentifyBufferMode>('shape-buffer');
    const shapeFeatureCounts = reactive<Record<string, DrawShapeFeatureCounts>>({});
    const activeSegmentKey = computed(() => hoveredSegmentKey.value ?? selectedSegmentKey.value);
    const activeVertexKey = computed(() => hoveredVertexKey.value ?? selectedVertexKey.value);

    function setSupportedTypes(types: DrawTypeConfig[]) {
        supportedTypes.value.splice(0, supportedTypes.value.length, ...types);
        configParsed.value = true;
    }

    function setActiveTool(tool: ActiveToolList) {
        activeTool.value = tool;
    }

    function addGraphic(graphic: any) {
        const id = graphic.id ?? graphic.attributes?.id ?? `graphic-${Date.now()}-${++graphicIdCounter}`;
        graphics.push({
            ...graphic,
            id
        });
        return id;
    }

    function removeGraphic(id: string) {
        const index = graphics.findIndex(g => g.id === id);
        if (index !== -1) {
            graphics.splice(index, 1);
            delete shapeFeatureCounts[id];

            // Clear selection if the removed graphic was selected
            if (selectedGraphicId.value === id) {
                selectedGraphicId.value = null;
            }
            if (graphics.length === 0) {
                shapeDetailsPickEnabled.value = false;
                shapeDetailsLabelsVisible.value = false;
                shapeDetailsLabelsUseSettings.value = false;
                shapeDetailsActiveTab.value = 'details';
            }
            clearMeasurementInteraction();
        }
    }

    function selectGraphic(id: string) {
        if (selectedGraphicId.value !== id) {
            clearMeasurementInteraction();
        }
        selectedGraphicId.value = id;
    }

    function clearSelection() {
        selectedGraphicId.value = null;
        clearMeasurementInteraction();
    }

    function requestDeleteSelectedGraphic() {
        deleteSelectedGraphicRequestId.value++;
    }

    function requestEditSelectedGraphic() {
        editSelectedGraphicRequestId.value++;
    }

    function requestIdentifySelectedGraphic() {
        identifySelectedGraphicRequestId.value++;
    }

    function requestStopEditMode(clearSelection = true) {
        stopEditModeClearSelection.value = clearSelection;
        stopEditModeRequestId.value++;
    }

    function requestCancelEditMode(clearSelection = false) {
        cancelEditModeClearSelection.value = clearSelection;
        cancelEditModeRequestId.value++;
    }

    function requestRefreshSelectedGraphicFeatureCounts() {
        refreshSelectedGraphicFeatureCountsRequestId.value++;
    }

    function requestShapePanelFocus() {
        shapePanelFocusRequestId.value++;
    }

    function requestImportShapes(shapes: DrawShapeImportRecord[]) {
        importShapeRecords.value = [...importShapeRecords.value, ...shapes];
        importShapesRequestId.value++;
    }

    function clearImportShapes(requestId?: number) {
        if (requestId !== undefined && requestId !== importShapesRequestId.value) {
            return;
        }
        importShapeRecords.value = [];
    }

    function getSelectedGraphic() {
        if (!selectedGraphicId.value) return null;
        return graphics.find(g => g.id === selectedGraphicId.value);
    }

    function updateGraphicGeometry(id: string, geometry: any) {
        const graphic = graphics.find(g => g.id === id);
        if (graphic) {
            graphic.geometry = geometry;
        }
    }

    function updateGraphic(id: string, updates: any) {
        const graphic = graphics.find(g => g.id === id);
        if (graphic) {
            Object.assign(graphic, updates);
        }
    }

    function setGraphicMapLabelSettings(id: string, settings: Partial<DrawMapLabelSettings>) {
        const graphic = graphics.find(g => g.id === id);
        if (!graphic) return;

        graphic.attributes = {
            ...(graphic.attributes ?? {}),
            drawMapLabels: cloneDrawMapLabelSettings({
                ...(graphic.attributes?.drawMapLabels ?? {}),
                ...settings
            })
        };
        mapLabelSettingsUpdatedGraphicId.value = id;
        mapLabelSettingsUpdateRequestId.value++;
    }

    function updateSelectedGraphicSettings(updater: (graphic: any) => void) {
        const id = selectedGraphicId.value;
        if (!id) return;

        const graphic = graphics.find(g => g.id === id);
        if (!graphic) return;

        updater(graphic);
        selectedGraphicSettingsUpdatedGraphicId.value = id;
        selectedGraphicSettingsUpdateRequestId.value++;
    }

    function setSelectedGraphicStyleSettings(settings: Partial<DrawStyleSettings>) {
        updateSelectedGraphicSettings(graphic => {
            const currentStyle = cloneDrawStyleSettings(graphic.attributes?.drawStyle);
            graphic.attributes = {
                ...(graphic.attributes ?? {}),
                drawStyle: cloneDrawStyleSettings({
                    ...currentStyle,
                    ...settings
                })
            };
        });
    }

    function setSelectedGraphicFillColor(color: string) {
        updateSelectedGraphicSettings(graphic => {
            const currentStyle = cloneDrawStyleSettings(graphic.attributes?.drawStyle);
            const fillColor = normalizeHexColor(color, currentStyle.fillColor);
            graphic.attributes = {
                ...(graphic.attributes ?? {}),
                drawStyle: cloneDrawStyleSettings({
                    ...currentStyle,
                    fillColor,
                    borderColor: currentStyle.borderColorManual ? currentStyle.borderColor : darkenHexColor(fillColor),
                    bufferColor: currentStyle.bufferColorManual ? currentStyle.bufferColor : lightenHexColor(fillColor),
                    borderColorManual: currentStyle.borderColorManual,
                    bufferColorManual: currentStyle.bufferColorManual
                })
            };
        });
    }

    function setSelectedGraphicBorderColor(color: string) {
        updateSelectedGraphicSettings(graphic => {
            const currentStyle = cloneDrawStyleSettings(graphic.attributes?.drawStyle);
            graphic.attributes = {
                ...(graphic.attributes ?? {}),
                drawStyle: cloneDrawStyleSettings({
                    ...currentStyle,
                    borderColor: normalizeHexColor(color, currentStyle.borderColor),
                    borderColorManual: true
                })
            };
        });
    }

    function setSelectedGraphicBufferColor(color: string) {
        updateSelectedGraphicSettings(graphic => {
            const currentStyle = cloneDrawStyleSettings(graphic.attributes?.drawStyle);
            graphic.attributes = {
                ...(graphic.attributes ?? {}),
                drawStyle: cloneDrawStyleSettings({
                    ...currentStyle,
                    bufferColor: normalizeHexColor(color, currentStyle.bufferColor),
                    bufferColorManual: true
                })
            };
        });
    }

    function setSelectedGraphicOpacity(opacity: number) {
        const nextOpacity = Number(opacity);
        setSelectedGraphicStyleSettings({
            opacity: Number.isFinite(nextOpacity) ? Math.min(100, Math.max(0, Math.round(nextOpacity))) : 0
        });
    }

    function setSelectedGraphicBufferSettings(settings: Partial<DrawBufferSettings>) {
        updateSelectedGraphicSettings(graphic => {
            const currentBuffer = cloneDrawBufferSettings(graphic.attributes?.drawBuffer);
            graphic.attributes = {
                ...(graphic.attributes ?? {}),
                drawBuffer: cloneDrawBufferSettings({
                    ...currentBuffer,
                    ...settings
                })
            };
        });
    }

    function setSelectedGraphicBufferDistance(distance: number) {
        const nextDistance = Number(distance);
        setSelectedGraphicBufferSettings({
            distance: Number.isFinite(nextDistance) ? Math.max(0, nextDistance) : 0
        });
    }

    function setSelectedGraphicBufferUnit(unit: DrawBufferUnit) {
        setSelectedGraphicBufferSettings({ unit });
    }

    function setSelectedGraphicIdentifyBufferMode(mode: DrawIdentifyBufferMode) {
        updateSelectedGraphicSettings(graphic => {
            graphic.attributes = {
                ...(graphic.attributes ?? {}),
                drawIdentifyBufferMode: normalizeDrawIdentifyBufferMode(mode)
            };
        });
    }

    function setMeasurementsEnabled(enabled: boolean) {
        measurementsEnabled.value = enabled;
    }

    function toggleMeasurements() {
        measurementsEnabled.value = !measurementsEnabled.value;
    }

    function setHoveredSegmentKey(key: string | null) {
        hoveredSegmentKey.value = key;
    }

    function setSelectedSegmentKey(key: string | null) {
        selectedSegmentKey.value = key;
    }

    function setHoveredVertexKey(key: string | null) {
        hoveredVertexKey.value = key;
    }

    function setSelectedVertexKey(key: string | null) {
        selectedVertexKey.value = key;
    }

    function clearMeasurementInteraction() {
        hoveredSegmentKey.value = null;
        selectedSegmentKey.value = null;
        hoveredVertexKey.value = null;
        selectedVertexKey.value = null;
    }

    function setShapeDetailsPickEnabled(enabled: boolean) {
        shapeDetailsPickEnabled.value = enabled;
    }

    function setShapeDetailsLabelsVisible(visible: boolean) {
        shapeDetailsLabelsVisible.value = visible;
    }

    function setShapeDetailsLabelsUseSettings(useSettings: boolean) {
        shapeDetailsLabelsUseSettings.value = useSettings;
    }

    function setShapeDetailsActiveTab(tab: DrawShapeInspectorTab) {
        shapeDetailsActiveTab.value = tab;
        if (tab !== 'details') {
            clearMeasurementInteraction();
        }
    }

    function toggleShapeDetailsPickEnabled() {
        shapeDetailsPickEnabled.value = !shapeDetailsPickEnabled.value;
    }

    function setFillColor(color: string) {
        const fillColor = normalizeHexColor(color, styleSettings.fillColor);
        styleSettings.fillColor = fillColor;
        styleSettings.borderColor = darkenHexColor(fillColor);
        styleSettings.bufferColor = lightenHexColor(fillColor);
        styleSettings.borderColorManual = false;
        styleSettings.bufferColorManual = false;
    }

    function setBorderColor(color: string) {
        styleSettings.borderColor = normalizeHexColor(color, styleSettings.borderColor);
        styleSettings.borderColorManual = true;
    }

    function setBufferColor(color: string) {
        styleSettings.bufferColor = normalizeHexColor(color, styleSettings.bufferColor);
        styleSettings.bufferColorManual = true;
    }

    function setOpacity(opacity: number) {
        const nextOpacity = Number(opacity);
        styleSettings.opacity = Number.isFinite(nextOpacity) ? Math.min(100, Math.max(0, Math.round(nextOpacity))) : 0;
    }

    function setStyleSettings(settings: Partial<DrawStyleSettings>) {
        Object.assign(styleSettings, cloneDrawStyleSettings(settings));
    }

    function setBufferDistance(distance: number) {
        const nextDistance = Number(distance);
        bufferSettings.distance = Number.isFinite(nextDistance) ? Math.max(0, nextDistance) : 0;
    }

    function setBufferUnit(unit: DrawBufferUnit) {
        bufferSettings.unit = cloneDrawBufferSettings({ unit }).unit;
    }

    function setBufferSettings(settings: Partial<DrawBufferSettings>) {
        Object.assign(bufferSettings, cloneDrawBufferSettings(settings));
    }

    function setIdentifyBufferMode(mode: DrawIdentifyBufferMode) {
        identifyBufferMode.value = normalizeDrawIdentifyBufferMode(mode);
    }

    function setIdentifyGeometryGraphicId(id: string | null) {
        identifyGeometryGraphicId.value = id;
    }

    function setShapeFeatureCounts(id: string, counts: DrawShapeFeatureCounts) {
        shapeFeatureCounts[id] = counts;
    }

    function setShapeFeatureCountsLoading(id: string) {
        shapeFeatureCounts[id] = {
            shape: shapeFeatureCounts[id]?.shape ?? null,
            buffer: shapeFeatureCounts[id]?.buffer ?? null,
            total: shapeFeatureCounts[id]?.total ?? null,
            loading: true,
            updatedAt: shapeFeatureCounts[id]?.updatedAt
        };
    }

    return {
        supportedTypes,
        configParsed,
        activeTool,
        graphics,
        selectedGraphicId,
        measurementsEnabled,
        hoveredSegmentKey,
        selectedSegmentKey,
        activeSegmentKey,
        hoveredVertexKey,
        selectedVertexKey,
        activeVertexKey,
        shapeDetailsPickEnabled,
        shapeDetailsLabelsVisible,
        shapeDetailsLabelsUseSettings,
        shapeDetailsActiveTab,
        deleteSelectedGraphicRequestId,
        editSelectedGraphicRequestId,
        identifySelectedGraphicRequestId,
        shapePanelFocusRequestId,
        stopEditModeRequestId,
        stopEditModeClearSelection,
        cancelEditModeRequestId,
        cancelEditModeClearSelection,
        refreshSelectedGraphicFeatureCountsRequestId,
        selectedGraphicSettingsUpdateRequestId,
        selectedGraphicSettingsUpdatedGraphicId,
        mapLabelSettingsUpdateRequestId,
        mapLabelSettingsUpdatedGraphicId,
        importShapesRequestId,
        importShapeRecords,
        identifyGeometryGraphicId,
        styleSettings,
        bufferSettings,
        identifyBufferMode,
        shapeFeatureCounts,
        setSupportedTypes,
        setActiveTool,
        addGraphic,
        removeGraphic,
        selectGraphic,
        clearSelection,
        requestDeleteSelectedGraphic,
        requestEditSelectedGraphic,
        requestIdentifySelectedGraphic,
        requestStopEditMode,
        requestCancelEditMode,
        requestRefreshSelectedGraphicFeatureCounts,
        requestShapePanelFocus,
        requestImportShapes,
        clearImportShapes,
        getSelectedGraphic,
        updateGraphicGeometry,
        updateGraphic,
        setGraphicMapLabelSettings,
        setSelectedGraphicStyleSettings,
        setSelectedGraphicFillColor,
        setSelectedGraphicBorderColor,
        setSelectedGraphicBufferColor,
        setSelectedGraphicOpacity,
        setSelectedGraphicBufferSettings,
        setSelectedGraphicBufferDistance,
        setSelectedGraphicBufferUnit,
        setSelectedGraphicIdentifyBufferMode,
        setMeasurementsEnabled,
        toggleMeasurements,
        setHoveredSegmentKey,
        setSelectedSegmentKey,
        setHoveredVertexKey,
        setSelectedVertexKey,
        clearMeasurementInteraction,
        setShapeDetailsPickEnabled,
        setShapeDetailsLabelsVisible,
        setShapeDetailsLabelsUseSettings,
        setShapeDetailsActiveTab,
        toggleShapeDetailsPickEnabled,
        setFillColor,
        setBorderColor,
        setBufferColor,
        setOpacity,
        setStyleSettings,
        setBufferDistance,
        setBufferUnit,
        setBufferSettings,
        setIdentifyBufferMode,
        setIdentifyGeometryGraphicId,
        setShapeFeatureCounts,
        setShapeFeatureCountsLoading,
        mapNavEl
    };
});
