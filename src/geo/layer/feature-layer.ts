import { AttribLayer, InstanceAPI, ReactiveIdentifyFactory } from '@/api/internal';
import type { IdentifyResult } from '@/api/internal';
import {
    CoreFilter,
    DataFormat,
    DefPromise,
    Extent,
    GeometryType,
    LayerFormat,
    LayerIdentifyMode,
    LayerType
} from '@/geo/api';
import type {
    BaseGeometry,
    IdentifyParameters,
    LoadLayerMetadataOptions,
    Point,
    QueryFeaturesParams,
    RampLayerConfig
} from '@/geo/api';
import { EsriAPI, EsriWatch } from '@/geo/esri';
import type { EsriFeatureLayer } from '@/geo/esri';
import { markRaw, reactive } from 'vue';
import to from 'await-to-js';

/**
 * A layer class which implements an ESRI Feature Layer.
 */
export class FeatureLayer extends AttribLayer {
    declare esriLayer: EsriFeatureLayer | undefined;
    declare esriView: __esri.FeatureLayerView | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.supportsIdentify = true;
        this.layerType = LayerType.FEATURE;
        this.layerFormat = LayerFormat.FEATURE;
        if (rampConfig.identifyMode && rampConfig.identifyMode !== LayerIdentifyMode.NONE) {
            this.identifyMode = rampConfig.identifyMode;
        } else {
            this.identifyMode = LayerIdentifyMode.HYBRID;
        }
    }

    protected async onInitiate(): Promise<void> {
        markRaw((this.esriLayer = await EsriAPI.FeatureLayer(this.makeEsriLayerConfig(this.origRampConfig))));

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

        // add any extra properties for attrib-based layers here
        // if we have a definition at load, apply it here to avoid cancellation errors on
        if (rampLayerConfig.initialFilteredQuery || rampLayerConfig.permanentFilteredQuery) {
            // even though the layer filter would eventually propagate the query to
            // the definition expression, by setting it on the esri config our initial
            // layer load will apply the filter. This potentially avoids a very big
            // data request that would just get filtered out seconds later.
            esriConfig.definitionExpression = this.filter.getCombinedSql();
        }

        // process any order-by configuration
        this.configDrawOrder(rampLayerConfig, esriConfig);

        // enable point clustering if set up in config
        if (rampLayerConfig.geomClustering) {
            esriConfig.featureReduction = rampLayerConfig.geomClustering;
        }

        return esriConfig;
    }

    protected onLoadActions(): Array<Promise<void>> {
        const startTime = Date.now();
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        // .url seems to not have the /index ending.  there is parsedUrl.path, but thats not on official definition
        // can also consider changing logic to use origRampConfig.url;
        // const layerUrl: string = (<esri.FeatureLayer>this._innerLayer).url;
        const layerUrl: string = (<any>this.esriLayer).parsedUrl.path;
        const urlData = this.$iApi.geo.shared.parseUrlIndex(layerUrl);
        const featIdx: number = urlData.index || 0;
        this.layerIdx = featIdx;

        // feature has only one layer
        this.serviceUrl = layerUrl;

        // renderer generation and metadata load are tied.
        // sub-method to orchestrate the two with async goodness.
        const serviceLoader = async () => {
            // setting custom renderer here (if one is provided)

            let metadataPram: LoadLayerMetadataOptions;
            if (this.esriLayer && this.origRampConfig.customRenderer?.type) {
                const esriRenderer = await EsriAPI.RendererFromJson(this.origRampConfig.customRenderer);
                this.esriLayer!.renderer = esriRenderer;
                metadataPram = { customRenderer: esriRenderer };
            } else {
                metadataPram = {};
            }

            await this.loadLayerMetadata(metadataPram);

            if (startTime > this.lastCancel) {
                this.layerTree.name = this.name;

                // apply server visibility in case of missing visibility in config
                this.visibility = this.origRampConfig?.state?.visibility ?? this._serverVisibility ?? true;

                this.$iApi.geo.attributes.applyFieldMetadata(this, this.origRampConfig.fieldMetadata);
                this.attribs.attLoader.updateFieldList(this.fieldList);
                this.attribs.attLoader.updateFieldsToTrim(this.getFieldsToTrim());

                // apply any config based overrides to the data we just downloaded
                // NOTE must be called after fields are defined.
                //      .nameField will already contian any server-based definitions
                await this.nameInitializer(this.origRampConfig, this.nameField);
                await this.maptipInitializer(this.origRampConfig);
            }
        };

        const pFC = this.$iApi.geo.layer
            .loadFeatureCount(this.serviceUrl, this.getSqlFilter(CoreFilter.PERMANENT))
            .then(count => {
                if (startTime > this.lastCancel) {
                    this.featureCount = count;
                }
            });

        this.layerTree.layerIdx = featIdx;

        // Note that ESRI 4 seems to self-calculate a layer extent based on the geometry,
        // so we no longer need to worry about generating one (graphicsUtils.graphicsExtent() is deprecated)

        loadPromises.push(pFC, serviceLoader());

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
        let clientBlocker = Promise.resolve();
        let serverBlocker = Promise.resolve();

        /**
         * Collates results (OIDs) across promises
         */
        let hitBucket: Array<number> = [];

        // if our identify mode needs server hit, run it
        if (this.identifyMode === LayerIdentifyMode.HYBRID || this.identifyMode === LayerIdentifyMode.GEOMETRIC) {
            // run a spatial query
            const qOpts: QueryFeaturesParams = {
                includeGeometry: false,
                sourceSR: this.sourceSR
            };

            if (this.geomType !== GeometryType.POLYGON && options.geometry.type === GeometryType.POINT) {
                // if our layer is not polygon, and our identify input is a point, make a point buffer
                qOpts.filterGeometry = this.$iApi.geo.query.makeClickBuffer(<Point>options.geometry, options.tolerance);
            } else {
                qOpts.filterGeometry = options.geometry;
            }

            qOpts.filterSql = this.getCombinedSqlFilter();

            serverBlocker = this.queryOIDs(qOpts).then(results => {
                hitBucket = results;
            });
        }

        // if our identify mode needs client hit, run it
        if (
            options.hitTest &&
            (this.identifyMode === LayerIdentifyMode.HYBRID || this.identifyMode === LayerIdentifyMode.SYMBOLIC)
        ) {
            // we wait for server (if it happened) to avoid race conditions.
            clientBlocker = serverBlocker.then(async () => {
                // filter hits that match this layer, and don't already exist
                // in any results from the server. Add things that pass the filter
                // to our hit bucket
                const hitArray = await options.hitTest!;
                hitArray
                    .filter(
                        hr =>
                            hr.layerId === this.id &&
                            hitBucket.findIndex(alreadyHitOid => hr.oid === alreadyHitOid) === -1
                    )
                    .forEach(hr => {
                        hitBucket.push(hr.oid);
                    });
            });
        }

        Promise.all([clientBlocker, serverBlocker])
            .then(() => {
                // both identifies have completed. convert our hits into identify result goodness
                hitBucket.forEach(hitOid => {
                    // push, incase something was bound to the array
                    result.items.push(ReactiveIdentifyFactory.makeOidItem(hitOid, this));
                });

                // Resolve the loading promise, set the flag
                // This promise only indicates we have an array of results (each may still be loading their internals)
                result.loaded = true;
                dProm.resolveMe();
            })
            .catch(() => {
                result.errored = true;
                dProm.resolveMe();
            });

        return [result];
    }

    applySqlFilter(exclusions: Array<string> = []): void {
        if (this.layerExists) {
            const sql = this.filter.getCombinedSql(exclusions);
            // feature layer on a server
            this.esriLayer!.definitionExpression = sql;
        } else {
            this.noLayerErr();
        }
    }

    async getGraphicExtent(objectId: number): Promise<Extent | undefined> {
        let xtent: Extent | undefined = undefined;

        if (!this.layerExists) {
            this.noLayerErr();
        } else if (this.geomType === GeometryType.POINT) {
            // be helpful to devs. they made a mistake calling this.
            console.error(`Attempted to query extent for invalid geometry type ${this.geomType}.`);
        } else {
            // TODO: should the cache be invalidated if the basemap changes, or do we leave it up to user to do the projecting themselves?
            const eCache = this.attribs.quickCache.getExtent(objectId);
            if (eCache) {
                xtent = eCache;
            } else {
                const [err, result] = await to(
                    this.esriLayer!.queryExtent({
                        objectIds: [objectId],
                        outSpatialReference: this.$iApi.geo.map.getSR().toESRI()
                    })
                );

                if (!err) {
                    // convert to ramp, save in the cache
                    xtent = Extent.fromESRI(result.extent);
                    this.attribs.quickCache.setExtent(objectId, xtent);
                }
            }
        }

        return xtent;
    }

    async getLocalGeometry(objectId: number): Promise<BaseGeometry | undefined> {
        // need to wait for the view to exist, and to finish downloading any updates
        await this.viewPromise();
        if (this.esriView!.updating) {
            await new Promise<void>(resolve => {
                const watcher = EsriWatch(
                    () => this.esriView!.updating,
                    newValue => {
                        if (!newValue) {
                            // done updating
                            watcher.remove();
                            resolve();
                        }
                    }
                );
            });
        }

        // run a query against the layer view to steal the local geometry
        const query = await EsriAPI.Query();
        query.objectIds = [objectId];
        query.returnGeometry = true;

        const localResult = await this.esriView!.queryFeatures(query);
        if (localResult.features.length) {
            const localFeat = localResult.features[0];
            return this.$iApi.geo.geom.geomEsriToRamp(localFeat.geometry!);
        } else {
            // was not in the local layer.
            return undefined;
        }
    }

    async zoomToFeature(objectId: number): Promise<boolean> {
        let efficientGeom: BaseGeometry | undefined = undefined;

        if (this.geomType !== GeometryType.POINT) {
            // hunt for faster-than-server-geometry in order:

            // do we have a cached geom at any scale? (this will be good enough for zooming)
            efficientGeom = this.attribs.quickCache.getAnyScaleGeom(objectId);

            if (!efficientGeom) {
                // is there a geom in the local feature layer?
                efficientGeom = await this.getLocalGeometry(objectId);

                if (efficientGeom) {
                    // since we went to the effort of finding it, cache it. Don't do this for MULTIPOINT
                    if (this.geomType !== GeometryType.MULTIPOINT) {
                        this.attribs.quickCache.setGeom(objectId, efficientGeom, this.$iApi.geo.map.getScale());
                    }
                } else {
                    // try to invoke geometry extent getter magic
                    // see issue #1720 for the reasons behind this
                    efficientGeom = await this.getGraphicExtent(objectId);
                }
            }
        }

        if (efficientGeom && !efficientGeom.invalid()) {
            await this.$iApi.geo.map.zoomMapTo(efficientGeom);
            return true;
        } else {
            // no sneaky shortcuts. do the standard routine
            return await super.zoomToFeature(objectId);
        }
    }
}
