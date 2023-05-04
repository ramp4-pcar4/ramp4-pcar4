// put things here that would be common to all esri attribute layers.
// used for layer types defined by Core RAMP.

import {
    ArcServerAttributeLoader,
    AttributeLoaderBase,
    BaseRenderer,
    CommonLayer,
    GlobalEvents,
    InstanceAPI,
    QuickCache
} from '@/api/internal';

import type { AttributeLoaderDetails } from '@/api/internal';

import {
    BaseGeometry,
    CoreFilter,
    DataFormat,
    Extent,
    Filter,
    GeometryType,
    Graphic,
    NoGeometry
} from '@/geo/api';

import type {
    AttributeSet,
    Attributes,
    GetGraphicParams,
    DiscreteGraphicResult,
    GetGraphicServiceDetails,
    LoadLayerMetadataOptions,
    QueryFeaturesArcServerParams,
    QueryFeaturesParams,
    RampLayerConfig,
    RampLayerFieldMetadataConfig,
    TabularAttributeSet
} from '@/geo/api';
import deepmerge from 'deepmerge';
import to from 'await-to-js';
import { markRaw, toRaw } from 'vue';
import { EsriField, EsriRendererFromJson, EsriRequest } from '@/geo/esri';

export class AttribLayer extends CommonLayer {
    geomType: GeometryType;
    esriFields: Array<EsriField>;
    fieldList: string; // list of field names, useful for numerous esri api calls
    attLoader: AttributeLoaderBase | undefined;
    renderer: BaseRenderer | undefined;
    serviceUrl: string;
    protected quickCache: QuickCache | undefined;
    protected filter: Filter;

    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = true;
        this.geomType = GeometryType.UNKNOWN;
        this.serviceUrl = '';
        this.fieldList = '';
        this.esriFields = [];
        this.filter = new Filter(
            rampConfig.permanentFilteredQuery || '',
            rampConfig.initialFilteredQuery || ''
        );
    }

    protected notLoadedErr(): void {
        console.error('Attempted to manipulate the layer before it was loaded');
        console.trace();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): any {
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: any = super.makeEsriLayerConfig(rampLayerConfig);

        // TODO add any extra properties for attrib-based layers here
        // TODO definitionExpression / filter default support here?

        return esriConfig;
    }

    // serviceUrl: string,
    // NOTE this logic is for ArcGIS Server sourced things.
    //      other sourced attribute layers should override this function.
    async loadLayerMetadata(
        options: LoadLayerMetadataOptions = {}
    ): Promise<void> {
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
        this.geomType = this.$iApi.geo.geom.serverGeomTypeToRampGeomType(
            sData.geometryType
        );
        this.quickCache = new QuickCache(this.geomType);
        this.scaleSet.minScale = sData.effectiveMinScale || sData.minScale;
        this.scaleSet.maxScale = sData.effectiveMaxScale || sData.maxScale;
        this.supportsFeatures = false; // saves us from having to keep comparing type to 'Feature Layer' on the client
        this.extent =
            this.extent ??
            (sData.extent
                ? Extent.fromArcServer(sData.extent, this.id + '_extent')
                : undefined);
        this._serverVisibility = sData.defaultVisibility;

        if (sData.type === 'Feature Layer') {
            this.supportsFeatures = true;
            this.dataFormat = DataFormat.ESRI_FEATURE;
            this.esriFields = markRaw(
                sData.fields.map((f: any) => EsriField.fromJSON(f))
            );
            this.fields = this.esriFields.map(f => {
                return {
                    name: f.name,
                    alias: f.alias,
                    type: f.type,
                    length: f.length
                };
            });
            this.nameField = sData.displayField;

            // find object id field
            const noFieldDefOid: boolean = this.esriFields.every(elem => {
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
                        // TODO worth pinging the notification api, or pushing layer into error state?
                        console.error(
                            `Encountered service with no OID defined: ${this.serviceUrl}`
                        );
                        return '';
                    })();
            }

            // drawOrder field check
            this.drawOrder.forEach(d => {
                if (
                    this.esriFields.findIndex(ef => ef.name === d.field) === -1
                ) {
                    console.error(
                        `Draw order for layer ${this.id} references invalid field ${d.field}`
                    );
                }
            });

            // add renderer and legend
            const renderer =
                options && options.customRenderer && options.customRenderer.type
                    ? options.customRenderer
                    : EsriRendererFromJson(sData.drawingInfo.renderer);
            this.renderer = this.$iApi.geo.symbology.makeRenderer(
                renderer,
                this.esriFields
            );

            // this array will have a set of promises that resolve when all the legend svg has drawn.
            // for now, will not include that set (promise.all'd) on the layer load blocker;
            // don't want to stop a layer from loading just because an icon won't draw.
            // ideally we'll have placeholder symbol (white square, loading symbol, caution symbol, etc)
            this.legend = this.$iApi.geo.symbology.rendererToLegend(
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
                attribs: '*', // NOTE we set to * here for generic case. loader may override later once config settings are applied
                permanentFilter: this.getSqlFilter(CoreFilter.PERMANENT)
            };
            this.attLoader = new ArcServerAttributeLoader(this.$iApi, loadData);

            /* See https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#title
               In particular, if the service has several layers, then the title of each layer will be the concatenation
               of the service name and the layer name.
               For consistency with map image sublayers, we set the layer's name to only the service name below. */
            if (!this.origRampConfig.name) {
                this.name = sData.name ?? this.id;
            }
        } else {
            this.dataFormat = DataFormat.ESRI_RASTER;
            this.esriFields = [];
        }
    }

    /**
     * Will take field config metadata and incorporate it into this sublayer.
     * Should be used after loading process has populated .esriFields property
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
            if (!configMetadata.fieldInfo.find(f => f.name === this.oidField)) {
                configMetadata.fieldInfo.push({ name: this.oidField });
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
                .map(f => f.name)
                .join(',');
            const tempFI = configMetadata.fieldInfo; // required because typescript is throwing a fit about undefineds inside the .filter
            this.esriFields = this.esriFields.filter(origField => {
                return tempFI.find(fInfo => fInfo.name === origField.name);
            });
        } else {
            this.fieldList = '*';
        }

        // if any aliases overrides, apply them
        configMetadata.fieldInfo.forEach(cf => {
            if (cf.alias) {
                const ff = this.esriFields.find(fff => fff.name === cf.name);
                if (ff) {
                    ff.alias = cf.alias;
                }
            }
        });
    }

    /**
     * Invokes the process to get the full set of attribute values for the layer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes(): Promise<AttributeSet> {
        if (this.attLoader) {
            return this.attLoader.getAttribs();
        } else {
            this.noLayerErr();
            return Promise.resolve({ oidIndex: {}, features: [] });
        }
    }

    /**
     * Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.
     *
     */
    abortAttributeLoad(): void {
        if (this.attLoader) {
            this.attLoader.abortAttribLoad();
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Requests that any downloaded attribute sets or cached geometry be removed from memory. The next requests will pull from the server again.
     *
     */
    clearFeatureCache(): void {
        if (this.attLoader) {
            this.attLoader.destroyAttribs();
        } else {
            this.noLayerErr();
        }
        if (this.quickCache) {
            this.quickCache.clearAll();
        }
    }

    // formerly known as getFormattedAttributes
    /**
     * Invokes the process to get the full set of attribute values for the layer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of tabular attribute values
     */
    getTabularAttributes(): Promise<TabularAttributeSet> {
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
            this.attLoader.tabularAttributesCache =
                this.getTabularAttributesGuts();
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

        if (this.dataFormat === DataFormat.ESRI_RASTER) {
            throw new Error('Attempting to get attributes on a raster layer.');
        }

        // TODO figure out how to handle a failure in .getAttribs. See comment catch block at bottom of function.
        const attSet = await this.attLoader.getAttribs();

        if (!attSet.features || attSet.features.length === 0) {
            // return empty attributes (this will happen if the attribute load was aborted)
            return {
                columns: [],
                rows: [],
                fields: [],
                oidField: ''
            };
        }

        // create columns array consumable by datables. We don't include the alias defined in the config here as
        // the grid handles it seperately.
        const columns = this.esriFields
            .filter(field =>
                // assuming there is at least one attribute - empty attribute bundle promises should be rejected, so it never even gets this far
                // filter out fields where there is no corresponding attribute data
                Object.prototype.hasOwnProperty.call(
                    attSet.features[0],
                    toRaw(field).name
                )
            )
            .map(field => ({
                data: toRaw(field).name, // TODO calling this data is really unintuitive. consider global rename to fieldName, name, attribName, etc.
                title: toRaw(field).alias || toRaw(field).name
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
            if (c.data.slice(-2) === '()') {
                // have to use function() to get .this to reference the row.
                // arrow notation will reference the attribFC class.
                const secretFunc = function () {
                    // @ts-ignore
                    return this[c.data];
                };

                const stub = c.data.slice(0, -2); // function without brackets
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
            fields: this.fields, // keep fields for reference ...
            oidField: this.oidField // ... keep a reference to id field ...
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

    /**
     * Gets information on a graphic in the most efficient way possible. Options object properties:
     * - getGeom ; a boolean to indicate if the result should include graphic geometry
     * - getAttribs ; a boolean to indicate if the result should include graphic attributes
     * - unboundMap ; an optional RampMap reference. Only required if geometry was requested and the layer has not been added to a map.
     *
     * @param {Integer} objectId the object id of the graphic to find
     * @param {Object} options options object for the request, see above
     * @returns {Promise} resolves with a Graphic containing the requested information
     */
    async getGraphic(
        objectId: number,
        opts: GetGraphicParams
    ): Promise<Graphic> {
        // see https://github.com/fgpv-vpgf/fgpv-vpgf/issues/2190 for reasons why
        // things are done the way they are in this function.

        // NOTE this is for server-based layers. local layers with features should override this for gains.

        let resultAttribs: any = {};
        let resultGeom: BaseGeometry = new NoGeometry();
        const map = this.$iApi.geo.map;

        // redundant checks to shut up typescript
        if (!this.quickCache) {
            throw new Error('getGraphic call with missing quickCache');
        }
        if (!this.attLoader) {
            throw new Error('getGraphic call with missing attribute loader');
        }

        let needWebAttr = false;
        let needWebGeom = false;
        let scale = 0;

        if (opts.getAttribs || opts.getStyle) {
            // attempt to get attributes from fastest source.
            const aCache = this.quickCache.getAttribs(objectId);
            if (aCache) {
                // value is already cached. use it
                resultAttribs = aCache;
            } else if (this.attLoader.isLoaded() || this.isFile!) {
                // all attributes have been loaded (or is a file and are local). use that store.
                // since attributes come from a promise, reset the wait promise to the attribute promise
                const atSet = await this.attLoader.getAttribs();
                resultAttribs = atSet.features[atSet.oidIndex[objectId]];
            } else {
                // we will need to download data from the service
                needWebAttr = true;
            }
        }

        if (opts.getGeom) {
            scale = map.getScale();

            // first locate the appropriate cache due to simplifications.
            const gCache = this.quickCache.getGeom(objectId, scale);

            // attempt to get geometry from fastest source.
            if (gCache) {
                resultGeom = gCache;

                /*
            // / NOTE: at first glance it looks like ESRI 4 is hiding the guts of server-based feature layers.
            //              when there is time, can take a look to see if any hidden/system caches are there on
            //              the esri layer object to exploit.
            //              for now, will just skip this optimization.
            // UPDATE: could probably do this by running queryFeatures on the layer view.

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

            const webFeat = await this.$iApi.geo.attributes.loadSingleFeature(
                serviceParams
            );
            if (needWebGeom) {
                // save our result in the cache
                this.quickCache.setGeom(
                    objectId,
                    <BaseGeometry>webFeat.geometry,
                    scale
                );
                resultGeom = webFeat.geometry;
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
                    resultAttribs = webFeat.attributes;
                }
            }
        }

        // logic in attribute param - we need attributes if style was requested. So it's possible our
        // resultAttribs has values due to a style request, but caller does not want attributes on the result.
        const resGraphic = new Graphic(
            resultGeom,
            '',
            opts.getAttribs ? resultAttribs : undefined
        );

        if (opts.getStyle) {
            const esriSymb = toRaw(
                this.renderer!.getGraphicSymbol(resultAttribs)
            );
            resGraphic.style = this.$iApi.geo.geom.styleEsriToRamp(esriSymb);
        }

        return resGraphic;
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
        return this.$iApi.geo.symbology.getGraphicIcon(
            g.attributes || {},
            this.renderer
        );
    }

    /**
     * Applies an SQL filter to the layer. Will overwrite any existing filter for the given key.
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

        this.$iApi.event.emit(GlobalEvents.FILTER_CHANGE, {
            uid: this.uid,
            filterKey
        });

        // updating the filter on the layer can smash the server if multiple changes occur at once.
        // this will delay applying changes if more changes arrive shortly after this one.
        const debounceKey = `${this.uid}-${filterKey}-${whereClause}`;
        this._lastFilterUpdate = debounceKey;

        const refreshCheck = () => {
            if (this._lastFilterUpdate === debounceKey) {
                // no other filter changes have happened in the delay window.
                // apply the filter to the layer
                this.applySqlFilter();
            }
        };

        setTimeout(refreshCheck, 100);
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        throw new Error(
            `attempted to apply sql filter ${exclusions} to a layer not equipped for it. likely a new subclass of AttribLayer did not override applySqlFilter`
        );
    }

    /**
     * Returns the value of a named SQL filter on the layer.
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
        const bExt = !!extent; // keep typescript happy

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
     * Will populate the layers featureCount property based on the server metrics.
     * @returns {Promise} that resolves when the count is populated
     */
    async loadFeatureCount(): Promise<void> {
        if (!this.serviceUrl) {
            // case where a non-server subclass ends up calling this via .super magic.
            // will avoid failed attempts at reading a non-existing service.
            // class should implement their own logic to load feature count (e.g. scrape from file layer)
            console.warn(
                'A layer without a url attempted to run the server based feature count routine.'
            );
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

        // TODO need to decide on placeholder for unknown count.
        this.featureCount = serviceResult.data.count;
    }

    /**
     * Will return an array of object ids for features in the layer that satisfy the conditions of the query options parameter.
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves with an array of numbers (object ids)
     */
    queryOIDs(options: QueryFeaturesParams): Promise<Array<number>> {
        // NOTE this assumes a server based layer.
        //      local based layers should override this function.
        //      the override is the only reason why this is not private

        if (this.isFile) {
            console.error(`a file layer called a server based query function`);
            console.trace();
        }

        // execute the query ids
        const agsOpt: QueryFeaturesArcServerParams = {
            url: this.serviceUrl,
            ...options
        };

        return this.$iApi.geo.query.arcGisServerQueryIds(agsOpt);
    }

    /**
     * Requests a set of features for this layer that match the criteria of the options
     * - filterGeometry : a RAMP API geometry to restrict results to
     * - filterSql : a where clause to apply against feature attributes
     * - includeGeometry : a boolean to indicate if result features should include the geometry
     * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves in an array of object ids and promises resolving in each feature
     */
    async queryFeaturesDiscrete(
        options: QueryFeaturesParams
    ): Promise<Array<DiscreteGraphicResult>> {
        // NOTE this assumes a server based layer
        //      local based layers should override this function

        // TODO potential optimization.
        //      if we have a big array of OIDs returned below, comparable to
        //      layers record count, and this.attLoader.isLoaded is false,
        //      we could trigger a getattributes call to bulk download them upfront.
        //      would be more efficient (way less web calls).

        const oids = await this.queryOIDs(options);

        // run result ids through our quick cache pipeline
        const p: GetGraphicParams = {
            getGeom: !!options.includeGeometry,
            getAttribs: true
        };
        return oids.map(oid => ({
            oid: oid,
            graphic: this.getGraphic(oid, p)
        }));
    }

    /**
     * Requests a set of features for this layer that match the criteria of the options
     * - filterGeometry : a RAMP API geometry to restrict results to
     * - filterSql : a where clause to apply against feature attributes
     * - includeGeometry : a boolean to indicate if result features should include the geometry
     * - outFields : a string of comma separated field names. will restrict fields included in the output
     * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves with an array of features that satisfy the criteria
     */
    async queryFeatures(options: QueryFeaturesParams): Promise<Array<Graphic>> {
        // runs discrete version, waits for everything to download,
        // returns entire set in a cleaner array
        const discreteResult = await this.queryFeaturesDiscrete(options);
        return Promise.all(discreteResult.map(dr => dr.graphic));
    }
}
