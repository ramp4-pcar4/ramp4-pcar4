import { Tools } from 'terraformer';
import GeoJson from 'geojson';
import {
    BaseGeometry,
    EpsgLookup,
    Extent,
    GeometryType,
    Polygon,
    SpatialReference,
    SrDef
} from '@/geo/api';
import { EsriRequest } from '@/geo/esri';

// since ProjectionService is now a class instead a stateless service, it appears that the proj4 library is maintaining it's state
// (i.e. if we add defs in one function, they remain available in other functions).
// I think as long as we keep all the proj4 activity to this module (which makes sense) we'll be ok.
// If things start to get squirrly, consider instantiating proj4 at geoApi startup and adding it to the infoBundle to make it available.
import proj4 from 'proj4';

// this was old way, might need to do this?
/*
let proj4 = require('proj4');
proj4 = proj4.default ? proj4.default : proj4;
*/

export class ProjectionAPI {
    protected espgWorker: EpsgLookup;

    constructor(epsgFunction: EpsgLookup | undefined = undefined) {
        if (epsgFunction) {
            this.espgWorker = epsgFunction; // override with client-defined function
        } else {
            this.espgWorker = this.defaultEpsgLookup;
        }

        // cook in useful things to proj4 that won't be available via epsgLookup
        proj4.defs(
            'EPSG:3978',
            '+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
        );
        proj4.defs(
            'EPSG:3979',
            '+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
        );
        proj4.defs(
            'EPSG:54004',
            '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs'
        );
        proj4.defs('EPSG:102100', proj4.defs('EPSG:3857'));
        proj4.defs(
            'EPSG:102187',
            '+proj=tmerc +lat_0=0 +lon_0=-114 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
        );
        proj4.defs(
            'EPSG:102190',
            '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
        );

        // add UTM projections
        let utm = 1;
        while (utm <= 60) {
            let zone = utm < 10 ? `0${utm}` : utm;
            proj4.defs(
                `EPSG:326${zone}`,
                `+proj=utm +zone=${utm} +ellps=WGS84 +datum=WGS84 +units=m +no_defs`
            );
            utm++;
        }
    }

    // default for lazyness. uses official epsg website, hardcoded for extra style points.
    private defaultEpsgLookup(code: string | number): Promise<string> {
        const urnRegex: RegExp = /urn:ogc:def:crs:EPSG::(\d+)/;
        const epsgRegex: RegExp = /EPSG:(\d+)/;
        const matcher: RegExpMatchArray =
            String(code).match(urnRegex) || String(code).match(epsgRegex) || [];

        if (matcher.length < 2) {
            throw new Error('Invalid code provided.');
        }

        return new Promise((resolve, reject) => {
            const epsgUrl: string =
                (window.location.protocol === 'https:' ? 'https:' : 'http:') +
                `//epsg.io/${matcher[1]}.proj4`;
            const params: __esri.RequestOptions = {
                responseType: 'text'
            };
            const restReq: IPromise<__esri.RequestResponse> = EsriRequest(
                epsgUrl,
                params
            ); // TODO since this is outside of esri api, consider using the vue web request lib here

            restReq.then(
                (serviceResult: __esri.RequestResponse) => {
                    if (serviceResult.data) {
                        resolve(serviceResult.data); // should be a string. TEST!
                    } else {
                        reject(); // TODO throw an error?
                    }
                },
                (e: any) => {
                    reject(e);
                }
            );
        });
    }

    epsgLookup(code: string | number): Promise<string> {
        return this.espgWorker(code);
    }

    /**
     * Convert a projection to an string that is compatible with proj4.  If it is an ESRI SpatialReference or an integer it will be converted.
     * @param {Object|Integer|String} proj an ESRI SpatialReference, integer or string.  Strings will be unchanged and unchecked,
     * ints and SpatialReference objects will be converted.
     * @return {String} A string in the form EPSG:####
     * @private
     */
    normalizeProj(proj: any): string {
        if (typeof proj === 'object') {
            if (proj.wkid) {
                // TODO consider checking for .latestWkid first, then using .wkid as backup
                return 'EPSG:' + proj.wkid;
            } else if (proj.wkt) {
                return proj.wkt;
            }
        } else if (typeof proj === 'number') {
            return 'EPSG:' + proj;
        } else if (typeof proj === 'string') {
            return proj;
        }
        throw new Error(
            'Bad argument type, please provide a string, integer or SpatialReference object.'
        );
    }

    // TODO probably need to make this return a promise, and do epsgLookups on the proj codes.
    //      at the moment we're safe, as the function calling this is dong the lookups. depends how robust/reusable we want this to be
    // TODO given how rough this function is (no promise, modifying input object in place, incorrect .crs on output)
    //      we may want to make it private and use it strictly as a utility within this service module.
    //      public functions can use it, and they can ensure all the nonsense is being handled.
    //      alternative is we strengthen this by doing object copies and spatial reference correcting in this function
    /**
     * Reproject a GeoJSON object in place.
     * Note the .crs of the object will not be updated or corrected.
     *
     * @param {Object} geojson the GeoJSON to be reprojected, this will be modified in place
     * @param {String|Number} outputSpatialReference the target spatial reference,
     * 'EPSG:4326' is used by default; if a number is suppied it will be used as an EPSG code
     * @param {String|Number} inputSpatialReference same rules as outputSpatialReference if suppied
     * if missing it will attempt to find it encoded in the GeoJSON
     * @returns {Object} projected geoJson
     */
    projectGeoJson(
        geoJson: any,
        inputSR: string | number,
        outputSR: string | number
    ): any {
        // TODO revist the types on the SR params. figure out what we're really supporting, and what terraformer can support

        let inSr: string = this.normalizeProj(inputSR);
        let outSr: string = this.normalizeProj(outputSR);

        if (!inSr && geoJson.crs && geoJson.crs.type === 'name') {
            inSr = RAMP.GEO.geom._parseGeoJsonCrs(geoJson.crs);
        }

        if (!inSr) {
            inSr = 'EPSG:4326';
        } else if (!proj4.defs(inSr)) {
            throw new Error(
                `Projection: ${inSr} could not be found in proj4.defs`
            );
        }

        if (!outSr) {
            outSr = 'EPSG:4326';
        } else if (!proj4.defs(outSr)) {
            throw new Error(
                `Projection: ${outSr} could not be found in proj4.defs`
            );
        }

        if (outSr === inSr) {
            return geoJson;
        }

        const projFunc = proj4(inSr, outSr).forward;

        return Tools.applyConverter(geoJson, projFunc);
    }

    /**
     * Check whether or not a spatialReference is supported by proj4 library. Attempt to load from epsg source if not.
     *
     * @param {Object} spatialReference to be checked to see if it's supported by proj4. Can be ESRI SR object or a EPSG string.
     * @returns {Promise<boolean>} true if proj was defined or was able to download definition. false if out of luck
     */
    async checkProj(spatialReference: any): Promise<boolean> {
        let srcProj: string;
        let latestProj: string = ''; // falsey!

        if (spatialReference.wkt) {
            // WKT is fine to use raw. quick exit.
            return true;
        }

        try {
            srcProj = this.normalizeProj(spatialReference);
        } catch {
            return false;
        }
        if (spatialReference.latestWkid) {
            latestProj = this.normalizeProj(spatialReference.latestWkid);
        }

        // if we've made it this far, we're dealing with an epsg key. check for a definition

        // worker function. if we had to get latest wkid definition from the internet,
        // we need to also map that result to the normal wkid in proj4. only do this
        // if the two wkids are different.
        const applyLatest = (latestDef: string, normalDef: string) => {
            if (latestDef !== normalDef) {
                proj4.defs(normalDef, proj4.defs(latestDef));
            }
        };

        if (proj4.defs(srcProj)) {
            // already defined in proj4. good.
            return true;
        }

        // we currently don't have main projection in proj4
        if (latestProj && proj4.defs(latestProj)) {
            // we have the latestWkid projection defined.
            applyLatest(latestProj, srcProj);
            return true;
        }

        // need to find a definition

        // function to execute a lookup & store result if success
        const doLookup = async (epsgStr: string): Promise<boolean> => {
            const def = await this.epsgLookup(epsgStr);
            if (def === null || def === '') {
                return false;
            }
            proj4.defs(epsgStr, def);
            return true;
        };

        // check the latestWkid first, if it exists (as that wkid is usally the EPSG friendly one)
        // otherwise make a dummy promise that will just cause the standard wkid promise to run.
        const latestLookup = latestProj
            ? doLookup(latestProj)
            : Promise.resolve(false);

        const latestSuccess = await latestLookup;
        if (latestSuccess) {
            // found the latestWkid code
            applyLatest(latestProj, srcProj);
            return true;
        } else {
            // no luck with latestWkid, so lookup on normal code
            return doLookup(srcProj);
        }
    }

    // utility for checking a set of spatial references, and accepting an error bomb if they cannot be used
    async checkProjBomber(spatialReferences: Array<any>): Promise<void> {
        if (spatialReferences.length > 0) {
            const prj = spatialReferences.pop();
            const happy = await this.checkProj(prj);
            if (happy) {
                // recursion. array will have 1 less at this point
                return this.checkProjBomber(spatialReferences);
            } else {
                console.error(
                    'Unable to parse or locate projection information for this item:',
                    prj
                );
                throw new Error(
                    'Could not find projection information, see console for details'
                );
            }
        }
    }

    /**
     * Project a geometry using local calculations (proj4)
     *
     * @param {SpatialReference | Integer | String} destProj the spatial reference of the result (as SpatialReference, integer WKID or an EPSG string)
     * @param {BaseGeometry} geometry a RAMP API Geometry object
     * @return {Promise} resolve in a RAMP API Geometry object with co-ordinates in the destination projection
     */
    async projectGeometry(
        destProj: SrDef,
        geometry: BaseGeometry
    ): Promise<BaseGeometry> {
        // NOTES: a few significant changes to this function from RAMP2
        //        Making the result asynch. due to us now validating the projection and possibly
        //        downloading a new formula if the we dont have an existing solution.
        //        Using RAMP API geometry instead of ESRI geometry on the input.
        //        Going directly from RAMP API geometry to geojson to perform the projection,
        //        skirting the terraformer library

        if (geometry.type === GeometryType.EXTENT) {
            return this.projectExtent(destProj, <Extent>geometry);
        }

        // TODO validate if one of the srs is wkt that everything works. if destination is wkt make sure return object has proper .sr
        await this.checkProjBomber([destProj, geometry.sr]);

        // convert to geojson
        const preGJ = RAMP.GEO.geom.geomRampToGeoJson(geometry);

        // project geojson
        const postGJ = this.projectGeoJson(
            preGJ,
            this.normalizeProj(geometry.sr),
            this.normalizeProj(destProj)
        );

        // convert back to RAMP geometry
        const projectedRampGeom = RAMP.GEO.geom.geomGeoJsonToRamp(
            postGJ,
            geometry.id
        );

        // fix up the spatial reference, as the GeoJSON projection library doesn't really handle it well.
        projectedRampGeom.sr = SpatialReference.parseSR(destProj);
        return projectedRampGeom;
    }

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
    async projectExtent(destProj: SrDef, extent: Extent): Promise<Extent> {
        // interpolates two points by splitting the line in half recursively
        // steps indicates how many recursions
        const interpolate = (
            p0: Array<number>,
            p1: Array<number>,
            steps: number
        ): Array<Array<number>> => {
            if (steps === 0) {
                // return the points
                return [p0, p1];
            }

            // midpoint between the two points
            const mid = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
            if (steps === 1) {
                return [p0, mid, p1];
            }
            if (steps > 1) {
                // interpolate between the midpoint
                const i0 = interpolate(p0, mid, steps - 1);
                const i1 = interpolate(mid, p1, steps - 1);

                // joint the result. the slice prevents duplication of the midpoint
                return i0.concat(i1.slice(1));
            }

            return [[]]; //
        };

        // TODO original code is constructing point array in counter-clockwise manner (see commented logic below)
        //      the poly array will be clockwise.
        //      if we run into issues, might need to do a reverse on the array, or just stick with original hardcoded approach
        const points: Array<Array<number>> =
            extent.toPolygonArray().pop() || [];

        // [ [extent.xmin, extent.ymin], [extent.xmax, extent.ymin],
        // [extent.xmax, extent.ymax], [extent.xmin, extent.ymax],
        // [extent.xmin, extent.ymin] ];
        let interpolatedPoly: Array<Array<number>> = [];

        // interpolate each edge by splitting it in half 3 times (since lines are not guaranteed to project to lines we need to consider
        // max / min points in the middle of line segments)
        [0, 1, 2, 3]
            .map(i => interpolate(points[i], points[i + 1], 3).slice(1))
            .forEach(seg => (interpolatedPoly = interpolatedPoly.concat(seg)));

        const iPoly: Polygon = new Polygon(
            'warpy',
            [interpolatedPoly],
            extent.sr,
            true
        );

        const iWarped = (await this.projectGeometry(
            destProj,
            iPoly
        )) as Polygon;

        // take our projected interpolated polygon, strip out the co-ords for X and Y
        const rawWarp = iWarped.toArray().pop() || [];
        const xvals = rawWarp.map(p => p[0]);
        const yvals = rawWarp.map(p_1 => p_1[1]);

        // find the bounding corners of our projected interpolated polygon
        const x0 = Math.min.apply(null, xvals);
        const x1 = Math.max.apply(null, xvals);
        const y0 = Math.min.apply(null, yvals);
        const y1 = Math.max.apply(null, yvals);
        return Extent.fromParams(
            extent.id + '_projected',
            x0,
            y0,
            x1,
            y1,
            iWarped.sr
        );
    }
}
