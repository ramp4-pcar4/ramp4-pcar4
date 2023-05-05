import type { ArcGisServerUrl, UrlQueryMap } from '@/geo/api';
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
     * @param {Object} canvas [optional = undefined] canvas to draw the image upon; if not supplied, a new canvas will be made
     * @param {Boolean} crossOrigin [optional = true] when set, tries to fetch an image with crossOrigin = anonymous
     * @return {Promise} conversion promise resolving into a canvas of the image
     */
    convertImageToCanvas(
        url: string,
        canvas?: HTMLCanvasElement,
        crossOrigin = true
    ): Promise<any> {
        const c = canvas ?? window.document.createElement('canvas');

        const image = window.document.createElement('img'); // create image node

        if (crossOrigin) {
            image.crossOrigin = 'anonymous'; // configure the CORS request
        }

        const conversionPromise = new Promise((resolve, reject) => {
            image.addEventListener('load', () => {
                c.width = image.width; // changing canvas size will clear all previous content
                c.height = image.height;
                c.getContext('2d')?.drawImage(image, 0, 0); // draw image onto a canvas

                // return canvas
                resolve(c);
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
        imageType = 'image/png'
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

        const re = /\/(\d+)\/?$/;
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

/**
 * This is a helper class to handle getting and setting query parameters on a url easy.
 *
 * @class UrlWrapper
 */
export class UrlWrapper {
    _url: string;
    _base: string;
    _query: string;
    _queryMap: UrlQueryMap = {};

    constructor(url: string) {
        this._url = url;
        // split the base and query
        [this._base, this._query] = url.split('?').concat('');

        // convert the query part into a mapped object
        this._queryMap = this._query
            .split('&')
            .reduce((map: UrlQueryMap, parameter: string) => {
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

    get queryMap(): UrlQueryMap {
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
     * @param {UrlQueryMap} queryMapUpdate an object of values to be added or replaced on the query of the url; if any values are undefined, their corresponding keys will be removed from the query.
     * @returns {string} updated url
     * @memberof UrlWrapper
     */
    updateQuery(queryMapUpdate: UrlQueryMap): string {
        const requestQueryMap: UrlQueryMap = <UrlQueryMap>(
            deepmerge.all([{}, this.queryMap, queryMapUpdate])
        );
        const requestUrl = `${this.base}${Object.entries(requestQueryMap)
            .filter(([, value]) => value !== undefined)
            .map(
                ([key, value], index) =>
                    `${index === 0 ? '?' : ''}${key}=${value}`
            )
            .join('&')}`;

        return requestUrl;
    }
}
