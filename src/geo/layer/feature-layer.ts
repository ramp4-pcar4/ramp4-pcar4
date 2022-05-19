import { AttribLayer, InstanceAPI } from '@/api/internal';
import {
    DataFormat,
    DefPromise,
    GeometryType,
    IdentifyResultFormat,
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
    }

    async initiate(): Promise<void> {
        markRaw(
            (this.esriLayer = new EsriFeatureLayer(
                this.makeEsriLayerConfig(this.origRampConfig)
            ))
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
        });

        /*
        const pLD = aFC.getLayerData().then(ld => {


            // TODO implement, maybe move into superclass

            // trickery. file layer can have field names that are bad keys.
            // our file loader will have corrected them, but config.nameField and config.tooltipField will have
            // been supplied from the wizard (it pre-fetches fields to present a choice
            // to the user). If the nameField / tooltipField was adjusted for bad characters, we need to
            // re-synchronize it here.
            if (this.dataSource() !== shared.dataSources.ESRI) {
                if (ld.fields.findIndex(f => f.name === aFC.nameField) === -1) {
                    const validField = ld.fields.find(f => f.alias === aFC.nameField);
                    if (validField) {
                        aFC.nameField = validField.name;
                        if (!this.config.tooltipField) {    // tooltipField wasn't explicitly provided, so it was also using the bad nameField key
                            aFC.tooltipField = validField.name
                        }
                    } else {
                        // give warning. impact is tooltips will have no text, details pane no header
                        console.warn(`Cannot find name field in layer field list: ${aFC.nameField}`);
                    }
                }

                // only check the tooltipField if it was provided from the config, otherwise it would have been corrected above already (if required)
                if (this.config.tooltipField && ld.fields.findIndex(f => f.name === aFC.tooltipField) === -1) {
                    const validField = ld.fields.find(f => f.alias === aFC.tooltipField);
                    if (validField) {
                        aFC.tooltipField = validField.name;
                    } else {
                        // give warning. impact is tooltips will have no text, details pane no header
                        console.warn(`Cannot find name field in layer field list: ${aFC.tooltipField}`);
                    }
                }
            }
        });
        */

        const pFC = this.loadFeatureCount();

        // if file based (or server extent was fried), calculate extent based on geometry
        // TODO implement this. may need a manual loop to calculate graphicsExtent since ESRI torpedo'd the function
        /*
        if (!this.extent || !this.extent.xmin) {
            this.extent = this._apiRef.proj.graphicsUtils.graphicsExtent(this._layer.graphics);
        }
        */

        // TODO add back in promises
        loadPromises.push(pLD, pFC); // , pLS

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
