import { EsriGeometry } from '../../geo/esri';
export type Vertex = [number, number];
export type DrawMeasurementTargetKind = 'segment' | 'vertex';
export type DrawGraphicType = 'point' | 'multipoint' | 'polyline' | 'polygon' | 'circle' | 'rectangle' | 'mesh' | 'freehandPolyline' | 'freehandPolygon' | 'text' | 'extent';
export type DrawGraphicLike = {
    id?: string;
    type?: DrawGraphicType;
    attributes?: any;
    geometry?: EsriGeometry | null;
};
