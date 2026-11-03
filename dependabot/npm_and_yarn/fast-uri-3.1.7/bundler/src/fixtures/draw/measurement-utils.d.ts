import { EsriPoint, EsriPolygon, EsriPolyline, EsriGeometry, EsriMapView } from '../../geo/esri';
import { DrawMeasurementTargetKind, Vertex } from './types';
export type FormattedDrawMeasurement = {
    display: string;
    spoken: string;
};
export type DrawMeasurementTranslator = (key: string, values?: Record<string, unknown>) => string;
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
export declare const makeDrawMeasurementTargetKey: (graphicId: string, kind: DrawMeasurementTargetKind, index: number) => string;
export declare const makeDrawSegmentKey: (graphicId: string, index: number) => string;
export declare const makeDrawVertexKey: (graphicId: string, index: number) => string;
export declare const parseDrawMeasurementTargetKey: (key: string | null | undefined) => {
    graphicId: string;
    kind: DrawMeasurementTargetKind;
    index: number;
} | undefined;
export declare const segmentLetter: (index: number) => string;
export declare const formatDrawMeasurementNumber: (value: number, maximumFractionDigits: number, locale: string) => string;
export declare const formatDrawLength: (meters: number, locale: string, t?: DrawMeasurementTranslator) => FormattedDrawMeasurement;
export declare const formatDrawMapArea: (squareMeters: number, locale: string, t?: DrawMeasurementTranslator) => FormattedDrawMeasurement;
export declare const shouldUseGeodesicMeasurement: (geometry: EsriGeometry) => boolean;
export declare const loadDrawMeasurementOperators: () => Promise<void>;
export declare const executeDrawLengthMeters: (polyline: EsriPolyline, geodesic: boolean) => number;
export declare const measureDrawPolylineMeters: (polyline: EsriPolyline) => number | undefined;
export declare const executeDrawAreaSquareMeters: (polygon: EsriPolygon, geodesic: boolean) => number;
export declare const measureDrawPolygonSquareMeters: (polygon: EsriPolygon) => number | undefined;
export declare const measureDrawPolygonPerimeterMeters: (polygon: EsriPolygon) => number | undefined;
export declare const segmentMidpoint: (start: Vertex, end: Vertex, spatialReference: EsriGeometry["spatialReference"]) => EsriPoint;
export declare const segmentAngle: (start: Vertex, end: Vertex, spatialReference: EsriGeometry["spatialReference"], view?: EsriMapView | null) => number;
export declare const segmentLengthMeters: (start: Vertex, end: Vertex, spatialReference: EsriGeometry["spatialReference"]) => number | undefined;
export declare const polygonLabelPoint: (polygon: EsriPolygon) => EsriPoint | undefined;
export declare const sameVertex: (first: Vertex, second: Vertex) => boolean;
export declare const geometryVertexCoordinates: (geometry: EsriGeometry | undefined) => Vertex[];
export declare const buildDrawVertices: (geometry: EsriGeometry | undefined, graphicId: string) => DrawVertex[];
export declare const buildDrawSegments: (geometry: EsriGeometry | undefined, graphicId: string) => DrawSegment[];
