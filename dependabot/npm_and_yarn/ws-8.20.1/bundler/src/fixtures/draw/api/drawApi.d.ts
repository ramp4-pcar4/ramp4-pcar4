import { FixtureInstance, InstanceAPI } from '../../../api';
import { BaseGeometry, IdentifyGeometryProvider, MapClick } from '../../../geo/api';
import { DrawShapeExportRecord, DrawShapesExportFile } from '../shape-io';
import { useDrawStore, ActiveToolList } from '../store';
export interface DrawTypeConfig {
    type: string;
    options?: Record<string, any>;
    enabled?: boolean;
}
export interface DrawFixtureConfig {
    types?: DrawTypeConfig[];
    defaultTool?: ActiveToolList;
}
export type DrawShapeImportSource = string | URL | DrawShapesExportFile | DrawShapeExportRecord | DrawShapeExportRecord[] | Record<string, unknown>;
export interface DrawShapeExportOptions {
    ids?: string | string[];
}
export type DrawShapeExportSelection = string | string[] | DrawShapeExportOptions;
export interface DrawShapeDownloadOptions extends DrawShapeExportOptions {
    fileName?: string;
}
export type DrawShapeDownloadSelection = string | string[] | DrawShapeDownloadOptions;
export declare class DrawAPI extends FixtureInstance implements IdentifyGeometryProvider {
    store: ReturnType<typeof useDrawStore>;
    constructor(id: string, iApi: InstanceAPI);
    /**
     * Parses the draw fixture configuration and sets up the draw store.
     * @param drawConfig The configuration object for the draw fixture.
     */
    _parseConfig(drawConfig: DrawFixtureConfig): void;
    /**
     * Returns the ID of the graphics layer used by the draw fixture.
     */
    get graphicsLayerId(): string;
    /**
     * Returns the IDs of all draw shapes currently tracked by the draw fixture.
     */
    getShapeIds(): string[];
    /**
     * Imports one or more draw shapes from a draw-shape JSON object, a single shape record,
     * an array of shape records, or a URL that resolves to one of those JSON payloads.
     *
     * @param source Draw-shape JSON payload or URL.
     * @returns Number of valid shapes queued for import.
     */
    importShapes(source: DrawShapeImportSource): Promise<number>;
    /**
     * Exports draw shapes to the same JSON object produced by the Draw fixture export buttons.
     *
     * If no selection is supplied, all draw shapes are exported. Supply a shape ID, an array of
     * shape IDs, or an options object with `ids` to export specific shapes.
     *
     * @param selection Optional shape ID selection.
     * @returns Draw-shape export JSON object.
     */
    exportShapes(selection?: DrawShapeExportSelection): DrawShapesExportFile;
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
    downloadShapes(selection?: DrawShapeDownloadSelection, fileName?: string): boolean;
    /**
     * Prevent default map identify while the draw fixture is creating or editing graphics.
     */
    suppressIdentify(mapClick: MapClick): boolean;
    private fetchDrawShapesPayload;
    private getExportSelectionIds;
    private getDrawGraphicId;
    private resolveExportGraphics;
    /**
     * Finds the top-most drawn graphic hit by a map click and returns that graphic's full geometry.
     *
     * Points and lines are considered hit when they intersect a small click buffer.
     */
    private getHitDrawGraphic;
    getIdentifyGeometry(mapClick: MapClick): BaseGeometry | undefined;
}
