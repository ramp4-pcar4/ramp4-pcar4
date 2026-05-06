import { execute as EsriBufferOperator } from '@arcgis/core/geometry/operators/bufferOperator';
import { execute as EsriDifferenceOperator } from '@arcgis/core/geometry/operators/differenceOperator';
import {
    execute as EsriGeodesicBufferOperator,
    isLoaded as EsriGeodesicBufferOperatorIsLoaded,
    load as EsriGeodesicBufferOperatorLoad
} from '@arcgis/core/geometry/operators/geodesicBufferOperator';

import { EsriGraphic, EsriSimpleFillSymbol, EsriSimpleLineSymbol, EsriSimpleMarkerSymbol } from '@/geo/esri';
import type { EsriGeometry, EsriPolygon, EsriSymbol } from '@/geo/esri';

export const DRAW_SETTINGS_PANEL_ID = 'draw-settings';
export const DRAW_SHAPE_DETAILS_PANEL_ID = 'draw-shape-details';
export const DRAW_IMPORT_PANEL_ID = 'draw-import';
export const DRAW_DEFAULTS_PANEL_ID = DRAW_SETTINGS_PANEL_ID;
export const DRAW_SHAPE_INSPECTOR_PANEL_ID = DRAW_SHAPE_DETAILS_PANEL_ID;

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
    vertexNumbers: boolean;
}

export interface DrawGraphicSettingsAttributes {
    drawStyle?: Partial<DrawStyleSettings>;
    drawBuffer?: Partial<DrawBufferSettings>;
    drawIdentifyBufferMode?: DrawIdentifyBufferMode;
    drawMapLabels?: Partial<DrawMapLabelSettings>;
}

export const DRAW_BUFFER_UNITS: Array<{ value: DrawBufferUnit; labelKey: string }> = [
    { value: 'meters', labelKey: 'draw.settings.unit.meters' },
    { value: 'kilometers', labelKey: 'draw.settings.unit.kilometers' }
];

const DEFAULT_FILL_COLOR = '#0099db';
const DEFAULT_OPACITY = 35;
const DEFAULT_IDENTIFY_BUFFER_MODE: DrawIdentifyBufferMode = 'shape-buffer';

const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));

const rgbToHex = (red: number, green: number, blue: number): string =>
    `#${[red, green, blue].map(value => clamp(Math.round(value), 0, 255).toString(16).padStart(2, '0')).join('')}`;

export const normalizeHexColor = (color: string | undefined, fallback = DEFAULT_FILL_COLOR): string => {
    if (!color) return fallback;

    const candidate = color.trim();
    const hex = candidate.startsWith('#') ? candidate.slice(1) : candidate;
    if (/^[0-9a-fA-F]{3}$/.test(hex)) {
        return `#${hex
            .split('')
            .map(value => `${value}${value}`)
            .join('')
            .toLowerCase()}`;
    }

    if (/^[0-9a-fA-F]{6}$/.test(hex)) {
        return `#${hex.toLowerCase()}`;
    }

    if (/^[0-9a-fA-F]{8}$/.test(hex)) {
        return `#${hex.slice(0, 6).toLowerCase()}`;
    }

    return fallback;
};

export const hexToRgb = (color: string): [number, number, number] => {
    const normalized = normalizeHexColor(color).slice(1);
    return [
        parseInt(normalized.slice(0, 2), 16),
        parseInt(normalized.slice(2, 4), 16),
        parseInt(normalized.slice(4, 6), 16)
    ];
};

const mixHexColor = (color: string, target: [number, number, number], amount: number): string => {
    const [red, green, blue] = hexToRgb(color);
    const ratio = clamp(amount, 0, 1);

    return rgbToHex(
        red + (target[0] - red) * ratio,
        green + (target[1] - green) * ratio,
        blue + (target[2] - blue) * ratio
    );
};

export const darkenHexColor = (color: string): string => mixHexColor(color, [0, 0, 0], 0.32);

export const lightenHexColor = (color: string): string => mixHexColor(color, [255, 255, 255], 0.46);

export const createDefaultDrawStyleSettings = (): DrawStyleSettings => {
    const fillColor = DEFAULT_FILL_COLOR;
    return {
        fillColor,
        borderColor: darkenHexColor(fillColor),
        bufferColor: lightenHexColor(fillColor),
        opacity: DEFAULT_OPACITY,
        borderColorManual: false,
        bufferColorManual: false
    };
};

export const createDefaultDrawBufferSettings = (): DrawBufferSettings => ({
    distance: 0,
    unit: 'kilometers'
});

export const createDefaultDrawMapLabelSettings = (): DrawMapLabelSettings => ({
    areaLabel: false,
    segmentLength: false,
    vertexNumbers: false
});

export const cloneDrawStyleSettings = (settings: Partial<DrawStyleSettings> = {}): DrawStyleSettings => {
    const defaults = createDefaultDrawStyleSettings();
    return {
        fillColor: normalizeHexColor(settings.fillColor, defaults.fillColor),
        borderColor: normalizeHexColor(settings.borderColor, defaults.borderColor),
        bufferColor: normalizeHexColor(settings.bufferColor, defaults.bufferColor),
        opacity: clamp(Math.round(Number(settings.opacity ?? defaults.opacity)), 0, 100),
        borderColorManual: !!settings.borderColorManual,
        bufferColorManual: !!settings.bufferColorManual
    };
};

export const cloneDrawBufferSettings = (settings: Partial<DrawBufferSettings> = {}): DrawBufferSettings => {
    const defaults = createDefaultDrawBufferSettings();
    const unit = DRAW_BUFFER_UNITS.some(item => item.value === settings.unit) ? settings.unit! : defaults.unit;
    const distance = Number(settings.distance ?? defaults.distance);

    return {
        distance: Number.isFinite(distance) ? Math.max(0, distance) : defaults.distance,
        unit
    };
};

export const cloneDrawMapLabelSettings = (settings: Partial<DrawMapLabelSettings> = {}): DrawMapLabelSettings => ({
    ...createDefaultDrawMapLabelSettings(),
    areaLabel: !!settings.areaLabel,
    segmentLength: !!settings.segmentLength,
    vertexNumbers: !!settings.vertexNumbers
});

export const resolveGraphicStyleSettings = (
    attributes: DrawGraphicSettingsAttributes | undefined,
    fallback: DrawStyleSettings = createDefaultDrawStyleSettings()
): DrawStyleSettings => cloneDrawStyleSettings({ ...fallback, ...attributes?.drawStyle });

export const resolveGraphicBufferSettings = (
    attributes: DrawGraphicSettingsAttributes | undefined,
    fallback: DrawBufferSettings = createDefaultDrawBufferSettings()
): DrawBufferSettings => cloneDrawBufferSettings({ ...fallback, ...attributes?.drawBuffer });

export const resolveGraphicMapLabelSettings = (
    attributes: DrawGraphicSettingsAttributes | undefined,
    fallback: DrawMapLabelSettings = createDefaultDrawMapLabelSettings()
): DrawMapLabelSettings => cloneDrawMapLabelSettings({ ...fallback, ...attributes?.drawMapLabels });

export const normalizeDrawIdentifyBufferMode = (
    mode: DrawIdentifyBufferMode | undefined,
    fallback: DrawIdentifyBufferMode = DEFAULT_IDENTIFY_BUFFER_MODE
): DrawIdentifyBufferMode => (mode === 'shape-buffer' || mode === 'shape' || mode === 'buffer-only' ? mode : fallback);

export const resolveGraphicIdentifyBufferMode = (
    attributes: DrawGraphicSettingsAttributes | undefined,
    fallback: DrawIdentifyBufferMode = DEFAULT_IDENTIFY_BUFFER_MODE
): DrawIdentifyBufferMode => normalizeDrawIdentifyBufferMode(attributes?.drawIdentifyBufferMode, fallback);

const rgba = (color: string, alpha: number): [number, number, number, number] => [
    ...hexToRgb(color),
    clamp(alpha, 0, 1)
];

export const createDrawSymbol = (geometryType: string | undefined, style: DrawStyleSettings): EsriSymbol => {
    const fillAlpha = style.opacity / 100;
    const outlineAlpha = clamp(fillAlpha + 0.35, 0, 1);

    switch (geometryType) {
        case 'point':
        case 'multipoint':
            return new EsriSimpleMarkerSymbol({
                color: rgba(style.fillColor, fillAlpha),
                size: 12,
                outline: {
                    color: rgba(style.borderColor, outlineAlpha),
                    width: 1.5
                }
            });
        case 'polyline':
            return new EsriSimpleLineSymbol({
                color: rgba(style.borderColor, outlineAlpha),
                width: 2
            });
        default:
            return new EsriSimpleFillSymbol({
                color: rgba(style.fillColor, fillAlpha),
                outline: {
                    color: rgba(style.borderColor, outlineAlpha),
                    width: 1.5
                }
            });
    }
};

export const createDrawBufferSymbol = (style: DrawStyleSettings): EsriSimpleFillSymbol =>
    new EsriSimpleFillSymbol({
        color: rgba(style.bufferColor, (style.opacity / 100) * 0.65),
        outline: {
            color: rgba(style.bufferColor, 0),
            width: 0
        }
    });

export const loadDrawBufferOperators = async (): Promise<void> => {
    if (!EsriGeodesicBufferOperatorIsLoaded()) {
        await EsriGeodesicBufferOperatorLoad();
    }
};

export const createDrawBufferOnlyGeometry = (
    geometry: EsriGeometry | null | undefined,
    buffer: DrawBufferSettings
): EsriGeometry | undefined => {
    const bufferGeometry = createDrawBufferGeometry(geometry, buffer);
    if (!geometry || !bufferGeometry) return undefined;

    if (geometry.type !== 'polygon') {
        return bufferGeometry;
    }

    try {
        return (EsriDifferenceOperator(bufferGeometry, geometry) as EsriGeometry | null | undefined) ?? undefined;
    } catch {
        return bufferGeometry;
    }
};

const shouldUseGeodesicBuffer = (geometry: EsriGeometry): boolean =>
    !!geometry.spatialReference?.isGeographic || !!geometry.spatialReference?.isWebMercator;

export const createDrawBufferGeometry = (
    geometry: EsriGeometry | null | undefined,
    buffer: DrawBufferSettings
): EsriPolygon | undefined => {
    if (!geometry || !buffer.distance) return undefined;

    if (shouldUseGeodesicBuffer(geometry) && EsriGeodesicBufferOperatorIsLoaded()) {
        try {
            return EsriGeodesicBufferOperator(geometry, buffer.distance, { unit: buffer.unit }) ?? undefined;
        } catch {
            // Try the planar operator below.
        }
    }

    try {
        return EsriBufferOperator(geometry, buffer.distance, { unit: buffer.unit }) ?? undefined;
    } catch {
        return undefined;
    }
};

export const createDrawBufferGraphic = (
    sourceGraphic: EsriGraphic,
    style: DrawStyleSettings,
    buffer: DrawBufferSettings
): EsriGraphic | undefined => {
    const id = sourceGraphic.attributes?.id;
    const geometry = createDrawBufferGeometry(sourceGraphic.geometry as EsriGeometry | undefined, buffer);
    if (!id || !geometry) return undefined;

    return new EsriGraphic({
        geometry,
        symbol: createDrawBufferSymbol(style),
        attributes: {
            drawBufferFor: id
        }
    });
};
