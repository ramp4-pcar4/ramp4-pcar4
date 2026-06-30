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
export declare const parseDrawShapesPayload: (payload: unknown) => DrawShapeImportRecord[];
export declare const readDrawShapeFiles: (files: File[]) => Promise<DrawShapeImportRecord[]>;
