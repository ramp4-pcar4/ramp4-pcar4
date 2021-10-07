import { ArcGisServerUrl } from '@/geo/api';
import deepmerge from 'deepmerge';

export class SharedUtilsAPI {
    /**
     * Get a 'good enough' uuid. For backup purposes if client does not supply its own
     * unique layer id
     *
     * @method  generateUUID
     * @returns {String} a uuid
     */
    generateUUID(): string {
        let d = Date.now();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            /*
            // TODO: Come up with cheaper solution that doesn't use the crypto API and satifies CodeQL
            const r =
            (d +
                window.crypto.getRandomValues(new Uint32Array(1))[0] *
                Math.pow(2, -32) *
                16) %
                16 |
                0; */

            // do math!
            /*jslint bitwise: true */
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
            /*jslint bitwise: false */
        });
    }

    // TODO see who is using this. Should it be somewhere more specific?
    /**
     * Convert an image to a canvas element
     *
     * @param {String} url image url to convert (result from the esri print task)
     * @param {Object} canvas [optional = null] canvas to draw the image upon; if not supplied, a new canvas will be made
     * @param {Boolean} crossOrigin [optional = true] when set, tries to fetch an image with crossOrigin = anonymous
     * @return {Promise} conversion promise resolving into a canvas of the image
     */
    convertImageToCanvas(
        url: string,
        canvas: any = null,
        crossOrigin: boolean = true
    ): Promise<any> {
        // TODO canvas param was initially typed as HTMLCanvasElement
        //      find out where that type was getting imported in old GeoAPI,
        //      decide if we want to import and use here
        canvas = canvas || window.document.createElement('canvas');

        const image = window.document.createElement('img'); // create image node

        if (crossOrigin) {
            image.crossOrigin = 'anonymous'; // configure the CORS request
        }

        const conversionPromise = new Promise((resolve, reject) => {
            image.addEventListener('load', () => {
                canvas.width = image.width; // changing canvas size will clear all previous content
                canvas.height = image.height;
                canvas.getContext('2d').drawImage(image, 0, 0); // draw image onto a canvas

                // return canvas
                resolve(canvas);
            });
            image.addEventListener('error', error => reject(error));
        });

        // set image source to the one generated from the print task
        image.src = url;

        return conversionPromise;
    }

    /**
     * Loads an image (as crossing) and converts it to dataURL. If a supplied imageUri is already a dataURL, just return it.
     * If an image fails to load with the crossing attribute, return the original imageUri
     *
     * @function convertImagetoDataURL
     * @param {String} imageUri url of the image to load and convert
     * @param {String} imageType [optional = 'image/png'] format of the image representation
     * @return {Promise} promise resolving with the dataURL of the image
     */
    async convertImagetoDataURL(
        imageUri: string,
        imageType: string = 'image/png'
    ): Promise<string> {
        // this is already a dataUrl, just return
        if (imageUri.startsWith('data')) {
            return imageUri;
        }

        return this.convertImageToCanvas(imageUri)
            .then(canvas => {
                // Converting image to dataURL
                return canvas.toDataURL(imageType);
            })
            .catch(error => {
                console.error(
                    'Failed to load crossorigin image',
                    imageUri,
                    error
                );
                return imageUri;
            });
    }

    /**
     * Splits an indexed map server url into an object with .rootUrl and .index
     * properties.
     *
     * @function parseUrlIndex
     * @param  {String} url    an indexed map server url
     * @returns {Object}  the url split into the server root and the index.
     */
    parseUrlIndex(url: string): ArcGisServerUrl {
        // break url into root and index

        // note we are returning index as a string for now.
        const result: ArcGisServerUrl = {
            rootUrl: url,
            index: 0
        };

        const re: RegExp = /\/(\d+)\/?$/;
        const matches: RegExpMatchArray | null = url.match(re);

        if (matches) {
            const idxStr: string = matches[1];
            result.index = isNaN(parseInt(idxStr))
                ? undefined
                : parseInt(idxStr);
            result.rootUrl = url.substr(0, url.length - matches[0].length); // will drop trailing slash
        } else {
            // give up, dont crash with error.
            // default configuration will make sense for non-feature urls,
            // even though they should not be using this.
            console.warn('Cannot extract layer index from url ' + url);
        }

        return result;
    }
}

type QueryMap = { [name: string]: string };

/**
 * This is a helper class to handle getting and setting query parameters on a url easy.
 *
 * @class UrlWrapper
 */
export class UrlWrapper {
    _url: string;
    _base: string;
    _query: string;
    _queryMap: QueryMap = {};

    constructor(url: string) {
        this._url = url;
        // split the base and query
        [this._base, this._query] = url.split('?').concat('');

        // convert the query part into a mapped object
        this._queryMap = this._query
            .split('&')
            .reduce((map: QueryMap, parameter: string) => {
                const [key, value] = parameter.split('=');
                map[key] = value;
                return map;
            }, {});
    }

    get query(): string {
        return this._query;
    }

    get base(): string {
        return this._base;
    }

    get queryMap(): QueryMap {
        return this._queryMap;
    }

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
     * @param {QueryMap} queryMapUpdate an object of values to be added or replaced on the query of the url; if any values are undefined, their corresponding keys will be removed from the query.
     * @returns {string} updated url
     * @memberof UrlWrapper
     */
    updateQuery(queryMapUpdate: QueryMap): string {
        const requestQueryMap: QueryMap = <QueryMap>(
            deepmerge.all([{}, this.queryMap, queryMapUpdate])
        );
        const requestUrl = `${this.base}${Object.entries(requestQueryMap)
            .filter(([_, value]) => value !== undefined)
            .map(
                ([key, value], index) =>
                    `${index === 0 ? '?' : ''}${key}=${value}`
            )
            .join('&')}`;

        return requestUrl;
    }
}
