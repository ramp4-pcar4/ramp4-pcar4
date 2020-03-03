// TODO add proper documentation

import { SrDef } from '../apiDefs';

/**
 * Represents a geographical spatial reference.
 */
export default class SpatialReference {

    /** Well known id. This generally corresponds to an EPSG code or an ESRI wkid number */
    wkid: number;

    /** Latest well known id. This optional property allows updated wkid values to be leveraged when standards change */
    latestWkid: number;

    /** Well known type. */
    wkt: string;

    constructor(wkid: number)
    constructor(wkid: number, latestWkid: number)
    constructor(wkt: string)
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
        //      e.g. 102100 and 3857 should effectively be considered equal
        return (this.wkid === otherSR.wkid) &&
            (this.wkt === otherSR.wkt) &&
            (this.latestWkid === otherSR.latestWkid);
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

}