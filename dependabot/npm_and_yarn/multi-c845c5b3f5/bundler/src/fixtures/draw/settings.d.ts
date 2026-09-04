import { EsriGraphic, EsriSimpleFillSymbol, EsriGeometry, EsriPolygon, EsriSymbol } from '../../geo/esri';
export declare const DRAW_SETTINGS_PANEL_ID = "draw-settings";
export declare const DRAW_SHAPE_DETAILS_PANEL_ID = "draw-shape-details";
export declare const DRAW_IMPORT_PANEL_ID = "draw-import";
export type DrawBufferUnit = 'meters' | 'kilometers';
export type DrawIdentifyBufferMode = 'shape-buffer' | 'shape' | 'buffer-only';
export interface DrawStyleSettings {
    fillColor: string;
    borderColor: string;
    bufferColor: string;
    opacity: number;
    borderColorManual: boolean;
    bufferColorManual: boolean;
}
export interface DrawBufferSettings {
    distance: number;
    unit: DrawBufferUnit;
}
export interface DrawMapLabelSettings {
    areaLabel: boolean;
    segmentLength: boolean;
    segmentLetters: boolean;
    vertexNumbers: boolean;
}
export interface DrawGraphicSettingsAttributes {
    drawStyle?: Partial<DrawStyleSettings>;
    drawBuffer?: Partial<DrawBufferSettings>;
    drawIdentifyBufferMode?: DrawIdentifyBufferMode;
    drawMapLabels?: Partial<DrawMapLabelSettings>;
}
export declare const DRAW_BUFFER_UNITS: Array<{
    value: DrawBufferUnit;
    labelKey: string;
}>;
export declare const normalizeHexColor: (color: string | undefined, fallback?: string) => string;
export declare const hexToRgb: (color: string) => [number, number, number];
export declare const darkenHexColor: (color: string) => string;
export declare const lightenHexColor: (color: string) => string;
export declare const createDefaultDrawStyleSettings: () => DrawStyleSettings;
export declare const createDefaultDrawBufferSettings: () => DrawBufferSettings;
export declare const createDefaultDrawMapLabelSettings: () => DrawMapLabelSettings;
export declare const cloneDrawStyleSettings: (settings?: Partial<DrawStyleSettings>) => DrawStyleSettings;
export declare const cloneDrawBufferSettings: (settings?: Partial<DrawBufferSettings>) => DrawBufferSettings;
export declare const cloneDrawMapLabelSettings: (settings?: Partial<DrawMapLabelSettings>) => DrawMapLabelSettings;
export declare const resolveGraphicStyleSettings: (attributes: DrawGraphicSettingsAttributes | undefined, fallback?: DrawStyleSettings) => DrawStyleSettings;
export declare const resolveGraphicBufferSettings: (attributes: DrawGraphicSettingsAttributes | undefined, fallback?: DrawBufferSettings) => DrawBufferSettings;
export declare const resolveGraphicMapLabelSettings: (attributes: DrawGraphicSettingsAttributes | undefined, fallback?: DrawMapLabelSettings) => DrawMapLabelSettings;
export declare const normalizeDrawIdentifyBufferMode: (mode: DrawIdentifyBufferMode | undefined, fallback?: DrawIdentifyBufferMode) => DrawIdentifyBufferMode;
export declare const resolveGraphicIdentifyBufferMode: (attributes: DrawGraphicSettingsAttributes | undefined, fallback?: DrawIdentifyBufferMode) => DrawIdentifyBufferMode;
export declare const createDrawSymbol: (geometryType: string | undefined, style: DrawStyleSettings) => EsriSymbol;
export declare const createDrawBufferSymbol: (style: DrawStyleSettings) => EsriSimpleFillSymbol;
export declare const loadDrawBufferOperators: () => Promise<void>;
export declare const createDrawBufferOnlyGeometry: (geometry: EsriGeometry | null | undefined, buffer: DrawBufferSettings) => EsriGeometry | undefined;
export declare const createDrawBufferGeometry: (geometry: EsriGeometry | null | undefined, buffer: DrawBufferSettings) => EsriPolygon | undefined;
export declare const createDrawBufferGraphic: (sourceGraphic: EsriGraphic, style: DrawStyleSettings, buffer: DrawBufferSettings) => EsriGraphic | undefined;
