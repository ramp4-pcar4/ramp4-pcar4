import esri = __esri;

import { InfoBundle, ArcGisServerUrl } from '../gapiTypes';
import BaseBase from '../BaseBase';

export default class SharedUtils extends BaseBase {

    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
    }

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
     * @param {Object} canvas [optional = null] canvas to draw the image upon; if not supplied, a new canvas will be made
     * @param {Boolean} crossOrigin [optional = true] when set, tries to fetch an image with crossOrigin = anonymous
     * @return {Promise} conversion promise resolving into a canvas of the image
     */
    convertImageToCanvas(url: string, canvas: HTMLCanvasElement = null, crossOrigin: boolean = true): Promise<any> {
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
    async convertImagetoDataURL(imageUri: string, imageType: string = 'image/png'): Promise<string> {
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
                console.error('Failed to load crossorigin image', imageUri, error);
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
    parseUrlIndex (url: string): ArcGisServerUrl {
        // break url into root and index

        // note we are returning index as a string for now.
        const result: ArcGisServerUrl = {
            rootUrl: url,
            index: 0
        };

        const re: RegExp = /\/(\d+)\/?$/;
        const matches: RegExpMatchArray = url.match(re);

        if (matches) {
            const idxStr: string = matches[1];
            result.index = isNaN(parseInt(idxStr)) ? undefined : parseInt(idxStr);
            result.rootUrl = url.substr(0, url.length - matches[0].length); // will drop trailing slash
        } else {
            // give up, dont crash with error.
            // default configuration will make sense for non-feature urls,
            // even though they should not be using this.
            console.warn('Cannot extract layer index from url ' + url);
        }

        return result;
    }

    serverGeomTypeToClientGeomType(serverType: string): string {
        if (!serverType) {
            // falsy case, pass it on thru
            return serverType;
        }
        switch (serverType) {
            case 'esriGeometryPolygon':
                return 'polygon';
            case 'esriGeometryPolyline':
                return 'polyline';
            case 'esriGeometryPoint':
                return 'point';
            case 'esriGeometryMultipoint':
                return 'multipoint';
            case 'esriGeometryEnvelope':
                return 'extent';
            default:
                console.warn(`Unrecognized server geometry type encountered: ${serverType}`);
                return serverType;
        }
    }

}
