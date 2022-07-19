import { AttribLayer, InstanceAPI } from '@/api/internal';
import {
    DataFormat,
    DefPromise,
    GeometryType,
    IdentifyResultFormat,
    LayerFormat,
    LayerType
} from '@/geo/api';
import type {
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
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: __esri.FeatureLayerProperties =
            super.makeEsriLayerConfig(rampLayerConfig);

        // TODO add any extra properties for attrib-based layers here
        // if we have a definition at load, apply it here to avoid cancellation errors on
        if (rampLayerConfig.initialFilteredQuery) {
            // TODO do we need to add something to the .filter? or is this
            //      a fixed query never goes away?
            esriConfig.definitionExpression =
                rampLayerConfig.initialFilteredQuery;
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

        // TODO .url seems to not have the /index ending.  there is parsedUrl.path, but thats not on official definition
        //      can also consider changing logic to use origRampConfig.url;
        // const layerUrl: string = (<esri.FeatureLayer>this._innerLayer).url;
        const layerUrl: string = (<any>this.esriLayer).parsedUrl.path;
        const urlData = this.$iApi.geo.shared.parseUrlIndex(layerUrl);
        const featIdx: number = urlData.index || 0;

        // feature has only one layer
        this.serviceUrl = layerUrl;

        this.layerTree.name = this.name;
        this.layerTree.layerIdx = featIdx;

        // update asynch data
        const pLD: Promise<void> = this.loadLayerMetadata(
            hasCustRed ? { customRenderer: this.esriLayer?.renderer } : {}
        ).then(() => {
            if (!this.attLoader) {
                throw new Error(
                    'layer metadata loader did not create attribute loader'
                );
            }

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

        // if file based (or server extent was fried), calculate extent based on geometry
        // TODO implement this. may need a manual loop to calculate graphicsExtent since ESRI torpedo'd the function
        /*
        if (!this.extent || !this.extent.xmin) {
            this.extent = this._apiRef.proj.graphicsUtils.graphicsExtent(this._layer.graphics);
        }
        */

        loadPromises.push(pLD, pFC);

        return loadPromises;
    }

    // ----------- LAYER ACTIONS -----------

    runIdentify(options: IdentifyParameters): Array<IdentifyResult> {
        // early kickout check. not loaded/error; not visible; not queryable; off scale
        if (
            !this.isValidState ||
            !this.visibility ||
            !this.identify ||
            this.scaleSet.isOffScale(this.$iApi.geo.map.getScale()).offScale
        ) {
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

        // run a spatial query
        // TODO investigate if we need the sourceSR param set here
        const qOpts: QueryFeaturesParams = {
            outFields: this.fieldList,
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

        this.queryFeaturesDiscrete(qOpts).then(results => {
            results.forEach(dgr => {
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
