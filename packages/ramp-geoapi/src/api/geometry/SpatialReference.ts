// TODO add proper documentation

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
}