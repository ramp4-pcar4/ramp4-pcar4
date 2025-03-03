import { SrDef } from '../..';
import { EsriSpatialReference } from '../../../esri';
import { default as GeoJson } from 'geojson';
/**
 * Represents a geographical spatial reference.
 */
export declare class SpatialReference {
    /** Well known id. This generally corresponds to an EPSG code or an ESRI wkid number */
    wkid: number | undefined;
    /** Latest well known id. This optional property allows updated wkid values to be leveraged when standards change */
    latestWkid: number | undefined;
    /** Well known type. */
    wkt: string | undefined;
    constructor(wkid: number);
    constructor(wkid: number, latestWkid: number);
    constructor(wkt: string);
    /**
     * Returns the another spatial reference is the same as this one
     *
     * @method isEqual
     * @param {SpatialReference} otherSR spatial reference to compare to
     * @returns {Boolean} result of the comparison
     */
    isEqual(otherSR: SpatialReference): boolean;
    clone(): SpatialReference;
    lean(): object;
    isWebMercator(): boolean;
    /**
     * Returns a spatial reference for Lat Long projection
     *
     * @static
     * @method latLongSR
     * @returns {SpatialReference} the initialized spatial reference
     */
    static latLongSR(): SpatialReference;
    /**
     * Returns a spatial ref object from a config typed object
     * @param srObject config spatial reference object
     * @returns spatial reference object with same settings as input
     */
    static fromConfig(srObject: any): SpatialReference;
    /**
     * Parse the typical RAMP formats for spatial references into an RAMP SpatialReference object
     * @param {SpatialReference | string | number} sr can be RAMP SpatialReference, WKID integer, WKT string, or ESPG:#### string
     * @returns {SpatialReference} Spatial Reference object
     */
    static parseSR(sr?: SrDef): SpatialReference;
    static fromESRI(esriSR: EsriSpatialReference): SpatialReference;
    toESRI(): EsriSpatialReference;
    static fromGeoJSON(crs: GeoJson.CoordinateReferenceSystem | undefined): SpatialReference;
    /**
     * Convert a GeoJSON styled co-ord reference to an EPSG styled string
     * @param {GeoJson.CoordinateReferenceSystem} crs GeoJSON crs object
     * @returns {string} A proj4 friendly projection, in the form EPSG:#### or a WKT
     */
    static parseGeoJsonCrs(crs: GeoJson.CoordinateReferenceSystem | undefined): string;
    toGeoJSON(): GeoJson.NamedCoordinateReferenceSystem;
}
