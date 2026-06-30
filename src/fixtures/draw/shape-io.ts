import FileSaver from 'file-saver';

import { EsriGeometryFromJson } from '@/geo/esri';

import {
    cloneDrawBufferSettings,
    cloneDrawMapLabelSettings,
    cloneDrawStyleSettings,
    normalizeDrawIdentifyBufferMode,
    resolveGraphicBufferSettings,
    resolveGraphicIdentifyBufferMode,
    resolveGraphicMapLabelSettings,
    resolveGraphicStyleSettings
} from './settings';
import type { DrawBufferSettings, DrawIdentifyBufferMode, DrawMapLabelSettings, DrawStyleSettings } from './settings';
import type { DrawGraphicLike } from './types';

export const DRAW_SHAPES_FILE_TYPE = 'ramp4-draw-shapes';
export const DRAW_SHAPES_FILE_VERSION = 1;
export const DRAW_SHAPES_FILE_EXTENSION = 'json';

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

const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);

const cloneSerializableValue = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

const getRecordSetting = (primary: unknown, fallback: unknown): Record<string, unknown> =>
    isRecord(primary) ? primary : isRecord(fallback) ? fallback : {};

const getGeometryJson = (graphic: DrawGraphicLike): unknown => {
    const geometry = graphic.geometry;
    if (!geometry) return undefined;

    const source = typeof (geometry as any).toJSON === 'function' ? (geometry as any).toJSON() : geometry;
    return cloneSerializableValue(source);
};

const getShapeType = (graphic: DrawGraphicLike): string | undefined =>
    typeof graphic.attributes?.type === 'string' ? graphic.attributes.type : graphic.geometry?.type;

export const getDrawShapeId = (graphic: DrawGraphicLike): string | undefined =>
    typeof graphic.attributes?.id === 'string'
        ? graphic.attributes.id
        : typeof graphic.id === 'string'
          ? graphic.id
          : undefined;

export const createDrawShapeExportRecord = (graphic: DrawGraphicLike): DrawShapeExportRecord | undefined => {
    const geometry = getGeometryJson(graphic);
    const type = getShapeType(graphic);
    if (!geometry || !type) return undefined;
    const id = getDrawShapeId(graphic);

    return {
        ...(id ? { id } : {}),
        type,
        geometry,
        settings: {
            drawStyle: resolveGraphicStyleSettings(graphic.attributes),
            drawBuffer: resolveGraphicBufferSettings(graphic.attributes),
            drawIdentifyBufferMode: resolveGraphicIdentifyBufferMode(graphic.attributes),
            drawMapLabels: resolveGraphicMapLabelSettings(graphic.attributes)
        }
    };
};

export const createDrawShapesExportFile = (graphics: DrawGraphicLike[]): DrawShapesExportFile => ({
    fileType: DRAW_SHAPES_FILE_TYPE,
    version: DRAW_SHAPES_FILE_VERSION,
    exportedAt: new Date().toISOString(),
    shapes: graphics.flatMap(graphic => {
        const record = createDrawShapeExportRecord(graphic);
        return record ? [record] : [];
    })
});

export const createDrawShapesFileName = (prefix = 'ramp-draw-shapes'): string => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `${prefix}-${timestamp}.${DRAW_SHAPES_FILE_EXTENSION}`;
};

export const downloadDrawShapes = (graphics: DrawGraphicLike[], fileName?: string): boolean => {
    const exportFile = createDrawShapesExportFile(graphics);
    if (!exportFile.shapes.length) return false;

    const blob = new Blob([JSON.stringify(exportFile, null, 2)], {
        type: 'application/json;charset=utf-8'
    });
    FileSaver.saveAs(blob, fileName ?? createDrawShapesFileName());
    return true;
};

export const getPayloadShapes = (payload: unknown): unknown[] | undefined => {
    if (Array.isArray(payload)) return payload;

    if (!isRecord(payload)) return undefined;

    if (Array.isArray(payload.shapes)) {
        const fileType = payload.fileType ?? payload.format;
        return fileType === DRAW_SHAPES_FILE_TYPE ? payload.shapes : undefined;
    }

    return isRecord(payload.geometry) ? [payload] : undefined;
};

const normalizeImportRecord = (payload: unknown): DrawShapeImportRecord | undefined => {
    if (!isRecord(payload) || !isRecord(payload.geometry)) return undefined;

    const attributes = isRecord(payload.attributes) ? payload.attributes : {};
    const settings = isRecord(payload.settings) ? payload.settings : payload;
    const geometryJson = cloneSerializableValue(payload.geometry);
    const geometry = EsriGeometryFromJson(geometryJson);
    if (!geometry) return undefined;

    const type =
        typeof payload.type === 'string'
            ? payload.type
            : typeof attributes.type === 'string'
              ? attributes.type
              : geometry.type;
    const id = typeof payload.id === 'string' ? payload.id : undefined;

    return {
        id,
        type,
        geometry: typeof (geometry as any).toJSON === 'function' ? (geometry as any).toJSON() : geometryJson,
        settings: {
            drawStyle: cloneDrawStyleSettings(
                getRecordSetting(settings.drawStyle, attributes.drawStyle) as Partial<DrawStyleSettings>
            ),
            drawBuffer: cloneDrawBufferSettings(
                getRecordSetting(settings.drawBuffer, attributes.drawBuffer) as Partial<DrawBufferSettings>
            ),
            drawIdentifyBufferMode: normalizeDrawIdentifyBufferMode(
                (settings.drawIdentifyBufferMode ?? attributes.drawIdentifyBufferMode) as DrawIdentifyBufferMode
            ),
            drawMapLabels: cloneDrawMapLabelSettings(
                getRecordSetting(settings.drawMapLabels, attributes.drawMapLabels) as Partial<DrawMapLabelSettings>
            )
        }
    };
};

export const parseDrawShapesPayload = (payload: unknown): DrawShapeImportRecord[] => {
    const shapes = getPayloadShapes(payload);
    if (!shapes?.length) return [];

    const records = shapes.map(normalizeImportRecord);
    return records.every(Boolean) ? (records as DrawShapeImportRecord[]) : [];
};

export const readDrawShapeFiles = async (files: File[]): Promise<DrawShapeImportRecord[]> => {
    if (!files.length) {
        throw new Error('Invalid draw shape file.');
    }

    const importedShapes: DrawShapeImportRecord[] = [];

    for (const file of files) {
        let payload: unknown;
        try {
            payload = JSON.parse(await file.text());
        } catch {
            throw new Error('Invalid draw shape file.');
        }

        const shapes = getPayloadShapes(payload);
        if (!shapes) {
            throw new Error('Invalid draw shape file.');
        }
        if (!shapes.length) continue;

        const records = parseDrawShapesPayload(payload);
        if (!records.length) {
            throw new Error('Invalid draw shape file.');
        }
        importedShapes.push(...records);
    }

    return importedShapes;
};
