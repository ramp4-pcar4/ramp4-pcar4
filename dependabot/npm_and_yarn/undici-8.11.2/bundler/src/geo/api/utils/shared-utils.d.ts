import { ArcGisServerUrl, UrlQueryMap, LayerControl } from '..';
export declare class SharedUtilsAPI {
    /**
     * Get a 'good enough' uuid. For backup purposes if client does not supply its own
     * unique layer id
     *
     * @method  generateUUID
     * @returns {String} a uuid
     */
    generateUUID(): string;
    /**
     * Convert an image to a canvas element
     *
     * @param {String} url image url to convert (result from the esri print task)
     * @param {Object} canvas [optional = undefined] canvas to draw the image upon; if not supplied, a new canvas will be made
     * @param {Boolean} crossOrigin [optional = true] when set, tries to fetch an image with crossOrigin = anonymous
     * @return {Promise} conversion promise resolving into a canvas of the image
     */
    convertImageToCanvas(url: string, canvas?: HTMLCanvasElement, crossOrigin?: boolean): Promise<any>;
    /**
     * Loads an image (as crossing) and converts it to dataURL. If a supplied imageUri is already a dataURL, just return it.
     * If an image fails to load with the crossing attribute, return the original imageUri
     *
     * @function convertImagetoDataURL
     * @param {String} imageUri url of the image to load and convert
     * @param {String} imageType [optional = 'image/png'] format of the image representation
     * @return {Promise} promise resolving with the dataURL of the image
     */
    convertImagetoDataURL(imageUri: string, imageType?: string): Promise<string>;
    /**
     * Splits an indexed map server url into an object with .rootUrl and .index
     * properties.
     *
     * @function parseUrlIndex
     * @param  {String} url    an indexed map server url
     * @returns {Object}  the url split into the server root and the index.
     */
    parseUrlIndex(url: string): ArcGisServerUrl;
    /**
     * Determines whether the provided control is enabled for the bound layer, based on the config provided
     * @param control the control we want to determine the availability of
     * @param config an object containing information regarding enabled/disabled controls for the bound layer
     * @returns whether the control is available
     */
    controlAvailable(control: LayerControl, config: {
        controls?: Array<string>;
        disabledControls?: Array<string>;
    } | undefined): boolean;
}
/**
 * This is a helper class to handle getting and setting query parameters on a url easy.
 *
 * @class UrlWrapper
 */
export declare class UrlWrapper {
    _url: string;
    _base: string;
    _query: string;
    _queryMap: UrlQueryMap;
    constructor(url: string);
    get query(): string;
    get base(): string;
    get queryMap(): UrlQueryMap;
    /**
     * Updates the query part of the url with passed in values.
     *
     * For example:
     *  - orginal url: http://example?flag=red&demohell=true
     *  - queryMapUpdate: {
     *     flag: undefined,
     *     demohell: false,
     *     acid: cat
     * }
     * - resulting url: http://example?demohell=false&acid=cat
     *
     *
     * @param {UrlQueryMap} queryMapUpdate an object of values to be added or replaced on the query of the url; if any values are undefined, their corresponding keys will be removed from the query.
     * @returns {string} updated url
     * @memberof UrlWrapper
     */
    updateQuery(queryMapUpdate: UrlQueryMap): string;
}
