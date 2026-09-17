import { BaseGeometry, Extent, SpatialReference, EpsgLookup, SrDef } from '..';
export declare class ProjectionAPI {
    protected espgWorker: EpsgLookup;
    constructor();
    /**
     * Add a projection definition.
     * @param {number | string} code the projection code to add.
     * @param {string} proj4formula the formula for the projection.
     */
    addProjection(code: number | string, proj4formula: string): void;
    private defaultEpsgLookup;
    /**
     * Fetch a projection string from an EPSG service
     * @param { String | Number } code an EPSG projection code to look up
     * @returns { Promise<String> } resolves with proj4 projection string, or rejects if not found
     */
    epsgLookup(code: string | number): Promise<string>;
    /**
     * Provide an alternate lookup function to find proj4 projection strings based off EPSG codes. Be aware this setting
     * is page-wide, and will impact any instance of RAMP running.
     * Function signature should be `f(code: string | number): Promise<string>`.
     * The function should be able to parse codes that are
     * - just the integer part of an EPSG code (e.g. 1234)
     * - a string in EPSG format (e.g. 'EPSG:1234')
     * - a string in URN format (e.g. 'urn:ogc:def:crs:EPSG::1234')
     * @param lookupFunction
     */
    setEpsgLookup(lookupFunction: EpsgLookup): void;
    /**
     * Convert a projection to an string that is compatible with proj4.  If it is an SpatialReference or an integer it will be converted.
     * @param {SpatialReference|Integer|String} proj an SpatialReference, integer or string.  Strings will be unchanged and unchecked,
     * ints and SpatialReference objects will be converted.
     * @return {String} A proj4 friendly projection, in the form EPSG:#### or a WKT
     */
    normalizeProj(proj: SpatialReference | string | number): string;
    /**
     * Check whether or not a spatialReference is supported by proj4 library. Attempt to load from epsg source if not.
     *
     * @param {SpatialReference | string | number} spatialReference to be checked to see if it's supported by proj4. Can be ESRI SR object, WKID integer, EPSG string or WKT.
     * @returns {Promise<boolean>} true if proj was defined or was able to download definition. false if out of luck
     */
    checkProj(spatialReference: SpatialReference | string | number): Promise<boolean>;
    /**
     * Utility for checking a set of spatial references, rejects if one cannot be used
     *
     * @param {Array<SpatialReference | string | number>} spatialReferences set of Spatial references to be checked. Can be ESRI SR object, WKID integer, EPSG string or WKT.
     * @returns {Promise<void>} resolves after all references succeed the check. rejects if any test fails.
     */
    checkProjBomber(spatialReferences: Array<any>): Promise<void>;
    /**
     * Reproject a GeoJSON object in place.
     * Note the .crs of the object will not be updated or corrected.
     * Valid formats for the spatial reference parameters are: RAMP SpatialReference, WKID number,
     * WKT string, or EPSG:#### string
     *
     * @param {Object} geojson the GeoJSON to be reprojected, this will be modified in place
     * @param {SpatialReference | String | Number} inputSR spatial reference of the GeoJSON. If missing it will attempt to use any crs data in the GeoJSON, defaulting to Lat Long.
     * @param {SpatialReference | String | Number} outputSR spatial reference to project to. If missing, will use Lat Long.
     * @returns {Promise<Object>} resolves with projected geoJson
     */
    projectGeoJson(geoJson: any, inputSR?: SpatialReference | string | number, outputSR?: SpatialReference | string | number): Promise<any>;
    /**
     * Project a geometry using local calculations (proj4)
     *
     * @param {SpatialReference | Integer | String} destProj the spatial reference of the result (as SpatialReference, integer WKID or an EPSG string)
     * @param {BaseGeometry} geometry a RAMP API Geometry object
     * @return {Promise} resolve in a RAMP API Geometry object with co-ordinates in the destination projection
     */
    projectGeometry(destProj: SrDef, geometry: BaseGeometry): Promise<BaseGeometry>;
    /**
     * Reproject an Extent object on the client.  Does not require network traffic,
     * but may not handle conversion between projection types as well.
     * Internally it tests 8 points along each edge and takes the max extent of the result.
     * To project an extent without warping, convert to a polygon and do a standard geometry projection
     * (result will not be guaranteed to retain Extent characteristics)
     *
     * @param {SpatialReference | Integer | String} destProj the spatial reference of the result (as SpatialReference, integer WKID or an EPSG string)
     * @param {Extent} extent to reproject
     * @returns {Promise} resolves with the reprojected extent
     */
    projectExtent(destProj: SrDef, extent: Extent): Promise<Extent>;
}
