import {
    EsriAreaOperator,
    EsriCentroidOperator,
    EsriGeodeticAreaOperator,
    EsriGeodeticAreaOperatorIsLoaded,
    EsriGeodeticAreaOperatorLoad,
    EsriGeodeticLengthOperator,
    EsriGeodeticLengthOperatorIsLoaded,
    EsriGeodeticLengthOperatorLoad,
    EsriLengthOperator,
    EsriPoint,
    EsriPolygon,
    EsriPolyline
} from '@/geo/esri';
import type { EsriGeometry, EsriMapView } from '@/geo/esri';

import type { DrawMeasurementTargetKind, Vertex } from './types';

export type FormattedDrawMeasurement = {
    display: string;
    spoken: string;
};

export type DrawSegment = {
    index: number;
    key: string;
    letter: string;
    start: Vertex;
    end: Vertex;
    startVertexIndex: number;
    endVertexIndex: number;
    lengthMeters: number;
};

export type DrawVertex = {
    index: number;
    key: string;
    vertex: Vertex;
};

let measurementOperatorLoadPromise: Promise<void> | null = null;

export const makeDrawMeasurementTargetKey = (
    graphicId: string,
    kind: DrawMeasurementTargetKind,
    index: number
): string => `${graphicId}:${kind}:${index}`;

export const makeDrawSegmentKey = (graphicId: string, index: number): string =>
    makeDrawMeasurementTargetKey(graphicId, 'segment', index);

export const makeDrawVertexKey = (graphicId: string, index: number): string =>
    makeDrawMeasurementTargetKey(graphicId, 'vertex', index);

export const parseDrawMeasurementTargetKey = (
    key: string | null | undefined
): { graphicId: string; kind: DrawMeasurementTargetKind; index: number } | undefined => {
    if (!key) return undefined;

    const parts = key.split(':');
    if (parts.length < 3) return undefined;

    const indexText = parts.pop();
    const kind = parts.pop();
    const graphicId = parts.join(':');
    const index = Number(indexText);

    if ((kind !== 'segment' && kind !== 'vertex') || !graphicId || !Number.isInteger(index) || index < 0) {
        return undefined;
    }

    return { graphicId, kind, index };
};

export const segmentLetter = (index: number): string => {
    let value = index + 1;
    let label = '';

    while (value > 0) {
        value--;
        label = String.fromCharCode(65 + (value % 26)) + label;
        value = Math.floor(value / 26);
    }

    return label;
};

export const formatDrawMeasurementNumber = (value: number, maximumFractionDigits: number, locale: string): string =>
    value.toLocaleString(locale, {
        maximumFractionDigits,
        minimumFractionDigits: 0
    });

export const formatDrawLength = (meters: number, locale: string): FormattedDrawMeasurement => {
    const absMeters = Math.abs(meters);

    if (absMeters >= 1000) {
        const kilometers = absMeters / 1000;
        const decimals = kilometers >= 10 ? 1 : 2;
        const value = formatDrawMeasurementNumber(kilometers, decimals, locale);
        return {
            display: `${value} km`,
            spoken: `${value} kilometers`
        };
    }

    if (absMeters >= 1) {
        const decimals = absMeters >= 10 ? 0 : 1;
        const value = formatDrawMeasurementNumber(absMeters, decimals, locale);
        return {
            display: `${value} m`,
            spoken: `${value} meters`
        };
    }

    const centimeters = absMeters * 100;
    const value = formatDrawMeasurementNumber(centimeters, centimeters >= 10 ? 0 : 1, locale);
    return {
        display: `${value} cm`,
        spoken: `${value} centimeters`
    };
};

export const formatDrawMapArea = (squareMeters: number, locale: string): FormattedDrawMeasurement => {
    const absSquareMeters = Math.abs(squareMeters);

    if (absSquareMeters >= 1000000) {
        const squareKilometers = absSquareMeters / 1000000;
        const decimals = squareKilometers >= 10 ? 1 : 2;
        const value = formatDrawMeasurementNumber(squareKilometers, decimals, locale);
        return {
            display: `${value} sq km`,
            spoken: `${value} square kilometers`
        };
    }

    const decimals = absSquareMeters >= 100 ? 0 : absSquareMeters >= 10 ? 1 : 2;
    const value = formatDrawMeasurementNumber(absSquareMeters, decimals, locale);
    return {
        display: `${value} sq m`,
        spoken: `${value} square meters`
    };
};

export const shouldUseGeodesicMeasurement = (geometry: EsriGeometry): boolean =>
    !!geometry.spatialReference?.isGeographic || !!geometry.spatialReference?.isWebMercator;

export const loadDrawMeasurementOperators = async (): Promise<void> => {
    measurementOperatorLoadPromise ??= Promise.all([
        EsriGeodeticAreaOperatorIsLoaded() ? Promise.resolve() : EsriGeodeticAreaOperatorLoad(),
        EsriGeodeticLengthOperatorIsLoaded() ? Promise.resolve() : EsriGeodeticLengthOperatorLoad()
    ]).then(() => undefined);

    await measurementOperatorLoadPromise;
};

export const executeDrawLengthMeters = (polyline: EsriPolyline, geodesic: boolean): number =>
    geodesic
        ? EsriGeodeticLengthOperator(polyline, { unit: 'meters' })
        : EsriLengthOperator(polyline, { unit: 'meters' });

export const measureDrawPolylineMeters = (polyline: EsriPolyline): number | undefined => {
    const geodesic = shouldUseGeodesicMeasurement(polyline);

    try {
        const length = Math.abs(executeDrawLengthMeters(polyline, geodesic));
        if (Number.isFinite(length)) return length;
    } catch {
        // Fall back to the alternate operator when the preferred path fails.
    }

    try {
        const length = Math.abs(executeDrawLengthMeters(polyline, !geodesic));
        return Number.isFinite(length) ? length : undefined;
    } catch {
        return undefined;
    }
};

export const executeDrawAreaSquareMeters = (polygon: EsriPolygon, geodesic: boolean): number =>
    geodesic
        ? EsriGeodeticAreaOperator(polygon, { unit: 'square-meters' })
        : EsriAreaOperator(polygon, { unit: 'square-meters' });

export const measureDrawPolygonSquareMeters = (polygon: EsriPolygon): number | undefined => {
    const geodesic = shouldUseGeodesicMeasurement(polygon);

    try {
        const area = Math.abs(executeDrawAreaSquareMeters(polygon, geodesic));
        if (Number.isFinite(area)) return area;
    } catch {
        // Fall back to the alternate operator when the preferred path fails.
    }

    try {
        const area = Math.abs(executeDrawAreaSquareMeters(polygon, !geodesic));
        return Number.isFinite(area) ? area : undefined;
    } catch {
        return undefined;
    }
};

export const measureDrawPolygonPerimeterMeters = (polygon: EsriPolygon): number | undefined =>
    measureDrawPolylineMeters(
        new EsriPolyline({
            paths: polygon.rings,
            spatialReference: polygon.spatialReference
        })
    );

export const segmentMidpoint = (
    start: Vertex,
    end: Vertex,
    spatialReference: EsriGeometry['spatialReference']
): EsriPoint =>
    new EsriPoint({
        x: (start[0] + end[0]) / 2,
        y: (start[1] + end[1]) / 2,
        spatialReference
    });

const normalizeTextAngle = (angle: number): number => {
    if (angle > 90) return angle - 180;
    if (angle < -90) return angle + 180;
    return angle;
};

export const segmentAngle = (
    start: Vertex,
    end: Vertex,
    spatialReference: EsriGeometry['spatialReference'],
    view?: EsriMapView | null
): number => {
    if (view) {
        const startScreen = view.toScreen(new EsriPoint({ x: start[0], y: start[1], spatialReference }));
        const endScreen = view.toScreen(new EsriPoint({ x: end[0], y: end[1], spatialReference }));
        if (startScreen && endScreen) {
            return normalizeTextAngle(
                (Math.atan2(endScreen.y - startScreen.y, endScreen.x - startScreen.x) * 180) / Math.PI
            );
        }
    }

    return normalizeTextAngle((Math.atan2(end[1] - start[1], end[0] - start[0]) * 180) / Math.PI);
};

export const segmentLengthMeters = (
    start: Vertex,
    end: Vertex,
    spatialReference: EsriGeometry['spatialReference']
): number | undefined =>
    measureDrawPolylineMeters(
        new EsriPolyline({
            paths: [
                [
                    [start[0], start[1]],
                    [end[0], end[1]]
                ]
            ],
            spatialReference
        })
    );

export const polygonLabelPoint = (polygon: EsriPolygon): EsriPoint | undefined => {
    try {
        const centroid = EsriCentroidOperator(polygon);
        if (centroid) {
            return centroid;
        }
    } catch {
        // Fall back to the extent center below.
    }

    const extent = polygon.extent;
    if (!extent) return undefined;

    return new EsriPoint({
        x: (extent.xmin + extent.xmax) / 2,
        y: (extent.ymin + extent.ymax) / 2,
        spatialReference: polygon.spatialReference
    });
};

export const sameVertex = (first: Vertex, second: Vertex): boolean => first[0] === second[0] && first[1] === second[1];

const ringDisplayVertices = (ring: Vertex[]): Vertex[] => {
    if (ring.length > 1 && sameVertex(ring[0], ring[ring.length - 1])) {
        return ring.slice(0, -1);
    }

    return ring;
};

export const geometryVertexCoordinates = (geometry: EsriGeometry | undefined): Vertex[] => {
    if (!geometry) return [];

    if (geometry.type === 'polyline') {
        return (geometry as EsriPolyline).paths.flatMap(path => path as Vertex[]);
    }

    if (geometry.type === 'polygon') {
        return (geometry as EsriPolygon).rings.flatMap(ring => ringDisplayVertices(ring as Vertex[]));
    }

    return [];
};

export const buildDrawVertices = (geometry: EsriGeometry | undefined, graphicId: string): DrawVertex[] =>
    geometryVertexCoordinates(geometry).map((vertex, index) => ({
        index,
        key: makeDrawVertexKey(graphicId, index),
        vertex
    }));

export const buildDrawSegments = (geometry: EsriGeometry | undefined, graphicId: string): DrawSegment[] => {
    if (!geometry || (geometry.type !== 'polyline' && geometry.type !== 'polygon')) {
        return [];
    }

    const spatialReference = geometry.spatialReference;
    const segments: DrawSegment[] = [];
    let segmentIndex = 0;
    let vertexOffset = 0;

    const addSegment = (start: Vertex, end: Vertex, startVertexIndex: number, endVertexIndex: number) => {
        const lengthMeters = segmentLengthMeters(start, end, spatialReference);
        if (!lengthMeters || lengthMeters < 0.01) {
            return;
        }

        const index = segmentIndex++;
        segments.push({
            index,
            key: makeDrawSegmentKey(graphicId, index),
            letter: segmentLetter(index),
            start,
            end,
            startVertexIndex,
            endVertexIndex,
            lengthMeters
        });
    };

    if (geometry.type === 'polyline') {
        (geometry as EsriPolyline).paths.forEach(path => {
            const vertices = path as Vertex[];
            for (let index = 0; index < vertices.length - 1; index++) {
                addSegment(vertices[index], vertices[index + 1], vertexOffset + index + 1, vertexOffset + index + 2);
            }
            vertexOffset += vertices.length;
        });

        return segments;
    }

    (geometry as EsriPolygon).rings.forEach(ring => {
        const vertices = ringDisplayVertices(ring as Vertex[]);
        if (vertices.length < 2) {
            vertexOffset += vertices.length;
            return;
        }

        for (let index = 0; index < vertices.length - 1; index++) {
            addSegment(vertices[index], vertices[index + 1], vertexOffset + index + 1, vertexOffset + index + 2);
        }

        if (vertices.length > 2) {
            addSegment(vertices[vertices.length - 1], vertices[0], vertexOffset + vertices.length, vertexOffset + 1);
        }

        vertexOffset += vertices.length;
    });

    return segments;
};
