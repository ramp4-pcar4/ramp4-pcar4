import { GeometryType, SpatialReference } from '@/geo/api';
import type { SrDef, IdDef } from '@/geo/api';
import type { EsriGeometry } from '@/geo/esri';
import type GeoJson from 'geojson';
/**
 * Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.
 */
export declare class BaseGeometry {
    /** Spatial Reference of the geometry */
    sr: SpatialReference;
    /** Id of the geometry */
    readonly id: string;
    constructor(id: IdDef, sr?: SrDef);
    /**
     * Returns the type of the geometry object.
     * Function implementation in subclasses.
     */
    get type(): GeometryType;
    protected childIdGenerator(idx: number): string;
    toESRI(): EsriGeometry;
    toGeoJSON(): GeoJson.DirectGeometryObject;
    invalid(): boolean;
    protected geoJsonFactory(type: string, coords: Array<any>): GeoJson.DirectGeometryObject;
}
export declare class NoGeometry extends BaseGeometry {
    constructor();
    get type(): GeometryType;
}
