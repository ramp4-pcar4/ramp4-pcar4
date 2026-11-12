import { GeometryFlavour, GeometryType, SpatialReference, IdDef, SrDef } from '../..';
import { EsriGeometry } from '../../../esri';
import { default as GeoJson } from 'geojson';
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
     */
    get type(): GeometryType;
    /**
     * Returns the flavour of the geometry object.
     * Useful for things like determining a valid symbology definition for the geometry.
     */
    get flavour(): GeometryFlavour;
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
