// put things here that would be common to all esri attribute-based FCs
// used for layer types defined by Core RAMP.

// TODO add proper comments

import {
    ArcServerAttributeLoader,
    AttribLayer,
    AttributeLoaderBase,
    AttributeLoaderDetails,
    BaseRenderer,
    CommonFC,
    GlobalEvents,
    QuickCache
} from '@/api/internal';
import {
    Attributes,
    BaseGeometry,
    CoreFilterKey,
    DataFormat,
    Extent,
    FieldDefinition,
    Filter,
    GeometryType,
    GetGraphicParams,
    GetGraphicResult,
    GetGraphicServiceDetails,
    QueryFeaturesArcServerParams,
    QueryFeaturesParams,
    RampLayerFieldMetadataConfig,
    TabularAttributeSet
} from '@/geo/api';
import {
    EsriExtent,
    EsriField,
    EsriRendererUtils,
    EsriRequest
} from '@/geo/esri';
import deepmerge from 'deepmerge';
import to from 'await-to-js';

export class AttribFC extends CommonFC {
    // property does get initialized in the super. typescript just being grousy
    // @ts-ignore
    protected parentLayer: AttribLayer;
    geomType: GeometryType;
    oidField: string;
    fields: Array<EsriField>;
    fieldList: string; // list of field names, useful for numerous esri api calls
    nameField: string;
    extent: EsriExtent | undefined;
    attLoader: AttributeLoaderBase | undefined;
    featureCount: number;
    renderer: BaseRenderer | undefined;
    serviceUrl: string;
    protected quickCache: QuickCache | undefined;
    protected filter: Filter;

    constructor(parent: AttribLayer, layerIdx: number = 0) {
        super(parent, layerIdx);

        this.geomType = GeometryType.UNKNOWN;
        this.oidField = '';
        this.nameField = '';
        this.serviceUrl = '';
        this.fieldList = '';
        this.featureCount = -1;
        this.fields = [];
        this.filter = new Filter();
    }

    // serviceUrl: string,
    // NOTE this logic is for ArcGIS Server sourced things.
    //      other sourced attribute layers should override this function.
    // TODO consider moving a bulk of this out to LayerModule; the wizard may have use for running this (e.g. getting field list for a service url).
    //      might not be worth it; the "shared" part is effectively the one line web request.
    // TODO strongly type the options param?
    async loadLayerMetadata(options: any = {}): Promise<void> {
        // given all the error handlers, leaving this as a non-async function

        if (!this.serviceUrl) {
            // case where a non-server subclass ends up calling this via .super magic.
            // will avoid failed attempts at reading a non-existing service.
            // class should implement their own logic to load metadata (e.g. scrape from file layer)
            return;
        }

        // extract info for this service
        const [err, serviceResult] = await to<__esri.RequestResponse>(
            EsriRequest(this.serviceUrl, { query: { f: 'json' } })
        );
        if (!serviceResult) {
            // case where service request was unsuccessful
            console.error(
                `Service metadata load error: ${this.serviceUrl}`,
                err
            );
            return Promise.reject(
                new Error(`Service metadata load error: ${this.serviceUrl}`)
            );
        }

        if (!serviceResult.data) {
            // case where service request was successful but no data appeared in result
            console.error(`Service metadata load error: ${this.serviceUrl}`);
            return Promise.reject(
                new Error(`Service metadata load error: ${this.serviceUrl}`)
            );
        }

        const sData: any = serviceResult.data;

        // properties for all endpoints

        // TODO need to decide what propert default is. Raster Layer has null gt.
        this.geomType = this.parentLayer.$iApi.geo.utils.geom.serverGeomTypeToRampGeomType(
            sData.geometryType
        );
        this.quickCache = new QuickCache(this.geomType);
        this.scaleSet.minScale = sData.effectiveMinScale || sData.minScale;
        this.scaleSet.maxScale = sData.effectiveMaxScale || sData.maxScale;
        this.supportsFeatures = false; // saves us from having to keep comparing type to 'Feature Layer' on the client
        this.extent = sData.extent; // TODO might need to cast/fromJson to a proper esri object

        if (sData.type === 'Feature Layer') {
            this.supportsFeatures = true;
            this.dataFormat = DataFormat.ESRI_FEATURE;
            this.fields = sData.fields.map((f: any) => EsriField.fromJSON(f)); // TODO need to use Field.fromJSON() to make things correct
            this.nameField = sData.displayField;

            // find object id field
            const noFieldDefOid: boolean = this.fields.every(elem => {
                if (elem.type === 'oid') {
                    this.oidField = elem.name;
                    return false; // break the loop
                }

                return true; // keep looping
            });

            if (noFieldDefOid) {
                // we encountered a service that does not mark a field as the object id.
                // attempt to use alternate definition. if neither exists, we are toast.
                this.oidField =
                    sData.objectIdField ||
                    (() => {
                        console.error(
                            `Encountered service with no OID defined: ${this.serviceUrl}`
                        );
                        return '';
                    })();
            }

            // TODO add in renderer and legend magic
            // add renderer and legend
            const sourceRenderer =
                options && options.customRenderer && options.customRenderer.type
                    ? options.customRenderer
                    : sData.drawingInfo.renderer;
            this.renderer = this.parentLayer.$iApi.geo.utils.symbology.makeRenderer(
                EsriRendererUtils.fromJSON(sourceRenderer),
                this.fields
            );

            // this array will have a set of promises that resolve when all the legend svg has drawn.
            // for now, will not include that set (promise.all'd) on the layer load blocker;
            // don't want to stop a layer from loading just because an icon won't draw.
            // ideally we'll have placeholder symbol (white square, loading symbol, caution symbol, etc)
            this.legend = this.parentLayer.$iApi.geo.utils.symbology.rendererToLegend(
                this.renderer
            );

            // temporarily store things for delayed attributes
            const loadData: AttributeLoaderDetails = {
                // version number is only provided on 10.0 SP1 servers and up.
                // servers 10.1 and higher support the query limit flag
                supportsLimit: (sData.currentVersion || 1) >= 10.1,
                serviceUrl: this.serviceUrl,
                oidField: this.oidField,
                batchSize: -1,
                attribs: '*' // NOTE we set to * here for generic case. loader may override later once config settings are applied
            };
            this.attLoader = new ArcServerAttributeLoader(
                this.parentLayer.$iApi,
                loadData
            );
        } else {
            this.dataFormat = DataFormat.ESRI_RASTER;
            this.fields = [];
        }
    }

    /**
     * Will take field config metadata and incorporate it into this FC.
     * Should be used after loading process has populated .fields property
     *
     * @param configMetadata data from the config object. can be undefined
     */
    processFieldMetadata(
        configMetadata: RampLayerFieldMetadataConfig | undefined = undefined
    ): void {
        // TODO ensure we do not have to worry about case mismatch of field names.

        // check for no enhancements requested
        if (!configMetadata) {
            this.fieldList = '*';
            return;
        }

        if (!configMetadata.fieldInfo) {
            throw new Error(
                'processFieldMetadata called before fieldInfo was set on config metadata'
            );
        }

        // if exlusive fields, only respect fields in the field info array
        if (configMetadata.exclusiveFields) {
            // ensure object id field is included
            if (!configMetadata.fieldInfo.find(f => f.data === this.oidField)) {
                configMetadata.fieldInfo.push({ data: this.oidField });
            }

            // TODO do we also need to ensure fields required by other things are auto-included?
            //      e.g. hovertip
            //           ref fields for class breaks or unique value renderers
            //           name field
            //      alternately, we don't, and insist config author properly defines their fields
            //      might also want to consider an additional attribute on fields, something like
            //      "coreHidden" that indicates the field has to exist, but should not be shown
            //      on things like details panes or grids

            this.fieldList = configMetadata.fieldInfo
                .map(f => f.data)
                .join(',');
            const tempFI = configMetadata.fieldInfo; // required because typescript is throwing a fit about undefineds inside the .filter
            this.fields = this.fields.filter(origField => {
                return tempFI.find(fInfo => fInfo.data === origField.name);
            });
        } else {
            this.fieldList = '*';
        }

        // if any aliases overrides, apply them
        configMetadata.fieldInfo.forEach(cf => {
            if (cf.alias) {
                const ff = this.fields.find(fff => fff.name === cf.data);
                if (ff) {
                    ff.alias = cf.alias;
                }
            }
        });
    }

    async loadFeatureCount(): Promise<void> {
        if (!this.serviceUrl) {
            // case where a non-server subclass ends up calling this via .super magic.
            // will avoid failed attempts at reading a non-existing service.
            // class should implement their own logic to load feature count (e.g. scrape from file layer)
            return;
        }

        // TODO detect when we are in Raster Layer case? if we do this, we would need the caller of this
        //      function to wait on the loadLayerMetadata promise, then check this.supportsFeatures

        // extract info for this service
        const restParam: __esri.RequestOptions = {
            query: {
                f: 'json',
                where: '1=1',
                returnCountOnly: true,
                returnGeometry: false
            }
        };

        const [err, serviceResult] = await to<__esri.RequestResponse>(
            EsriRequest(`${this.serviceUrl}/query`, restParam)
        );

        // Throw console warnings, don't crash the app
        if (!serviceResult) {
            // case where service request was unsuccessful
            console.warn(
                `Feature count request unsuccessful: ${this.serviceUrl}`,
                err
            );
            return;
        }
        if (!serviceResult.data) {
            // case where service request was successful but no data appeared in result
            console.warn(`Unable to load feature count: ${this.serviceUrl}`);
            return;
        }

        // TODO old geoApi had logic to execute web request twice; comment indicated first request could fail.
        //      re-apply this if we notice the same thing. sounds like garbage server problem tbh.
        // TODO need to decide on placeholder for unknown count.
        this.featureCount = serviceResult.data.count;
    }

    /**
     * Returns an array of field definitions. Raster layers will have empty arrays.
     *
     * @returns {Array} list of field definitions
     */
    getFields(): Array<FieldDefinition> {
        // extra fancy so we dont have to expose the ESRI field class
        return this.fields.map(f => {
            return {
                name: f.name,
                alias: f.alias,
                type: f.type,
                length: f.length
            };
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
    async getTabularAttributes(): Promise<TabularAttributeSet> {
        // redundant checks to shut up typescript
        if (!this.attLoader) {
            throw new Error(
                'getTabularAttributes call with missing attribute loader'
            );
        }

        // TODO rethink how this works. is it better to read from attributes every time?
        //      if we allow attribute value updates via API, then we probably have to do that.
        if (!this.attLoader.tabularAttributesCache) {
            // do not use await here. we want to store the promise and pass it on, not block until the promise resolves.
            this.attLoader.tabularAttributesCache = this.getTabularAttributesGuts();
        }

        return this.attLoader.tabularAttributesCache;
    }

    private async getTabularAttributesGuts(): Promise<TabularAttributeSet> {
        // this does the heavy lifting. it is abstracted from getTabularAttributes()
        // because async format is not conductive to grabbing and caching the promise halfway
        // through the function execution.

        // redundant checks to shut up typescript
        if (!this.attLoader) {
            throw new Error(
                'getTabularAttributesGuts call with missing attribute loader'
            );
        }

        // TODO consider changing this to a warning and just return some dummy value
        if (this.dataFormat === DataFormat.ESRI_RASTER) {
            throw new Error('Attempting to get attributes on a raster layer.');
        }

        // TODO we could also wait on this.parentLayer.isLayerLoaded()
        //      but given FC's get created on the load event, it seems unlikely right now
        //      that anyone would be calling this pre-layer-load.

        // TODO figure out how to handle a failure in .getAttribs. See comment catch block at bottom of function.
        const attSet = await this.attLoader.getAttribs();

        // create columns array consumable by datables. We don't include the alias defined in the config here as
        // the grid handles it seperately.
        const columns = this.fields
            .filter(field =>
                // assuming there is at least one attribute - empty attribute budnle promises should be rejected, so it never even gets this far
                // filter out fields where there is no corresponding attribute data
                attSet.features[0].hasOwnProperty(field.name)
            )
            .map(field => ({
                data: field.name, // TODO calling this data is really unintuitive. consider global rename to fieldName, name, attribName, etc.
                title: field.alias || field.name
            }));

        // derive the icon for the row
        // TODO figure out if we want to change the system attributes. making a copy for now with deepmerge.
        // if we add rv properties to the feature in the attribute set, we may see those fields showing up in details panes, API outputs, etc.
        // that said, copying means we double the size of attributes in memory.
        const rows = attSet.features.map(feature => {
            const att = deepmerge({}, feature);
            att.rvInteractive = '';
            att.rvSymbol = this.renderer?.getGraphicIcon(feature);
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
                    // @ts-ignore
                    return this[c.data];
                };

                const stub = c.data.substr(0, c.data.length - 2); // function without brackets
                rows.forEach(r => {
                    r[stub] = secretFunc;
                });
            }
        });

        // we are storing a promise in tabularAttributesCache
        //    might need to revert to the way it was structured before.
        //    or create an async guts and then main caller does a two line cache and return
        return {
            columns,
            rows,
            fields: this.getFields(), // keep fields for reference ...
            oidField: this.oidField // ... keep a reference to id field ...
            // oidIndex: attSet.oidIndex, // TODO determine if we need this anymore. who uses it? // ... and keep id mapping array
            // renderer: this.renderer // TODO this should probably not be here. we should have a better way to derive data that the renderer could provide
        };

        /* OLD PROMISE CATCH BLOCK
            .catch(e => {
                this.attLoader.tabularAttributesCache = undefined; // delete cached promise when the geoApi `getAttribs` call fails, so it will be requested again next time `getAttributes` is called;
                if (e === 'ABORTED') { // TODO see if we're still thowing an error with message ABORTED
                    throw new Error('ABORTED');
                } else {
                    throw new Error('Attrib loading failed');
                }
            });
        */
    }

    // TODO rename to getFeature for consistency?
    /**
     * Fetches a graphic from the given layer.
     * Will attempt local copy (unless overridden), will hit the server if not available.
     *
     * @function getGraphic
     * @param  {Integer} objectId      ID of object being searched for
     * @param {Object} opts            object containing option parametrs
     *                 - unboundMap    map wrapper object of current map. only required if requesting geometry, and the layer is not on the map
     *                 - getGeom       boolean. indicates if return value should have geometry included. default to false
     *                 - getAttribs    boolean. indicates if return value should have attributes included. default to false
     * @returns {Promise} resolves with a bundle of information. .graphic is the graphic; .layerFC for convenience
     */
    async getGraphic(
        objectId: number,
        opts: GetGraphicParams
    ): Promise<GetGraphicResult> {
        // NOTE RAMP2 version of this included the FC object. we want to keep those hidden, so
        //      for now will just return the graphic structure and if we need more stuff we
        //      will figure out a proper way to do that.

        // see https://github.com/fgpv-vpgf/fgpv-vpgf/issues/2190 for reasons why
        // things are done the way they are in this function.

        // NOTE this is for server-based layers. local layers with features should override this for gains.

        // TODO toy with the idea of changing GetGraphicResult to RAMP.API Graphic type.
        //      potential reasons not to: that type has additional properties like style.

        const resultFeat: any = {};
        const map = this.parentLayer.$iApi.geo.map; // used to do `opts.unboundMap || ` first, but think we're getting rid of that.

        // redundant checks to shut up typescript
        if (!this.quickCache) {
            throw new Error('getGraphic call with missing quickCache');
        }
        if (!this.attLoader) {
            throw new Error('getGraphic call with missing attribute loader');
        }

        // const nonPoint = this.geomType !== 'esriGeometryPoint';
        let needWebAttr: boolean = false;
        let needWebGeom: boolean = false;
        let scale: number = 0;

        if (opts.getAttribs) {
            // attempt to get attributes from fastest source.
            let aCache = this.quickCache.getAttribs(objectId);
            if (aCache) {
                // value is already cached. use it
                resultFeat.attributes = aCache;
            } else if (this.attLoader.isLoaded || this.parentLayer.isFile) {
                // NOTE: the above line has a habit of showing as an error in VSCode. The compiler will not be as dumb.

                // all attributes have been loaded (or is a file and are local). use that store.
                // since attributes come from a promise, reset the wait promise to the attribute promise
                const atSet = await this.attLoader.getAttribs();
                resultFeat.attributes =
                    atSet.features[atSet.oidIndex[objectId]];
            } else {
                // we will need to download data from the service
                needWebAttr = true;
            }
        }

        if (opts.getGeom) {
            scale = map.getScale();

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
            // UPDATE: could probably do thsi by running queryFeatures on the layer view.

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
                needWebGeom = true;
            }
        }

        // hit the server if we dont have cached values
        if (needWebAttr || needWebGeom) {
            const serviceParams: GetGraphicServiceDetails = {
                oid: objectId,
                serviceUrl: this.serviceUrl,
                includeGeometry: needWebGeom,
                attribs: this.fieldList
            };

            if (needWebGeom) {
                serviceParams.mapSR = map.getSR().wkid?.toString();
                if (!this.quickCache.isPoint) {
                    serviceParams.maxOffset = map.esriView?.resolution;
                }
            }

            const webFeat = await this.parentLayer.$iApi.geo.utils.attributes.loadSingleFeature(
                serviceParams
            );
            if (needWebGeom) {
                // save our result in the cache
                this.quickCache.setGeom(
                    objectId,
                    <BaseGeometry>webFeat.geometry,
                    scale
                );
                resultFeat.geometry = webFeat.geometry;
            }

            if (
                needWebAttr ||
                typeof this.quickCache.getAttribs(objectId) === 'undefined'
            ) {
                // extra check in the if is for efficiency. attributes get downloaded in the request
                // regardless if we wanted them. if we didn't want them, but didn't have them cached,
                // will cache them anyways to save another hit later.
                this.quickCache.setAttribs(
                    objectId,
                    <Attributes>webFeat.attributes
                );

                if (needWebAttr) {
                    // only put attribs on the result if requester asked for them
                    resultFeat.attributes = webFeat.attributes;
                }
            }
        }

        return resultFeat;
    }

    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    async getIcon(objectId: number): Promise<string> {
        if (!this.renderer) {
            throw new Error('getIcon called before renderer is defined');
        }
        const g = await this.getGraphic(objectId, { getAttribs: true });
        return this.parentLayer.$iApi.geo.utils.symbology.getGraphicIcon(
            g.attributes || {},
            this.renderer
        );
    }

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

        return this.parentLayer.$iApi.geo.utils.query.arcGisServerQueryIds(
            agsOpt
        );
    }

    // TODO we are using the getgraphic type as it's an unbound loosely typed feature
    //      may want to change name of the type to something more general
    /**
     * Requests a set of features for this layer that match the criteria of the options
     * - filterGeometry : a RAMP API geometry to restrict results to
     * - filterSql : a where clause to apply against feature attributes
     * - includeGeometry : a boolean to indicate if result features should include the geometry
     * - outFields : a string of comma separated field names. will restrict fields included in the output
     * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
     * - map : a Ramp map. required if geometry was requested and the layer is not on a map
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves with an array of features that satisfy the criteria
     */
    async queryFeatures(
        options: QueryFeaturesParams
    ): Promise<Array<GetGraphicResult>> {
        // NOTE this assumes a server based layer
        //      local based layers should override this function

        // TODO potential optimization.
        //      if we have a big array of OIDs returned below, comparable to
        //      layers record count, and this.attLoader.isLoaded is false,
        //      we could trigger a getattributes call to bulk download them upfront.
        //      would be more efficient (way less web calls).

        // TODO this is likely obsolete. delete when confirmed
        /*
        if (typeof options.map === 'undefined') {
            options.map = this.parentLayer.$iApi.geo.map;
        }
        */

        if (!options.outFields) {
            options.outFields = this.fieldList;
        }

        const oids = await this.queryOIDs(options);

        // run result ids through our quick cache pipeline
        const p: GetGraphicParams = {
            getGeom: !!options.includeGeometry,
            getAttribs: true
            // unboundMap: options.map
        };
        const cacheQueue: Array<Promise<GetGraphicResult>> = oids.map(oid =>
            this.getGraphic(oid, p)
        );
        return Promise.all(cacheQueue);
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
    async getFilterOIDs(
        exclusions: Array<string> = [],
        extent: Extent | undefined = undefined
    ): Promise<Array<number> | undefined> {
        // NOTE this logic should perform for both server and file based layers, as long as .queryOIDs is properly overriden
        const sql = this.filter.getCombinedSql(exclusions);
        const bExt: boolean = !!extent; // keep typescript happy

        if (!(sql || bExt)) {
            // no filters active. return undefined so caller can not worry about applying filters
            return undefined;
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

    /**
     * Applies an SQL filter. Will overwrite any existing filter for the given key.
     * Use `1=2` for a "hide all" where clause.
     *
     * @param {String} filterKey the filter key / named filter to apply the SQL to
     * @param {String} whereClause the WHERE clause of the filter
     */
    setSqlFilter(filterKey: string, whereClause: string): void {
        // dirty test
        const currentFilter = this.filter.getSql(filterKey);
        if (whereClause === currentFilter) {
            return;
        }

        this.filter.setSql(filterKey, whereClause);

        this.parentLayer.$iApi.event.emit(GlobalEvents.FILTER_CHANGE, {
            uid: this.uid,
            filterKey
        });

        // updating the filter on the layer can smash the server if multiple changes occur at once.
        // this will delay applying changes if more changes arrive shortly after this one.
        const debounceKey = `${this.uid}-${filterKey}-${whereClause}`;
        this.parentLayer._lastFilterUpdate = debounceKey;

        const refreshCheck = () => {
            if (this.parentLayer._lastFilterUpdate === debounceKey) {
                // no other filter changes have happened in the delay window.
                // apply the filter to the layer
                this.applySqlFilter();
            }
        };

        setTimeout(refreshCheck, 100);
    }

    /**
     * Returns the value of a named SQL filter.
     *
     * @param {String} filterKey the filter key / named filter to view
     * @returns {String} the value of the where clause for the filter. Empty string if not defined.
     */
    getSqlFilter(filterKey: string): string {
        return this.filter.getSql(filterKey);
    }

    /**
     * Returns a SQL WHERE condition that is combination of active filters.
     *
     * @method getCombinedSqlFilter
     * @param {Array} [exclusions] list of any filter keys to exclude from the result. omission includes all filters
     * @returns {String} all non-excluded sql statements connected with AND operators.
     */
    getCombinedSqlFilter(exclusions?: string[]): string {
        return this.filter.getCombinedSql(exclusions);
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        throw new Error(
            'attempted to apply sql filter to a layer not equipped for it. likely a new subclass of AttribFC did not override applySqlFilter'
        );
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
