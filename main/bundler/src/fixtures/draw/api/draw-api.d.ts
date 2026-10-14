import { FixtureInstance, InstanceAPI } from '../../../api';
import { BaseGeometry, IdentifyGeometryProvider, MapClick } from '../../../geo/api';
import { DrawBufferUnit } from '../settings';
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
    suppressIdentify(mapClick: MapClick): boolean;
    /**
     * Based on a "selection" of draw-shapes, generates an array of their ids.
     * @param selection supports: id string, array of id strings, object with prop id containing string or array of string ids.
     * @returns array of ids, or undefined if input doesn't conform
     */
    private getExportSelectionIds;
    private resolveExportGraphics;
    /**
     * Finds the top-most drawn graphic hit by a map click and returns that graphic's full geometry.
     *
     * Points and lines are considered hit when they intersect a small click buffer.
     */
    private getHitDrawGraphic;
    /**
     * For a point / click on the map, return the geometry in the drawing layer that should represent
     * the identifiable area (think of selecting a shape to use as an identify region).
     *
     * @param mapClick point on the map to look for a drawing graphic
     * @returns the drawing graphic, including any buffer, as a RAMP Geometry. Undefined if no shapes found.
     */
    getIdentifyGeometry(mapClick: MapClick): BaseGeometry | undefined;
    /**
     * Remove all drawings
     */
    removeAll(): void;
    /**
     * Set the current buffer distance (for the fixture, not for an already existing drawing)
     * @param distance distance value, non-negative, in whatever the current buffer unit is
     */
    setBufferDistance(distance: number): void;
    /**
     * Set the units for the buffer distance (for the fixture, not for an already existing drawing)
     * @param {DrawBufferUnit} unit the unit string
     */
    setBufferUnit(unit: DrawBufferUnit): void;
    /**
     * Import ramp geometries to the drawing tool. The "new shape" settings will be applied (styles, buffers, etc).
     * @param rampGeoms a ramp geometry or array of ramp geometries
     */
    importRampGeometry(rampGeoms: BaseGeometry | Array<BaseGeometry>): Promise<void>;
    /**
     * Convert all the drawings to RAMP Geometries.
     * Some fidelity will be lost (e.g. special types like circles and rectangles become polygons,
     * styles are dropped, buffers are currently not included)
     * @returns array of RAMP geometries
     */
    exportRampGeometry(): Array<BaseGeometry>;
}
