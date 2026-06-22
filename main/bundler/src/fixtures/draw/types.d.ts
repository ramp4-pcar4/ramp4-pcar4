import { EsriGeometry } from '../../geo/esri';
export type Vertex = [number, number];
export type DrawMeasurementTargetKind = 'segment' | 'vertex';
export type DrawGraphicLike = {
    id?: string;
    attributes?: any;
    geometry?: EsriGeometry | null;
};
