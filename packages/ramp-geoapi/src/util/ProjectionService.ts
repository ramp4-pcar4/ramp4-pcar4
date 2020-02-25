import esri = __esri;
import { InfoBundle, EpsgLookup, RampSpatialReference } from '../gapiTypes';
import BaseBase from '../BaseBase';
import { Tools } from 'terraformer';

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

export default class ProjectionService extends BaseBase {

    protected espgWorker: EpsgLookup;

    constructor (infoBundle: InfoBundle, epsgFunction: EpsgLookup = undefined) {
        super(infoBundle);
        if (epsgFunction) {
            this.espgWorker = epsgFunction; // override with client-defined function
        } else {
            this.espgWorker = this.defaultEpsgLookup;
        }

        // cook in useful things to proj4 that won't be available via epsgLookup
        proj4.defs('EPSG:3978', '+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
        proj4.defs('EPSG:3979', '+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
        proj4.defs('EPSG:54004', '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m +no_defs');
        proj4.defs('EPSG:102100', proj4.defs('EPSG:3857'));
        proj4.defs('EPSG:102187', '+proj=tmerc +lat_0=0 +lon_0=-114 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
        proj4.defs('EPSG:102190', '+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');

        // add UTM projections
        let utm = 1;
        while (utm <= 60) {
            let zone = utm < 10 ? `0${utm}` : utm;
            proj4.defs(`EPSG:326${zone}`, `+proj=utm +zone=${utm} +ellps=WGS84 +datum=WGS84 +units=m +no_defs`);
            utm++;
        }

    }

    // default for lazyness. uses official epsg website, hardcoded for extra style points.
    private defaultEpsgLookup(code: string | number): Promise<string> {

        const urnRegex: RegExp = /urn:ogc:def:crs:EPSG::(\d+)/;
        const epsgRegex: RegExp = /EPSG:(\d+)/;
        const matcher: RegExpMatchArray = String(code).match(urnRegex) || String(code).match(epsgRegex) || [];

        if (matcher.length < 2) {
            throw new Error('Invalid code provided.');
        }

        return new Promise((resolve, reject) => {
            const epsgUrl: string = (this.window.location.protocol === 'https:' ? 'https:' : 'http:') + `//epsg.io/${matcher[1]}.proj4`;
            const params: esri.RequestOptions = {
                responseType : 'text'
            };
            const restReq: IPromise<esri.RequestResponse> = this.esriBundle.esriRequest(epsgUrl, params);

            restReq.then((serviceResult: esri.RequestResponse) => {
                if (serviceResult.data) {
                    resolve(serviceResult.data); // should be a string. TEST!
                } else {
                    reject(); // TODO throw an error?
                }
            }, (e: any) => { reject(e); });

        });
    }

    epsgLookup(code: string | number): Promise<string> {
        return this.espgWorker(code);
    }

    rampSrToEsriSr(rsr: RampSpatialReference): esri.SpatialReference {
        return this.esriBundle.SpatialReference.fromJSON(rsr);
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
                return 'EPSG:' + proj.wkid;
            } else if (proj.wkt) {
                return proj.wkt;
            }
        } else if (typeof proj === 'number') {
            return 'EPSG:' + proj;
        } else if (typeof proj === 'string') {
            return proj;
        }
        throw new Error('Bad argument type, please provide a string, integer or SpatialReference object.');
    }

    // TODO probably need to make this return a promise, and do epsgLookups on the proj codes.
    //      at the moment we're safe, as the function calling this is dong the lookups. depends how robust/reusable we want this to be
    /**
     * Reproject a GeoJSON object in place.
     * @param {Object} geojson the GeoJSON to be reprojected, this will be modified in place
     * @param {String|Number} outputSpatialReference the target spatial reference,
     * 'EPSG:4326' is used by default; if a number is suppied it will be used as an EPSG code
     * @param {String|Number} inputSpatialReference same rules as outputSpatialReference if suppied
     * if missing it will attempt to find it encoded in the GeoJSON
     * @returns {Object} projected geoJson
     */
    projectGeoJson(geoJson: any, inputSR: string | number, outputSR: string | number): any {
        // TODO revist the types on the SR params. figure out what we're really supporting, and what terraformer can support

        // TODO add a "if number, convert to string" or do this.normalizeProj

        let inSr: string = this.normalizeProj(inputSR);
        let outSr: string = this.normalizeProj(outputSR);

        if (!inSr && geoJson.crs && geoJson.crs.type === 'name') {
            inSr = this.gapi.utils.geom.parseGeoJsonCrs(geoJson.crs);
        }

        if (!inSr) {
            inSr = 'EPSG:4326';
        } else if (!proj4.defs(inSr)) {
            throw new Error(`Projection: ${inSr} could not be found in proj4.defs`);
        }

        if (!outSr) {
            outSr = 'EPSG:4326';
        } else if (!proj4.defs(outSr)) {
            throw new Error(`Projection: ${outSr} could not be found in proj4.defs`);
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
    checkProj(spatialReference: any): Promise<boolean> {
        let srcProj: string;
        let latestProj: string;

        if (spatialReference.wkt) {
            // WKT is fine to use raw. quick exit.
            return Promise.resolve(true);
        }

        try {
            srcProj = this.normalizeProj(spatialReference);
        } catch {
            return Promise.resolve(false);
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
            return Promise.resolve(true);
        }

        // we currently don't have main projection in proj4
        if (latestProj && proj4.defs(latestProj)) {
            // we have the latestWkid projection defined.
            applyLatest(latestProj, srcProj);
            return Promise.resolve(true);
        }

        // need to find a definition

        // function to execute a lookup & store result if success
        const doLookup = (epsgStr: string) => {
            return this.epsgLookup(epsgStr).then(def => {
                if (def === null || def === '') {
                    return false;
                }
                proj4.defs(epsgStr, def);
                return true;
            });
        };

        // check the latestWkid first, if it exists (as that wkid is usally the EPSG friendly one)
        // otherwise make a dummy promise that will just cause the standard wkid promise to run.
        const latestLookup = latestProj ? doLookup(latestProj) : Promise.resolve(false);

        return latestLookup.then(latestSuccess => {
            if (latestSuccess) {
                // found the latestWkid code
                applyLatest(latestProj, srcProj);
                return true;
            } else {
                // no luck with latestWkid, so lookup on normal code
                return doLookup(srcProj);
            }
        });

    }

}