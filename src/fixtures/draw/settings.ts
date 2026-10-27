export const DRAW_SETTINGS_PANEL_ID = 'draw-settings';
export const DRAW_SHAPE_DETAILS_PANEL_ID = 'draw-shape-details';
export const DRAW_IMPORT_PANEL_ID = 'draw-import';

export type DrawBufferUnit = 'meters' | 'kilometers';

export type DrawIdentifyBufferMode = 'shape-buffer' | 'shape' | 'buffer-only';

export type DrawBufferMathType = 'geodesic' | 'planar';

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

export const DRAW_BUFFER_UNITS: Array<{ value: DrawBufferUnit; labelKey: string }> = [
    { value: 'meters', labelKey: 'draw.settings.unit.meters' },
    { value: 'kilometers', labelKey: 'draw.settings.unit.kilometers' }
];

const DEFAULT_FILL_COLOR = '#0099db';
const DEFAULT_OPACITY = 35;
const DEFAULT_IDENTIFY_BUFFER_MODE: DrawIdentifyBufferMode = 'shape-buffer';

export const clamp = (value: number, min: number, max: number): number => Math.min(max, Math.max(min, value));
const hasOwn = <T extends object, K extends PropertyKey>(value: T, key: K): value is T & Record<K, unknown> =>
    Object.prototype.hasOwnProperty.call(value, key);

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
    segmentLetters: false,
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
    segmentLetters: hasOwn(settings, 'segmentLetters') ? !!settings.segmentLetters : !!settings.segmentLength,
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
): DrawMapLabelSettings => {
    const source = attributes?.drawMapLabels;
    const resolved = cloneDrawMapLabelSettings({ ...fallback, ...source });
    if (source && !hasOwn(source, 'segmentLetters')) {
        resolved.segmentLetters = !!source.segmentLength || fallback.segmentLetters;
    }
    return resolved;
};

export const normalizeDrawIdentifyBufferMode = (
    mode: DrawIdentifyBufferMode | undefined,
    fallback: DrawIdentifyBufferMode = DEFAULT_IDENTIFY_BUFFER_MODE
): DrawIdentifyBufferMode => (mode === 'shape-buffer' || mode === 'shape' || mode === 'buffer-only' ? mode : fallback);

export const resolveGraphicIdentifyBufferMode = (
    attributes: DrawGraphicSettingsAttributes | undefined,
    fallback: DrawIdentifyBufferMode = DEFAULT_IDENTIFY_BUFFER_MODE
): DrawIdentifyBufferMode => normalizeDrawIdentifyBufferMode(attributes?.drawIdentifyBufferMode, fallback);

export const rgba = (color: string, alpha: number): [number, number, number, number] => [
    ...hexToRgb(color),
    clamp(alpha, 0, 1)
];
