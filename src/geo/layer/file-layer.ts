// this is a generic for all file based layers. they share a lot of common code.
// the specific implementations will be made in the layer subfolders.
// most of the implementations will only change the initiate() code, which will have whatever
// custom pre-processing of data to massage it into geojson for this class to process.

import { AttribLayer, FileLayerAttributeLoader, InstanceAPI, ReactiveIdentifyFactory } from '@/api/internal';

import type { AttributeLoaderDetails, IdentifyResult, QueryFeaturesFileParams } from '@/api/internal';

import {
    DataFormat,
    DefPromise,
    Extent,
    GeometryType,
    Graphic,
    IdentifyResultFormat,
    LayerFormat,
    LayerIdentifyMode,
    NoGeometry,
    Point
} from '@/geo/api';

import type {
    GeoJsonOptions,
    GetGraphicParams,
    IdentifyParameters,
    QueryFeaturesParams,
    RampLayerConfig
} from '@/geo/api';

import { EsriAPI } from '@/geo/esri';
import type { EsriFeatureLayer, EsriField } from '@/geo/esri';

import { markRaw, reactive, toRaw } from 'vue';

/**
 * A common layer class which is inherited by layer classes that implement map-based layers that are not server-bound after creation.
 */
export class FileLayer extends AttribLayer {
    declare esriLayer: EsriFeatureLayer | undefined;
    declare esriView: __esri.FeatureLayerView | undefined;

    protected esriJson: __esri.FeatureLayerProperties | undefined; // used as temp var to get around typescript parameter grousing. will be undefined after initLayer()

    // temporarily stores GeoJSON. acts as a nice way for subclasses to parse their random sources to GeoJSON, drop it here,
    // and have the generic initiation code in this file just grab it.
    protected sourceGeoJson: object | undefined;

    tooltipField: string; // if we end up having more things that are shared with FeatureLayer, consider making a FeatureBaseLayer class for both to inherit from

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = true;
        this.isFile = true;
        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.layerFormat = LayerFormat.FEATURE;
        this.tooltipField = '';
        this.layerIdx = 0;

        if (rampConfig.identifyMode && rampConfig.identifyMode !== LayerIdentifyMode.NONE) {
            this.identifyMode = rampConfig.identifyMode;
        } else {
            this.identifyMode = LayerIdentifyMode.HYBRID;
        }
    }

    async reload(): Promise<void> {
        if (this.origRampConfig.caching !== true && !this.origRampConfig.url) {
            console.error('Attempted to reload file layer from non server source without caching enabled.');
            return;
        }
        await super.reload();
    }

    protected async onInitiate(): Promise<void> {
        // NOTE subclasses of FileLayer should do all their file data processing first,
        //      drop it in this.sourceGeoJson,
        //      then call super.onInitiate() as final step.
        //      If the configuration uses rawData and caching, the subclass is responsible
        //      for ensuring sourceGeoJson does not point to same object as rawData.
        //      sourceGeoJson will get modified by this method, and rawData must remain
        //      untouched when caching is on.

        if (!this.sourceGeoJson) {
            throw new Error('File Layer is missing source data.');
        }

        // NOTE: we are not setting the source projection option. It will assume LatLong, or use projection
        //       contained in the geojson file. The option flag is only there in case other blocks of code
        //       want to utilize this method with fancy projection madness.
        const opts: GeoJsonOptions = {
            layerId: this.origRampConfig.id || '',
            targetSR: this.$iApi.geo.map.getSR(),
            colour: this.origRampConfig.colour,
            fieldMetadata: this.origRampConfig.fieldMetadata,
            latField: this.origRampConfig.latField || '',
            lonField: this.origRampConfig.longField || ''
        };

        this.esriJson = await this.$iApi.geo.layer.files.geoJsonToEsriJson(this.sourceGeoJson, opts);

        this.esriLayer = markRaw(await EsriAPI.FeatureLayer(this.makeEsriLayerConfig(this.origRampConfig)));

        this.esriJson = undefined;
        if (!this.origRampConfig.caching) {
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
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.FeatureLayerProperties {
        const esriConfig: __esri.FeatureLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

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
            // @ts-expect-error TODO: explain why this is needed or remove
            esriConfig[p] = this.esriJson[p];
        });

        if (this.origRampConfig.nameField) {
            esriConfig.displayField =
                this.$iApi.geo.attributes.fieldValidator(
                    <Array<EsriField>>esriConfig.fields,
                    this.origRampConfig.nameField!
                ) || oidField;
        } else {
            esriConfig.displayField = oidField;
        }
        esriConfig.outFields = ['*']; // the code that makes the esri variant of geojson will trim the fields to match fieldMetadata in the config. So take all here.

        delete esriConfig.url;

        // process any order-by configuration
        this.configDrawOrder(rampLayerConfig, esriConfig);

        return esriConfig;
    }

    protected onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        // renderer generation and metadata extract are tied.
        // sub-method to orchestrate the two with async goodness.
        const dataGrinder = async () => {
            // set custom renderer (if one is provided)
            if (this.esriLayer && this.origRampConfig.customRenderer?.type) {
                this.esriLayer!.renderer = await EsriAPI.RendererFromJson(this.config.customRenderer);
            }

            this.layerTree.name = this.name;

            // NOTE: call extract, not load, as there is no service involved here
            this.extractLayerMetadata();
            // NOTE name field overrides from config have already been applied by this point
            if (this.origRampConfig.tooltipField) {
                this.tooltipField =
                    this.$iApi.geo.attributes.fieldValidator(this.fields, this.origRampConfig.tooltipField) ||
                    this.nameField;
            } else {
                this.tooltipField = this.nameField;
            }

            this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata);

            this.attribs.attLoader.updateFieldList(this.fieldList);

            this.featureCount = this.esriLayer?.source.length || 0;
        };

        loadPromises.push(dataGrinder());

        // NOTE Our SQL support needs the view in place, so this delays our load promise until the view is ready.
        //      If this becomes problematic (e.g. we want to create a layer and have it "load" without adding it to a map),
        //      we can instead put the view promise dependency on applySqlFilter() below. This will require making the viewDefProm public.
        //      Alllso, we might consider putting this promise in the onLoadActions of BaseLayer, if we find other layers
        //      become hooked on the power of the view and require it to be ready.
        loadPromises.push(this.viewDefProm.getPromise());

        // since no "update" cycle, mark layer as up to date after all load promises resolve.
        // Note looks like the view promise handler in MapLayer is already setting this.
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

        const dProm = new DefPromise<void>();

        const result: IdentifyResult = reactive({
            items: [],
            loading: dProm.getPromise(),
            loaded: false,
            errored: false,
            uid: this.uid,
            layerId: this.id,
            requestTime: Date.now()
        });

        // allows us to pause and wait for various things before generating contents of result.items[]
        let symbolBlocker = Promise.resolve();
        let geomBlocker = Promise.resolve();

        /**
         * Graphics found from geographic query
         */
        let geomHitBucket: Array<Graphic> = [];

        /**
         * Object ids found from hit test
         */
        let symbolHitBucket: Array<number> = [];

        // if our identify mode needs geometry hit, run it
        if (this.identifyMode === LayerIdentifyMode.HYBRID || this.identifyMode === LayerIdentifyMode.GEOMETRIC) {
            // run a spatial query
            const qOpts: QueryFeaturesParams = {
                includeGeometry: false
            };

            if (this.geomType !== GeometryType.POLYGON && options.geometry.type === GeometryType.POINT) {
                // if our layer is not polygon, and our identify input is a point, make a point buffer
                qOpts.filterGeometry = this.$iApi.geo.query.makeClickBuffer(<Point>options.geometry, options.tolerance);
            } else {
                qOpts.filterGeometry = options.geometry;
            }

            qOpts.filterSql = this.getCombinedSqlFilter();

            geomBlocker = this.queryFeatures(qOpts).then(results => {
                geomHitBucket = results;
            });
        }

        // if our identify mode needs symbol hit, run it
        if (
            options.hitTest &&
            (this.identifyMode === LayerIdentifyMode.HYBRID || this.identifyMode === LayerIdentifyMode.SYMBOLIC)
        ) {
            // we wait for geometry (if it happened) to avoid race conditions.
            symbolBlocker = geomBlocker.then(async () => {
                // filter hits that match this layer, and don't already exist
                // in any results from the geometry. Add things that pass the filter
                // to our hit bucket
                const hitArray = await options.hitTest!;
                symbolHitBucket = await Promise.all(
                    hitArray
                        .filter(
                            hr =>
                                hr.layerId === this.id &&
                                geomHitBucket.findIndex(g => hr.oid === g.attributes[this.oidField]) === -1
                        )
                        .map(hr => hr.oid)
                );
            });
        }

        Promise.all([symbolBlocker, geomBlocker])
            .then(() => {
                // both identifies have completed. convert our hits into identify result goodness
                // geoms are already extracted
                // symbols are just oids

                // push any items, incase something was bound to the array

                geomHitBucket.forEach(gr => {
                    result.items.push(ReactiveIdentifyFactory.makeRawItem(IdentifyResultFormat.ESRI, gr.attributes));
                });

                symbolHitBucket.forEach(oid => {
                    result.items.push(ReactiveIdentifyFactory.makeOidItem(oid, this));
                });

                // Resolve the loading promise, set the flag
                result.loaded = true;
                dProm.resolveMe();
            })
            .catch(() => {
                result.errored = true;
                dProm.resolveMe();
            });

        return [result];
    }

    extractLayerMetadata(): void {
        const l = this.esriLayer;
        if (!l) {
            throw new Error('file layer attempted to extract data from esri layer, esri layer did not exist');
        }

        // properties for all endpoints
        this.supportsFeatures = true;

        this.geomType = this.$iApi.geo.geom.clientGeomTypeToRampGeomType(l.geometryType);

        // if we ever make config override for scale, would need to apply on the layer constructor, will end up here
        this.scaleSet.minScale = l.minScale || 0;
        this.scaleSet.maxScale = l.maxScale || 0;

        // ESRI API appears to calculate the extent correctly. Well done!
        this.extent = this.extent ?? Extent.fromESRI(l.fullExtent, this.id + '_extent');

        const esriFields: Array<EsriField> = markRaw(l.fields.slice());
        this.fields = esriFields.map(f => {
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
        this.renderer = this.$iApi.geo.symbology.makeRenderer(l.renderer, this.fields);

        // this array will have a set of promises that resolve when all the legend svg has drawn.
        // for now, will not include that set (promise.all'd) on the layer load blocker;
        // don't want to stop a layer from loading just because an icon won't draw.
        // ideally we'll have placeholder symbol (white square, loading symbol, caution symbol, etc)
        this.legend = this.$iApi.geo.symbology.rendererToLegend(this.renderer);

        const loadData: AttributeLoaderDetails = {
            sourceGraphics: l.source,
            oidField: this.oidField,
            attribs: '*', // * as default. layer loader may update after processing config overrides
            batchSize: -1,
            fieldsToTrim: [] // fields already trimmed at layer initiation
        };
        this.attribs.attLoader = new FileLayerAttributeLoader(this.$iApi, loadData);
    }

    async getGraphic(objectId: number, opts: GetGraphicParams): Promise<Graphic> {
        let resGraphic: Graphic;

        if (!opts.getGeom && this.attribs.attLoader.isLoaded()) {
            // we don't need geometry, and the attribute cache exists.
            // much faster to use it for lookup (as it it keyed on OID)

            const atSet = await this.attribs.attLoader.getAttribs();

            resGraphic = new Graphic(new NoGeometry(), '', atSet.features[atSet.oidIndex[objectId]]);
        } else {
            // use query against layer innards.
            // performance is significantly worse.

            const gjOpt: QueryFeaturesParams = {
                filterOIDs: [objectId],
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
                console.warn('did not get a single result on a query for a specific object id');
            }

            resGraphic = resultArr[0];
        }

        if (opts.getStyle) {
            const esriSymb = toRaw(this.renderer!.getGraphicSymbol(resGraphic.attributes));
            resGraphic.style = this.$iApi.geo.geom.styleEsriToRamp(esriSymb);
        }

        return resGraphic;
    }

    /**
     * Requests a set of features for this layer that match the criteria of the options
     * - filterGeometry : a RAMP API geometry to restrict results to
     * - filterSql : a where clause to apply against feature attributes
     * - filterOIDs : an array of Object IDs to filter against (more performant than SQL)
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
        return gjFeats.map(feat => (feat.attributes ? feat.attributes[this.oidField] : -1));
    }

    applySqlFilter(exclusions: Array<string> = []): void {
        if (!this.esriView) {
            this.noLayerErr();
            return;
        }

        const sql = this.filter.getCombinedSql(exclusions);

        // NOTE this can be expanded to have spatial filters as well. if we head to that,
        //      will will need to ensure any spatial elements get included in the new FeatureFilter
        EsriAPI.FeatureFilter({
            where: sql
        }).then(ff => {
            toRaw(this.esriView!).filter = ff;
        });
    }
}
