import { DrawBufferSettings, DrawIdentifyBufferMode, DrawMapLabelSettings, DrawStyleSettings } from './settings';
import { DrawGraphicLike } from './types';
export declare const DRAW_SHAPES_FILE_TYPE = "ramp4-draw-shapes";
export declare const DRAW_SHAPES_FILE_VERSION = 1;
export declare const DRAW_SHAPES_FILE_EXTENSION = "json";
export interface DrawShapeSettingsExport {
    drawStyle: DrawStyleSettings;
    drawBuffer: DrawBufferSettings;
    drawIdentifyBufferMode: DrawIdentifyBufferMode;
    drawMapLabels: DrawMapLabelSettings;
}
export interface DrawShapeExportRecord {
    id?: string;
    type: string;
    /**
     * this has the format of an ESRI geometry, but lacks the .type property.
     * typically only has the coordinate props (e.g. rings, paths, x, y) and spatialReference
     */
    geometry: unknown;
    settings: DrawShapeSettingsExport;
}
export interface DrawShapesExportFile {
    fileType: typeof DRAW_SHAPES_FILE_TYPE;
    version: typeof DRAW_SHAPES_FILE_VERSION;
    exportedAt: string;
    shapes: DrawShapeExportRecord[];
}
export type DrawShapeImportRecord = DrawShapeExportRecord;
export declare const getDrawShapeId: (graphic: DrawGraphicLike) => string | undefined;
export declare const createDrawShapeExportRecord: (graphic: DrawGraphicLike) => DrawShapeExportRecord | undefined;
export declare const createDrawShapesExportFile: (graphics: DrawGraphicLike[]) => DrawShapesExportFile;
export declare const createDrawShapesFileName: (prefix?: string) => string;
export declare const downloadDrawShapes: (graphics: DrawGraphicLike[], fileName?: string) => boolean;
/**
 * Takes a payload and attempts to extract the shapes
 *
 * @param payload typically an export file format, an individual drawing shape, or an array of drawing shapes
 * @returns an array of shape objects, or undefined if the payload is a bad format
 */
export declare const getPayloadShapes: (payload: unknown) => unknown[] | undefined;
/**
 * Attempts to parse various shape payloads into a standarized format.
 *
 * @param payload typically an export file format, an individual drawing shape, or an array of drawing shapes
 * @returns an array of normalized drawing shapes (records), or undefined if the payload could not be processed
 */
export declare const parseDrawShapesPayload: (payload: unknown) => DrawShapeImportRecord[] | undefined;
export declare const readDrawShapeFiles: (files: File[]) => Promise<DrawShapeImportRecord[]>;
