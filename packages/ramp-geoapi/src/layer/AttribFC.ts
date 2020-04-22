// put things here that would be common to all FCs that rock with esri attributes
// TODO add proper comments

import esri = __esri;
import { InfoBundle, AttributeSet, GetGraphicParams, GetGraphicResult, GetGraphicServiceDetails, QueryFeaturesParams, QueryFeaturesArcServerParams } from '../gapiTypes';
import BaseLayer from './BaseLayer';
import BaseFC from './BaseFC';
import { AttributeLoaderBase, AttributeLoaderDetails, ArcServerAttributeLoader } from '../util/AttributeLoader';
import { BaseRenderer } from '../util/Renderers';
import QuickCache from './QuickCache';
import Filter from './Filter';
import Extent from '../api/geometry/Extent';

export default class AttribFC extends BaseFC {

    geomType: string;
    layerType: string; // TODO revisit this. is value still useful? // NOTE this can fuel the new dataformat function being proposed
    oidField: string;
    fields: Array<esri.Field>;
    nameField: string;
    extent: esri.Extent;
    legend: any; // TODO figure out what this is. i think it's our custom class. make a definition somewhere
    attLoader: AttributeLoaderBase;
    featureCount: number; // TODO figure out how to identify an unknown count. will use undefined for now. -1 would be other option
    renderer: BaseRenderer;
    serviceUrl: string;
    protected quickCache: QuickCache;
    protected filter: Filter;

    constructor (infoBundle: InfoBundle, parent: BaseLayer, layerIdx: number = 0) {
        super(infoBundle, parent, layerIdx);

        this.geomType = '';
        this.oidField = '';
        this.nameField = '';
        this.serviceUrl = '';
        this.filter = new Filter();
    }

    // serviceUrl: string,
    // NOTE this logic is for ArcGIS Server sourced things.
    //      other sourced attribute layers should override this function.
    // TODO consider moving a bulk of this out to LayerModule; the wizard may have use for running this (e.g. getting field list for a service url)
    loadLayerMetadata(options: any = {}): Promise<void> {

        if (!this.serviceUrl) {
            // case where a non-server subclass ends up calling this via .super magic.
            // will avoid failed attempts at reading a non-existing service.
            // class should implement their own logic to load metadata (e.g. scrape from file layer)
            return Promise.resolve();
        }
        return new Promise ((resolve, reject) => {

            // extract info for this service
            const restReq: IPromise<esri.RequestResponse> = this.esriBundle.esriRequest(this.serviceUrl, { query: { f: 'json' } });

            // TODO revisit error handling. might need a try-catch? could also try then().error() to clean up
            restReq.then((serviceResult: esri.RequestResponse) => {
                if (serviceResult.data) {
                    const sData: any = serviceResult.data;

                    // properties for all endpoints
                    this.layerType = sData.type;
                    // TODO need to decide what propert default is. Raster Layer has null gt.
                    this.geomType = this.gapi.utils.shared.serverGeomTypeToClientGeomType(sData.geometryType) || 'none';
                    this.quickCache = new QuickCache(this.geomType);
                    this.scaleSet.minScale = sData.effectiveMinScale || sData.minScale;
                    this.scaleSet.maxScale = sData.effectiveMaxScale || sData.maxScale;
                    this.supportsFeatures = false; // saves us from having to keep comparing type to 'Feature Layer' on the client
                    this.extent = sData.extent; // TODO might need to cast/fromJson to a proper esri object

                    if (sData.type === 'Feature Layer') {
                        this.supportsFeatures = true;
                        this.fields = sData.fields.map((f: any) => this.esriBundle.Field.fromJSON(f)); // TODO need to use Field.fromJSON() to make things correct
                        this.nameField = sData.displayField;

                        // find object id field
                        const noFieldDefOid: boolean = this.fields.every((elem: esri.Field) => {
                            if (elem.type === 'oid') {
                                this.oidField = elem.name;
                                return false; // break the loop
                            }

                            return true; // keep looping
                        });

                        if (noFieldDefOid) {
                            // we encountered a service that does not mark a field as the object id.
                            // attempt to use alternate definition. if neither exists, we are toast.
                            this.oidField = sData.objectIdField ||
                                (() => { console.error(`Encountered service with no OID defined: ${this.serviceUrl}`); return ''; })();
                        }

                        // TODO revist. see https://github.com/james-rae/pocGAPI/issues/14
                        // ensure our attribute list contains the object id
                        /*
                        if (attribs !== '*') {
                            if (attribs.split(',').indexOf(layerData.oidField) === -1) {
                                attribs += (',' + layerData.oidField);
                            }
                        }
                        */

                        // TODO add in renderer and legend magic
                        // add renderer and legend
                        const sourceRenderer = (options && options.customRenderer && options.customRenderer.type) ?
                            options.customRenderer : sData.drawingInfo.renderer;
                        this.renderer = this.gapi.utils.symbology.makeRenderer(this.esriBundle.rendererUtils.fromJSON(sourceRenderer), this.fields);

                        // this array will have a set of promises that resolve when all the legend svg has drawn.
                        // for now, will not include that set (promise.all'd) on the layer load blocker;
                        // don't want to stop a layer from loading just because an icon won't draw.
                        // ideally we'll have placeholder symbol (white square, loading symbol, caution symbol, etc)
                        this.legend = this.gapi.utils.symbology.rendererToLegend(this.renderer);

                        // temporarily store things for delayed attributes
                        const loadData: AttributeLoaderDetails = {
                            // version number is only provided on 10.0 SP1 servers and up.
                            // servers 10.1 and higher support the query limit flag
                            supportsLimit: (sData.currentVersion || 1) >= 10.1,
                            serviceUrl: this.serviceUrl,
                            oidField: this.oidField,
                            attribs: '*' // TODO re-align with our attribs decision above
                        };
                        this.attLoader = new ArcServerAttributeLoader(this.infoBundle(), loadData);
                    }

                    // tell caller we are donethanks
                    resolve();
                } else {
                    // case where service request was successful but no data appeared in result
                    console.warn('Service metadata load error');
                    reject(new Error('Unknown error loading service metadata'));
                }
            }, error => {
                // failed to load service info. reject with error
                // TODO investigate if this is proper location where EsriErrorDetails will appear
                console.warn('Service metadata load error : ' + error.EsriErrorDetails || error);
                reject(error);
            });
        });
    }

    loadFeatureCount(): Promise<void> {

        if (!this.serviceUrl) {
            // case where a non-server subclass ends up calling this via .super magic.
            // will avoid failed attempts at reading a non-existing service.
            // class should implement their own logic to load feature count (e.g. scrape from file layer)
            return Promise.resolve();
        }

        // TODO detect when we are in Raster Layer case? if we do this, we would need the caller of this
        //      function to wait on the loadLayerMetadata promise, then check this.supportsFeatures

        return new Promise ((resolve, reject) => {

            // extract info for this service
            const restParam: esri.RequestOptions = {
                query: {
                    f: 'json',
                    where: '1=1',
                    returnCountOnly: true,
                    returnGeometry: false
                }
            };
            const restReq: IPromise<esri.RequestResponse> = this.esriBundle.esriRequest(`${this.serviceUrl}/query`, restParam);

            // TODO revisit error handling. might need a try-catch?
            // TODO have discussion about error case. app shouldnt bomb without count. but how to handle? ignore? show error? console error? special error count val e.g. -2
            restReq.then((serviceResult: esri.RequestResponse) => {
                if (serviceResult.data) {

                    // TODO old geoApi had logic to execute web request twice; comment indicated first request could fail.
                    //      re-apply this if we notice the same thing. sounds like garbage server problem tbh.
                    // TODO need to decide on placeholder for unknown count.
                    this.featureCount = serviceResult.data.count;

                    // tell caller we are donethanks
                    resolve();
                } else {
                    // case where service request was successful but no data appeared in result
                    console.warn('Unable to load feature count: ' + this.serviceUrl);
                    resolve();
                }
            }, error => {
                // failed to load service info. reject with error
                // TODO investigate if this is proper location where EsriErrorDetails will appear
                console.warn('Unable to load feature count: ' + this.serviceUrl, error);
                resolve();
            });
        });
    }

    // formerly known as getFormattedAttributes
    // TODO making this work for now same as old way. do we want to think about different ways?
    //      e.g. have consumer parse the raw data and format it?
    //      doing it here has advantage because layer metadata is also here (e.g. fields array, symbol renderer)
    // TODO fancy types
    /**
     * Retrieves attributes from a layer for a specified feature index
     * @return {Promise}            promise resolving with formatted attributes to be consumed by the datagrid and esri feature identify
     */
    getTabularAttributes (): Promise<any> {
        // TODO rethink how this works. is it better to read from attributes every time?
        if (this.attLoader.tabularAttributesCache) {
            return this.attLoader.tabularAttributesCache;
        }

        // TODO after refactor, consider changing this to a warning and just return some dummy value
        // TODO make a layertype constant / enum?
        //      adopt the esri layer.type values would be a good idea
        if (this.layerType === 'Raster Layer') {
            throw new Error('Attempting to get attributes on a raster layer.');
        }

        // TODO we could also wait on this.parentLayer.isLayerLoaded()
        //      but given FC's get created on the load event, it seems unlikely right now
        //      that anyone would be calling this pre-layer-load.
        this.attLoader.tabularAttributesCache = this.attLoader.getAttribs()
            .then((attSet: AttributeSet) => {
                // create columns array consumable by datables. We don't include the alias defined in the config here as
                // the grid handles it seperately.
                const columns = this.fields
                    .filter(field =>

                        // assuming there is at least one attribute - empty attribute budnle promises should be rejected, so it never even gets this far
                        // filter out fields where there is no corresponding attribute data
                        attSet.features[0].attributes.hasOwnProperty(field.name))
                    .map(field => ({
                        data: field.name,
                        title: field.alias || field.name
                    }));

                // derive the icon for the row
                // TODO figure out if we want to change the system attributes.
                const rows = attSet.features.map(feature => {
                    const att = feature.attributes;
                    att.rvInteractive = '';
                    att.rvSymbol = undefined; // TODO re-add this.gapi.symbology.getGraphicIcon(att, this.renderer);
                    return att;
                });

                // if a field name resembles a function, the data table will treat it as one.
                // to get around this, we add a function with the same name that returns the value,
                // tricking that silly datagrid.
                columns.forEach(c => {
                    if (c.data.substr(-2) === '()') {
                        // have to use function() to get .this to reference the row.
                        // arrow notation will reference the attribFC class.
                        const secretFunc = function() {
                            return this[c.data];
                        };

                        const stub = c.data.substr(0, c.data.length - 2); // function without brackets
                        rows.forEach(r => {
                            r[stub] = secretFunc;
                        });
                    }
                });

                return {
                    columns,
                    rows,
                    fields: this.fields, // keep fields for reference ...
                    oidField: this.oidField, // ... keep a reference to id field ...
                    oidIndex: attSet.oidIndex, // TODO determine if we need this anymore. who uses it? // ... and keep id mapping array
                    renderer: this.renderer
                };
            })
            .catch(e => {
                this.attLoader.tabularAttributesCache = undefined; // delete cached promise when the geoApi `getAttribs` call fails, so it will be requested again next time `getAttributes` is called;
                if (e === 'ABORTED') { // TODO see if we're still thowing an error with message ABORTED
                    throw new Error('ABORTED');
                } else {
                    throw new Error('Attrib loading failed');
                }
            });

        return this.attLoader.tabularAttributesCache;
    }

    // TODO rename to getFeature for consistency?
    /**
     * Fetches a graphic from the given layer.
     * Will attempt local copy (unless overridden), will hit the server if not available.
     *
     * @function getGraphic
     * @param  {Integer} objectId      ID of object being searched for
     * @param {Object} opts            object containing option parametrs
     *                 - map           map wrapper object of current map. only required if requesting geometry
     *                 - getGeom       boolean. indicates if return value should have geometry included. default to false
     *                 - getAttribs    boolean. indicates if return value should have attributes included. default to false
     * @returns {Promise} resolves with a bundle of information. .graphic is the graphic; .layerFC for convenience
     */
    getGraphic (objectId: number, opts: GetGraphicParams): Promise<GetGraphicResult> {
        // TODO RAMP2 version of this included the FC object. we want to keep those hidden, so
        //      for now will just return the graphic structure and if we need more stuff we
        //      will figure out a proper way to do that.
        // TODO we're just returning raw data, so will not type the promise result as esri.Graphic
        //      seeing as we wont have all the decorations needed to satisfy the type

        // see https://github.com/fgpv-vpgf/fgpv-vpgf/issues/2190 for reasons why
        // things are done the way they are in this function.

        // NOTE this is for server-based layers. local layers with features should override this for gains.

        const resultFeat: any = {};

        // const nonPoint = this.geomType !== 'esriGeometryPoint';
        let needWebAttr: boolean = false;
        let needWebGeom: boolean = false;
        let scale: number;

        // if we need to access attribute promise, this var will become that
        // promise. if not, this var remains a fast instant-resolve
        let attribWaitPromise: Promise<void> = Promise.resolve();

        if (opts.getAttribs) {
            // attempt to get attributes from fastest source.
            let aCache = this.quickCache.getAttribs(objectId);
            if (aCache) {
                // value is already cached. use it
                resultFeat.attributes = aCache;
            } else if (this.attLoader.isLoaded || this.parentLayer.isFile) {
                // all attributes have been loaded (or is a file and are local). use that store.
                // since attributes come from a promise, reset the wait promise to the attribute promise
                attribWaitPromise = this.attLoader.getAttribs().then(atSet => {
                    resultFeat.attributes = atSet.features[atSet.oidIndex[objectId]].attributes;
                });
            } else {
                // we will need to download data from the service
                needWebAttr = true;
            }
        }

        if (opts.getGeom) {
            scale = opts.map.getScale();

            // first locate the appropriate cache due to simplifications.
            let gCache = this.quickCache.getGeom(objectId, scale);

            // attempt to get geometry from fastest source.
            if (gCache) {
                resultFeat.geometry = gCache;

            /*
            // TODO / NOTE: at first glance it looks like ESRI 4 is hiding the guts of server-based feature layers.
            //              when there is time, can take a look to see if any hidden/system caches are there on
            //              the esri layer object to exploit.
            //              for now, will just skip this optimization.

            } else if (this.parentLayer._innerLayer.type === 'feature') {
                // it is a feature layer. we can attempt to extract info from it.
                // but remember the feature may not exist on the client currently

                let localGraphic =  (<esri.FeatureLayer>this.parentLayer._innerLayer).graphics.find(g =>
                    g.attributes[this.oidField] === objectId);


                if (localGraphic) {
                    // found one. cache it and use it
                    gCache[objectId] = localGraphic.geometry;
                    resultFeat.geometry = localGraphic.geometry;
                } else {
                    needWebGeom = true;
                }
            */
            } else {
                if (this.isUndefined(opts.map)) {
                    throw new Error ('Map parameter must be provided for fetchGraphic calls on server based layers that want geometry in the result');
                }
                needWebGeom = true;
            }
        }

        // hit the server if we dont have cached values
        if (needWebAttr || needWebGeom) {
            const serviceParams: GetGraphicServiceDetails = {
                oid: objectId,
                serviceUrl: this.serviceUrl,
                includeGeometry: needWebGeom,
                attribs: '*' // TODO likely want to align with outfields from the config. might want to start storing outfields/adjusted-outfields in the FC
            };

            if (needWebGeom) {
                serviceParams.mapSR = JSON.stringify(opts.map._innerView.spatialReference); // TODO test; stringify might include all the esri wrapper garbage. if so, make a custom jsonifier in proj utils
                if (!this.quickCache.isPoint) {
                    serviceParams.maxOffset = opts.map._innerView.resolution;
                }
            }

            return this.gapi.utils.attributes.loadSingleFeature(serviceParams).then(webFeat => {
                if (needWebGeom) {
                    // save our result in the cache
                    this.quickCache.setGeom(objectId, webFeat.geometry, scale);
                    resultFeat.geometry = webFeat.geometry;
                }

                if (needWebAttr || this.isUndefined(this.quickCache.getAttribs(objectId))) {
                    // extra check in the if is for efficiency. attributes get downloaded in the request
                    // regardless if we wanted them. if we didn't want them, but didn't have them cached,
                    // will cache them anyways to save another hit later.
                    this.quickCache.setAttribs(objectId, webFeat.attributes);

                    if (needWebAttr) {
                        // only put attribs on the result if requester asked for them
                        resultFeat.attributes = webFeat.attributes;
                    }
                }

                return resultFeat;
            });

        } else {
            // no need for web requests. everything was available locally
            return attribWaitPromise.then(() => resultFeat);
        }
    }

    getIcon (objectId: number): Promise<string> {
        return this.getGraphic(objectId, { getAttribs: true }).then(g => {
            return this.gapi.utils.symbology.getGraphicIcon(g.attributes, this.renderer);
        });
    }

    // TODO make override in geojson layer
    // TODO this is more of a utility function. leaving it public as it might be useful, revist when
    //      the app is mature.
    queryOIDs(options: QueryFeaturesParams): Promise<Array<number>> {
        // NOTE this assumes a server based layer
        //      local based layers should override this function

        if (this.parentLayer.isFile) {
            console.error(`a file layer called a server based query function`);
            console.trace();
        }

        // TODO do we want do default options.outfields to our app-defined outfields if they are not provided?

        // execute the query ids
        const agsOpt: QueryFeaturesArcServerParams = {
            url: this.serviceUrl,
            ...options
        };

        return this.gapi.utils.query.arcGisServerQueryIds(agsOpt);
    }

    // TODO we are using the getgraphic type as it's an unbound loosely typed feature
    //      may want to change name of the type to something more general
    /**
     * Requests a set of features for this layer that match the criteria of the options
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Array} set of features that satisfy the criteria
     */
    queryFeatures(options: QueryFeaturesParams): Promise<Array<GetGraphicResult>> {
        // NOTE this assumes a server based layer
        //      local based layers should override this function

        // TODO potential optimization.
        //      if we have a big array of OIDs returned below, comparable to
        //      layers record count, and this.attLoader.isLoaded is false,
        //      we could trigger a getattributes call to bulk download them upfront.
        //      would be more efficient (way less web calls).

        return this.queryOIDs(options).then(oids => {
            // run result ids through our quick cache pipeline
            const p: GetGraphicParams = {
                getGeom: !!options.includeGeometry,
                getAttribs: true,
                map: options.map
            };
            const cacheQueue: Array<Promise<GetGraphicResult>> = oids.map(oid => this.getGraphic(oid, p));
            return Promise.all(cacheQueue);
        });
    }

    /**
     * Gets array of object ids that currently pass any filters
     *
     * @function getFilterOIDs
     *
     * @param {Array} [exclusions] list of any filters keys to exclude from the result. omission includes all filters
     * @param {Extent} [extent] if provided, the result list will only include features intersecting the extent
     * @returns {Promise} resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.
     */
    getFilterOIDs(exclusions: Array<string> = [], extent: Extent = undefined): Promise<Array<number>> {
        // NOTE this logic should perform for both server and file based layers, as long as .queryOIDs is properly overriden
        const sql = this.filter.getCombinedSql(exclusions);
        const bExt: boolean = !!extent; // keep typescript happy

        if (!(sql || bExt)) {
            // no filters active. return undefined so caller can not worry about applying filters
            return Promise.resolve(undefined);
        }

        if (extent) {
            // essentially this determines if our extent was already cached,
            // bonks the cache if it is stale
            this.filter.setExtent(extent);
        }

        // this must be done after the setExtent() call, as that call can potentially invalidate caches
        const impactedFilters = this.filter.sqlActiveFilters(exclusions);
        let cache = this.filter.getCache(impactedFilters, bExt);

        // if not cached, execute a query and store the result as the cache
        if (!cache) {
            const qOpts: QueryFeaturesParams = {
                filterGeometry: extent,
                filterSql: sql,
                includeGeometry: false
            };
            cache = this.queryOIDs(qOpts);
            this.filter.setCache(cache, impactedFilters, bExt);
        }
        return cache;
    }

    setSqlFilter(filterKey: string, whereClause: string): void {
        // TODO maybe implement a check first? e.g. if we are setting to '' but that key is already '',
        //      then just exit, no need to trigger updates?
        this.filter.setSql(filterKey, whereClause);
        this.parentLayer.filterChanged.fireEvent({
            uid: this.uid,
            filter: filterKey
        });
    }

    getSqlFilter(filterKey: string): string {
        return this.filter.getSql(filterKey);
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        throw new Error('attempted to apply sql filter to a layer not equipped for it. likely a new subclass of AttribFC did not override applySqlFilter');
    }

    // TODO decide if we want this
    //      the function is simple enough, but we would need some fancy events pinging off
    //      for every sql key that got cleared. maybe filter.clearAll needs to return an
    //      array of cleared filter keys?
    /*
    clearSqlFilter(): void {
        this.filter.clearAll();
    }
    */
}