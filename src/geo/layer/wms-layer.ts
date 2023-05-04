import { CommonLayer, InstanceAPI } from '@/api/internal';
import {
    DataFormat,
    DefPromise,
    GeometryType,
    IdentifyResultFormat,
    LayerFormat,
    LayerIdentifyMode,
    LayerType,
    UrlWrapper
} from '@/geo/api';

import type {
    IdentifyItem,
    LegendSymbology,
    RampLayerConfig,
    RampLayerWmsSublayerConfig,
    IdentifyParameters,
    IdentifyResult,
    Point
} from '@/geo/api';

import { EsriRequest, EsriWMSLayer, EsriWMSSublayer } from '@/geo/esri';
import { markRaw, reactive } from 'vue';

export class WmsLayer extends CommonLayer {
    declare esriLayer: EsriWMSLayer | undefined;
    sublayerNames: Array<string>;
    readonly mimeType: string;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = true;
        this.hovertips = false;
        this.layerType = LayerType.WMS;
        this.layerFormat = LayerFormat.WMS;
        // TODO is there a default? we have a bit of stuff in this file that assumes `text`,
        //      but the INFO_FORMAT param on the GetFeatureInfo request gets set to this value.
        //      Is it better to have that param turn off if not supplied and let server use default?
        this.mimeType = rampConfig.featureInfoMimeType || '';
        this.sublayerNames = [];
        this.dataFormat = DataFormat.OGC_RASTER;
        this.identifyMode = LayerIdentifyMode.GEOMETRIC;
    }

    protected async onInitiate(): Promise<void> {
        this.esriLayer = markRaw(
            new EsriWMSLayer(this.makeEsriLayerConfig(this.origRampConfig))
        );
        await super.onInitiate();
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
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: __esri.WMSLayerProperties = super.makeEsriLayerConfig(
            rampLayerConfig
        );

        const lEntries = <Array<RampLayerWmsSublayerConfig>>(
            rampLayerConfig.sublayers
        );
        this.sublayerNames = lEntries.map(
            sublayer => sublayer.id || 'error_no_wms_id'
        );

        // reminder: unlike MapImageLayer, we do not allow tweaking visibility
        //           of sublayers at runtime.
        //           if we decide to add that as a feature, we would need to flush
        //           out WmsFCs for each active sublayer and wire up a visibility
        //           pipeline similar to MapImageLayer

        // NOTE: Currently, we do not disallow using style names in the config that do not exist on the service (for defining custom legend graphics),
        // but because both GetMap and GetLegendGraphic use the currentStyle property, the GetMap request would fail. See #630.
        const styles = lEntries.map(e => e.currentStyle).join();

        // This sets the style for the GetMap request.
        // NOTE: This does NOT set the style for GetLegendGraphic requests. See #603.
        esriConfig.customParameters = {
            styles: styles
        };

        // do a GetCapabilities call for only the specified layer if it is a geomet layer
        if (rampLayerConfig.url!.indexOf('/geomet') !== -1) {
            // multiple values for layer/layers parameter currently not supported by geomet
            esriConfig.customParameters.layers = lEntries[0].id;
        }

        // NOTE the above `if` is what we currently have for the
        //      suppressGetCapabilities thing that Ramp2 did. It
        //      only works for geomet's services for now. Our best knowledge
        //      is the geomet "layer" param is custom to their server setup.
        //      Bit of risk here, if they ever change their URL or param names.
        //      Would also need more code changes if we need to support different
        //      services in this way. Hopefully vast majority of WMS endpoints
        //      dont have 10+ MB capability files, and this is non-issue.
        //      the todo below is original brainstorming on the problem,
        //      not feeling hot that a good universal solution exists.

        // looks like the GetCapabilities call is always made: https://community.esri.com/t5/arcgis-api-for-javascript/create-wms-layer-without-getcapabilities-request/td-p/1002080

        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        this.layerTree.name = this.name;

        // Set visibility of sublayers based on presence in the config
        const crawlSublayers = (
            sublayers: __esri.Collection<EsriWMSSublayer>
        ): boolean => {
            let anySlVis = false;
            sublayers.forEach(sl => {
                const visible = this.sublayerNames.indexOf(sl.name) > -1;
                if (visible) {
                    // if this sublayer is visible, then all of its sublayers should remain visible as well
                    anySlVis = true;
                } else {
                    if (sl.sublayers && sl.sublayers.length > 0) {
                        const slVisibile = crawlSublayers(sl.sublayers);
                        if (slVisibile) {
                            // if any of this sublayer's sublayers are visible, then this sublayer should be visible too
                            anySlVis = true;
                        } else {
                            sl.visible = false;
                        }
                    } else {
                        sl.visible = false;
                    }
                }
            });
            return anySlVis;
        };
        if (this.esriLayer) {
            crawlSublayers(this.esriLayer.sublayers);
        } else {
            this.noLayerErr();
        }

        this.loadSymbology();

        // TODO check out whats going on with layer extent. is it set and donethanks?

        return loadPromises;
    }

    // ----------- LAYER ACTIONS -----------

    canIdentify(): boolean {
        // TODO implement once mime type restrictions are figured out
        // TODO revist how we want to use this.
        //      old ramp would only allow requests that had matching mime types,
        //      and the result of the mapping would dictate which identify panel was used.
        //      we will probably have a different panel scheme.
        /*
        const infoMap = {
            'text/html;fgpv=summary': 'HTML',
            'text/html': 'HTML',
            'text/plain': 'Text',
            'application/json': 'EsriFeature'
        };
        */

        return super.canIdentify(); // && infoMap[this.config.featureInfoMimeType]
    }

    /**
     * Run a getFeatureInfo on a WMS layer, return the result as a promise.
     * Options: specs to be added once finalized
     *
     * @param {Object} options     additional arguemets, see above.
     * @returns {Object} an object with identify results array and identify promise resolving when identify is complete; if an empty object is returned, it will be skipped
     */
    runIdentify(options: IdentifyParameters): Array<IdentifyResult> {
        // TODO add full documentation for options parameter

        if (options.geometry.type !== GeometryType.POINT) {
            // TODO too harsh? maybe a console warning and generic no result?
            //      just thinking if someone attempts a fancy identify on a map
            //      that happens to have a WMS on it, it will never work.
            throw new Error('a point must be used for WMS Identify');
        }

        // early kickout check. not loaded/error
        if (!this.canIdentify()) {
            // return empty result.
            return [];
        }

        // TODO prolly need to flush out the config interfaces for this badboy

        const dProm = new DefPromise();

        const result: IdentifyResult = reactive({
            items: [],
            loading: dProm.getPromise(),
            loaded: false,
            uid: this.uid,
            requestTime: Date.now()
        });

        this.getFeatureInfo(
            this.sublayerNames,
            <Point>options.geometry,
            this.mimeType
        ).then(response => {
            // check if a result is returned by the service. If not, do not add to the array of data
            // TODO is is possible to have more than one item as a result? check how this works
            if (response) {
                // we have all the data already so can init the item as loaded
                const item: IdentifyItem = reactive({
                    data: response,
                    format: IdentifyResultFormat.UNKNOWN,
                    loaded: true,
                    loading: Promise.resolve()
                });

                if (typeof response !== 'string') {
                    // likely json or an image
                    // TODO improve the dection (maybe use the this.mimeType?)
                    item.format = IdentifyResultFormat.JSON;
                    result.items.push(item);
                } else if (
                    response.indexOf('Search returned no results') === -1 &&
                    response !== ''
                ) {
                    // TODO if service is french, will the "no results" message be different?
                    // TODO consider utilizing the infoMap variable above to detect HTML format.
                    item.format = IdentifyResultFormat.TEXT;
                    result.items.push(item);
                }
            }

            // Resolve the loading promise, set the flag
            result.loaded = true;
            dProm.resolveMe();
        });

        return [result];
    }

    /**
     * Add a WMS layer parameter, maybe even refresh the layer
     *
     * @function setCustomParameter
     * @param {String} key name of the key to be created or updated
     * @param {String} value value of the key
     * @param {Boolean} forceRefresh show the new fancy version of the layer or not
     */
    setCustomParameter(key: string, value: string, forceRefresh = true): void {
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
     *
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
        const screenPoint = map.esriView.toScreen(point.toESRI());
        const intX = Math.floor(screenPoint.x);
        const intY = Math.floor(screenPoint.y);

        // result return type is text unless we have a fancy case
        // TODO add something else? images?
        const customReturnType = {
            'application/json': 'json',
            'text/html': 'text',
            'text/plain': 'text'
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
        if (!Object.prototype.hasOwnProperty.call(req, 'BBOX')) {
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

    /**
     * Finds the appropriate legend URLs for WMS layers.
     *
     * @param {Array} layerList a list of objects identifying the WMS layers to be queried
     * @returns {Array} a list of strings containing URLs for specified layers (order is preserved)
     */
    getLegendUrls(layerList: Array<any>): Array<string> {
        // TODO needs robust testing once something is using it

        if (!this.esriLayer) {
            this.noLayerErr();
            return [];
        }

        const slMap = new Map();
        // .allSublayers is a flat collection of all sublayers
        this.esriLayer.allSublayers.forEach((sl: any) => {
            if (sl.visible) {
                // NOTE: currently, the ESRI WMSLayer constructor does not seem to be building a legendUrl using the correct style parameter.
                // this is a temp fix until we figure out what is going wrong there. See #603.
                if (sl.legendUrl) {
                    // check if the style matches that in the config.
                    // need to use forEach here and not find/filter because the sublayers properties are not always the same
                    (<Array<RampLayerWmsSublayerConfig>>(
                        this.origRampConfig.sublayers
                    ))?.forEach(sublayer => {
                        if (
                            sublayer.id &&
                            sublayer.currentStyle &&
                            sublayer.id === sl.name
                        ) {
                            const wrapper = new UrlWrapper(sl.legendUrl);
                            // assuming here that STYLE is always appended in all caps to avoid using .toUpperCase() above.
                            // if the assumption is wrong, might need to rework some logic so that no case-sensitive parts of the URL get changed. e.g., 'geomet' in geomet layers
                            if ('STYLE' in wrapper.queryMap) {
                                if (
                                    wrapper.queryMap.STYLE !==
                                    sublayer.currentStyle
                                ) {
                                    sl.legendUrl = wrapper.updateQuery({
                                        STYLE: sublayer.currentStyle
                                    });
                                }
                            }
                        }
                    });
                }
                slMap.set(sl.name, sl.legendUrl);
            }
        });

        // get any legendUrls that were defined in the config
        const legendURLs = layerList.map(l =>
            l.styleLegends && l.currentStyle
                ? l.styleLegends.find((style: any) => {
                      return style.name === l.currentStyle;
                  }).url
                : undefined
        );

        // this gets legendURLs in slMap (if it exists) for layers with undefined legendUrls
        legendURLs.forEach((entry, index) => {
            if (!entry) {
                legendURLs[index] = slMap.get(layerList[index].id);
            }
        });

        return legendURLs;
    }

    /**
     * Searches for a layer title defined by a wms.
     * @function getWMSLayerTitle
     * @private
     * @param  {String} wmsLayerId   layer id as defined in the wms (i.e. not wmsLayer.id)
     * @return {String}              layer title as defined on the service, '' if no title defined
     */
    getWMSLayerTitle(wmsLayerId: string): string {
        // TODO move this to ogc.js module?
        if (!this.esriLayer) {
            return '';
        }
        let targetEntry;
        // we use .some to allow the search to stop when we find something
        this.esriLayer.allSublayers.some((sl: any) => {
            // wms ids are stored in .name
            if (sl.name === wmsLayerId) {
                targetEntry = sl.title;
                return true;
            }
        });

        return targetEntry || '';
    }

    /**
     * Download or refresh the internal symbology for the sublayer.
     *
     * @function loadSymbology
     */
    loadSymbology(): void {
        const configSublayers = this.config.sublayers;
        const legendArray = this.getLegendUrls(
            configSublayers.map((sublayer: any) => {
                return {
                    id: sublayer.id,
                    styleLegends: sublayer.styleLegends,
                    currentStyle: sublayer.currentStyle
                };
            })
        ).map((imageUri, idx) => {
            // config specified name || server specified name || config id
            const name =
                configSublayers[idx].name ||
                this.getWMSLayerTitle(configSublayers[idx].id) ||
                configSublayers[idx].id;
            const symbologyItem: LegendSymbology = {
                uid: this.$iApi.geo.shared.generateUUID(),
                label: name,
                svgcode: '',
                esriStandard: false, // is an image
                drawPromise: this.$iApi.geo.symbology
                    .generateWMSSymbology(imageUri)
                    .then((data: any) => {
                        symbologyItem.svgcode = data.svgcode;
                        symbologyItem.imgHeight = data.imgHeight;
                        symbologyItem.imgWidth = data.imgWidth;
                    })
            };
            return symbologyItem;
        });
        this.legend = legendArray;
    }
}
