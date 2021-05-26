import { CommonLayer, InstanceAPI } from '@/api/internal';
import {
    GeometryType,
    IdentifyParameters,
    IdentifyResult,
    IdentifyResultFormat,
    IdentifyResultSet,
    LayerType,
    Point,
    RampLayerConfig,
    RampLayerWmsLayerEntryConfig,
    TreeNode
} from '@/geo/api';
import { EsriRequest, EsriWMSLayer } from '@/geo/esri';
import { WmsFC } from './wms-fc';

export default class WmsLayer extends CommonLayer {
    esriLayer: EsriWMSLayer | undefined;
    sublayerNames: Array<string>;
    readonly mimeType: string;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = true;
        this._layerType = LayerType.WMS;
        this.mimeType = rampConfig.featureInfoMimeType || ''; // TODO is there a default? will that be in the config defaulting?
        this.sublayerNames = [];
    }

    async initiate(): Promise<void> {
        this.esriLayer = new EsriWMSLayer(
            this.makeEsriLayerConfig(this.origRampConfig)
        );
        await super.initiate();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(
        rampLayerConfig: RampLayerConfig
    ): __esri.WMSLayerProperties {
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: __esri.WMSLayerProperties = super.makeEsriLayerConfig(
            rampLayerConfig
        );

        const lEntries = <Array<RampLayerWmsLayerEntryConfig>>(
            rampLayerConfig.layerEntries
        );
        this.sublayerNames = lEntries.map(le => le.id || 'error_no_wms_id');

        // reminder: unlike MapImageLayer, we do not allow tweaking visibility
        //           of sublayers at runtime.
        //           if we decide to add that as a feature, we would need to flush
        //           out WmsFCs for each active sublayer and wire up a visibility
        //           pipeline similar to MapImageLayer

        // this is how the very basic example on esri api page recommends doing it.
        // is it possible to have nested sublayer structures on the server?
        // if so, will this type of flat initialization appropriately map itself
        // to the tree upon layer load event?
        esriConfig.sublayers = this.sublayerNames.map(sln => {
            return {
                name: sln
            };
        });

        const styles = lEntries.map(e => e.currentStyle).join();

        esriConfig.customLayerParameters = {
            styles: styles
        };

        // TODO need to test the .suppressGetCapabilities functionality.
        //      we no longer have .resourceInfo on the layer constructor.
        //      first attempt would be to try and pre-populate .sublayers
        //      and .fullExtent in the constructor config
        //      further complicated as .sublayers is a tree whereas .resourceInfo
        //      was a flat array.
        //      also, the ESRI doc as of 4.14 seems to indicate it always makes
        //      a getcapabilities call so this might be a lost cause

        // old code:

        /*
        if (this.config.suppressGetCapabilities) {
            cfg.resourceInfo = {
                extent: new this._apiRef.Map.Extent(-141, 41, -52, 83.5, {wkid: 4326}), // TODO make this a parameter post-demo
                layerInfos: this.config.layerEntries
                    .map(le => new this._apiRef.layer.WMSLayerInfo({name: le.id, title: le.name || ''}))
            };
        }
        */
        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        if (!this.layerTree) {
            throw new Error('superclass did not create layer tree');
        }

        const wmsFC = new WmsFC(this, 0);
        this.fcs[0] = wmsFC;

        this.layerTree.children.push(new TreeNode(0, wmsFC.uid, this.name));
        // TODO see if we need to re-synch the parent name
        // this.layerTree.name = this.name;

        /*
        // Attempt to set visibility of the sublayers we want. Doesn't work; the esri api definitions
        // and what we get from a raw initialized layer seem totally off. That said we may not need this
        // unless we encounter some weird nested layer service.
        const crawlSublayers = (sublayers: esri.Collection<esri.WMSSublayer>): void => {
            sublayers.forEach(sl => {
                // set visibility based on presence in the config
                sl.visible = this.sublayerNames.indexOf(sl.name) > -1;
                // recurse the tree
                if (sl.sublayers.length > 0) {
                    crawlSublayers(sl.sublayers);
                }
            });
        };

        crawlSublayers(this._innerLayer.sublayers);
        */

        // TODO implement symbology load
        // loadPromises.push(wmsFC.loadSymbology());

        // TODO check out whats going on with layer extent. is it set and donethanks?

        return loadPromises;
    }

    // ----------- LAYER ACTIONS -----------

    /**
     * Run a getFeatureInfo on a WMS layer, return the result as a promise.
     * Options: specs to be added once finalized
     *
     * @param {Object} options     additional arguemets, see above.
     * @returns {Object} an object with identify results array and identify promise resolving when identify is complete; if an empty object is returned, it will be skipped
     */
    identify(options: IdentifyParameters): IdentifyResultSet {
        // TODO add full documentation for options parameter

        if (options.geometry.type !== GeometryType.POINT) {
            // TODO too harsh? maybe a console warning and generic no result?
            //      just thinking if someone attempts a fancy identify on a map
            //      that happens to have a WMS on it, it will never work.
            throw new Error('a point must be used for WMS Identify');
        }

        // TODO revist how we want to use this.
        //      old ramp would only allow requests that had matching mime types,
        //      and the result of the mapping would dictate which identify panel was used.
        //      we will probably have a different panel scheme.
        const infoMap = {
            'text/html;fgpv=summary': 'HTML',
            'text/html': 'HTML',
            'text/plain': 'Text',
            'application/json': 'EsriFeature'
        };

        const myFC: WmsFC = <WmsFC>this.getFC(undefined); // undefined will get the first/only
        const map = this.$iApi.geo.map;

        // early kickout check. not loaded/error
        if (
            !this.isValidState() ||
            !myFC.getVisibility() ||
            // !this.isQueryable() || // TODO implement when we have this flag created
            // !infoMap[this.config.featureInfoMimeType] || // TODO implement once config is defined
            myFC.scaleSet.isOffScale(map.getScale()).offScale
        ) {
            // return empty result.
            return super.identify(options);
        }

        // TODO prolly need to flush out the config interfaces for this badboy

        const innerResult: IdentifyResult = {
            uid: myFC.uid,
            isLoading: true,
            items: []
        };

        const result: IdentifyResultSet = {
            results: [innerResult],
            done: Promise.resolve(), // set below
            parentUid: this.uid
        };

        result.done = this.getFeatureInfo(
            this.sublayerNames,
            <Point>options.geometry,
            this.mimeType
        ).then(response => {
            // check if a result is returned by the service. If not, do not add to the array of data
            // TODO verify we want empty .items array
            // TODO is is possible to have more than one item as a result? check how this works
            if (response) {
                if (typeof response !== 'string') {
                    // likely json or an image
                    // TODO improve the dection (maybe use the this.mimeType?)
                    innerResult.items.push({
                        format: IdentifyResultFormat.JSON,
                        data: response
                    });
                } else if (
                    response.indexOf('Search returned no results') === -1 &&
                    response !== ''
                ) {
                    // TODO if service is french, will the "no results" message be different?
                    // TODO consider utilizing the infoMap variable above to detect HTML format.
                    innerResult.items.push({
                        format: IdentifyResultFormat.TEXT,
                        data: response
                    });
                }
            }

            innerResult.isLoading = false;
        });

        return result;
    }

    /**
     * Add a WMS layer parameter, maybe even refresh the layer
     *
     * @function setCustomParameter
     * @param {String} key name of the key to be created or updated
     * @param {String} value value of the key
     * @param {Boolean} forceRefresh show the new fancy version of the layer or not
     */
    setCustomParameter(
        key: string,
        value: string,
        forceRefresh: boolean = true
    ): void {
        if (!this.esriLayer) {
            this.noLayerErr();
        } else {
            this.esriLayer.customLayerParameters[key] = value;
            if (forceRefresh) {
                this.esriLayer.refresh();
            }
        }
    }

    /**
     * Handles click events for WMS layers (makes a WMS GetFeatureInfo call behind the scenes).
     * TODO update these params once things are solidified
     * @param {WmsLayer} wmsLayer a RAMP WMSLayer object to be queried
     * @param {Array} layerList a list of strings identifying the WMS sublayers to be queried
     * @param {Point} point a RAMP Point indicating where the user clicked
     * @param {String} mimeType the format to be requested for the response
     * @returns {Promise} a promise which resolves with the GetFeatureInfo response
     */
    getFeatureInfo(
        layerList: Array<string>,
        point: Point,
        mimeType: string
    ): Promise<any> {
        const map = this.$iApi.geo.map;
        const esriLayer = this.esriLayer;

        if (!map.esriView) {
            throw new Error(
                'WMS get feature, no map view exists. Cannot derive click coords'
            );
        }
        if (!esriLayer) {
            this.noLayerErr();
            throw new Error('wms get feature failed, no layer');
        }

        let wkid: number;
        let req: any;
        const ext = map.getExtent();
        const srList = esriLayer.spatialReferences;
        const layers = layerList.join(',');

        // tear off any decimals from the screenpoint coords.
        const screenPoint = map.esriView.toScreen(
            this.$iApi.geo.utils.geom._convPointToEsri(point)
        );
        const intX = Math.floor(screenPoint.x);
        const intY = Math.floor(screenPoint.y);

        // result return type is text unless we have a fancy case
        // TODO add something else? images?
        const customReturnType = {
            'application/json': 'json'
        };

        // TODO worth examining: the esri layer has properties .featureInfoUrl and .featureInfoFormat
        //      possible these can simplify a lot of this code?

        // @ts-ignore
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
            console.error(
                'Map is likely in a WKT projection. WMS Identify request will likely fail.'
            );
        }

        if (srList && srList.length > 1) {
            if (srList.indexOf(wkid) === -1) {
                if (mapSR.latestWkid && srList.indexOf(mapSR.latestWkid) > -1) {
                    wkid = mapSR.latestWkid;
                } else {
                    console.error(
                        'WMS service does not support the maps projection. Identify request will likely fail.'
                    );
                }
            }
        } else {
            console.error(
                'No supported wkid/epsg code found for WMS service. Identify request will likely fail.'
            );
        }

        if (esriLayer.version === '1.3' || esriLayer.version === '1.3.0') {
            req = {
                CRS: 'EPSG:' + wkid,
                I: intX,
                J: intY,
                STYLES: '',
                FORMAT: esriLayer.imageFormat
            };
            if (
                this.$iApi.geo.layer.ogc.reversedAxisWKIDs().indexOf(wkid) > -1
            ) {
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
            WIDTH: map.getPixelWidth(),
            HEIGHT: map.getPixelHeight(),
            QUERY_LAYERS: layers,
            LAYERS: layers,
            INFO_FORMAT: mimeType
        };

        // apply any custom parameters (ignore styles for the moment)
        const clp = esriLayer.customLayerParameters;
        if (clp) {
            Object.keys(clp).forEach(key => {
                if (key.toLowerCase() !== 'styles') {
                    // @ts-ignore
                    settings[key] = clp[key];
                }
            });
        }

        // @ts-ignore
        Object.keys(settings).forEach(key => (req[key] = settings[key]));

        return EsriRequest(esriLayer.url.split('?')[0], {
            query: req,
            responseType: returnType
        });
    }

    // TODO this needs to be revisted once config schema is settle.
    //      in particular, if the param is wms config sublayers,
    //      and if we still have the style magic going on.
    //      it could be an object coming from parseCapabilities above.
    //      or its a mix between that result and the config object
    // NOTE this function totally untested
    /**
     * Finds the appropriate legend URLs for WMS layers.
     *
     * @param {WMSLayer} wmsLayer a RAMP WMSLayer object to be queried
     * @param {Array} layerList a list of objects identifying the WMS layers to be queried
     * @returns {Array} a list of strings containing URLs for specified layers (order is preserved)
     */
    getLegendUrls(
        layerList: Array<RampLayerWmsLayerEntryConfig>
    ): Array<string> {
        // TODO needs robust testing once something is using it

        if (!this.esriLayer) {
            this.noLayerErr();
            return []; // blank svg might be better?
        }

        // util to find all them legends
        const crawlSublayers = (
            sublayers: __esri.Collection<__esri.WMSSublayer>,
            urlMap: Map<any, any>
        ) => {
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
        crawlSublayers(this.esriLayer.sublayers, slMap);

        // NOTE currently this logic (from ramp 2) seems out of sycnh with the config schema
        //      WMSLayerEntryNode does not appear to have .styleToURL or .currentStyle
        //      might be generated by ramp core?
        const legendURLs = layerList.map(l =>
            // @ts-ignore
            typeof l.styleToURL !== 'undefined' &&
            typeof l.currentStyle !== 'undefined'
                ? l.styleToURL[l.currentStyle]
                : undefined
        );

        // this appears to be finding items with no legend urls, and assigning
        // the layer id instead. so i guess this just puts the text in the legend?
        // solved it comes from the parsecapabilities function in this file
        legendURLs.forEach((entry, index) => {
            if (!entry) {
                legendURLs[index] = slMap.get(layerList[index].id);
            }
        });

        //@ts-ignore
        return legendURLs;
    }
}
