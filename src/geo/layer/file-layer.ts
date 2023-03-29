// this is a generic for all file based layers. they share a lot of common code.
// the specific implementations will be made in the layer subfolders.
// most of the implementations will only change the initiate() code, which will have whatever
// custom pre-processing of data to massage it into geojson for this class to process.

import {
    AttribLayer,
    FileLayerAttributeLoader,
    InstanceAPI,
    QuickCache
} from '@/api/internal';

import type {
    AttributeLoaderDetails,
    QueryFeaturesFileParams
} from '@/api/internal';

import {
    DataFormat,
    DefPromise,
    Extent,
    GeometryType,
    IdentifyResultFormat,
    LayerFormat,
    LayerIdentifyMode,
    Point
} from '@/geo/api';

import type {
    GeoJsonOptions,
    GetGraphicParams,
    Graphic,
    IdentifyItem,
    IdentifyParameters,
    IdentifyResult,
    QueryFeaturesParams,
    RampLayerConfig
} from '@/geo/api';

import {
    EsriFeatureFilter,
    EsriFeatureLayer,
    EsriField,
    EsriRendererFromJson
} from '@/geo/esri';
import { markRaw, reactive, toRaw } from 'vue';

// util function to manage trickery. file layer can have field names that are bad keys.
// our file loader will have corrected them, but ramp layer config .nameField and .tooltipField may
// still have the original field names.
// This function will return a valid field name for a given field name. First attempts at
// direct match, then attempts to reverse any bad field renaming logic.
function fieldValidator(fields: Array<EsriField>, targetName: string): string {
    if (fields.findIndex(f => f.name === targetName) === -1) {
        // no direct match found.
        const validField = fields.find(f => f.alias === targetName);
        if (validField) {
            return validField.name;
        } else {
            // give warning and return OBJECTID, which is guaranteed to exist in file layer.
            // Issue is not critical enough to blow up the app with an error
            console.warn(
                `Cannot find name field in layer field list: ${targetName}`
            );
            return 'OBJECTID';
        }
    } else {
        // target name was ok
        return targetName;
    }
}

export class FileLayer extends AttribLayer {
    declare esriLayer: EsriFeatureLayer | undefined;
    declare esriView: __esri.FeatureLayerView | undefined;

    protected esriJson: __esri.FeatureLayerProperties | undefined; // used as temp var to get around typescript parameter grousing. will be undefined after initLayer()

    // temporarily stores GeoJSON. acts as a nice way for subclasses to parse their random sources to GeoJSON, drop it here,
    // and have the generic initiation code in this file just grab it.
    protected sourceGeoJson: string | object | undefined;

    tooltipField: string; // if we end up having more things that are shared with FeatureLayer, consider making a FeatureBaseLayer class for both to inherit from

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = true;
        this.isFile = true;
        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.layerFormat = LayerFormat.FEATURE;
        this.tooltipField = '';

        if (
            rampConfig.identifyMode &&
            rampConfig.identifyMode !== LayerIdentifyMode.NONE
        ) {
            this.identifyMode = rampConfig.identifyMode;
        } else {
            this.identifyMode = LayerIdentifyMode.HYBRID;
        }
    }

    async reload(): Promise<void> {
        if (this.origRampConfig.caching !== true && !this.origRampConfig.url) {
            console.error(
                'Attempted to reload file layer from non server source without caching enabled.'
            );
            return;
        }
        await super.reload();
    }

    protected async onInitiate(): Promise<void> {
        // NOTE subclasses of FileLayer should do all their file data processing first,
        //      drop it in this.sourceGeoJson,
        //      then call super.onInitiate() as final step.

        if (!this.sourceGeoJson) {
            throw new Error('File Layer is missing raw data.');
        }

        const realJson: any =
            typeof this.sourceGeoJson === 'string'
                ? JSON.parse(this.sourceGeoJson)
                : JSON.parse(JSON.stringify(this.sourceGeoJson)); // need a deep copy so that all the manipulation of realJson below does not affect sourceGeoJson

        // NOTE: we are not setting the source projection option. It will assume LatLong, or use projection
        //       contained in the geojson file. The option flag is only there in case other blocks of code
        //       want to utilize this method with fancy projection madness.
        const opts: GeoJsonOptions = {
            layerId: this.origRampConfig.id || '',
            targetSR: this.$iApi.geo.map.getSR(),
            ...(this.origRampConfig.latField && {
                latField: this.origRampConfig.latField
            }),
            ...(this.origRampConfig.longField && {
                lonField: this.origRampConfig.longField
            }),
            colour: this.origRampConfig.colour,
            fieldMetadata: this.origRampConfig.fieldMetadata
        };

        this.esriJson = await this.$iApi.geo.layer.files.geoJsonToEsriJson(
            realJson,
            opts
        );

        this.esriLayer = markRaw(
            new EsriFeatureLayer(this.makeEsriLayerConfig(this.origRampConfig))
        );

        this.esriJson = undefined;
        if (this.origRampConfig.caching !== true) {
            delete this.origRampConfig.rawData;
        }
        delete this.sourceGeoJson;

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
    ): __esri.FeatureLayerProperties {
        const esriConfig: __esri.FeatureLayerProperties =
            super.makeEsriLayerConfig(rampLayerConfig);

        const oidField = 'OBJECTID';

        const copyProp: Array<string> = [
            'source',
            'objectIdField',
            'id',
            'fields',
            'renderer',
            'spatialReference',
            'geometryType'
        ];

        copyProp.forEach((p: string) => {
            // @ts-ignore
            esriConfig[p] = this.esriJson[p];
        });

        if (this.origRampConfig.nameField) {
            esriConfig.displayField =
                fieldValidator(
                    <Array<EsriField>>esriConfig.fields,
                    this.origRampConfig.nameField!
                ) || oidField;
        } else {
            esriConfig.displayField = oidField;
        }
        esriConfig.outFields = ['*']; // the code that makes the esri variant of geojson will trim the fields to match fieldMetadata in the config. So take all here.

        delete esriConfig.url;

        if (
            Array.isArray(rampLayerConfig.drawOrder) &&
            rampLayerConfig.drawOrder.length > 0
        ) {
            // Note esri currently only supports one field, but coding to support multiple when they
            //      enhance the api to handle that.
            esriConfig.orderBy = rampLayerConfig.drawOrder.map(dr => ({
                field: dr.field,
                order: dr.ascending ? 'ascending' : 'descending'
            }));
            this._drawOrder = rampLayerConfig.drawOrder.slice();
        } else {
            esriConfig.orderBy = [{ field: oidField, order: 'descending' }];
            this._drawOrder = [{ field: oidField, ascending: false }];
        }

        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        // setting custom renderer here (if one is provided)
        if (this.esriLayer && this.origRampConfig.customRenderer?.type) {
            this.esriLayer.renderer = EsriRendererFromJson(
                this.config.customRenderer
            );
        }

        this.layerTree.name = this.name;

        // NOTE: call extract, not load, as there is no service involved here
        this.extractLayerMetadata();
        // NOTE name field overrides from config have already been applied by this point
        if (this.origRampConfig.tooltipField) {
            this.tooltipField = fieldValidator(
                this.esriFields,
                this.origRampConfig.tooltipField
            );
        } else {
            this.tooltipField = this.nameField;
        }

        this.processFieldMetadata(this.origRampConfig.fieldMetadata);
        if (!this.attLoader) {
            throw new Error('file layer did not have attribute loader object');
        }
        this.attLoader.updateFieldList(this.fieldList);

        this.featureCount = this.esriLayer?.source.length || 0;

        // NOTE Our SQL support needs the view in place, so this delays our load promise until the view is ready.
        //      If this becomes problematic (e.g. we want to create a layer and have it "load" without adding it to a map),
        //      we can instead put the view promise dependency on applySqlFilter() below. This will require making the viewDefProm public.
        //      Alllso, we might consider putting this promise in the onLoadActions of BaseLayer, if we find other layers
        //      become hooked on the power of the view and require it to be ready.
        loadPromises.push(this.viewDefProm.getPromise());

        // since no "update" cycle, mark layer as up to date after all load promises resolve.
        // Note looks like the view promise handler in CommonLayer is already setting this.
        // leaving commented code to avoid confusion
        /*
        Promise.all(loadPromises).then(() => {
            this.updateDrawState(DrawState.UP_TO_DATE);
        });
        */

        // if we had any initial filters, apply it to the layer when it's done loading
        if (this.filter.getCombinedSql()) {
            Promise.all(loadPromises).then(() => {
                this.applySqlFilter();
            });
        }

        return loadPromises;
    }

    // ----------- LAYER ACTIONS -----------

    runIdentify(options: IdentifyParameters): Array<IdentifyResult> {
        // early kickout check. not loaded/error; not visible; not queryable; off scale
        if (!this.canIdentify()) {
            // return empty result.
            return [];
        }

        const dProm = new DefPromise();

        const result: IdentifyResult = reactive({
            items: [],
            loading: dProm.getPromise(),
            loaded: false,
            uid: this.uid,
            requestTime: Date.now()
        });

        // allows us to pause and wait for various things before generating contents of result.items[]
        let symbolBlocker = Promise.resolve();
        let geomBlocker = Promise.resolve();
        let hitBucket: Array<Graphic> = []; // collates results across promises

        // if our identify mode needs geometry hit, run it
        if (
            this.identifyMode === LayerIdentifyMode.HYBRID ||
            this.identifyMode === LayerIdentifyMode.GEOMETRIC
        ) {
            // run a spatial query
            const qOpts: QueryFeaturesParams = {
                includeGeometry: false
            };

            if (
                this.geomType !== GeometryType.POLYGON &&
                options.geometry.type === GeometryType.POINT
            ) {
                // if our layer is not polygon, and our identify input is a point, make a point buffer
                qOpts.filterGeometry = this.$iApi.geo.query.makeClickBuffer(
                    <Point>options.geometry,
                    options.tolerance
                );
            } else {
                qOpts.filterGeometry = options.geometry;
            }

            qOpts.filterSql = this.getCombinedSqlFilter();

            geomBlocker = this.queryFeatures(qOpts).then(results => {
                hitBucket = results;
            });
        }

        // if our identify mode needs symbol hit, run it
        if (
            options.hitTest &&
            (this.identifyMode === LayerIdentifyMode.HYBRID ||
                this.identifyMode === LayerIdentifyMode.SYMBOLIC)
        ) {
            // we wait for geometry (if it happened) to avoid race conditions.
            symbolBlocker = geomBlocker.then(async () => {
                // filter hits that match this layer, and don't already exist
                // in any results from the geometry. Add things that pass the filter
                // to our hit bucket
                const hitArray = await options.hitTest!;
                const hitGraphics = await Promise.all(
                    hitArray
                        .filter(
                            hr =>
                                hr.layerId === this.id &&
                                hitBucket.findIndex(
                                    g => hr.oid === g.attributes[this.oidField]
                                ) === -1
                        )
                        .map(hr => {
                            // will be fast since all local
                            return this.getGraphic(hr.oid, {
                                getAttribs: true
                            });
                        })
                );

                hitBucket = hitBucket.concat(hitGraphics);
            });
        }

        Promise.all([symbolBlocker, geomBlocker]).then(() => {
            // both identifies have completed. convert our hits into identify result goodness
            hitBucket.forEach(gr => {
                // file layer resolves all items at once,
                // so our item-level stuff can be created in
                // a loaded state

                const item: IdentifyItem = reactive({
                    data: gr.attributes,
                    format: IdentifyResultFormat.ESRI,
                    loaded: true,
                    loading: Promise.resolve()
                });

                result.items.push(item); // push, incase something was bound to the array
            });

            // Resolve the loading promise, set the flag
            result.loaded = true;
            dProm.resolveMe();
        });

        return [result];
    }

    extractLayerMetadata(): void {
        const l = this.esriLayer;
        if (!l) {
            throw new Error(
                'file layer attempted to extract data from esri layer, esri layer did not exist'
            );
        }

        // properties for all endpoints
        this.supportsFeatures = true;

        this.geomType = this.$iApi.geo.geom.clientGeomTypeToRampGeomType(
            l.geometryType
        );

        // here to avoid any null-dereference errors, but never used.
        this.quickCache = new QuickCache(this.geomType);

        // if we ever make config override for scale, would need to apply on the layer constructor, will end up here
        this.scaleSet.minScale = l.minScale || 0;
        this.scaleSet.maxScale = l.maxScale || 0;

        // ESRI API appears to calculate the extent correctly. Well done!
        this.extent =
            this.extent ?? Extent.fromESRI(l.fullExtent, this.id + '_extent');

        this.esriFields = markRaw(l.fields.slice());
        this.fields = this.esriFields.map(f => {
            return {
                name: f.name,
                alias: f.alias,
                type: f.type,
                length: f.length
            };
        });
        this.nameField = l.displayField;
        this.oidField = l.objectIdField;

        // if there was a custom renderer in the config, it would have been applied when the
        // layer was constructed. no need to check here.
        this.renderer = this.$iApi.geo.symbology.makeRenderer(
            l.renderer,
            this.esriFields
        );

        // this array will have a set of promises that resolve when all the legend svg has drawn.
        // for now, will not include that set (promise.all'd) on the layer load blocker;
        // don't want to stop a layer from loading just because an icon won't draw.
        // ideally we'll have placeholder symbol (white square, loading symbol, caution symbol, etc)
        this.legend = this.$iApi.geo.symbology.rendererToLegend(this.renderer);

        const loadData: AttributeLoaderDetails = {
            sourceGraphics: l.source,
            oidField: this.oidField,
            attribs: '*', // * as default. layer loader may update after processing config overrides
            batchSize: -1
        };
        this.attLoader = new FileLayerAttributeLoader(this.$iApi, loadData);
    }

    /**
     * Fetches a graphic from the given layer.
     * This overrides the baseclass method, as we are all local and dont need quick caches or server hits
     *
     * @function getGraphic
     * @param  {Integer} objectId      ID of object being searched for
     * @param {Object} opts            object containing option parametrs
     *                 - map           map wrapper object of current map. only required if requesting geometry
     *                 - getGeom          boolean. indicates if return value should have geometry included. default to false
     *                 - getAttribs       boolean. indicates if return value should have attributes included. default to false
     * @returns {Promise} resolves with a Graphic
     */
    async getGraphic(
        objectId: number,
        opts: GetGraphicParams
    ): Promise<Graphic> {
        const gjOpt: QueryFeaturesParams = {
            filterSql: `${this.oidField}=${objectId}`,
            includeGeometry: !!opts.getGeom
        };

        // TODO not sure how much we care about this. since local, result will always have attribs and geom,
        //      regardless of what requester asked for.
        //      if thats a problem, add some logic to pare off properties of the result (might need to clone
        //      to avoid breaking original source in the layer)

        const resultArr = await this.queryFeatures(gjOpt);
        if (resultArr.length === 0) {
            throw new Error(`Could not find object id ${objectId}`);
        } else if (resultArr.length !== 1) {
            console.warn(
                'did not get a single result on a query for a specific object id'
            );
        }

        const resGraphic = resultArr[0];

        if (opts.getStyle) {
            const esriSymb = toRaw(
                this.renderer!.getGraphicSymbol(resGraphic.attributes)
            );
            resGraphic.style = this.$iApi.geo.geom.styleEsriToRamp(esriSymb);
        }

        return resGraphic;
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
        const gjOpt: QueryFeaturesFileParams = {
            layer: this,
            ...options
        };

        return this.$iApi.geo.query.geoJsonQuery(gjOpt);
    }

    /**
     * Will return an array of object ids for features in the layer that satisfy the conditions of the query options parameter.
     * @param options
     * @returns {Promise} resolving with an array of numbers (object ids)
     */
    async queryOIDs(options: QueryFeaturesParams): Promise<Array<number>> {
        const gjOpt: QueryFeaturesFileParams = {
            layer: this,
            ...options
        };

        // run the query. since geojson is local, the util always returns everything.
        // iterate through the results and strip out the OIDs
        const gjFeats = await this.$iApi.geo.query.geoJsonQuery(gjOpt);
        return gjFeats.map(feat =>
            feat.attributes ? feat.attributes[this.oidField] : -1
        );
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        if (!this.esriView) {
            this.noLayerErr();
            return;
        }

        const sql = this.filter.getCombinedSql(exclusions);

        // NOTE this can be expanded to have spatial filters as well. if we head to that,
        //      will will need to ensure any spatial elements get included in the new FeatureFilter
        toRaw(this.esriView).filter = new EsriFeatureFilter({
            where: sql
        });
    }
}
