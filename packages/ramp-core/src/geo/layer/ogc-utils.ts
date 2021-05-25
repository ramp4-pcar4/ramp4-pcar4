import { APIScope } from '@/api/internal';
import { UrlWrapper } from '@/geo/api';
import yxList from './reversedAxis.json';
import { EsriRequest } from '@/geo/esri';

// TODO check if we actually need this library. Does vue have its own internal web request library?
import axios from 'axios';
import to from 'await-to-js';
import { parse } from 'fast-xml-parser';

type WFSResponse = {
    data: { numberMatched: number; features: any[] };
};
type WFSData = { type: string; features: any[] };

type QueryMap = { [name: string]: string };

export class OgcUtils extends APIScope {
    // TODO update logic in this function to get changes done in https://github.com/fgpv-vpgf/fgpv-vpgf/pull/3858
    // TODO consider changing the long list of functon params into one options param object
    /**
     *
     * @param {string} url the current url to the wfs service
     * @param {number} [totalCount=-1] the total number of items available on that service
     * @param {number} [startindex=0] the index to start the querying from. default 0
     * @param {number} [limit=1000] the limit of how many results we want returned. default 10
     * @param {WFSData} [wfsData={
     *                 type: 'FeatureCollection',
     *                 features: []
     *             }] the resulting GeoJSON being populated as we receive layer information
     * @param {boolean} [xyInAttribs=false] true if point co-ords should be copied to attribute values
     * @returns {Promise<any>} a promise resolving with the layer GeoJSON
     * @memberof WFSServiceSource
     */
    async loadWfsData(
        url: string,
        totalCount: number = -1,
        startindex: number = 0,
        limit: number = 1000,
        wfsData: WFSData = {
            type: 'FeatureCollection',
            features: []
        },
        xyInAttribs: boolean = false
    ): Promise<any> {
        let newQueryMap: QueryMap = {
            startindex: startindex.toString(),
            limit: limit.toString()
        };

        // it seems that some WFS services do not return the number of matched records with every request
        // so, we need to get that explicitly first
        if (totalCount === -1) {
            // get the total number of records
            newQueryMap = {
                request: 'GetFeature',
                resultType: 'hits',
                limit: '0'
            };
        }

        // deconstruct the url and apply any updates to it.
        const wrapper = new UrlWrapper(url);
        const requestUrl = wrapper.updateQuery(newQueryMap);

        // use angular to make web request, instead of esriRequest. this is because we can't rely on services having jsonp
        const [error, response] = await to<WFSResponse>(axios.get(requestUrl));

        if (!response) {
            console.error(`WFS data failed to load for ${url}`, error);
            return Promise.reject(error);
        }

        const data = response.data;

        // save the total number of records and start downloading the data
        if (totalCount === -1) {
            totalCount = response.data.numberMatched;
            // note we pass url and not requestUrl here, becuase requestUrl is currently a count request
            return this.loadWfsData(
                url,
                totalCount,
                startindex,
                limit,
                wfsData,
                xyInAttribs
            );
        }

        wfsData.features = [...wfsData.features, ...data.features]; // update the received features array

        // check if all the requested features are downloaded
        if (data.features.length < totalCount - startindex) {
            // the limit is either 1k or the number of remaining features
            const limit = Math.min(
                1000,
                totalCount - startindex - data.features.length
            );
            return this.loadWfsData(
                requestUrl,
                totalCount,
                data.features.length + startindex,
                limit,
                wfsData,
                xyInAttribs
            );
        } else {
            if (
                xyInAttribs &&
                wfsData.features.length > 0 &&
                wfsData.features[0].geometry.type === 'Point'
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
    parseCapabilities(wmsEndpoint: string): Promise<any> {
        // TODO needs robust testing once something is using it

        // this executes a get capabilities and returns the XML
        const getCapabilities = (): any => {
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
            return EsriRequest(url, {
                responseType: 'xml'
            }).then(result => result.data);
        };

        // this promise attempts two tries at get capabilities
        const gcPromise: Promise<any> = new Promise(resolve => {
            getCapabilities()
                .then((data: any) => resolve(data)) // if successful, pass straight back
                .catch(() => {
                    // if errors, try again; see fgpv-vpgf/fgpv-vpgf#908 issue
                    console.error(
                        'Get capabilities failed; trying the second time;'
                    );
                    resolve(getCapabilities());
                });
        });

        // NOTE all the xml stuff is being given a type of any.
        //      am not finding a nice generic type, and not worth the
        //      effort to keep searching.

        // find all <Layer> nodes under the given XML node
        // pick title, name and queryable nodes/attributes
        // also have a list of all styles and the current style
        // recursively called on all child <Layer> nodes
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
                            styleToURL[styleName] = styleURL;
                        }
                    });
                }
                return {
                    name: nameNode ? nameNode : null,
                    desc: titleNode,
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

        return gcPromise.then((xmlNode: any): any => {
            // Not sure if this check is still needed here.
            if (!xmlNode) {
                return [];
            }
            const xmlData: string = new XMLSerializer().serializeToString(
                xmlNode
            );
            const options: Object = {
                ignoreAttributes: false // check for tag attributes
            };
            const jsonObj: any = parse(xmlData, options);
            // We get an XML with a <ServiceExceptionReport> tag back
            // when something goes wrong with the request.
            // Might be able to get rid of this now that we are appending
            // missing parameters to the URL.
            if ('ServiceExceptionReport' in jsonObj) {
                console.error(jsonObj.ServiceExceptionReport.ServiceException);
                return [];
            }
            const capability: any = jsonObj.WMS_Capabilities.Capability;
            return {
                layers: getLayers(capability.Layer),
                queryTypes: getQueryTypes(capability.Request.GetFeatureInfo)
            };
        });
    }
}
