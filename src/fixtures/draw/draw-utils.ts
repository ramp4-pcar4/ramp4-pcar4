import {
    EsriBufferOperator,
    EsriDifferenceOperator,
    EsriGeodesicBufferOperator,
    EsriGeodesicBufferOperatorIsLoaded,
    EsriGeodesicBufferOperatorLoad,
    EsriGraphic,
    EsriSimpleFillSymbol,
    EsriSimpleLineSymbol,
    EsriSimpleMarkerSymbol
} from '@/geo/esri';
import type { EsriGeometry, EsriPolygon, EsriSymbol } from '@/geo/esri';
import type { DrawBufferSettings, DrawStyleSettings } from './settings';
import { clamp, rgba } from './settings';
import { useDrawStore } from './store';

const drawStore = useDrawStore();

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

// NOTE: this was the original logic for geodesic buffer usage. See Discussion #3080
//
// const shouldUseGeodesicBuffer = (geometry: EsriGeometry): boolean =>
//     !!geometry.spatialReference?.isGeographic || !!geometry.spatialReference?.isWebMercator;

const shouldUseGeodesicBuffer = (): boolean => drawStore.bufferMath === 'geodesic';

export const createDrawBufferGeometry = (
    geometry: EsriGeometry | null | undefined,
    buffer: DrawBufferSettings
): EsriPolygon | undefined => {
    if (!geometry || !buffer.distance) return undefined;

    if (shouldUseGeodesicBuffer() && EsriGeodesicBufferOperatorIsLoaded()) {
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
