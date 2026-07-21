import type { EsriGeometry } from '@/geo/esri';

export type Vertex = [number, number];

export type DrawMeasurementTargetKind = 'segment' | 'vertex';

// this list matches the values of the CreateTool type in the esri Sketch widget,
// plus the values of esri geometry `type` property (extent is the only item in that
// property that is not in CreateTool)
export type DrawGraphicType =
    | 'point'
    | 'multipoint'
    | 'polyline'
    | 'polygon'
    | 'circle'
    | 'rectangle'
    | 'mesh'
    | 'freehandPolyline'
    | 'freehandPolygon'
    | 'text'
    | 'extent';

export type DrawGraphicLike = {
    id?: string;
    type?: DrawGraphicType;
    attributes?: any;
    geometry?: EsriGeometry | null;
};
