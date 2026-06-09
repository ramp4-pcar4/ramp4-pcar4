<template>
    <arcgis-sketch ref="sketchEl" style="display: none" />
    <div v-if="drawStore.measurementsEnabled" class="sr-only" aria-live="polite" aria-atomic="true">
        {{ measurementSummary }}
    </div>
</template>

<script setup lang="ts">
/**
 * @file draw.vue
 * @description Implements drawing functionality using the ESRI Sketch component.
 * It supports multiple drawing tools, multi-point mode, selection, deletion,
 * keyboard-based editing (including arrow key movement, resizing, and rotation),
 * and accessibility announcements.
 * See: https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-sketch/
 */

/* --------------------------------------------------------------------------
 * IMPORTS
 * -------------------------------------------------------------------------- */
import { inject, nextTick, onMounted, onUnmounted, reactive, useTemplateRef, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { GlobalEvents } from '@/api';
import type { PanelInstance } from '@/api';
import type { InstanceAPI, LayerInstance } from '@/api/internal';
import type { PanguardAPI } from '@/fixtures/panguard/api/panguard';
import { LayerType, Point } from '@/geo/api';
import type { MapClick } from '@/geo/api';
import {
    EsriGeometryFromJson,
    EsriGraphic,
    EsriIntersectsOperator,
    EsriPoint,
    EsriPolyline,
    EsriSimpleFillSymbol,
    EsriSimpleLineSymbol,
    EsriSimpleMarkerSymbol,
    EsriSketchViewModel
} from '@/geo/esri';
import type {
    EsriGeometry,
    EsriGraphicHit,
    EsriGraphicsLayer,
    EsriSketch,
    EsriSketchCreateEvent,
    EsriSketchUpdateEvent,
    EsriSketchUpdateOptions,
    EsriSymbol,
    EsriViewClickEvent
} from '@/geo/esri';
import { usePanelStore } from '@/stores/panel';

import {
    DRAW_CLICK_MOUSE_TOLERANCE,
    DRAW_CLICK_TOUCH_TOLERANCE,
    DRAW_EDIT_GRAPHICS_LAYER_ID,
    DRAW_GRAPHICS_LAYER_ID,
    DRAW_HIGHLIGHT_GRAPHICS_LAYER_ID,
    SKETCH_UPDATE_DELAY_MS
} from './constants';
import {
    cloneDrawBufferSettings,
    cloneDrawMapLabelSettings,
    cloneDrawStyleSettings,
    createDrawBufferGraphic,
    createDrawSymbol,
    DRAW_SETTINGS_PANEL_ID,
    DRAW_SHAPE_DETAILS_PANEL_ID,
    loadDrawBufferOperators,
    resolveGraphicBufferSettings,
    resolveGraphicIdentifyBufferMode,
    resolveGraphicMapLabelSettings,
    resolveGraphicStyleSettings
} from './settings';
import type { DrawBufferSettings, DrawIdentifyBufferMode, DrawMapLabelSettings, DrawStyleSettings } from './settings';
import { isPanelOpen, openDrawShapeDetailsPanel } from './panel-utils';
import type { DrawShapeDetailsTab } from './panel-utils';
import { getDrawShapeId } from './shape-io';
import type { DrawShapeImportRecord } from './shape-io';
import { useDrawStore } from './store';
import type { DrawGraphicLike } from './types';
import { buildDrawSegments, buildDrawVertices, parseDrawMeasurementTargetKey } from './measurement-utils';
import { useDrawIdentify } from './use-draw-identify';
import { useDrawKeyboard } from './use-draw-keyboard';
import { useDrawMeasurements } from './use-draw-measurements';

/* --------------------------------------------------------------------------
 * CONSTANTS & GLOBAL VARIABLES
 * -------------------------------------------------------------------------- */
const { t, availableLocales, locale } = useI18n();

// add helper to translate raw tool names (fallbacks to "unknown")
const translateTerm = (key?: string): string => (key ? t(`draw.${key}`) : t('draw.unknown'));

const iApi = inject('iApi') as InstanceAPI;
const drawStore = useDrawStore();
const panelStore = usePanelStore();

const buildLocaleRecord = (messageKey: string): Record<string, string> => {
    const locales = availableLocales.length ? availableLocales : [locale.value];
    const translations: Record<string, string> = {};
    for (const locale of locales) {
        translations[locale] = t(messageKey, {}, { locale });
    }
    return translations;
};

// Sketch widget and graphics layer reference variables
let sketch: HTMLArcgisSketchElement | null = null;
const sketchEl = useTemplateRef<HTMLArcgisSketchElement>('sketchEl');
let graphicsLayer: EsriGraphicsLayer | null = null;
let editGraphicsLayer: EsriGraphicsLayer | null = null;
let highlightGraphicsLayer: EsriGraphicsLayer | null = null;
let editSketchViewModel: EsriSketchViewModel | null = null;
let editSketchUpdateHandle: { remove: () => void } | null = null;
let viewClickHandler: { remove: () => void } | null = null;
let sketchEventsRegistered = false;
let drawToolsInitId = 0;
let sketchUpdateTimeout: number | null = null;
let bufferGraphics = new Map<string, EsriGraphic>();
let editActivationRequestId = 0;
const drawGraphicIdCounters: Record<string, number> = {};
let shapePanelFocusRequestId = 0;
let processedImportShapesRequestId = 0;

// Variables for selected and highlighted graphics
let selectedGraphic: EsriGraphic | null = null;
let highlightGraphic: EsriGraphic | null = null;
let highlightGraphicLayer: EsriGraphicsLayer | null = null;
let segmentHighlightGraphic: EsriGraphic | null = null;
let vertexHighlightGraphic: EsriGraphic | null = null;

type ArcgisSketchWithWidget = HTMLArcgisSketchElement & { widget?: EsriSketch; viewModel?: EsriSketchViewModel };
type ActiveSketchEdit = { sourceGraphic: EsriGraphic; editGraphic: EsriGraphic; originalGeometry: EsriGeometry };
type ViewPadding = { top: number; right: number; bottom: number; left: number };
type ShapePanelFocusMinimizedPanel = { panel: PanelInstance; wasPinned: boolean };
type ShapePanelFocusSession = {
    previousViewpoint?: any;
    previousPadding: ViewPadding;
    paddingAdjusted: boolean;
    minimizedPanels: ShapePanelFocusMinimizedPanel[];
};
let activeSketchEdit: ActiveSketchEdit | null = null;
let shapePanelFocusSession: ShapePanelFocusSession | null = null;

const DRAW_TOOL_KEYBOARD_SHORTCUTS = [
    { type: 'point', key: 'P', descriptionKey: 'draw.keyboard.key.point' },
    { type: 'polyline', key: 'L', descriptionKey: 'draw.keyboard.key.polyline' },
    { type: 'polygon', key: 'G', descriptionKey: 'draw.keyboard.key.polygon' },
    { type: 'circle', key: 'C', descriptionKey: 'draw.keyboard.key.circle' },
    { type: 'rectangle', key: 'R', descriptionKey: 'draw.keyboard.key.rectangle' }
] as const;

const rampEventHandlers = reactive<Array<string>>([]);
let keyboardNamespace: string | undefined;
const { measurementSummary, clearMeasurementGraphics, refreshMeasurementGraphics, scheduleMeasurementRefresh } =
    useDrawMeasurements({
        iApi,
        drawStore,
        locale,
        t,
        getGraphicsLayer: () => graphicsLayer,
        isShapeDetailsOpen: () => shapeDetailsPanelOpen(),
        getShapeDetailsGraphic: () => getSelectedEsriGraphic()
    });
let panguardEnabledBeforeDrawInteraction: boolean | null = null;

const drawInteractionNeedsPanguardDisabled = (tool = drawStore.activeTool): boolean =>
    (tool !== null && tool !== '') || drawStore.shapeDetailsPickEnabled || shapeDetailsPanelOpen();

const setPanguardForDrawInteraction = (tool = drawStore.activeTool) => {
    const panguard = iApi.fixture.get<PanguardAPI>('panguard');

    if (drawInteractionNeedsPanguardDisabled(tool)) {
        if (panguard && panguardEnabledBeforeDrawInteraction === null) {
            panguardEnabledBeforeDrawInteraction = panguard.enabled;
            panguard.setEnabled(false);
        }
        return;
    }

    if (panguardEnabledBeforeDrawInteraction !== null) {
        panguard?.setEnabled(panguardEnabledBeforeDrawInteraction);
        panguardEnabledBeforeDrawInteraction = null;
    }
};

const onSketchCreate = (event: Event) => {
    handleSketchCreateEvent((event as CustomEvent<EsriSketchCreateEvent>).detail);
};

const onSketchUpdate = (event: Event) => {
    handleSketchUpdateEvent((event as CustomEvent<EsriSketchUpdateEvent>).detail);
};

const cancelSketch = () => {
    try {
        sketch?.cancel();
    } catch (e) {
        console.warn('Unable to cancel draw sketch.', e);
    }
};

const cancelPendingSketchUpdate = () => {
    if (sketchUpdateTimeout === null) return;

    window.clearTimeout(sketchUpdateTimeout);
    sketchUpdateTimeout = null;
};

const getSketchWidget = (): EsriSketch | undefined => (sketch as ArcgisSketchWithWidget | null)?.widget;

const getSketchViewModel = (
    sketchComponent: ArcgisSketchWithWidget | null = sketch as ArcgisSketchWithWidget | null
): EsriSketchViewModel | undefined => sketchComponent?.widget?.viewModel ?? sketchComponent?.viewModel;

const setSketchUpdateOnGraphicClick = (
    enabled: boolean,
    sketchComponent: ArcgisSketchWithWidget | null = sketch as ArcgisSketchWithWidget | null
) => {
    const sketchViewModel = getSketchViewModel(sketchComponent);
    if (sketchViewModel) {
        sketchViewModel.updateOnGraphicClick = enabled;
    }
};

const isSketchUpdateActive = (): boolean =>
    editSketchViewModel?.state === 'active' || getSketchViewModel()?.state === 'active' || sketch?.state === 'active';

const sketchUpdateGraphicsIncludes = (graphic: EsriGraphic, sketchViewModel?: EsriSketchViewModel): boolean => {
    const updateGraphics =
        sketchViewModel?.updateGraphics ??
        getSketchViewModel()?.updateGraphics ??
        getSketchWidget()?.updateGraphics ??
        sketch?.updateGraphics;
    if (!updateGraphics) return false;

    return (
        updateGraphics.includes(graphic) ||
        updateGraphics
            .toArray()
            .some(updateGraphic => updateGraphic === graphic || updateGraphic.attributes?.id === graphic.attributes?.id)
    );
};

const getSketchUpdateOptions = (graphic: EsriGraphic): EsriSketchUpdateOptions => {
    const defaultOptions: Partial<EsriSketchUpdateOptions> =
        getSketchViewModel()?.defaultUpdateOptions ??
        getSketchWidget()?.defaultUpdateOptions ??
        sketch?.defaultUpdateOptions ??
        {};

    return {
        ...defaultOptions,
        tool: graphic.geometry?.type === 'point' ? 'move' : 'transform',
        toggleToolOnClick: true,
        highlightOptions: {
            ...defaultOptions.highlightOptions,
            enabled: false
        },
        reshapeOptions: {
            ...defaultOptions.reshapeOptions
        }
    };
};

const setSketchLayer = (layer: EsriGraphicsLayer | null) => {
    if (!sketch || !layer) return;

    const sketchWidget = getSketchWidget();
    const sketchViewModel = getSketchViewModel();
    sketch.layer = layer;
    if (sketchWidget) {
        sketchWidget.layer = layer;
    }
    if (sketchViewModel) {
        sketchViewModel.layer = layer;
        setSketchUpdateOnGraphicClick(false);
    }
};

const destroyEditSketchViewModel = () => {
    editSketchUpdateHandle?.remove();
    editSketchUpdateHandle = null;

    if (!editSketchViewModel) return;

    try {
        editSketchViewModel.cancel();
    } catch (e) {
        console.warn('Unable to cancel draw edit sketch view model.', e);
    }
    editSketchViewModel.destroy();
    editSketchViewModel = null;
};

const getCurrentDrawStyleSettings = (): DrawStyleSettings => cloneDrawStyleSettings(drawStore.styleSettings);

const getCurrentDrawBufferSettings = (): DrawBufferSettings => cloneDrawBufferSettings(drawStore.bufferSettings);

const getCurrentDrawIdentifyBufferMode = (): DrawIdentifyBufferMode => drawStore.identifyBufferMode;

const getDrawGraphicId = (graphic: DrawGraphicLike | undefined): string | undefined =>
    graphic ? getDrawShapeId(graphic) : undefined;

const isDrawSourceGraphic = (graphic: EsriGraphic): boolean =>
    !!graphic.attributes?.id && !graphic.attributes?.drawMeasurement && !graphic.attributes?.drawBufferFor;

const ensureRampGraphicsLayer = async (id: string): Promise<LayerInstance | undefined> => {
    let layer = iApi.geo.layer.getLayer(id);

    if (layer?.esriLayer) {
        const layerDestroyed = !!(layer.esriLayer as { destroyed?: boolean }).destroyed;
        const layerInMap = (iApi.geo.map.esriMap?.layers.indexOf(layer.esriLayer) ?? -1) > -1;
        if (layerDestroyed || !layerInMap) {
            removeRampGraphicsLayer(id);
            layer = undefined;
        }
    }

    if (!layer) {
        layer = iApi.geo.layer.createLayer({
            id,
            layerType: LayerType.GRAPHIC,
            cosmetic: true,
            system: true,
            url: ''
        });
        await iApi.geo.map.addLayer(layer);
    } else if (!layer.esriLayer) {
        try {
            await layer.loadPromise();
        } catch (e) {
            console.warn(`Unable to initialize draw graphics layer ${id}.`, e);
            return undefined;
        }
    }

    if (!layer.esriLayer) {
        console.warn(`Draw graphics layer ${id} does not have an Esri layer.`);
        return undefined;
    }

    return layer;
};

const projectGeometryToMapSR = async (geometry: EsriGeometry, id?: string): Promise<EsriGeometry> => {
    const rampGeometry = iApi.geo.geom.geomEsriToRamp(geometry, id);
    const projGeometry = await iApi.geo.map.geomToMapSR(rampGeometry);
    const mapSR = iApi.geo.map.getSR();

    if (rampGeometry.sr.isEqual(mapSR)) {
        return geometry.clone();
    }

    return iApi.geo.geom.geomRampToEsri(projGeometry);
};

const setGraphicGeometry = (graphic: EsriGraphic, geometry: EsriGeometry) => {
    graphic.geometry = geometry;
    graphic.set('geometry', geometry);
};

const syncDrawGraphicsToMapSR = async (initId?: number): Promise<void> => {
    const layer = graphicsLayer;
    if (!layer) return;

    for (const graphic of layer.graphics.toArray().filter(isDrawSourceGraphic)) {
        const id = getDrawGraphicId(graphic);
        const geometry = graphic.geometry as EsriGeometry | undefined;
        if (!geometry) continue;

        try {
            const projectedGeometry = await projectGeometryToMapSR(geometry, id);
            if (initId !== undefined && initId !== drawToolsInitId) return;

            setGraphicGeometry(graphic, projectedGeometry);
            syncGraphicStoreRecord(graphic);
        } catch (e) {
            console.warn('Unable to project draw graphic to the current map projection.', e);
        }
    }
};

const removeRampGraphicsLayer = (id: string) => {
    const layer = iApi.geo.layer.getLayer(id);
    if (!layer) return;

    try {
        iApi.geo.map.removeLayer(layer);
    } catch (e) {
        console.warn(`Unable to remove draw graphics layer ${id}.`, e);
    }
};

const isDrawGraphicIdAvailable = (id: string): boolean => {
    const layerHasId = graphicsLayer?.graphics.toArray().some(graphic => getDrawGraphicId(graphic) === id) ?? false;
    const storeHasId = drawStore.graphics.some(graphic => getDrawGraphicId(graphic) === id);
    return !layerHasId && !storeHasId;
};

const getDrawGraphicIdPrefix = (type: string | undefined): string => {
    switch (type) {
        case 'point':
        case 'multipoint':
            return 'T';
        case 'polyline':
            return 'P';
        case 'polygon':
            return 'G';
        case 'circle':
            return 'C';
        case 'rectangle':
            return 'R';
        default:
            return 'S';
    }
};

const createDrawGraphicId = (type: string | undefined): string => {
    const prefix = getDrawGraphicIdPrefix(type);
    let counter = drawGraphicIdCounters[prefix] ?? 999;
    let id: string;
    do {
        id = `${prefix}${++counter}`;
    } while (!isDrawGraphicIdAvailable(id));

    drawGraphicIdCounters[prefix] = counter;
    return id;
};

const resolveDrawGraphicId = (type: string | undefined, requestedId?: string): string => {
    const candidate = requestedId?.trim();
    if (candidate && isDrawGraphicIdAvailable(candidate)) {
        return candidate;
    }

    return createDrawGraphicId(type);
};

const getGraphicDrawStyleSettings = (graphic: DrawGraphicLike): DrawStyleSettings =>
    resolveGraphicStyleSettings(graphic.attributes);

const getGraphicDrawBufferSettings = (graphic: DrawGraphicLike): DrawBufferSettings =>
    resolveGraphicBufferSettings(graphic.attributes);

const getGraphicDrawIdentifyBufferMode = (graphic: DrawGraphicLike): DrawIdentifyBufferMode =>
    resolveGraphicIdentifyBufferMode(graphic.attributes);

const getGraphicDrawMapLabelSettings = (graphic: DrawGraphicLike): DrawMapLabelSettings =>
    resolveGraphicMapLabelSettings(graphic.attributes);

const applySketchSymbols = () => {
    if (!sketch) return;

    const style = getCurrentDrawStyleSettings();
    sketch.pointSymbol = createDrawSymbol('point', style) as any;
    sketch.polylineSymbol = createDrawSymbol('polyline', style) as any;
    sketch.polygonSymbol = createDrawSymbol('polygon', style) as any;
};

const syncGraphicStoreRecord = (graphic: EsriGraphic) => {
    const id = graphic.attributes?.id;
    if (!id) return;

    drawStore.updateGraphic(id, {
        type: graphic.attributes?.type,
        geometry: graphic.geometry,
        attributes: graphic.attributes
    });
};

const findDrawGraphicById = (id: string): EsriGraphic | undefined =>
    graphicsLayer?.graphics.toArray().find(graphic => graphic.attributes?.id === id);

const resolveDrawSourceGraphic = (graphic: EsriGraphic | undefined): EsriGraphic | undefined => {
    if (!graphic || graphic.attributes?.drawMeasurement) return undefined;

    const bufferSourceId = graphic.attributes?.drawBufferFor;
    if (bufferSourceId) {
        return findDrawGraphicById(bufferSourceId);
    }

    return graphic.attributes?.id ? graphic : undefined;
};

const applyDrawSymbol = (graphic: EsriGraphic) => {
    graphic.symbol = createDrawSymbol(
        graphic.geometry?.type ?? graphic.attributes?.type,
        getGraphicDrawStyleSettings(graphic)
    );
};

const setGraphicDrawSettings = (
    graphic: EsriGraphic,
    style = getCurrentDrawStyleSettings(),
    buffer = getCurrentDrawBufferSettings(),
    identifyMode = getCurrentDrawIdentifyBufferMode()
) => {
    graphic.attributes = {
        ...(graphic.attributes ?? {}),
        drawStyle: cloneDrawStyleSettings(style),
        drawBuffer: cloneDrawBufferSettings(buffer),
        drawIdentifyBufferMode: identifyMode,
        drawMapLabels: cloneDrawMapLabelSettings(graphic.attributes?.drawMapLabels)
    };
    applyDrawSymbol(graphic);
};

const prepareDrawGraphic = (graphic: EsriGraphic, type: string | undefined, id?: string): string => {
    const shapeType = type ?? graphic.attributes?.type ?? graphic.geometry?.type;
    const resolvedId = resolveDrawGraphicId(shapeType, id);
    graphic.attributes = {
        ...(graphic.attributes ?? {}),
        id: resolvedId,
        type: shapeType,
        drawStyle: cloneDrawStyleSettings(graphic.attributes?.drawStyle ?? getCurrentDrawStyleSettings()),
        drawBuffer: cloneDrawBufferSettings(graphic.attributes?.drawBuffer ?? getCurrentDrawBufferSettings()),
        drawIdentifyBufferMode: resolveGraphicIdentifyBufferMode(
            graphic.attributes,
            getCurrentDrawIdentifyBufferMode()
        ),
        drawMapLabels: cloneDrawMapLabelSettings(graphic.attributes?.drawMapLabels)
    };
    applyDrawSymbol(graphic);
    return resolvedId;
};

const removeBufferGraphic = (id: string | undefined) => {
    if (!id) return;

    const bufferGraphic = bufferGraphics.get(id);
    if (!bufferGraphic) return;

    try {
        graphicsLayer?.remove(bufferGraphic);
    } catch (e) {
        console.warn('Unable to remove draw buffer graphic.', e);
    }
    bufferGraphics.delete(id);
};

const clearBufferGraphics = () => {
    const graphics = Array.from(bufferGraphics.values());
    if (graphics.length) {
        try {
            graphicsLayer?.removeMany(graphics);
        } catch (e) {
            console.warn('Unable to clear draw buffer graphics.', e);
        }
    }

    bufferGraphics = new Map<string, EsriGraphic>();
};

const clearDrawSourceGraphics = () => {
    if (!graphicsLayer) return;

    const sourceGraphics = graphicsLayer.graphics.toArray().filter(isDrawSourceGraphic);
    if (!sourceGraphics.length) return;

    try {
        graphicsLayer.removeMany(sourceGraphics);
    } catch (e) {
        console.warn('Unable to clear draw graphics for map refresh.', e);
    }
};

const syncBufferGraphic = (sourceGraphic: EsriGraphic) => {
    const id = sourceGraphic.attributes?.id;
    if (!id || !graphicsLayer) return;

    const nextBufferGraphic = createDrawBufferGraphic(
        sourceGraphic,
        getGraphicDrawStyleSettings(sourceGraphic),
        getGraphicDrawBufferSettings(sourceGraphic)
    );
    const existingBufferGraphic = bufferGraphics.get(id);

    if (!nextBufferGraphic) {
        removeBufferGraphic(id);
        return;
    }

    if (existingBufferGraphic) {
        existingBufferGraphic.geometry = nextBufferGraphic.geometry;
        existingBufferGraphic.symbol = nextBufferGraphic.symbol;
        existingBufferGraphic.attributes = nextBufferGraphic.attributes;
        return;
    }

    const sourceIndex = graphicsLayer.graphics.indexOf(sourceGraphic);
    if (sourceIndex >= 0) {
        graphicsLayer.graphics.add(nextBufferGraphic, sourceIndex);
    } else {
        graphicsLayer.add(nextBufferGraphic);
    }
    bufferGraphics.set(id, nextBufferGraphic);
};

const applySelectedStoreSettingsToLayerGraphic = () => {
    const id = drawStore.selectedGraphicSettingsUpdatedGraphicId ?? drawStore.selectedGraphicId;
    const storeGraphic = id ? drawStore.graphics.find(graphic => graphic.id === id) : undefined;
    const layerGraphic =
        selectedGraphic?.attributes?.id === id
            ? selectedGraphic
            : id
              ? graphicsLayer?.graphics.toArray().find(graphic => graphic.attributes?.id === id)
              : undefined;

    if (!storeGraphic || !layerGraphic) return;

    const previousBuffer = getGraphicDrawBufferSettings(layerGraphic);
    const previousIdentifyMode = getGraphicDrawIdentifyBufferMode(layerGraphic);
    const nextStyle = resolveGraphicStyleSettings(storeGraphic.attributes);
    const nextBuffer = resolveGraphicBufferSettings(storeGraphic.attributes);
    const nextIdentifyMode = resolveGraphicIdentifyBufferMode(storeGraphic.attributes);
    const featureCountSettingsChanged =
        previousBuffer.distance !== nextBuffer.distance ||
        previousBuffer.unit !== nextBuffer.unit ||
        previousIdentifyMode !== nextIdentifyMode;

    setGraphicDrawSettings(layerGraphic, nextStyle, nextBuffer, nextIdentifyMode);
    if (activeSketchEdit?.sourceGraphic === layerGraphic) {
        setGraphicDrawSettings(activeSketchEdit.editGraphic, nextStyle, nextBuffer, nextIdentifyMode);
    }
    syncBufferGraphic(layerGraphic);
    syncGraphicStoreRecord(layerGraphic);
    highlightSelectedGraphic(shapeDetailsPanelOpen() ? layerGraphic : undefined);

    if (featureCountSettingsChanged) {
        void refreshSelectedGraphicFeatureCounts(layerGraphic);
    }
};

const selectDrawGraphic = (graphic: EsriGraphic, showHighlight = true) => {
    const sourceGraphic = resolveDrawSourceGraphic(graphic);
    if (!sourceGraphic) return;

    selectedGraphic = sourceGraphic;
    syncGraphicStoreRecord(sourceGraphic);
    if (sourceGraphic.attributes?.id) {
        drawStore.selectGraphic(sourceGraphic.attributes.id);
    }
    highlightSelectedGraphic(showHighlight ? sourceGraphic : undefined);
};

const showDrawGraphicDetails = (graphic: EsriGraphic) => {
    selectDrawGraphic(graphic);
    openShapeInspector('details');
    drawStore.requestShapePanelFocus();
    void refreshSelectedGraphicFeatureCounts(graphic);
};

const showDrawGraphicSettings = (graphic: EsriGraphic) => {
    selectDrawGraphic(graphic, false);
    editSelectedGraphic(graphic);
};

const resolveEditableGraphic = (graphicToEdit?: EsriGraphic): EsriGraphic | undefined => {
    if (graphicToEdit) {
        return graphicToEdit;
    }

    const selectedId = drawStore.selectedGraphicId;
    if (selectedGraphic && (!selectedId || selectedGraphic.attributes?.id === selectedId)) {
        return selectedGraphic;
    }

    return selectedId
        ? graphicsLayer?.graphics.toArray().find(graphic => graphic.attributes?.id === selectedId)
        : undefined;
};

const deleteSelectedGraphic = (): boolean => {
    const graphic =
        selectedGraphic ??
        graphicsLayer?.graphics.toArray().find(graphic => graphic.attributes?.id === drawStore.selectedGraphicId);
    const id = graphic?.attributes?.id;

    if (!graphic || !id) return false;

    try {
        sketch?.delete();
    } catch (e) {
        console.warn('Unable to delete draw sketch graphic.', e);
    }

    if (activeSketchEdit?.sourceGraphic === graphic) {
        clearActiveSketchEdit({ restoreSource: false });
    }

    removeBufferGraphic(id);
    cancelFeatureCountRunsForGraphic(id);
    cancelPendingFeatureCountRefresh();
    graphicsLayer?.remove(graphic);
    drawStore.removeGraphic(id);
    selectedGraphic = null;
    drawStore.clearSelection();
    highlightSelectedGraphic(undefined);
    void refreshMeasurementGraphics();
    iApi.updateAlert(t('draw.graphic.deleted'));
    return true;
};

const importDrawShapes = async (records: DrawShapeImportRecord[]): Promise<number> => {
    if (!records.length || !graphicsLayer) return 0;

    const layer = graphicsLayer;
    const importedGraphics: EsriGraphic[] = [];

    for (const record of records) {
        try {
            const geometry = EsriGeometryFromJson(record.geometry as any);
            if (!geometry) continue;

            const projectedGeometry = await projectGeometryToMapSR(geometry, record.id);
            const type = record.type || projectedGeometry.type;
            const graphic = new EsriGraphic({
                geometry: projectedGeometry,
                attributes: {
                    type,
                    drawStyle: cloneDrawStyleSettings(record.settings.drawStyle),
                    drawBuffer: cloneDrawBufferSettings(record.settings.drawBuffer),
                    drawIdentifyBufferMode: record.settings.drawIdentifyBufferMode,
                    drawMapLabels: cloneDrawMapLabelSettings(record.settings.drawMapLabels)
                }
            });
            const id = prepareDrawGraphic(graphic, type, record.id);
            importedGraphics.push(graphic);
            drawStore.addGraphic({
                id,
                type,
                geometry: graphic.geometry,
                attributes: graphic.attributes
            });
        } catch {
            // File validation already happened in the import panel. Skip any shape that still cannot hydrate.
        }
    }

    if (!importedGraphics.length) {
        iApi.updateAlert(t('draw.import.error.invalid'));
        return 0;
    }

    if (layer !== graphicsLayer) return 0;

    layer.addMany(importedGraphics);
    importedGraphics.forEach(syncBufferGraphic);
    void refreshMeasurementGraphics();
    iApi.updateAlert(t('draw.import.success', { count: importedGraphics.length }));
    return importedGraphics.length;
};

const processImportShapesRequest = async () => {
    const requestId = drawStore.importShapesRequestId;
    if (!requestId || requestId === processedImportShapesRequestId || !graphicsLayer) {
        return;
    }

    await importDrawShapes([...drawStore.importShapeRecords]);
    processedImportShapesRequestId = requestId;
    drawStore.clearImportShapes(requestId);
};

const restoreStoredDrawGraphics = async (initId?: number) => {
    const layer = graphicsLayer;
    if (!layer || !drawStore.graphics.length) return;

    const existingIds = new Set(
        layer.graphics
            .toArray()
            .map(graphic => getDrawGraphicId(graphic))
            .filter((id): id is string => !!id)
    );
    const restoredGraphics: EsriGraphic[] = [];

    for (const storeGraphic of drawStore.graphics) {
        const id = getDrawGraphicId(storeGraphic);
        const geometry = storeGraphic.geometry?.clone?.() ?? storeGraphic.geometry;
        if (!id || !geometry || existingIds.has(id)) continue;

        try {
            const projectedGeometry = await projectGeometryToMapSR(geometry, id);
            const type = storeGraphic.type ?? storeGraphic.attributes?.type ?? projectedGeometry.type;
            const graphic = new EsriGraphic({
                geometry: projectedGeometry,
                attributes: {
                    ...(storeGraphic.attributes ?? {}),
                    id,
                    type
                }
            });
            applyDrawSymbol(graphic);
            drawStore.updateGraphic(id, {
                type,
                geometry: graphic.geometry,
                attributes: graphic.attributes
            });
            existingIds.add(id);
            restoredGraphics.push(graphic);
        } catch (e) {
            console.warn('Unable to restore draw graphic in the current map projection.', e);
        }
    }

    if (!restoredGraphics.length) return;
    if ((initId !== undefined && initId !== drawToolsInitId) || layer !== graphicsLayer) return;

    layer.addMany(restoredGraphics);
    restoredGraphics.forEach(syncBufferGraphic);
};

const editSelectedGraphic = (graphicToEdit?: EsriGraphic) => {
    const requestId = ++editActivationRequestId;
    drawStore.setActiveTool('edit');
    openShapeInspector('edit');

    window.setTimeout(() => {
        if (requestId !== editActivationRequestId || drawStore.activeTool !== 'edit') {
            return;
        }

        const graphicToStart = resolveEditableGraphic(graphicToEdit);
        if (!graphicToStart) {
            return;
        }

        startSketchUpdate(graphicToStart);
    }, 0);
};

const getSelectedEsriGraphic = (): EsriGraphic | undefined => {
    const selectedId = drawStore.selectedGraphicId;
    if (!selectedId) return undefined;

    if (selectedGraphic?.attributes?.id === selectedId) {
        return selectedGraphic;
    }

    return graphicsLayer?.graphics.toArray().find(graphic => graphic.attributes?.id === selectedId);
};

const getSelectedFeatureCountGraphic = (): DrawGraphicLike | undefined =>
    getSelectedEsriGraphic() ?? drawStore.getSelectedGraphic() ?? undefined;

const {
    refreshSelectedGraphicFeatureCounts,
    cancelPendingFeatureCountRefresh,
    cancelFeatureCountRunsForGraphic,
    scheduleFeatureCountRefresh,
    runIdentifyForSelectedGraphic
} = useDrawIdentify({
    iApi,
    drawStore,
    getDrawGraphicId,
    getGraphicDrawBufferSettings,
    getGraphicDrawIdentifyBufferMode,
    getSelectedFeatureCountGraphic
});

const panelOpen = (panelId: string): boolean => isPanelOpen(panelStore, panelId);

const shapeDetailsPanelOpen = (): boolean => panelOpen(DRAW_SHAPE_DETAILS_PANEL_ID);

const shapeDetailsMeasurementHighlightActive = (): boolean =>
    shapeDetailsPanelOpen() && drawStore.shapeDetailsActiveTab === 'details' && !!drawStore.selectedGraphicId;

const openShapeInspector = (tab: DrawShapeDetailsTab = 'details'): void => {
    openDrawShapeDetailsPanel(iApi, tab, { focusExisting: true });
};

const openDefaultDrawSettings = (): void => {
    if (panelOpen(DRAW_SETTINGS_PANEL_ID)) {
        iApi.panel.focus(DRAW_SETTINGS_PANEL_ID);
        return;
    }

    iApi.panel.open(DRAW_SETTINGS_PANEL_ID);
};

const closePanelIfOpen = (panelId: string): void => {
    if (panelOpen(panelId)) {
        iApi.panel.close(panelId);
    }
};

const SHAPE_FOCUS_PANEL_IDS = new Set([DRAW_SHAPE_DETAILS_PANEL_ID]);
const SHAPE_FOCUS_PADDING_MARGIN = 24;
const SHAPE_FOCUS_MIN_VISIBLE_MAP_WIDTH = 160;
const SHAPE_FOCUS_MIN_VISIBLE_MOBILE_MAP_WIDTH = 48;

const readViewPadding = (): ViewPadding => {
    const padding = iApi.geo.map.esriView?.padding;
    return {
        top: Number(padding?.top ?? 0),
        right: Number(padding?.right ?? 0),
        bottom: Number(padding?.bottom ?? 0),
        left: Number(padding?.left ?? 0)
    };
};

const readViewpoint = (): any => {
    const view = iApi.geo.map.esriView;
    return (
        view?.viewpoint?.clone?.() ?? { center: view?.center?.clone?.(), scale: view?.scale, rotation: view?.rotation }
    );
};

const setViewPadding = (padding: ViewPadding): void => {
    const view = iApi.geo.map.esriView;
    if (!view) return;

    (view as any).padding = { ...padding };
};

const activeShapeFocusPanelId = (): string | undefined => {
    if (shapeDetailsPanelOpen()) return DRAW_SHAPE_DETAILS_PANEL_ID;

    return undefined;
};

const shapePanelLeftPadding = (panelId: string, basePadding: ViewPadding): number => {
    const view = iApi.geo.map.esriView;
    const mapRect = view?.container?.getBoundingClientRect();
    const panelEl = iApi.$rootEl?.querySelector(`[data-cy="${panelId}"]`) as HTMLElement | null;
    const panelRect = panelEl?.getBoundingClientRect();
    const appbarEl = iApi.$vApp.$el.querySelector('.appbar') as HTMLElement | null;
    const appbarRect = appbarEl?.getBoundingClientRect();
    const fallbackWidth = iApi.panel.get(panelId)?.width ?? 350;
    const appbarWidth = appbarRect && mapRect ? Math.max(0, appbarRect.right - mapRect.left) : 0;
    const panelWidth = panelRect?.width ?? fallbackWidth;
    const panelRight = panelRect && mapRect ? panelRect.right - mapRect.left : appbarWidth + fallbackWidth;
    const leftObstruction = appbarWidth ? appbarWidth + panelWidth : panelRight;
    let leftPadding = Math.max(basePadding.left, Math.ceil(leftObstruction + SHAPE_FOCUS_PADDING_MARGIN));
    const viewWidth = view?.width ?? mapRect?.width ?? 0;
    const minVisibleWidth = panelStore.mobileView
        ? SHAPE_FOCUS_MIN_VISIBLE_MOBILE_MAP_WIDTH
        : SHAPE_FOCUS_MIN_VISIBLE_MAP_WIDTH;

    if (viewWidth > minVisibleWidth) {
        leftPadding = Math.min(leftPadding, viewWidth - minVisibleWidth);
    }

    return Math.max(0, leftPadding);
};

const buildShapeFocusPadding = (panelId: string, basePadding: ViewPadding): ViewPadding => ({
    top: basePadding.top + SHAPE_FOCUS_PADDING_MARGIN,
    right: basePadding.right + SHAPE_FOCUS_PADDING_MARGIN,
    bottom: basePadding.bottom + SHAPE_FOCUS_PADDING_MARGIN,
    left: shapePanelLeftPadding(panelId, basePadding)
});

const minimizeOtherOpenPanelsForShapeFocus = (): ShapePanelFocusMinimizedPanel[] => {
    const panelsToMinimize = iApi.panel.opened
        .slice()
        .filter(panel => !SHAPE_FOCUS_PANEL_IDS.has(panel.id))
        .map(panel => ({ panel, wasPinned: panel.isPinned }));

    panelsToMinimize.forEach(({ panel }) => panel.minimize());

    return panelsToMinimize;
};

const restoreShapeFocusPanels = (panels: ShapePanelFocusMinimizedPanel[]): void => {
    panels.forEach(({ panel }) => {
        if (!iApi.panel.get(panel.id) || panel.isOpen) return;

        panel.open();
    });

    panels
        .filter(({ panel, wasPinned }) => wasPinned && !!iApi.panel.get(panel.id))
        .forEach(({ panel }) => panel.pin(true));
};

const isGoToAbort = (error: unknown): boolean =>
    !!error && typeof error === 'object' && (error as { name?: string }).name === 'AbortError';

const focusMapOnSelectedShape = async (
    session: ShapePanelFocusSession,
    requestId: number,
    graphic: EsriGraphic
): Promise<void> => {
    await nextTick();

    if (shapePanelFocusSession !== session || requestId !== shapePanelFocusRequestId || !graphic.geometry) {
        return;
    }

    const panelId = activeShapeFocusPanelId();
    if (!panelId) return;

    if (!session.previousViewpoint) {
        session.previousViewpoint = readViewpoint();
    }
    setViewPadding(buildShapeFocusPadding(panelId, session.previousPadding));
    session.paddingAdjusted = true;

    try {
        const target = iApi.geo.geom.geomEsriToRamp(graphic.geometry as EsriGeometry, graphic.attributes?.id);
        await iApi.geo.map.zoomMapTo(target, undefined, true, 250, 'ease');
    } catch (error) {
        if (!isGoToAbort(error)) {
            console.warn('Unable to focus the map on the selected draw shape.', error);
        }
    }
};

const startShapePanelFocusSession = (): void => {
    if (panelStore.mobileView) return;
    if (shapePanelFocusSession) return;

    const view = iApi.geo.map.esriView;
    const graphic = getSelectedEsriGraphic();
    if (!view) return;

    const session: ShapePanelFocusSession = {
        previousPadding: readViewPadding(),
        paddingAdjusted: false,
        minimizedPanels: []
    };

    shapePanelFocusSession = session;
    const requestId = ++shapePanelFocusRequestId;
    session.minimizedPanels = minimizeOtherOpenPanelsForShapeFocus();
    if (graphic?.geometry) {
        void focusMapOnSelectedShape(session, requestId, graphic);
    }
};

const focusShapePanelOnSelectedShape = (): void => {
    if (panelStore.mobileView) return;

    const graphic = getSelectedEsriGraphic();
    const view = iApi.geo.map.esriView;
    if (!view || !graphic?.geometry) return;

    if (!shapePanelFocusSession) {
        startShapePanelFocusSession();
        return;
    }

    const session = shapePanelFocusSession;
    const knownPanelIds = new Set(session.minimizedPanels.map(({ panel }) => panel.id));
    const newlyMinimizedPanels = minimizeOtherOpenPanelsForShapeFocus().filter(
        ({ panel }) => !knownPanelIds.has(panel.id)
    );
    session.minimizedPanels.push(...newlyMinimizedPanels);

    const requestId = ++shapePanelFocusRequestId;
    void focusMapOnSelectedShape(session, requestId, graphic);
};

const restoreShapePanelFocusSession = (): void => {
    const session = shapePanelFocusSession;
    if (!session) return;

    shapePanelFocusSession = null;
    shapePanelFocusRequestId++;
    if (session.paddingAdjusted) {
        setViewPadding(session.previousPadding);
    }
    restoreShapeFocusPanels(session.minimizedPanels);

    const view = iApi.geo.map.esriView;
    if (!view || !session.previousViewpoint) return;

    void view.goTo(session.previousViewpoint, { animate: true, duration: 250, easing: 'ease' } as any).catch(error => {
        if (!isGoToAbort(error)) {
            console.warn('Unable to restore the map after closing the draw shape panel.', error);
        }
    });
};

const shapeDetailsPickActive = (): boolean => {
    const activeTool = drawStore.activeTool;
    const drawingToolEnabled = activeTool !== null && activeTool !== '' && activeTool !== 'edit';
    const editModeEnabled = activeTool === 'edit';
    return drawStore.shapeDetailsPickEnabled && !drawingToolEnabled && !editModeEnabled;
};

const drawSettingsShapePickActive = (): boolean => {
    return false;
};

const drawGraphicIntersectsClick = (
    graphic: EsriGraphic,
    clickPoint: EsriGeometry,
    clickBuffer: EsriGeometry
): boolean => {
    const geometry = graphic.geometry as EsriGeometry | undefined;
    if (!geometry) return false;

    try {
        return EsriIntersectsOperator.execute(geometry, geometry.type === 'polygon' ? clickPoint : clickBuffer);
    } catch {
        return false;
    }
};

const findDrawGraphicAtClick = (event: EsriViewClickEvent): EsriGraphic | undefined => {
    if (!graphicsLayer) return undefined;

    const mapPoint = event.mapPoint ?? iApi.geo.map.esriView?.toMap({ x: event.x, y: event.y });
    if (!mapPoint) return undefined;

    const pointerType = (event as { pointerType?: string; native?: { pointerType?: string } }).pointerType;
    const nativePointerType = (event as { pointerType?: string; native?: { pointerType?: string } }).native
        ?.pointerType;
    const tolerance =
        pointerType === 'touch' || nativePointerType === 'touch'
            ? DRAW_CLICK_TOUCH_TOLERANCE
            : DRAW_CLICK_MOUSE_TOLERANCE;
    const clickPoint = mapPoint as EsriGeometry;
    const clickBuffer = iApi.geo.query.makeClickBuffer(Point.fromESRI(mapPoint), tolerance).toESRI();

    for (const graphic of graphicsLayer.graphics.toArray().slice().reverse()) {
        const sourceGraphic = resolveDrawSourceGraphic(graphic);
        if (sourceGraphic && drawGraphicIntersectsClick(graphic, clickPoint, clickBuffer)) {
            return sourceGraphic;
        }
    }

    return undefined;
};

const findDrawGraphicAtMapClick = (mapClick: MapClick): EsriGraphic | undefined => {
    if (!graphicsLayer) return undefined;

    const clickPoint = mapClick.mapPoint.toESRI();
    const tolerance = mapClick.input === 'touch' ? DRAW_CLICK_TOUCH_TOLERANCE : DRAW_CLICK_MOUSE_TOLERANCE;
    const clickBuffer = iApi.geo.query.makeClickBuffer(mapClick.mapPoint, tolerance).toESRI();

    return graphicsLayer.graphics
        .toArray()
        .slice()
        .reverse()
        .find(
            graphic =>
                !!graphic.attributes?.id &&
                !graphic.attributes?.drawMeasurement &&
                !graphic.attributes?.drawBufferFor &&
                drawGraphicIntersectsClick(graphic, clickPoint, clickBuffer)
        );
};

const handleMapClickForShapeDetails = (mapClick: MapClick) => {
    const detailsOpen = shapeDetailsPanelOpen();
    if (!shapeDetailsPickActive() && !detailsOpen) return;

    const hitGraphic = findDrawGraphicAtMapClick(mapClick);
    if (hitGraphic && shapeDetailsPickActive()) {
        showDrawGraphicDetails(hitGraphic);
    } else if (!hitGraphic && detailsOpen) {
        closePanelIfOpen(DRAW_SHAPE_DETAILS_PANEL_ID);
    }
};

async function handleKeyboardShortcuts() {
    const keyboardNav = iApi.keyboardNav;
    if (!keyboardNav) {
        console.warn('Keyboard navigation fixture is not available; draw shortcuts are disabled.');
        return;
    }

    if (keyboardNamespace) {
        keyboardNav.unregister(keyboardNamespace);
        keyboardNamespace = undefined;
    }

    const supportedDrawTools = new Set(drawStore.supportedTypes.map(typeConfig => typeConfig.type));
    const drawToolKeys = DRAW_TOOL_KEYBOARD_SHORTCUTS.filter(shortcut => supportedDrawTools.has(shortcut.type)).map(
        shortcut => ({
            key: shortcut.key,
            description: buildLocaleRecord(shortcut.descriptionKey),
            handler: () => {
                drawStore.setActiveTool(shortcut.type);
            }
        })
    );

    keyboardNamespace = keyboardNav.register('D', {
        name: buildLocaleRecord('draw.keyboard.namespace'),
        activeHandler: () => {
            drawStore.setActiveTool('');
        },
        deactiveHandler: () => {
            drawStore.setActiveTool(null);
        },
        keys: [
            ...drawToolKeys,
            {
                key: 'I',
                description: buildLocaleRecord('draw.keyboard.key.inspector'),
                handler: () => {
                    drawStore.setActiveTool(null);
                    openShapeInspector('details');
                    return 'reset';
                }
            },
            {
                key: 'D',
                description: buildLocaleRecord('draw.keyboard.key.defaults'),
                handler: () => {
                    drawStore.setActiveTool(null);
                    openDefaultDrawSettings();
                    return 'reset';
                }
            }
        ]
    });
}

/* --------------------------------------------------------------------------
 * HELPER FUNCTIONS
 * -------------------------------------------------------------------------- */
/**
 * Updates the highlight for the given graphic.
 * Clears any previous highlight, creates a new symbol based on geometry type,
 * and adds the highlight graphic to the highlight overlay layer.
 * @param graphic The graphic to highlight.
 */
const highlightSelectedGraphic = (graphic?: EsriGraphic | undefined) => {
    const targetLayer = highlightGraphicsLayer ?? graphicsLayer;

    if (
        highlightGraphic &&
        targetLayer &&
        highlightGraphicLayer === targetLayer &&
        graphic?.geometry &&
        highlightGraphic.geometry?.type === graphic.geometry.type
    ) {
        highlightGraphic.geometry = graphic.geometry;
        highlightGraphic.set('geometry', graphic.geometry);
        return;
    }

    if (highlightGraphic) {
        highlightGraphicLayer?.remove(highlightGraphic);
        graphicsLayer?.remove(highlightGraphic);
        highlightGraphicsLayer?.remove(highlightGraphic);
        highlightGraphic = null;
        highlightGraphicLayer = null;
    }
    if (!graphic?.geometry || !targetLayer) return;

    let highlightSymbol: EsriSymbol;
    switch (graphic.geometry?.type) {
        case 'point':
        case 'multipoint':
            highlightSymbol = new EsriSimpleMarkerSymbol({
                color: [255, 255, 0, 0.8],
                size: 16,
                outline: {
                    color: [255, 165, 0, 1],
                    width: 3
                }
            });
            break;
        case 'polyline':
            highlightSymbol = new EsriSimpleLineSymbol({
                color: [255, 255, 0, 0.8],
                width: 6
            });
            break;
        default: // polygon, rectangle, circle
            highlightSymbol = new EsriSimpleFillSymbol({
                color: [255, 255, 0, 0.3],
                outline: {
                    color: [255, 165, 0, 1],
                    width: 3
                }
            });
    }
    highlightGraphic = new EsriGraphic({
        geometry: graphic.geometry,
        symbol: highlightSymbol
    });
    targetLayer.add(highlightGraphic);
    highlightGraphicLayer = targetLayer;
};

const clearSegmentHighlightGraphic = () => {
    if (segmentHighlightGraphic) {
        graphicsLayer?.remove(segmentHighlightGraphic);
        segmentHighlightGraphic = null;
    }
};

const clearVertexHighlightGraphic = () => {
    if (vertexHighlightGraphic) {
        graphicsLayer?.remove(vertexHighlightGraphic);
        vertexHighlightGraphic = null;
    }
};

const syncMapLabelSettingsToLayerGraphic = () => {
    const id = drawStore.mapLabelSettingsUpdatedGraphicId;
    if (!id) return;

    const storeGraphic = drawStore.graphics.find(graphic => graphic.id === id);
    const layerGraphic = findDrawGraphicById(id);
    if (!storeGraphic || !layerGraphic) return;

    layerGraphic.attributes = {
        ...(layerGraphic.attributes ?? {}),
        drawMapLabels: cloneDrawMapLabelSettings(getGraphicDrawMapLabelSettings(storeGraphic))
    };
};

const updateSegmentHighlightGraphic = () => {
    clearSegmentHighlightGraphic();

    if (!shapeDetailsMeasurementHighlightActive()) return;

    const target = parseDrawMeasurementTargetKey(drawStore.activeSegmentKey);
    if (!target || target.kind !== 'segment') return;
    if (target.graphicId !== drawStore.selectedGraphicId) return;

    const graphic = findDrawGraphicById(target.graphicId);
    const segments = buildDrawSegments(graphic?.geometry as EsriGeometry | undefined, target.graphicId);
    const segment = segments[target.index];
    if (!segment || !graphic?.geometry) return;

    segmentHighlightGraphic = new EsriGraphic({
        geometry: new EsriPolyline({
            paths: [[segment.start, segment.end]],
            spatialReference: graphic.geometry.spatialReference
        }),
        symbol: new EsriSimpleLineSymbol({
            color: [37, 99, 235, 0.9],
            width: 4
        }),
        attributes: {
            drawInteractionHighlight: true
        }
    });
    graphicsLayer?.add(segmentHighlightGraphic);
};

const updateVertexHighlightGraphic = () => {
    clearVertexHighlightGraphic();

    if (!shapeDetailsMeasurementHighlightActive()) return;

    const target = parseDrawMeasurementTargetKey(drawStore.activeVertexKey);
    if (!target || target.kind !== 'vertex') return;
    if (target.graphicId !== drawStore.selectedGraphicId) return;

    const graphic = findDrawGraphicById(target.graphicId);
    const vertex = buildDrawVertices(graphic?.geometry as EsriGeometry | undefined, target.graphicId)[target.index];
    if (!vertex || !graphic?.geometry) return;

    vertexHighlightGraphic = new EsriGraphic({
        geometry: new EsriPoint({
            x: vertex.vertex[0],
            y: vertex.vertex[1],
            spatialReference: graphic.geometry.spatialReference
        }),
        symbol: new EsriSimpleMarkerSymbol({
            color: [37, 99, 235, 0.22],
            size: 28,
            outline: {
                color: [37, 99, 235, 1],
                width: 3
            }
        }),
        attributes: {
            drawInteractionHighlight: true
        }
    });
    graphicsLayer?.add(vertexHighlightGraphic);
};

const updateMeasurementInteractionHighlights = () => {
    updateSegmentHighlightGraphic();
    updateVertexHighlightGraphic();
};

const getLayerGraphicForUpdate = (graphic: EsriGraphic): EsriGraphic | undefined => {
    if (!graphicsLayer) return undefined;

    const sourceGraphic = resolveDrawSourceGraphic(graphic);
    if (!sourceGraphic) return undefined;

    const id = sourceGraphic.attributes?.id;
    return graphicsLayer.graphics
        .toArray()
        .find(layerGraphic => layerGraphic === sourceGraphic || (!!id && layerGraphic.attributes?.id === id));
};

const getSketchUpdateSourceGraphic = (graphic: EsriGraphic): EsriGraphic =>
    activeSketchEdit?.editGraphic === graphic ? activeSketchEdit.sourceGraphic : graphic;

const syncActiveSketchEditToSource = () => {
    if (!activeSketchEdit) return undefined;

    const { sourceGraphic, editGraphic } = activeSketchEdit;
    sourceGraphic.geometry = editGraphic.geometry;
    sourceGraphic.set('geometry', editGraphic.geometry);
    applyDrawSymbol(sourceGraphic);
    syncBufferGraphic(sourceGraphic);
    syncGraphicStoreRecord(sourceGraphic);
    return sourceGraphic;
};

const clearActiveSketchEdit = ({ restoreSource = true }: { restoreSource?: boolean } = {}) => {
    if (activeSketchEdit?.sourceGraphic && restoreSource) {
        activeSketchEdit.sourceGraphic.visible = true;
    }

    destroyEditSketchViewModel();
    activeSketchEdit = null;
    editGraphicsLayer?.removeAll();
    setSketchLayer(graphicsLayer);
};

const createEditSketchViewModel = (editGraphic: EsriGraphic): EsriSketchViewModel | undefined => {
    if (!editGraphicsLayer || !iApi.geo.map.esriView) return undefined;

    destroyEditSketchViewModel();

    editSketchViewModel = new EsriSketchViewModel({
        view: iApi.geo.map.esriView!,
        layer: editGraphicsLayer,
        updateOnGraphicClick: false,
        defaultUpdateOptions: getSketchUpdateOptions(editGraphic),
        pointSymbol: sketch?.pointSymbol as any,
        polygonSymbol: sketch?.polygonSymbol as any,
        polylineSymbol: sketch?.polylineSymbol as any
    });
    editSketchUpdateHandle = editSketchViewModel.on('update', event =>
        handleSketchUpdateEvent(event as EsriSketchUpdateEvent)
    );

    return editSketchViewModel;
};

const waitForEditSketchLayerView = async (): Promise<boolean> => {
    if (!editGraphicsLayer || !iApi.geo.map.esriView) return false;

    try {
        await iApi.geo.map.esriView.whenLayerView(editGraphicsLayer);
        return true;
    } catch (e) {
        console.warn('Unable to initialize draw edit sketch layer view.', e);
        return false;
    }
};

const prepareSketchLayerForUpdate = (sourceGraphic: EsriGraphic): EsriGraphic | undefined => {
    if (!editGraphicsLayer) return undefined;

    clearActiveSketchEdit();

    const editGraphic = sourceGraphic.clone();
    editGraphic.attributes = { ...sourceGraphic.attributes };
    const originalGeometry = sourceGraphic.geometry?.clone?.() ?? (sourceGraphic.geometry as EsriGeometry);
    applyDrawSymbol(editGraphic);
    editGraphicsLayer.graphics = [editGraphic];
    sourceGraphic.visible = false;
    activeSketchEdit = { sourceGraphic, editGraphic, originalGeometry };
    if (!createEditSketchViewModel(editGraphic)) {
        sourceGraphic.visible = true;
        activeSketchEdit = null;
        editGraphicsLayer.removeAll();
        return undefined;
    }

    return editGraphic;
};

const beginSketchGraphicUpdate = async (graphic: EsriGraphic): Promise<boolean> => {
    const sourceGraphic = getSketchUpdateSourceGraphic(graphic);
    if (!sketch || !graphicsLayer || drawStore.activeTool !== 'edit' || selectedGraphic !== sourceGraphic) {
        return false;
    }

    const usesEditSketchViewModel = activeSketchEdit?.editGraphic === graphic;
    const sketchViewModel = usesEditSketchViewModel ? editSketchViewModel : getSketchViewModel();
    if (!sketchViewModel) {
        return false;
    }

    if (usesEditSketchViewModel && !(await waitForEditSketchLayerView())) {
        return false;
    }

    if (sketchViewModel.state === 'active') {
        if (sketchUpdateGraphicsIncludes(graphic, sketchViewModel)) {
            return true;
        }

        sketchViewModel.cancel();
        return false;
    }

    if (sketchViewModel.state !== 'ready' || !sketchViewModel.hasGraphic(graphic)) {
        return false;
    }

    try {
        if (sketchViewModel !== editSketchViewModel) {
            setSketchUpdateOnGraphicClick(false);
        }
        await sketchViewModel.update([graphic], getSketchUpdateOptions(graphic));
    } catch (e) {
        console.warn('Unable to start draw sketch update.', e);
        return false;
    }

    return sketchUpdateGraphicsIncludes(graphic, sketchViewModel);
};

const startSketchUpdate = (graphic: EsriGraphic, attempts = 5) => {
    if (!sketch || drawStore.activeTool !== 'edit') return;

    const graphicToUpdate = getLayerGraphicForUpdate(graphic);
    if (!graphicToUpdate) return;

    selectDrawGraphic(graphicToUpdate, false);

    cancelPendingSketchUpdate();
    cancelSketch();
    const editGraphic = prepareSketchLayerForUpdate(graphicToUpdate);
    if (!editGraphic) return;
    highlightSelectedGraphic(shapeDetailsPanelOpen() ? graphicToUpdate : undefined);

    const requestUpdate = (remainingAttempts: number) => {
        sketchUpdateTimeout = window.setTimeout(() => {
            sketchUpdateTimeout = null;

            if (!sketch || drawStore.activeTool !== 'edit' || selectedGraphic !== graphicToUpdate) {
                return;
            }

            void beginSketchGraphicUpdate(editGraphic).then(updateStarted => {
                if (updateStarted) {
                    return;
                }

                if (remainingAttempts <= 0) {
                    clearActiveSketchEdit({ restoreSource: true });
                    return;
                }

                requestUpdate(remainingAttempts - 1);
            });
        }, SKETCH_UPDATE_DELAY_MS);
    };

    requestUpdate(attempts);
};

const stopEditMode = ({ clearSelection = false }: { clearSelection?: boolean } = {}) => {
    editActivationRequestId++;
    cancelPendingSketchUpdate();
    syncActiveSketchEditToSource();
    cancelSketch();
    clearActiveSketchEdit({ restoreSource: true });

    if (clearSelection) {
        selectedGraphic = null;
        drawStore.clearSelection();
    }

    if (drawStore.activeTool === 'edit') {
        drawStore.setActiveTool(null);
        return;
    }

    highlightSelectedGraphic(shapeDetailsPanelOpen() ? getSelectedEsriGraphic() : undefined);
};

const cancelEditMode = ({ clearSelection = false }: { clearSelection?: boolean } = {}) => {
    editActivationRequestId++;
    cancelPendingSketchUpdate();

    const edit = activeSketchEdit;
    if (edit?.sourceGraphic && edit.originalGeometry) {
        edit.sourceGraphic.geometry = edit.originalGeometry;
        edit.sourceGraphic.set('geometry', edit.originalGeometry);
        applyDrawSymbol(edit.sourceGraphic);
        syncBufferGraphic(edit.sourceGraphic);
        syncGraphicStoreRecord(edit.sourceGraphic);
        cancelPendingFeatureCountRefresh();
        void refreshSelectedGraphicFeatureCounts(edit.sourceGraphic);
    }

    cancelSketch();
    clearActiveSketchEdit({ restoreSource: true });

    if (clearSelection) {
        selectedGraphic = null;
        drawStore.clearSelection();
    }

    if (drawStore.activeTool === 'edit') {
        drawStore.setActiveTool(null);
    }

    highlightSelectedGraphic(shapeDetailsPanelOpen() ? getSelectedEsriGraphic() : undefined);
    void refreshMeasurementGraphics();
};

/* --------------------------------------------------------------------------
 * WATCHERS
 * -------------------------------------------------------------------------- */
// Watch changes to the selected graphic ID and update the Sketch widget and highlight.
watch(
    () => drawStore.selectedGraphicId,
    (newId, oldId) => {
        if (!sketch || !graphicsLayer) return;
        if (!newId) {
            cancelPendingSketchUpdate();
            cancelSketch();
            clearActiveSketchEdit({ restoreSource: true });
            highlightSelectedGraphic();
        } else if (newId !== oldId) {
            const graphics = graphicsLayer.graphics.toArray();
            const selectedEsriGraphic = graphics.find(g => g.attributes && g.attributes.id === newId);
            if (selectedEsriGraphic) {
                selectDrawGraphic(selectedEsriGraphic, drawStore.activeTool !== 'edit');
                if (drawStore.shapeDetailsPickEnabled) {
                    void refreshSelectedGraphicFeatureCounts(selectedEsriGraphic);
                }
            }
        }
        void refreshMeasurementGraphics();
    }
);

watch(
    () => drawStore.deleteSelectedGraphicRequestId,
    () => {
        deleteSelectedGraphic();
    }
);

watch(
    () => drawStore.editSelectedGraphicRequestId,
    () => {
        editSelectedGraphic();
    }
);

watch(
    () => drawStore.identifySelectedGraphicRequestId,
    () => {
        void runIdentifyForSelectedGraphic();
    }
);

watch(
    () => drawStore.stopEditModeRequestId,
    () => {
        stopEditMode({ clearSelection: drawStore.stopEditModeClearSelection });
    }
);

watch(
    () => drawStore.cancelEditModeRequestId,
    () => {
        cancelEditMode({ clearSelection: drawStore.cancelEditModeClearSelection });
    }
);

watch(
    () => drawStore.refreshSelectedGraphicFeatureCountsRequestId,
    () => {
        void refreshSelectedGraphicFeatureCounts();
    }
);

watch(
    () => drawStore.mapLabelSettingsUpdateRequestId,
    () => {
        syncMapLabelSettingsToLayerGraphic();
        void refreshMeasurementGraphics();
    }
);

watch(
    () => [drawStore.shapeDetailsLabelsVisible, drawStore.shapeDetailsLabelsUseSettings],
    () => {
        void refreshMeasurementGraphics();
    }
);

watch(
    () => drawStore.shapePanelFocusRequestId,
    () => {
        focusShapePanelOnSelectedShape();
    }
);

watch(
    () => drawStore.selectedGraphicSettingsUpdateRequestId,
    () => {
        applySelectedStoreSettingsToLayerGraphic();
        void refreshMeasurementGraphics();
    }
);

watch(
    () => drawStore.importShapesRequestId,
    () => {
        void processImportShapesRequest();
    }
);

watch(
    () => shapeDetailsPanelOpen(),
    (detailsOpen, wasDetailsOpen) => {
        setPanguardForDrawInteraction();

        if (detailsOpen && !wasDetailsOpen) {
            if (drawStore.activeTool !== 'edit') {
                highlightSelectedGraphic(getSelectedEsriGraphic());
            }
            void refreshMeasurementGraphics();
            startShapePanelFocusSession();
            return;
        }

        if (!detailsOpen && wasDetailsOpen) {
            if (drawStore.activeTool === 'edit') {
                stopEditMode();
            }
            drawStore.setShapeDetailsPickEnabled(false);
            drawStore.setShapeDetailsLabelsVisible(false);
            drawStore.setShapeDetailsLabelsUseSettings(false);
            drawStore.setShapeDetailsActiveTab('details');
            drawStore.clearMeasurementInteraction();
            highlightSelectedGraphic(undefined);
            void refreshMeasurementGraphics();
            restoreShapePanelFocusSession();
        }
    }
);

watch(
    () => drawStore.measurementsEnabled,
    enabled => {
        void refreshMeasurementGraphics();

        iApi.updateAlert(t(enabled ? 'draw.measurements.enabled' : 'draw.measurements.disabled'));
    }
);

watch(
    () => [
        drawStore.activeSegmentKey,
        drawStore.activeVertexKey,
        drawStore.shapeDetailsActiveTab,
        drawStore.selectedGraphicId,
        drawStore.graphics.map(graphic => graphic.geometry)
    ],
    () => {
        updateMeasurementInteractionHighlights();
    },
    { deep: true }
);

watch(
    () => ({
        fillColor: drawStore.styleSettings.fillColor,
        borderColor: drawStore.styleSettings.borderColor,
        bufferColor: drawStore.styleSettings.bufferColor,
        opacity: drawStore.styleSettings.opacity,
        bufferDistance: drawStore.bufferSettings.distance,
        bufferUnit: drawStore.bufferSettings.unit,
        identifyBufferMode: drawStore.identifyBufferMode
    }),
    () => {
        applySketchSymbols();
        void refreshMeasurementGraphics();
    }
);

const { handleNavigationKeyDown, handleGraphicKeyboardEdit, resetMultiPointState } = useDrawKeyboard({
    iApi,
    drawStore,
    t,
    translateTerm,
    getSketch: () => sketch,
    getGraphicsLayer: () => graphicsLayer,
    getSelectedGraphic: () => selectedGraphic,
    getKeyboardEditGraphic: () => activeSketchEdit?.editGraphic ?? selectedGraphic,
    setSelectedGraphic: graphic => {
        selectedGraphic = graphic;
    },
    prepareDrawGraphic,
    applyDrawSymbol,
    syncBufferGraphic,
    syncGraphicStoreRecord,
    syncActiveSketchEditToSource,
    highlightSelectedGraphic,
    deleteSelectedGraphic,
    startSketchUpdate,
    cancelPendingSketchUpdate,
    clearActiveSketchEdit,
    refreshMeasurementGraphics,
    scheduleMeasurementRefresh,
    cancelPendingFeatureCountRefresh,
    refreshSelectedGraphicFeatureCounts
});

/* --------------------------------------------------------------------------
 * VIEW CLICK HANDLER
 * -------------------------------------------------------------------------- */
/**
 * Handles click events on the view to allow graphic selection.
 * Delegates to the Sketch widget if a graphic is clicked; otherwise clears selection.
 * @param event The view click event.
 */
const handleViewClick = async (event: EsriViewClickEvent) => {
    const editModeEnabled = drawStore.activeTool === 'edit';
    const settingsPickEnabled = drawSettingsShapePickActive();
    if (!editModeEnabled && !settingsPickEnabled) return;

    const view = iApi.geo.map.esriView!;
    const response = await view.hitTest(event, { include: graphicsLayer });
    const hit = response.results.find(
        (result): result is EsriGraphicHit =>
            'graphic' in result && result.graphic.layer === graphicsLayer && !!resolveDrawSourceGraphic(result.graphic)
    );
    const hitGraphic = resolveDrawSourceGraphic(hit?.graphic) ?? findDrawGraphicAtClick(event);

    if (hitGraphic) {
        if (settingsPickEnabled) {
            showDrawGraphicSettings(hitGraphic);
            return;
        }

        if (isSketchUpdateActive()) {
            selectDrawGraphic(hitGraphic, false);
        } else {
            startSketchUpdate(hitGraphic);
        }
        return;
    }

    if (editModeEnabled) {
        stopEditMode({ clearSelection: true });
    }
};

const initializeDrawTools = async () => {
    const initId = ++drawToolsInitId;
    await iApi.geo.map.viewPromise;

    if (initId !== drawToolsInitId || !sketchEl.value || !iApi.geo.map.esriView) {
        return;
    }

    const drawLayer = await ensureRampGraphicsLayer(DRAW_GRAPHICS_LAYER_ID);
    if (initId !== drawToolsInitId || !iApi.geo.map.esriView) {
        return;
    }
    graphicsLayer = drawLayer?.esriLayer as EsriGraphicsLayer | null;

    if (!graphicsLayer) {
        return;
    }

    await syncDrawGraphicsToMapSR(initId);
    if (initId !== drawToolsInitId || !iApi.geo.map.esriView) {
        return;
    }

    const editLayer = await ensureRampGraphicsLayer(DRAW_EDIT_GRAPHICS_LAYER_ID);
    if (initId !== drawToolsInitId || !iApi.geo.map.esriView) {
        removeRampGraphicsLayer(DRAW_EDIT_GRAPHICS_LAYER_ID);
        editGraphicsLayer = null;
        return;
    }
    editGraphicsLayer = editLayer?.esriLayer as EsriGraphicsLayer | null;
    if (!editGraphicsLayer) {
        return;
    }

    const highlightLayer = await ensureRampGraphicsLayer(DRAW_HIGHLIGHT_GRAPHICS_LAYER_ID);
    if (initId !== drawToolsInitId || !iApi.geo.map.esriView) {
        removeRampGraphicsLayer(DRAW_EDIT_GRAPHICS_LAYER_ID);
        removeRampGraphicsLayer(DRAW_HIGHLIGHT_GRAPHICS_LAYER_ID);
        editGraphicsLayer = null;
        highlightGraphicsLayer = null;
        return;
    }
    highlightGraphicsLayer = highlightLayer?.esriLayer as EsriGraphicsLayer | null;
    if (!highlightGraphicsLayer) {
        return;
    }

    const sketchComponent = sketchEl.value as ArcgisSketchWithWidget;
    Object.assign(sketchComponent, {
        view: iApi.geo.map.esriView!,
        layer: graphicsLayer!,
        availableCreateTools: ['point', 'multipoint', 'polyline', 'polygon', 'rectangle', 'circle'],
        visibleElements: {
            createTools: { point: true, polyline: true, polygon: true, rectangle: true, circle: true },
            selectionTools: { enable: true },
            settingsMenu: false
        },
        defaultUpdateOptions: {
            enableRotation: true,
            enableScaling: true,
            highlightOptions: { enabled: false },
            toggleToolOnClick: true
        }
    });
    setSketchUpdateOnGraphicClick(false, sketchComponent);
    iApi.geo.map.esriView!.ui.add(sketchComponent, 'bottom-right');

    if (!sketchEventsRegistered) {
        sketchComponent.addEventListener('arcgisCreate', onSketchCreate);
        sketchComponent.addEventListener('arcgisUpdate', onSketchUpdate);
        sketchEventsRegistered = true;
    }

    sketch = sketchComponent;
    setSketchUpdateOnGraphicClick(false);
    applySketchSymbols();

    // Add DOM event listeners
    viewClickHandler = iApi.geo.map.esriView!.on('click', handleViewClick);
    document.addEventListener('keydown', handleNavigationKeyDown);
    document.addEventListener('keydown', handleGraphicKeyboardEdit, { capture: true });

    if (drawStore.activeTool && drawStore.activeTool !== 'edit') {
        sketch.create(drawStore.activeTool);
    }

    await restoreStoredDrawGraphics(initId);
    if (initId !== drawToolsInitId || !iApi.geo.map.esriView) {
        return;
    }
    void refreshMeasurementGraphics();

    void processImportShapesRequest();
};

const cleanupKeyboardShortcuts = () => {
    if (!keyboardNamespace) return;
    const keyboardNav = iApi.keyboardNav;
    if (!keyboardNav) {
        keyboardNamespace = undefined;
        return;
    }
    keyboardNav.unregister(keyboardNamespace);
    keyboardNamespace = undefined;
};

type CleanupDrawToolsOptions = {
    cleanupKeyboard?: boolean;
    clearActiveTool?: boolean;
    clearSourceGraphics?: boolean;
    destroyHelperLayers?: boolean;
    destroySketch?: boolean;
};

const cleanupDrawTools = ({
    cleanupKeyboard = true,
    clearActiveTool = false,
    clearSourceGraphics = false,
    destroyHelperLayers = true,
    destroySketch = true
}: CleanupDrawToolsOptions = {}) => {
    drawToolsInitId++;

    if (cleanupKeyboard) {
        cleanupKeyboardShortcuts();
    }

    if (viewClickHandler) {
        viewClickHandler.remove();
        viewClickHandler = null;
    }

    clearActiveSketchEdit({ restoreSource: true });
    if (editGraphicsLayer) {
        if (destroyHelperLayers) {
            iApi.geo.map.esriView?.map?.remove(editGraphicsLayer);
            editGraphicsLayer.destroy();
        } else {
            editGraphicsLayer.removeAll();
        }
        editGraphicsLayer = null;
    }

    if (sketch) {
        if (iApi.geo.map.esriView) {
            iApi.geo.map.esriView.ui.remove(sketch);
        }
        cancelPendingSketchUpdate();
        cancelSketch();
        if (destroySketch) {
            sketch.destroy();
        }
    }

    if (sketchEventsRegistered && sketchEl.value) {
        sketchEl.value.removeEventListener('arcgisCreate', onSketchCreate);
        sketchEl.value.removeEventListener('arcgisUpdate', onSketchUpdate);
        sketchEventsRegistered = false;
    }

    document.removeEventListener('keydown', handleNavigationKeyDown);
    document.removeEventListener('keydown', handleGraphicKeyboardEdit, { capture: true });

    selectedGraphic = null;
    highlightSelectedGraphic(undefined);
    if (highlightGraphicsLayer) {
        if (destroyHelperLayers) {
            iApi.geo.map.esriView?.map?.remove(highlightGraphicsLayer);
            highlightGraphicsLayer.destroy();
        } else {
            highlightGraphicsLayer.removeAll();
        }
        highlightGraphicsLayer = null;
        highlightGraphicLayer = null;
    }
    clearSegmentHighlightGraphic();
    clearVertexHighlightGraphic();
    cancelPendingSketchUpdate();
    cancelPendingFeatureCountRefresh();
    editActivationRequestId++;
    clearMeasurementGraphics();
    clearBufferGraphics();
    if (clearSourceGraphics) {
        clearDrawSourceGraphics();
    }
    drawStore.clearSelection();
    if (clearActiveTool && drawStore.activeTool) {
        drawStore.setActiveTool(null);
    }

    resetMultiPointState();

    sketch = null;
    graphicsLayer = null;
};

// Extract the existing sketch event handlers for reuse
const handleSketchCreateEvent = (event: EsriSketchCreateEvent) => {
    if (event.state === 'active' && event.graphic) {
        scheduleMeasurementRefresh(event.graphic, event.tool);
        return;
    }

    if (event.state === 'cancel') {
        void refreshMeasurementGraphics();
        return;
    }

    if (event.state === 'complete') {
        const graphic = event.graphic;
        if (!graphic) {
            return;
        }
        const id = prepareDrawGraphic(graphic, event.tool);
        syncBufferGraphic(graphic);
        drawStore.addGraphic({
            id,
            type: event.tool,
            geometry: graphic.geometry,
            attributes: graphic.attributes
        });
        void refreshMeasurementGraphics(graphic, event.tool);

        if (event.tool !== 'point') {
            drawStore.setActiveTool('');
            iApi.keyboardNav?.reset();
        }
    }
};

const handleSketchUpdateEvent = (event: EsriSketchUpdateEvent) => {
    const sketchGraphic = event.graphics[0];
    if (!sketchGraphic) return;

    const graphic = getSketchUpdateSourceGraphic(sketchGraphic);

    if (event.state === 'start') {
        if (drawStore.activeTool !== 'edit') {
            cancelSketch();
            return;
        }

        cancelPendingSketchUpdate();
        selectDrawGraphic(graphic, shapeDetailsPanelOpen());
        if (graphic.attributes?.id) {
            iApi.updateAlert(
                t('draw.graphic.selected', {
                    type: translateTerm(graphic.attributes?.type)
                })
            );
        }
    } else if (event.state === 'active') {
        // Let Esri Sketch own the edit overlay while an update operation is active.
        applyDrawSymbol(sketchGraphic);
        const sourceGraphic = syncActiveSketchEditToSource() ?? graphic;
        syncBufferGraphic(sourceGraphic);
        syncGraphicStoreRecord(sourceGraphic);
        highlightSelectedGraphic(shapeDetailsPanelOpen() ? sourceGraphic : undefined);
        scheduleMeasurementRefresh(sourceGraphic, sourceGraphic.attributes?.type);
        scheduleFeatureCountRefresh(sourceGraphic);
    } else if (event.state === 'complete') {
        const sourceGraphic = syncActiveSketchEditToSource() ?? graphic;
        clearActiveSketchEdit({ restoreSource: true });

        if (sourceGraphic.attributes?.id) {
            applyDrawSymbol(sourceGraphic);
            syncBufferGraphic(sourceGraphic);
            syncGraphicStoreRecord(sourceGraphic);
            cancelPendingFeatureCountRefresh();
            void refreshSelectedGraphicFeatureCounts(sourceGraphic);
            iApi.updateAlert(t('draw.graphic.updated'));
        }
        highlightSelectedGraphic(shapeDetailsPanelOpen() ? sourceGraphic : undefined);
        void refreshMeasurementGraphics(sourceGraphic, sourceGraphic.attributes?.type);
    }
};

/* --------------------------------------------------------------------------
 * INITIALIZATION & EVENT LISTENERS
 * -------------------------------------------------------------------------- */
onMounted(() => {
    handleKeyboardShortcuts();
    void loadDrawBufferOperators();
    void initializeDrawTools();

    // Listen for map creation/destruction events
    rampEventHandlers.push(
        iApi.event.on(GlobalEvents.MAP_DESTROYED, () => {
            cleanupDrawTools();
        })
    );
    rampEventHandlers.push(iApi.event.on(GlobalEvents.MAP_CLICK, handleMapClickForShapeDetails));
    rampEventHandlers.push(
        iApi.event.on(GlobalEvents.MAP_REFRESH_START, () => {
            cleanupDrawTools({
                cleanupKeyboard: false,
                clearActiveTool: true,
                clearSourceGraphics: true,
                destroyHelperLayers: false,
                destroySketch: false
            });
        })
    );
    rampEventHandlers.push(
        iApi.event.on(GlobalEvents.MAP_REFRESH_END, () => {
            void initializeDrawTools();
        })
    );
    rampEventHandlers.push(
        iApi.event.on(GlobalEvents.FIXTURE_ADDED, fixture => {
            if (fixture.id === 'panguard') {
                setPanguardForDrawInteraction();
            }
        })
    );
});

/* --------------------------------------------------------------------------
 * ACTIVE TOOL WATCHER
 * -------------------------------------------------------------------------- */
watch(
    () => drawStore.activeTool,
    newTool => {
        setPanguardForDrawInteraction(newTool);

        if (!sketch) return;

        if (newTool !== 'edit') {
            editActivationRequestId++;
        }
        cancelPendingSketchUpdate();
        cancelSketch();
        if (newTool !== 'edit') {
            clearActiveSketchEdit({ restoreSource: true });
        }
        highlightSelectedGraphic(shapeDetailsPanelOpen() ? getSelectedEsriGraphic() : undefined);
        resetMultiPointState();
        void refreshMeasurementGraphics();
        if (newTool === 'edit') {
            return;
        }
        if (newTool) {
            try {
                sketch.create(newTool);
            } catch (e) {
                console.warn('Unable to start draw sketch.', e);
            }
        }
    },
    { immediate: true }
);

watch(
    () => drawStore.shapeDetailsPickEnabled,
    () => {
        setPanguardForDrawInteraction();
    }
);

/* --------------------------------------------------------------------------
 * CLEANUP ON UNMOUNT
 * -------------------------------------------------------------------------- */
onUnmounted(() => {
    restoreShapePanelFocusSession();

    if (panguardEnabledBeforeDrawInteraction !== null) {
        iApi.fixture.get<PanguardAPI>('panguard')?.setEnabled(panguardEnabledBeforeDrawInteraction);
        panguardEnabledBeforeDrawInteraction = null;
    }
    cleanupDrawTools();

    // Remove RAMP event handlers
    rampEventHandlers.forEach(handler => iApi.event.off(handler));
});
</script>

<style lang="scss">
.rv-draw-segment-label-overlay {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 1;
}

.rv-draw-segment-label {
    position: absolute;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    height: 24px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.18);
    border-radius: 999px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    color: #1f2937;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    pointer-events: none;
    transform-origin: center center;
    will-change: left, top, transform;
}

.rv-draw-segment-label.rv-active {
    border-color: #1d4ed8;
    box-shadow:
        0 1px 5px rgba(0, 0, 0, 0.32),
        0 0 0 1px rgba(29, 78, 216, 0.2);
}

.rv-draw-segment-label-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 22px;
    width: 22px;
    height: 22px;
    border-radius: 999px;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
}

.rv-draw-segment-label-distance {
    padding-right: 7px;
    color: #1f2937;
}

.rv-draw-segment-label.rv-no-badge {
    padding-left: 8px;
}
</style>
