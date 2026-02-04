import { APIScope, FileLayer, InstanceAPI } from '../../api/internal';
import { BaseGeometry, Extent, Graphic, Point, SpatialReference, QueryFeaturesArcServerParams, QueryFeaturesParams } from '../api';
export interface QueryFeaturesFileParams extends QueryFeaturesParams {
    layer: FileLayer;
}
export declare class QueryAPI extends APIScope {
    constructor(iApi: InstanceAPI);
    /**
     * Gets an array of OIDs from an arcgis server feature source that satisfy a query
     *
     * @param options contains properties that define the query and specificy request particulars.
     * @returns resolves with array of object ids.
     */
    arcGisServerQueryIds(options: QueryFeaturesArcServerParams): Promise<Array<number>>;
    /**
     * Gets an array of graphics from a locally stored feature layer (file, geojson) that satisfy a query
     *
     * @param options contains properties that define the query and specificy request particulars.
     * @returns resolves with array of graphic result objects.
     */
    geoJsonQuery(options: QueryFeaturesFileParams): Promise<Array<Graphic>>;
    /**
     * Helper function to modify input geometries for queries. Will attempt to avoid various pitfalls,
     * usually around projections
     *
     * @private
     * @param {BaseGeometry} geometry the geometry to be used in a query as a filter
     * @param {Boolean} isFileLayer true if layer is not tied to an arcgis server
     * @param {Integer} [mapScale] optional scale value of the map to help detect problem situations
     * @param {SpatialReference} [sourceSR] optional spatial reference of the layer being queried to help detect problem situations
     * @return {Promise<Geometry>} resolves the input geometry in the most appropriate form based on the inputs
     */
    protected queryGeometryHelper(geometry: BaseGeometry, isFileLayer: boolean, mapScale?: number, sourceSR?: SpatialReference): Promise<__esri.Geometry>;
    /**
     * Create an extent centered around a point, that is appropriate for the current map scale.
     *
     * @function makeClickBuffer
     * @param {Point} point         point on the map for extent center
     * @param {Integer} tolerance   optional. distance in pixels from mouse point that qualifies as a hit. default is 5
     * @return {Extent} an extent of desired size and location
     */
    makeClickBuffer(point: Point, tolerance?: number): Extent;
}
