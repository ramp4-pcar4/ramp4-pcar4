
import esri = __esri;
import { InfoBundle, EsriBundle } from '../gapiTypes';
import BaseBase from '../BaseBase';
import WmsLayer from '../layer/WmsLayer';
import RampMap from '../map/RampMap';
import yxList from './reversedAxis.json';
import Point from '../api/geometry/Point';

// TODO if everything in here is WMS, why not just put it in WMSLayer file?
//      might be small advantage of loading reversedAxis once
//      we could keep reversedaxis here, expose as a function for others to consume

export default class OgcService extends BaseBase {

    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
    }

    /**
     * Handles click events for WMS layers (makes a WMS GetFeatureInfo call behind the scenes).
     * TODO update these params once things are solidified
     * @param {WmsLayer} wmsLayer a RAMP WMSLayer object to be queried
     * @param {RampMap} map the RAMP map that was clicked (used for screen information, spatial references)
     * @param {Array} layerList a list of strings identifying the WMS sublayers to be queried
     * @param {Point} point a RAMP Point indicating where the user clicked
     * @param {String} mimeType the format to be requested for the response
     * @returns {Promise} a promise which resolves with the GetFeatureInfo response
     */
    getFeatureInfo(wmsLayer: WmsLayer, map: RampMap, layerList: Array<string>, point: Point, mimeType: string): Promise<any> {

        // alternate: push this into WMSLayer. i mean really, why this is a "util" is questionable.
        //            now that we have API and fixtures, a person can write their own fancy
        //            requests if they need it.

        const esriLayer = wmsLayer.innerLayer;
        let wkid: number;
        let req: any;
        const ext = map.getExtent();
        const srList = esriLayer.spatialReferences;
        const layers = layerList.join(',');

        // tear off any decimals from the screenpoint coords.
        const screenPoint = map.innerView.toScreen(this.gapi.utils.geom.convPointToEsri(point));
        const intX = Math.floor(screenPoint.x);
        const intY = Math.floor(screenPoint.y);

        // result return type is text unless we have a fancy case
        // TODO add something else? images?
        const customReturnType = {
            'application/json': 'json'
        };

        // TODO worth examining: the esri layer has properties .featureInfoUrl and .featureInfoFormat
        //      possible these can simplify a lot of this code?

        const returnType = customReturnType[mimeType] || 'text';

        // our incoming map/point information are likely in the same spatial reference.
        // ensure our WMS can support it.
        // TBH odds are if the WMS cant support our projection, then it wouldnt
        //     be drawing on the map so clickyclicks are the least of the issues.

        // TODO on the chance someone invokes an identify using RAMP API, and has a point
        //      that is not in the map spatial reference, reproject here?
        //      maybe this should be done at the main identify point (i.e. project once
        //      then provide normalized point to all requests)
        const mapSR = map.getSR();
        if (mapSR.wkid) {
            // TODO might also want some extra logic to utilize a .latestWkid if that helps
            wkid = mapSR.wkid;
        } else {
            // hail mary. if anything will generate an empty result instead of an error bomb
            wkid = 4326;
            console.error('Map is likely in a WKT projection. WMS Identify request will likely fail.');
        }

        if (srList && srList.length > 1) {
            if (srList.indexOf(wkid) === -1) {
                if (mapSR.latestWkid && (srList.indexOf(mapSR.latestWkid) > -1)) {
                    wkid = mapSR.latestWkid;
                } else {
                    console.error('WMS service does not support the maps projection. Identify request will likely fail.');
                }
            }
        } else {
            console.error('No supported wkid/epsg code found for WMS service. Identify request will likely fail.');
        }

        if (esriLayer.version === '1.3' || esriLayer.version === '1.3.0') {
            req = { CRS: 'EPSG:' + wkid, I: intX, J: intY, STYLES: '', FORMAT: esriLayer.imageFormat };
            if (yxList.indexOf(wkid) > -1) {
                req.BBOX = `${ext.ymin},${ext.xmin},${ext.ymax},${ext.xmax}`;
            }
        } else {
            req = { SRS: 'EPSG:' + wkid, X: intX, Y: intY };
        }
        if (!req.hasOwnProperty('BBOX')) {
            req.BBOX = `${ext.xmin},${ext.ymin},${ext.xmax},${ext.ymax}`;
        }
        const settings = {
            SERVICE: 'WMS',
            REQUEST: 'GetFeatureInfo',
            VERSION: esriLayer.version,
            WIDTH: map.innerView.width,
            HEIGHT: map.innerView.height,
            QUERY_LAYERS: layers,
            LAYERS: layers,
            INFO_FORMAT: mimeType
        };

        // apply any custom parameters (ignore styles for the moment)
        const clp = esriLayer.customLayerParameters;
        if (clp) {
            Object.keys(clp).forEach(key => {
                if (key.toLowerCase() !== 'styles') {
                    settings[key] = clp[key];
                }
            });
        }

        Object.keys(settings).forEach(key => req[key] = settings[key]);

        return this.esriBundle.esriRequest(esriLayer.url.split('?')[0], {
            query: req,
            responseType: returnType
        });
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
    parseCapabilities (wmsEndpoint: string): Promise<any> {

        // TODO needs robust testing once something is using it

        // this executes a get capabilities and returns the XML
        const getCapabilities = (): any => {
            let url = wmsEndpoint;

            // TODO can probably improve this. i.e. if they have a ? but are missing
            //      any of the three required items, can add the items

            // if url has a '?' do not append to avoid errors, user must add this manually
            if (wmsEndpoint.indexOf('?') === -1) {
                url += '?service=WMS&version=1.3&request=GetCapabilities';
            }

            return this.esriBundle.esriRequest(url, {
                responseType: 'xml'
            }).then(result => result.data);
        };

        // this promise attempts two tries at get capabilities
        const gcPromise: Promise<any> = new Promise(resolve => {
            getCapabilities()
                .then(data => resolve(data)) // if successful, pass straight back
                .catch(() => { // if errors, try again; see fgpv-vpgf/fgpv-vpgf#908 issue
                    console.error('Get capabilities failed; trying the second time;');
                    resolve(getCapabilities());
                });
        });

        // NOTE all the xml stuff is being given a type of any.
        //      am not finding a nice generic type, and not worth the
        //      effort to keep searching.

        // there might already be a way to do this in the parsing API
        // I don't know XML parsing well enough (and I don't want to)
        // this has now been ported from RAMP to FGPV and I still, happily,
        // do not know any more about XML parsing now
        const getImmediateChild = (node: any, childName: string) => {
            for (let i = 0; i < node.childNodes.length; ++i) {
                if (node.childNodes[i].nodeName === childName) {
                    return node.childNodes[i];
                }
            }
            return undefined;
        };

        const getImmediateChildren = (node: any, childName: string) => {
            let children = [];
            for (let i = 0; i < node.childNodes.length; ++i) {
                if (node.childNodes[i].nodeName === childName) {
                    children.push(node.childNodes[i]);
                }
            }
            return children;
        };

        // find all <Layer> nodes under the given XML node
        // pick title, name and queryable nodes/attributes
        // also have a list of all styles and the current style
        // recursively called on all child <Layer> nodes
        const getLayers = (xmlNode: any): any => {
            if (! xmlNode) {
                return [];
            }
            return this.esriBundle.dojoQuery('> Layer', xmlNode).map((layer: any) => {
                const nameNode = getImmediateChild(layer, 'Name');
                const titleNode = getImmediateChild(layer, 'Title');

                const allStyles = [];
                const styleToURL = {};
                const styles = getImmediateChildren(layer, 'Style');
                styles.forEach(style => {
                    const name = getImmediateChild(style, 'Name').textContent;
                    allStyles.push(name);

                    const legendURL = getImmediateChild(style, 'LegendURL');
                    if (legendURL) {
                        const url = getImmediateChild(legendURL, 'OnlineResource').getAttribute('xlink:href');
                        styleToURL[name] = url;
                    }
                });

                return {
                    name: nameNode ? nameNode.textContent : null,
                    desc: titleNode.textContent,
                    queryable: layer.getAttribute('queryable') === '1',
                    layers: getLayers(layer),
                    allStyles: allStyles,
                    styleToURL,
                    currentStyle: allStyles[0]
                };
            });
        };

        return gcPromise.then(data => ({
            layers: getLayers(this.esriBundle.dojoQuery('Capability', data)[0]),
            queryTypes: this.esriBundle.dojoQuery('GetFeatureInfo > Format', data).map(node => node.textContent)
        }));
    }

    // TODO this needs to be revisted once config schema is settle.
    //      in particular, if the second param is wms config sublayers,
    //      and if we still have the style magic going on.
    //      it could be an object coming from parseCapabilities above.
    //      or its a mix between that result and the config object
    /**
     * Finds the appropriate legend URLs for WMS layers.
     *
     * @param {WMSLayer} wmsLayer a RAMP WMSLayer object to be queried
     * @param {Array} layerList a list of objects identifying the WMS layers to be queried
     * @returns {Array} a list of strings containing URLs for specified layers (order is preserved)
     */
    getLegendUrls(wmsLayer: WmsLayer, layerList): Array<string> {
        // TODO needs robust testing once something is using it

        // util to find all them legends
        const crawlSublayers = (sublayers: esri.Collection<esri.WMSSublayer>, urlMap: Map<any, any>) => {
            sublayers.forEach(sl => {
                if (sl.name) {
                    urlMap.set(sl.name, sl.legendUrl);
                }
                if (sl.sublayers.length > 0) {
                    crawlSublayers(sl.sublayers, urlMap);
                }
            });
        };

        const slMap = new Map();
        crawlSublayers(wmsLayer.innerLayer.sublayers, slMap);

        // NOTE currently this logic (from ramp 2) seems out of sycnh with the config schema
        //      WMSLayerEntryNode does not appear to have .styleToURL or .currentStyle
        //      might be generated by ramp core?
        const legendURLs = layerList.map(l =>
            typeof l.styleToURL !== 'undefined' ? l.styleToURL[l.currentStyle] : undefined
        );

        // this appears to be finding items with no legend urls, and assigning
        // the layer id instead. so i guess this just puts the text in the legend?
        // solved it comes from the parsecapabilities function in this file
        legendURLs.forEach((entry, index) => {
            if (!entry) {
                legendURLs[index] = slMap.get(layerList[index].id);
            }
        });

        return legendURLs;
    }
}