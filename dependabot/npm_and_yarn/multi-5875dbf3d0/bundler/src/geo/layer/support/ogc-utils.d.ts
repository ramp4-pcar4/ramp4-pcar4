import { APIScope } from '../../../api/internal';
type WFSData = {
    type: string;
    features: any[];
};
export declare class OgcUtils extends APIScope {
    /**
     * Will load a WFS 3 feature set and return as GeoJSON object.
     * Data will be downloaded in batches (based on limit parameter) to
     * avoid massive requests that may timeout.
     *
     * @param {string} url the current url to the wfs service. Should be a /collections/id/items/ endpoint with optional params after the question operator
     * @param {number} [totalCount=-1] the total number of features available on that service. If not provided, the service will be interrogated for the count.
     * @param {number} [offset=0] the feature index to start the querying from. default 0
     * @param {number} [limit=1000] the limit of how many results we want returned per server request. default 1000
     * @param {WFSData} [wfsData={
     *                 type: 'FeatureCollection',
     *                 features: []
     *             }] the resulting GeoJSON being populated as we receive layer information. Undefined for initial request.
     * @param {boolean} [xyInAttribs=false] true if point co-ords should be copied to attribute values
     * @param {AbortSignal} [signal] abort signal to cancel the WFS data request
     * @returns {Promise<any>} a promise resolving with the layer GeoJSON
     * @memberof WFSServiceSource
     */
    loadWfsData(url: string, totalCount?: number, offset?: number, limit?: number, wfsData?: WFSData, xyInAttribs?: boolean, signal?: AbortSignal): Promise<any>;
    /**
     * Provides list of spatial references that are encoded in [y,x] format.
     *
     * @returns array of wkids that have reversed axis
     */
    reversedAxisWKIDs(): Array<number>;
    /**
     * Fetch layer data from a WMS endpoint.  This method will execute a WMS GetCapabilities
     * request against the specified URL, it requests WMS 1.3 and it is capable of parsing
     * 1.3 or 1.1.1 responses.  It returns a promise which will resolve with basic layer
     * metadata and querying information.
     *
     * metadata response format:
     *   { queryTypes: [mimeType(str)],
     *     layers: [
     *       {name(str), desc(str), queryable(bool), layers:[recursive] }
     *     ] }
     *
     * @param {string} wmsEndpoint a URL pointing to a WMS server (it must not include a query string)
     * @return {Promise} a promise resolving with a metadata object (as specified above)
     */
    parseCapabilities(wmsEndpoint: string): Promise<any>;
}
export {};
