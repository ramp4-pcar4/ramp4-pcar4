import { AttribLayer, InstanceAPI } from '@/api/internal';
import {
    DataFormat,
    DefPromise,
    GeometryType,
    IdentifyResultFormat,
    LayerFormat,
    LayerIdentifyMode,
    LayerType
} from '@/geo/api';
import type {
    DiscreteGraphicResult,
    IdentifyParameters,
    IdentifyResult,
    QueryFeaturesParams,
    RampLayerConfig,
    IdentifyItem,
    Point
} from '@/geo/api';
import { EsriFeatureLayer, EsriRendererFromJson } from '@/geo/esri';
import { markRaw, reactive } from 'vue';

export class FeatureLayer extends AttribLayer {
    declare esriLayer: EsriFeatureLayer | undefined;

    tooltipField: string;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.tooltipField = '';
        this.supportsIdentify = true;
        this.layerType = LayerType.FEATURE;
        this.layerFormat = LayerFormat.FEATURE;
        if (
            rampConfig.identifyMode &&
            rampConfig.identifyMode !== LayerIdentifyMode.NONE
        ) {
            this.identifyMode = rampConfig.identifyMode;
        } else {
            this.identifyMode = LayerIdentifyMode.HYBRID;
        }
    }

    protected async onInitiate(): Promise<void> {
        markRaw(
            (this.esriLayer = new EsriFeatureLayer(
                this.makeEsriLayerConfig(this.origRampConfig)
            ))
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
    ): __esri.FeatureLayerProperties {
        const esriConfig: __esri.FeatureLayerProperties =
            super.makeEsriLayerConfig(rampLayerConfig);

        // add any extra properties for attrib-based layers here
        // if we have a definition at load, apply it here to avoid cancellation errors on
        if (
            rampLayerConfig.initialFilteredQuery ||
            rampLayerConfig.permanentFilteredQuery
        ) {
            // even though the layer filter would eventually propagate the query to
            // the definition expression, by setting it on the esri config our initial
            // layer load will apply the filter. This potentially avoids a very big
            // data request that would just get filtered out seconds later.
            esriConfig.definitionExpression = this.filter.getCombinedSql();
        }

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
        const hasCustRed =
            this.esriLayer && this.origRampConfig.customRenderer?.type;
        if (hasCustRed) {
            this.esriLayer!.renderer = EsriRendererFromJson(
                this.config.customRenderer
            );
        }

        // .url seems to not have the /index ending.  there is parsedUrl.path, but thats not on official definition
        // can also consider changing logic to use origRampConfig.url;
        // const layerUrl: string = (<esri.FeatureLayer>this._innerLayer).url;
        const layerUrl: string = (<any>this.esriLayer).parsedUrl.path;
        const urlData = this.$iApi.geo.shared.parseUrlIndex(layerUrl);
        const featIdx: number = urlData.index || 0;

        // feature has only one layer
        this.serviceUrl = layerUrl;

        // update asynch data
        const pLD: Promise<void> = this.loadLayerMetadata(
            hasCustRed ? { customRenderer: this.esriLayer?.renderer } : {}
        ).then(() => {
            if (!this.attLoader) {
                throw new Error(
                    'layer metadata loader did not create attribute loader'
                );
            }

            // apply server visibility in case of missing visibility in config
            this.visibility =
                this.origRampConfig?.state?.visibility ??
                this._serverVisibility ??
                true;

            // apply any config based overrides to the data we just downloaded
            this.nameField =
                this.origRampConfig.nameField || this.nameField || '';
            this.tooltipField =
                this.origRampConfig.tooltipField || this.nameField;

            this.processFieldMetadata(this.origRampConfig.fieldMetadata);
            this.attLoader.updateFieldList(this.fieldList);

            if (!this.esriLayer?.orderBy) {
                // would be the case if no draw order was provided in the config.
                // now that we know the OID field, set the layer to draw by OID
                // so we can determine what is top-most.
                // "descending" matches the natural drawing order the most. with no order,
                // things get drawn in order they come back from server. Which is usually
                // sorted by OID, smallest to largest, so smallest on the bottom, which is descending.
                // NOTE all my digging can't find any "orderBy" that comes back from a REST API
                //      endpoint for a mapserver layer. If that becomes a feature or we find a sample
                //      that supports it, would need some extra code here to use the server draw order
                //      and synch our _drawOrder with it.
                this.esriLayer!.orderBy = [
                    { field: this.oidField, order: 'descending' }
                ];
                this._drawOrder = [{ field: this.oidField, ascending: false }];
            }
        });

        const pFC = this.loadFeatureCount();

        this.layerTree.name = this.name;
        this.layerTree.layerIdx = featIdx;

        // Note that ESRI 4 seems to self-calculate a layer extent based on the geometry,
        // so we no longer need to worry about generating one (graphicsUtils.graphicsExtent() is depreciated)

        loadPromises.push(pLD, pFC);

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
        let clientBlocker = Promise.resolve();
        let serverBlocker = Promise.resolve();
        let hitBucket: Array<DiscreteGraphicResult> = []; // collates results across promises

        // if our identify mode needs server hit, run it
        if (
            this.identifyMode === LayerIdentifyMode.HYBRID ||
            this.identifyMode === LayerIdentifyMode.GEOMETRIC
        ) {
            // run a spatial query
            // TODO investigate if we need the sourceSR param set here
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

            serverBlocker = this.queryFeaturesDiscrete(qOpts).then(results => {
                hitBucket = results;
            });
        }

        // if our identify mode needs client hit, run it
        if (
            options.hitTest &&
            (this.identifyMode === LayerIdentifyMode.HYBRID ||
                this.identifyMode === LayerIdentifyMode.SYMBOLIC)
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
                            hitBucket.findIndex(dgr => hr.oid === dgr.oid) ===
                                -1
                    )
                    .forEach(hr => {
                        hitBucket.push({
                            oid: hr.oid,
                            graphic: this.getGraphic(hr.oid, {
                                getAttribs: true
                            })
                        });
                    });
            });
        }

        Promise.all([clientBlocker, serverBlocker]).then(() => {
            // both identifies have completed. convert our hits into identify result goodness
            hitBucket.forEach(dgr => {
                const item: IdentifyItem = reactive({
                    data: undefined,
                    format: IdentifyResultFormat.ESRI,
                    loaded: false,
                    loading: new Promise(resolve => {
                        dgr.graphic.then(g => {
                            item.data = g.attributes;
                            item.loaded = true;
                            resolve();
                        });
                    })
                });

                result.items.push(item); // push, incase something was bound to the array
            });

            // Resolve the loading promise, set the flag
            // This promise only indicates we have an array of results (each may still be loading their internals)
            result.loaded = true;
            dProm.resolveMe();
        });

        return [result];
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        if (!this.esriLayer) {
            this.noLayerErr();
            return;
        }

        const sql = this.filter.getCombinedSql(exclusions);
        // feature layer on a server
        this.esriLayer.definitionExpression = sql;
    }
}
