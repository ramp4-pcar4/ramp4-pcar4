import { toRaw } from 'vue';

import { FixtureInstance } from '@/api';
import type { InstanceAPI } from '@/api';
import type { BaseGeometry, IdentifyGeometryProvider, MapClick } from '@/geo/api';
import { EsriIntersectsOperator } from '@/geo/esri';
import type { EsriGeometry } from '@/geo/esri';

import { DRAW_GRAPHICS_LAYER_ID } from '../constants';
import { openDrawShapeDetailsPanel } from '../panel-utils';
import {
    createDrawBufferGeometry,
    createDrawBufferOnlyGeometry,
    DRAW_SHAPE_DETAILS_PANEL_ID,
    loadDrawBufferOperators,
    resolveGraphicBufferSettings,
    resolveGraphicIdentifyBufferMode
} from '../settings';
import type { DrawBufferSettings, DrawIdentifyBufferMode } from '../settings';
import { createDrawShapesExportFile, downloadDrawShapes, getDrawShapeId, parseDrawShapesPayload } from '../shape-io';
import type { DrawShapeExportRecord, DrawShapesExportFile } from '../shape-io';
import { useDrawStore } from '../store';
import type { ActiveToolList } from '../store';
import type { DrawGraphicLike } from '../types';

const DEFAULT_DRAW_TYPES: DrawTypeConfig[] = [
    { type: 'point' },
    { type: 'polyline' },
    { type: 'polygon' },
    { type: 'circle' },
    { type: 'rectangle' }
];

export interface DrawTypeConfig {
    type: string;
    options?: Record<string, any>;
    enabled?: boolean; // optional, default true
}

export interface DrawFixtureConfig {
    types?: DrawTypeConfig[];
    defaultTool?: ActiveToolList;
}

export type DrawShapeImportSource =
    | string
    | URL
    | DrawShapesExportFile
    | DrawShapeExportRecord
    | DrawShapeExportRecord[]
    | Record<string, unknown>;

export interface DrawShapeExportOptions {
    ids?: string | string[];
}

export type DrawShapeExportSelection = string | string[] | DrawShapeExportOptions;

export interface DrawShapeDownloadOptions extends DrawShapeExportOptions {
    fileName?: string;
}

export type DrawShapeDownloadSelection = string | string[] | DrawShapeDownloadOptions;

const DRAW_IDENTIFY_MOUSE_TOLERANCE = 5;
const DRAW_IDENTIFY_TOUCH_TOLERANCE = 15;

function graphicIntersectsIdentifyClick(
    geometry: EsriGeometry,
    clickPoint: EsriGeometry,
    clickBuffer: EsriGeometry
): boolean {
    if (geometry.type === 'polygon') {
        return EsriIntersectsOperator.execute(geometry, clickPoint);
    }

    return EsriIntersectsOperator.execute(geometry, clickBuffer);
}

function getGraphicIdentifyGeometry(
    geometry: EsriGeometry,
    bufferSettings: DrawBufferSettings,
    identifyMode: DrawIdentifyBufferMode
): EsriGeometry | undefined {
    switch (identifyMode) {
        case 'shape':
            return geometry;
        case 'buffer-only':
            return createDrawBufferOnlyGeometry(geometry, bufferSettings);
        default:
            return createDrawBufferGeometry(geometry, bufferSettings) ?? geometry;
    }
}

function getGraphicTriggerGeometry(
    geometry: EsriGeometry,
    bufferSettings: DrawBufferSettings,
    identifyMode: DrawIdentifyBufferMode
): EsriGeometry {
    return identifyMode === 'shape' ? geometry : (createDrawBufferGeometry(geometry, bufferSettings) ?? geometry);
}

export class DrawAPI extends FixtureInstance implements IdentifyGeometryProvider {
    store: ReturnType<typeof useDrawStore>;

    constructor(id: string, iApi: InstanceAPI) {
        super(id, iApi);
        this.store = useDrawStore(this.$vApp.$pinia);
        void loadDrawBufferOperators();
    }

    /**
     * Parses the draw fixture configuration and sets up the draw store.
     * @param drawConfig The configuration object for the draw fixture.
     */
    _parseConfig(drawConfig: DrawFixtureConfig) {
        if (!drawConfig) {
            // if the entire drawConfig object is missing default to all standard types
            this.store.setSupportedTypes(DEFAULT_DRAW_TYPES);
            return;
        }

        // Handle types configuration
        if (drawConfig.types !== undefined) {
            // The 'types' property is provided in the configuration.
            // This includes an empty array [] (user explicitly wants no types from config)
            // or null (treat as explicitly no types).
            const typesSource = drawConfig.types === null ? [] : drawConfig.types;
            const enabledTypes = typesSource.filter(t => t.enabled !== false);
            this.store.setSupportedTypes(enabledTypes);
        } else {
            // The 'types' property is not set (undefined) in the configuration.
            // Default to all standard types.
            this.store.setSupportedTypes(DEFAULT_DRAW_TYPES);
        }

        // Set default tool if provided in the configuration
        if (drawConfig.defaultTool) {
            this.store.setActiveTool(drawConfig.defaultTool);
        }
    }

    /**
     * Returns the ID of the graphics layer used by the draw fixture.
     */
    get graphicsLayerId(): string {
        return DRAW_GRAPHICS_LAYER_ID;
    }

    /**
     * Returns the IDs of all draw shapes currently tracked by the draw fixture.
     */
    getShapeIds(): string[] {
        return this.store.graphics.map(shape => shape.id);
    }

    /**
     * Imports one or more draw shapes from a draw-shape JSON object, a single shape record,
     * an array of shape records, or a URL that resolves to one of those JSON payloads.
     *
     * @param source Draw-shape JSON payload or URL.
     * @returns Number of valid shapes queued for import.
     */
    async importShapes(source: DrawShapeImportSource): Promise<number> {
        const payload =
            typeof source === 'string' || source instanceof URL ? await this.fetchDrawShapesPayload(source) : source;

        const records = parseDrawShapesPayload(payload);
        if (!records.length) {
            throw new Error('Invalid draw shape payload.');
        }

        this.store.requestImportShapes(records);
        return records.length;
    }

    /**
     * Exports draw shapes to the same JSON object produced by the Draw fixture export buttons.
     *
     * If no selection is supplied, all draw shapes are exported. Supply a shape ID, an array of
     * shape IDs, or an options object with `ids` to export specific shapes.
     *
     * @param selection Optional shape ID selection.
     * @returns Draw-shape export JSON object.
     */
    exportShapes(selection?: DrawShapeExportSelection): DrawShapesExportFile {
        return createDrawShapesExportFile(this.resolveExportGraphics(selection));
    }

    /**
     * Starts a draw-shape JSON file download using the same export format as `exportShapes`.
     *
     * If no selection is supplied, all draw shapes are exported. Supply a shape ID, an array of
     * shape IDs, or an options object with `ids` to export specific shapes. A custom file name can
     * be supplied either as the second parameter or through the options object.
     *
     * @param selection Optional shape ID selection.
     * @param fileName Optional file name for the downloaded JSON file.
     * @returns `true` when a file download was started; `false` when there are no matching shapes.
     */
    downloadShapes(selection?: DrawShapeDownloadSelection, fileName?: string): boolean {
        const optionFileName =
            selection && typeof selection === 'object' && !Array.isArray(selection) ? selection.fileName : undefined;

        return downloadDrawShapes(this.resolveExportGraphics(selection), fileName ?? optionFileName);
    }

    /**
     * Prevent default map identify while the draw fixture is creating or editing graphics.
     */
    suppressIdentify(mapClick: MapClick): boolean {
        if (this.store.identifyGeometryGraphicId) {
            return false;
        }

        const activeTool = this.store.activeTool;
        const pickAllowed = activeTool === null || activeTool === '';
        const editActive = activeTool === 'edit';
        const drawingToolEnabled = activeTool !== null && activeTool !== '' && !editActive;
        const detailsPanelOpen = this.$iApi.panel.opened.some(panel => panel.id === DRAW_SHAPE_DETAILS_PANEL_ID);
        const detailsPickEnabled = this.store.shapeDetailsPickEnabled && pickAllowed;
        const needsDrawHit = detailsPickEnabled || detailsPanelOpen || editActive;
        const hitGraphic = needsDrawHit ? this.getHitDrawGraphic(mapClick, false) : undefined;
        const hitId = hitGraphic?.id ?? hitGraphic?.attributes?.id;

        if ((detailsPickEnabled || detailsPanelOpen) && hitId) {
            this.store.selectGraphic(hitId);
            openDrawShapeDetailsPanel(this.$iApi, 'details');
            this.store.requestShapePanelFocus();
            return true;
        }

        if (!hitId && detailsPanelOpen) {
            this.$iApi.panel.close(DRAW_SHAPE_DETAILS_PANEL_ID);
            this.store.setShapeDetailsPickEnabled(false);
            return true;
        }

        if (!hitId && detailsPickEnabled) {
            return true;
        }

        if (!hitId && editActive) {
            this.store.requestStopEditMode();
            return true;
        }

        return drawingToolEnabled || editActive;
    }

    private async fetchDrawShapesPayload(source: string | URL): Promise<unknown> {
        const response = await fetch(source);

        if (!response.ok) {
            throw new Error(`Unable to import draw shapes from ${source.toString()}.`);
        }

        return response.json();
    }

    private getExportSelectionIds(
        selection?: DrawShapeExportSelection | DrawShapeDownloadSelection
    ): string[] | undefined {
        if (selection === undefined) return undefined;

        if (typeof selection === 'string') {
            return [selection];
        }

        if (Array.isArray(selection)) {
            return selection;
        }

        if (!selection || selection.ids === undefined) {
            return undefined;
        }

        return Array.isArray(selection.ids) ? selection.ids : [selection.ids];
    }

    private getDrawGraphicId(graphic: DrawGraphicLike): string | undefined {
        return getDrawShapeId(graphic);
    }

    private resolveExportGraphics(
        selection?: DrawShapeExportSelection | DrawShapeDownloadSelection
    ): DrawGraphicLike[] {
        const ids = this.getExportSelectionIds(selection);
        const graphics = this.store.graphics as DrawGraphicLike[];
        if (ids === undefined) return [...graphics];

        const idSet = new Set(ids);
        return graphics.filter(graphic => {
            const id = this.getDrawGraphicId(graphic);
            return id ? idSet.has(id) : false;
        });
    }

    /**
     * Finds the top-most drawn graphic hit by a map click and returns that graphic's full geometry.
     *
     * Points and lines are considered hit when they intersect a small click buffer.
     */
    private getHitDrawGraphic(mapClick: MapClick, includeIdentifyBuffer = true): any | undefined {
        if (this.store.identifyGeometryGraphicId) {
            return this.store.graphics.find(graphic => graphic.id === this.store.identifyGeometryGraphicId);
        }

        const clickPoint = mapClick.mapPoint.toESRI();
        const tolerance = mapClick.input === 'touch' ? DRAW_IDENTIFY_TOUCH_TOLERANCE : DRAW_IDENTIFY_MOUSE_TOLERANCE;
        const clickBuffer = this.$iApi.geo.query.makeClickBuffer(mapClick.mapPoint, tolerance).toESRI();

        return this.store.graphics
            .slice()
            .reverse()
            .find(graphic => {
                const geometry = toRaw(graphic.geometry) as EsriGeometry | undefined;
                if (!geometry) return false;

                const bufferSettings = resolveGraphicBufferSettings(graphic.attributes);
                const identifyMode = resolveGraphicIdentifyBufferMode(graphic.attributes);
                const hitGeometry = includeIdentifyBuffer
                    ? getGraphicTriggerGeometry(geometry, bufferSettings, identifyMode)
                    : geometry;

                return graphicIntersectsIdentifyClick(hitGeometry, clickPoint, clickBuffer);
            });
    }

    getIdentifyGeometry(mapClick: MapClick): BaseGeometry | undefined {
        const hitGraphic = this.getHitDrawGraphic(mapClick);

        if (!hitGraphic?.geometry) {
            return undefined;
        }

        const geometry = toRaw(hitGraphic.geometry) as EsriGeometry;
        const bufferSettings = resolveGraphicBufferSettings(hitGraphic.attributes);
        const identifyMode = resolveGraphicIdentifyBufferMode(hitGraphic.attributes);
        const identifyGeometry = getGraphicIdentifyGeometry(geometry, bufferSettings, identifyMode);
        if (!identifyGeometry) {
            return undefined;
        }

        return this.$iApi.geo.geom.geomEsriToRamp(identifyGeometry, hitGraphic.id ?? hitGraphic.attributes?.id);
    }
}
