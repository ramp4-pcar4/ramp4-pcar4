import type { EsriGeometry } from '@/geo/esri';
import type { BaseGeometry } from '@/geo/api';
import type { DrawShapeExportRecord } from './shape-io';

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
