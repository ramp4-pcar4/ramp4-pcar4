import type { SrDef } from '@/geo/api';
import { EsriSpatialReference } from '@/geo/esri';
import type GeoJson from 'geojson';

/**
 * Represents a geographical spatial reference.
 */
export class SpatialReference {
    /** Well known id. This generally corresponds to an EPSG code or an ESRI wkid number */
    wkid: number | undefined;

    /** Latest well known id. This optional property allows updated wkid values to be leveraged when standards change */
    latestWkid: number | undefined;

    /** Well known type. */
    wkt: string | undefined;

    constructor(wkid: number);
    constructor(wkid: number, latestWkid: number);
    constructor(wkt: string);
    constructor(wkidOrWkt: number | string, latestWkid?: number) {
        if (typeof wkidOrWkt === 'string') {
            this.wkt = wkidOrWkt;
        } else {
            this.wkid = wkidOrWkt;
            this.latestWkid = latestWkid;
        }

        // TODO consider adding a quack if someone attempts to pass a latestWkid with a wkt
        // TODO consider checking for falsy input on the first parameter and quacking
    }

    /**
     * Returns the another spatial reference is the same as this one
     *
     * @method isEqual
     * @param {SpatialReference} otherSR spatial reference to compare to
     * @returns {Boolean} result of the comparison
     */
    isEqual(otherSR: SpatialReference): boolean {
        // TODO consider improving this logic. might make more sense to do
        //      some type of cross-matching against wkid and latestWkid.

        if (this.isWebMercator() && otherSR.isWebMercator()) {
            return true;
        }

        return (
            this.wkid === otherSR.wkid &&
            this.wkt === otherSR.wkt &&
            this.latestWkid === otherSR.latestWkid
        );
    }

    clone(): SpatialReference {
        const sr = new SpatialReference('');
        sr.latestWkid = this.latestWkid;
        sr.wkid = this.wkid;
        sr.wkt = this.wkt;
        return sr;
    }

    lean(): object {
        // returns a stripped down untyped clone that only has valid properties.
        // useful for feeding constructors.

        const l: any = {};
        if (this.wkt) {
            l.wkt = this.wkt;
        } else {
            l.wkid = this.wkid;
            if (this.latestWkid) {
                l.latestWkid = this.latestWkid;
            }
        }
        return l;
    }

    isWebMercator(): boolean {
        const mercator = [900913, 3587, 54004, 41001, 102113, 102100, 3785];
        return !!(
            (this.wkid && mercator.includes(this.wkid)) ||
            (this.latestWkid && mercator.includes(this.latestWkid))
        );
    }

    /**
     * Returns a spatial reference for Lat Long projection
     *
     * @static
     * @method latLongSR
     * @returns {SpatialReference} the initialized spatial reference
     */
    static latLongSR(): SpatialReference {
        return new SpatialReference(4326);
    }

    /**
     * Returns a spatial ref object from a config typed object
     * @param srObject config spatial reference object
     * @returns spatial reference object with same settings as input
     */
    static fromConfig(srObject: any): SpatialReference {
        // note using any type on input as this API class wont know about config object interfaces
        if (srObject.wkt) {
            return new SpatialReference(<string>srObject.wkt);
        } else if (srObject.wkid) {
            return new SpatialReference(srObject.wkid, srObject.latestWkid);
        } else {
            throw new Error('Could not parse config spatial reference object');
        }
    }

    static parseSR(sr?: SrDef): SpatialReference {
        if (!sr) {
            // default to lat long if no SR is provided
            return SpatialReference.latLongSR();
        } else if (sr instanceof SpatialReference) {
            return sr.clone();
        } else {
            // cheating typescript. this will pass a string wkt or number wkid
            return new SpatialReference(<any>sr);
        }
    }

    static fromESRI(esriSR: EsriSpatialReference): SpatialReference {
        if (esriSR.wkt) {
            return new SpatialReference(esriSR.wkt);
        } else {
            const latestWkid = esriSR.toJSON().latestWkid; // for whatever reason, esri type doesnt expose the property
            const rampSR = new SpatialReference(esriSR.wkid);
            if (latestWkid) {
                rampSR.latestWkid = latestWkid;
            }
            return rampSR;
        }
    }

    toESRI(): EsriSpatialReference {
        return new EsriSpatialReference(this.lean());
    }

    static fromGeoJSON(
        crs: GeoJson.CoordinateReferenceSystem | undefined
    ): SpatialReference {
        const p: string = SpatialReference.parseGeoJsonCrs(crs);

        if (p.substring(0, 5) === 'EPSG:') {
            return new SpatialReference(parseInt(p.slice(5)));
        } else {
            // assuming wkt, hope for the best
            return new SpatialReference(p);
        }
    }

    /**
     * Convert a GeoJSON styled co-ord reference to an EPSG styled string
     * @param {GeoJson.CoordinateReferenceSystem} crs GeoJSON crs object
     * @returns {string} EPSG projection string, either EPSG code or wkt
     */
    static parseGeoJsonCrs(
        crs: GeoJson.CoordinateReferenceSystem | undefined
    ): string {
        if (!crs) {
            return 'EPSG:4326';
        } else if (crs.type === 'name') {
            const urnRegex = /urn:ogc:def:crs:EPSG::(\d+)/;

            // no input SR given, and geojson has some spatial ref info on it
            const val: string = crs.properties.name;
            const matches = val.match(urnRegex);
            if (matches) {
                return 'EPSG:' + matches[1];
            } else if (val.substring(0, 7) !== 'urn:ogc') {
                // we will assume its wkt and hope for the best
                return val;
            }
        }

        // if we get this far, things are not happy
        console.error(
            'Encountered unsupported GeoJSON CRS format. Defaulting to lat-long, resuling conversion is likely wrong',
            crs
        );
        return 'EPSG:4326';
    }

    // TODO all geoms have optional .crs property.
    //      Since this function will likely be called on every geom in a set,
    //      we may want to have logic to leave it undefined if crs is latlong
    //      also might want to consider various magics for feature sets to remove all the crs
    //      from the geoms and just define once on the feature set.
    //      Tricky because it depends on the orchestrator knowing what the deal is.
    //      As implemented now, it is the safest option, but most bulky

    toGeoJSON(): GeoJson.NamedCoordinateReferenceSystem {
        const crs = {
            type: 'name',
            properties: {
                name: ''
            }
        };
        if (this.wkt) {
            crs.properties.name = this.wkt; // this is probably wrong, but i dont see a way to hardcode wkt in the geojson specs
        } else {
            crs.properties.name =
                'urn:ogc:def:crs:EPSG::' + (this.latestWkid || this.wkid);
        }
        return crs;
    }
}
