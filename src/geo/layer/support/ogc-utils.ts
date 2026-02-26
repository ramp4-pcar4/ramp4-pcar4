import { APIScope } from '@/api/internal';
import { GeoJsonGeomType, UrlWrapper } from '@/geo/api';
import type { UrlQueryMap } from '@/geo/api';
import yxList from './reversedAxis.json';
import { EsriRequest } from '@/geo/esri';
import axios from 'redaxios';
import to from 'await-to-js';

type WFSResponse = {
    data: { numberMatched: number; features: any[] };
};
type WFSData = { type: string; features: any[] };

export class OgcUtils extends APIScope {
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
    async loadWfsData(
        url: string,
        totalCount = -1,
        offset = 0,
        limit = 1000,
        wfsData: WFSData = {
            type: 'FeatureCollection',
            features: []
        },
        xyInAttribs = false,
        signal?: AbortSignal
    ): Promise<any> {
        let newQueryMap: UrlQueryMap = {
            offset: offset.toString(),
            limit: limit.toString()
        };

        // Good reference to find information on the WFS 3 API
        // https://github.com/opengeospatial/ogcapi-features
        // Tricky to locate since it appears they now call it OGC API.
        // The actual documents tend to change and old links 404, but some of the links in that
        // repo should remain current.

        // stop immediately if cancelled
        if (signal?.aborted) {
            throw new DOMException('WFS load cancelled', 'AbortError');
        }

        // it seems that some WFS services do not return the number of matched records with every request
        // so, we need to get that explicitly first
        if (totalCount === -1) {
            // get the total number of records
            newQueryMap = {
                resulttype: 'hits'
            };
        }

        // deconstruct the url and apply any updates to it.
        const wrapper = new UrlWrapper(url);
        const requestUrl = wrapper.updateQuery(newQueryMap);

        // use axios to make web request, instead of esriRequest. this is because we can't rely on services having jsonp
        // ^ as of ESRI 4, jsonp is not likely required. The choice between esri request and axios
        //   will ultimately boil down to if a proxy should be used or not.
        //   see https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/773
        const [error, response] = await to<WFSResponse>(axios.get(requestUrl, { signal } as any));

        if (!response) {
            console.error(`WFS data failed to load for ${url}`, error);
            return Promise.reject(error);
        }

        const data = response.data;

        // save the total number of records and start downloading the data
        // throw an error if numberMatched is missing
        if (totalCount === -1) {
            if (typeof data.numberMatched !== 'number') {
                throw new Error('WFS hits missing numberMatched');
            }
            totalCount = response.data.numberMatched;
            // note we pass url and not requestUrl here, becuase requestUrl is currently a count request
            return this.loadWfsData(url, totalCount, offset, limit, wfsData, xyInAttribs, signal);
        }

        // update the received features array.
        // use concat instead of spread operator for performance
        wfsData.features = wfsData.features.concat(data.features);

        // check if all the requested features are downloaded
        if (data.features.length < totalCount - offset) {
            // the next limit is either the provided limit or the number of remaining features
            const newLimit = Math.min(limit, totalCount - offset - data.features.length);
            return this.loadWfsData(
                requestUrl,
                totalCount,
                data.features.length + offset,
                newLimit,
                wfsData,
                xyInAttribs,
                signal
            );
        } else {
            // finally have downloaded the entire dataset.
            if (
                xyInAttribs &&
                wfsData.features.length > 0 &&
                wfsData.features[0].geometry.type === GeoJsonGeomType.POINT
            ) {
                // attempt copy of points to attributes.
                // if we extend this logic to all feature based layers (not just wfs),
                // suggest porting this block to geoApi.
                // for now, easier to modify as early as possible in the transformation

                wfsData.features.forEach(f => {
                    const p = f.geometry.coordinates;
                    f.properties.rvInternalCoordX = p[0];
                    f.properties.rvInternalCoordY = p[1];
                });
            }
            return wfsData;
        }
    }

    /**
     * Provides list of spatial references that are encoded in [y,x] format.
     *
     * @returns array of wkids that have reversed axis
     */
    reversedAxisWKIDs(): Array<number> {
        return yxList;
    }

    // NOTE this function is currently used by the wizard only in RAMP2
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
    async parseCapabilities(wmsEndpoint: string): Promise<any> {
        /**
         * this executes a get capabilities and returns the XML
         */
        const getCapabilities = async (): Promise<any> => {
            let url = wmsEndpoint;
            // version and format parameters are both optional
            if (wmsEndpoint.indexOf('?') === -1) {
                url += '?service=WMS&request=GetCapabilities';
            } else {
                // Assuming that at least one of the 2 parameters are present
                // if there is a '?' in the URL. Otherwise would need to do
                // another check to see if we need '&' before the parameter.
                const wrapper = new UrlWrapper(wmsEndpoint.toUpperCase());
                if (!('SERVICE' in wrapper.queryMap)) {
                    url += '&service=WMS';
                }
                if (!('REQUEST' in wrapper.queryMap)) {
                    url += '&request=GetCapabilities';
                }
            }

            const result = await EsriRequest(url, {
                responseType: 'xml'
            });
            return result.data;
        };

        // this promise attempts two tries at get capabilities
        const gcPromise: Promise<any> = new Promise(resolve => {
            getCapabilities()
                .then((data: any) => resolve(data)) // if successful, pass straight back
                .catch(() => {
                    // if errors, try again; see fgpv-vpgf/fgpv-vpgf#908 issue
                    console.error('Get capabilities failed; trying the second time;');
                    resolve(getCapabilities());
                });
        });

        // NOTE all the xml stuff is being given a type of any.
        //      am not finding a nice generic type, and not worth the
        //      effort to keep searching.

        /**
         * Find all <Layer> nodes under the given XML node.
         * Pick title, name, queryable nodes/attributes. Also have a list of all styles and the current style.
         * Recursively called on all child <Layer> nodes.
         * @param xmlNode node we're crawling
         * @returns nugget of information
         */
        const getLayers = (xmlNode: any): any => {
            let layers: any = xmlNode.Layer;
            // Check if the current layer has any child layers.
            // In the previous implementation, this case may have returned
            // undefined rather than [].
            if (!layers) {
                return [];
            }
            // If there was only 1 Layer tag in the XML, then the parser would
            // have made 'Layer' a single Object. Otherwise, it would be an
            // array of Objects.
            // Make this check to avoid having to write almost the exact same
            // logic twice to accomodate for both situations.
            if (!Array.isArray(layers)) {
                layers = [layers];
            }
            return layers.map((layer: any): any => {
                const nameNode: string = layer.Name;
                const titleNode: string = layer.Title;
                let styles: any = layer.Style;
                const allStyles: any = [];
                const styleToURL: any = {};
                if (styles) {
                    // Same idea as above. To avoid writing the same code twice.
                    if (!Array.isArray(styles)) {
                        styles = [styles];
                    }
                    styles.forEach((style: any) => {
                        const styleName = style.Name;
                        allStyles.push(styleName);
                        if (style.LegendURL) {
                            const resource = style.LegendURL.OnlineResource;
                            // Yucky naming means no dot notation
                            const styleURL = resource['@_xlink:href'];
                            // decode '&amp;' -> '&', which was encoded by XMLSerializer
                            styleToURL[styleName] = styleURL.replaceAll('&amp;', '&');
                        }
                    });
                }

                return {
                    // typecast to string as number IDs need to be stringified in the wms sublayer config
                    // TODO: What if this ends up being null? Does layer explode?
                    // If yes, consider adding a warning or notification of some sort.
                    name: nameNode?.toString() ?? null,
                    title: titleNode,
                    queryable: layer['@_queryable'] === '1',
                    layers: getLayers(layer),
                    allStyles: allStyles,
                    styleToURL,
                    currentStyle: allStyles[0]
                };
            });
        };

        const getQueryTypes = (xmlNode: any): any => {
            let formats: any = xmlNode.Format;
            // See comment for layers above for reasoning for this check.
            if (!Array.isArray(formats)) {
                formats = [formats];
            }
            return formats;
        };

        const { XMLParser } = await import('fast-xml-parser');

        const xmlNode: any = await gcPromise;

        // Not sure if this check is still needed here.
        if (!xmlNode) {
            return [];
        }

        const xmlData: string = new XMLSerializer().serializeToString(xmlNode);
        const options: object = {
            ignoreAttributes: false // check for tag attributes
        };
        const jsonObj: any = new XMLParser(options).parse(xmlData);

        // We get an XML with a <ServiceExceptionReport> tag back when something goes wrong with the request.
        // Might be able to get rid of this now that we are appending missing parameters to the URL.
        if ('ServiceExceptionReport' in jsonObj) {
            console.error(jsonObj.ServiceExceptionReport.ServiceException);
            return [];
        }
        const capability: any = jsonObj.WMS_Capabilities.Capability;
        return {
            layers: getLayers(capability),
            queryTypes: getQueryTypes(capability.Request.GetFeatureInfo)
        };
    }
}
