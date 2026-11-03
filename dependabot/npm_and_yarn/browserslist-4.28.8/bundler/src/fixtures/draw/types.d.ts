import { EsriGeometry } from '../../geo/esri';
import { BaseGeometry } from '../../geo/api';
import { DrawShapeExportRecord } from './shape-io';
export type Vertex = [number, number];
export type DrawMeasurementTargetKind = 'segment' | 'vertex';
export type DrawGraphicType = 'point' | 'multipoint' | 'polyline' | 'polygon' | 'circle' | 'rectangle' | 'mesh' | 'freehandPolyline' | 'freehandPolygon' | 'text' | 'extent';
export type DrawGraphicLike = {
    id?: string;
    type?: DrawGraphicType;
    attributes?: any;
    geometry?: EsriGeometry | null;
};
export interface DrawingEventPayload {
    id: string;
    drawing: DrawShapeExportRecord;
    rampGeom: BaseGeometry;
}
export interface NewDrawingEventPayload extends DrawingEventPayload {
    /**
     * True if the user drew it via the tools. False if imported.
     */
    user: boolean;
}
