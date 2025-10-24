// layers api and other public, general layer things.

import {
    APIScope,
    CsvLayer,
    FileUtils,
    FeatureLayer,
    FlatGeobufLayer,
    FlatGeobufZipLayer,
    GeoJsonLayer,
    GeoJsonZipLayer,
    GraphicLayer,
    ImageryLayer,
    ImageryTileLayer,
    InstanceAPI,
    JsonDataLayer,
    LayerInstance,
    MapImageLayer,
    OgcUtils,
    OsmTileLayer,
    ShapefileLayer,
    TableLayer,
    TileLayer,
    WfsLayer,
    WmsLayer
} from '@/api/internal';
import type { ArcGisServerMetadata, RampLayerConfig } from '@/geo/api';
import {
    DataFormat,
    DefPromise,
    Extent,
    GeometryType,
    InitiationState,
    LayerControl,
    LayerState,
    LayerType,
    SpatialReference
} from '@/geo/api';
import { EsriAPI, EsriRequest } from '@/geo/esri';
import type { EsriField } from '@/geo/esri';
import { useLayerStore } from '@/stores/layer';
import to from 'await-to-js';

/**
 * Exposes methods for creating layers and fetching information about layers in the instance.
 */
export class LayerAPI extends APIScope {
    files: FileUtils;
    ogc: OgcUtils;

    constructor(iApi: InstanceAPI) {
        super(iApi);
        this.files = new FileUtils(iApi);
        this.ogc = new OgcUtils(iApi);
    }

    /**
     * Will generate a RAMP Layer based on the supplied config object.
     *
     * @param {Object} config a valid layer configuration object
     * @returns {LayerInstance} Layer in uninitialized load state
     */
    createLayer(config: RampLayerConfig): LayerInstance {
        let closs: new (config: any, iApi: InstanceAPI) => LayerInstance;

        // for mad speed gains, order the switch in most common to most obscure
        switch (config.layerType) {
            case LayerType.FEATURE:
                closs = FeatureLayer;
                break;
            case LayerType.MAPIMAGE:
                closs = MapImageLayer;
                break;
            case LayerType.GRAPHIC:
                closs = GraphicLayer;
                break;
            case LayerType.TILE:
                closs = TileLayer;
                break;
            case LayerType.WFS:
                closs = WfsLayer;
                break;
            case LayerType.DATATABLE:
                closs = TableLayer;
                break;
            case LayerType.WMS:
                closs = WmsLayer;
                break;
            case LayerType.GEOJSON:
                closs = GeoJsonLayer;
                break;
            case LayerType.GEOJSONZIPPED:
                closs = GeoJsonZipLayer;
                break;
            case LayerType.FLATGEOBUFZIPPED:
                closs = FlatGeobufZipLayer;
                break;
            case LayerType.CSV:
                closs = CsvLayer;
                break;
            case LayerType.DATAJSON:
                closs = JsonDataLayer;
                break;
            case LayerType.IMAGERY:
                closs = ImageryLayer;
                break;
            case LayerType.IMAGERYTILE:
                closs = ImageryTileLayer;
                break;
            case LayerType.SHAPEFILE:
                closs = ShapefileLayer;
                break;
            case LayerType.FLATGEOBUF:
                closs = FlatGeobufLayer;
                break;
            case LayerType.OSM:
                closs = OsmTileLayer;
                break;
            default:
                throw new Error('Unsupported Layer Type ' + config.layerType);
        }

        return new closs(config, this.$iApi);
    }

    /**
     * Returns a standardized sublayer id for a parent id and sublayer index
     *
     * @param {string} parentLayerId layer id of the layer hosting the sublayer
     * @param {number} sublayerIndex index of the sublayer
     * @returns {string} standardized sublayer id
     */
    sublayerId(parentLayerId: string, sublayerIndex: number): string {
        return `${parentLayerId}-${sublayerIndex}`;
    }

    /**
     * Access a registered layer object.
     *
     * @param {string} layerId layer id or uid of the layer
     * @returns {LayerInstance | undefined} The layer instance with the given id. Returns undefined if layer is not found.
     */
    getLayer(layerId: string): LayerInstance | undefined {
        // since this would be a fairly common thing to want to do via the instance API,
        // this function acts as a nice / obvious endpoint and saves caller
        // from figuring out how to use the store.

        // TODO: make result non-reactive via toRaw ?
        //       is anything requiring layer reactivity?

        return useLayerStore(this.$vApp.$pinia).getLayerByAny(layerId);
    }

    /**
     * Access a registered sublayer object.
     *
     * @param {string} layerId layer id of the layer
     * @param {number} index index of the sublayer
     * @returns {LayerInstance | undefined} The sublayer instance matching the parameters. Returns undefined if sublayer is not found.
     */
    getSublayer(layerId: string, index: number): LayerInstance | undefined {
        // find the parent
        const parentLayer = useLayerStore(this.$vApp.$pinia).getLayerById(layerId);
        if (parentLayer && parentLayer.supportsSublayers && index < parentLayer.sublayers.length) {
            // sublayers is a sparse array. if index is a non-existing slot, returns undefined which is correct
            return parentLayer.sublayers[index];
        } else {
            return undefined;
        }
    }

    /**
     * Waits for a layer to register, then returns it.
     *
     * @param {string} layerId layer id or uid of the layer
     * @param {boolean} waitForView determines whether we should wait for the layer's `esriView` to be defined
     * @returns {Promise<LayerInstance>} The layer instance with the given id.
     */
    async awaitLayer(layerId: string, waitForView: boolean = false): Promise<LayerInstance> {
        let registeredLayer = this.getLayer(layerId);
        if (!registeredLayer) {
            const defFun = new DefPromise<LayerInstance>();

            // test ~3 times a second for 8 seconds
            let expectedWait = 0;
            const expectedPingTime = 300;
            const stopExpected = setInterval(() => {
                expectedWait += expectedPingTime;
                const expTest = this.getLayer(layerId);
                if (expTest) {
                    clearInterval(stopExpected);
                    defFun.resolveMe(expTest);
                } else if (expectedWait > 8000) {
                    clearInterval(stopExpected);

                    // start slower pings every 1.5 seconds until found.
                    // this code is super light, browser perf won't be impacted if a nothingburger request runs forever.
                    const stopSlowpoke = setInterval(() => {
                        const slowTest = this.getLayer(layerId);
                        if (slowTest) {
                            clearInterval(stopSlowpoke);
                            defFun.resolveMe(slowTest);
                        }
                    }, 1500);
                }
            }, expectedPingTime);

            registeredLayer = await defFun.getPromise();
        }

        // Wait for LayerInstance's esriView to be defined when flag is set
        if (waitForView) {
            await registeredLayer.viewPromise();
        }

        return registeredLayer;
    }

    /**
     * Waits for a sublayer to register, then returns it.
     *
     * @param {string} layerId layer id of the layer.
     * @param {number} index index of the sublayer
     * @returns {Promise<LayerInstance>} The sublayer instance.
     */
    async awaitSublayer(layerId: string, index: number): Promise<LayerInstance> {
        return this.awaitLayer(this.sublayerId(layerId, index));
    }

    /**
     * Get the current map stack position of a given map layer
     *
     * @param {string} layerId layer id or uid of the layer
     * @returns {number | undefined} The layer position in the map stack. Undefined if a data layer or layer not found
     */
    getLayerPosition(layerId: string): number | undefined {
        // layer search required since order array only tracks layerid, not uid
        const layer = this.getLayer(layerId);
        if (layer && layer.mapLayer) {
            const searchId = layer.isSublayer ? layer.parentLayer!.id : layer.id;

            const idx = this.layerOrderIds().findIndex(orderId => orderId === searchId);
            return idx === -1 ? undefined : idx;
        } else {
            return undefined;
        }
    }

    /**
     * Return the Layer IDs of all registered map layers in the order they occupy,
     * or will occupy, the map stack.
     * @returns {Array<string>} layer ids, from bottom to top
     */
    layerOrderIds(): Array<string> {
        // using slice to prevent caller from messing with array.
        return useLayerStore(this.$vApp.$pinia).mapOrder.slice(0) || [];
    }

    /**
     * Return all registered layers.
     * @returns {Array<LayerInstance>} all registered layers
     */
    allLayers(): Array<LayerInstance> {
        // TODO: make result non-reactive via toRaw ?
        //       is anything requiring layer reactivity?
        return (useLayerStore(this.$vApp.$pinia).layers as unknown as Array<LayerInstance>) || [];
    }

    /**
     * Returns all layers that have initiated successfully and that have not errored.
     * @returns {Array<LayerInstance>} all layers that have initiated and not errored
     */
    allActiveLayers(): Array<LayerInstance> {
        return this.allLayers().filter(
            l => l.layerState !== LayerState.ERROR && l.initiationState === InitiationState.INITIATED
        );
    }

    /**
     * Returns all map-based layers currently on the map.
     * Result can be ordered in map stack order. Unordered is more performant.
     *
     * @param {boolean} [inMapOrder=true] if result array should be sorted by map order.
     * @returns {Array<LayerInstance>} all layers on the map
     */
    allLayersOnMap(inMapOrder: boolean = true): Array<LayerInstance> {
        const mapLayers = this.allLayers().filter(l => l.mapLayer && l.initiationState === InitiationState.INITIATED);

        if (inMapOrder) {
            const lOrder = this.layerOrderIds();
            const cash = new Map<string, number>(lOrder.map((layerId, i) => [layerId, i]));
            mapLayers.sort((lay1, lay2) => {
                // index of layer 1 - index of layer 2
                return cash.get(lay1.id)! - cash.get(lay2.id)!;
            });
        }

        return mapLayers;
    }

    /**
     * Returns all initialized data-based layers currently registered with the map.
     * @returns {Array<LayerInstance>} all loaded data layers
     */
    allDataLayers(): Array<LayerInstance> {
        return this.allLayers().filter(l => !l.mapLayer && l.initiationState === InitiationState.INITIATED);
    }

    /**
     * Return all layers in an error state.
     * @returns {Array<LayerInstance>} all errored layers
     */
    allErrorLayers(): Array<LayerInstance> {
        return this.allLayers().filter(l => l.layerState === LayerState.ERROR);
    }

    /**
     * Returns all layers currently undergoing initiation process.
     * @returns {Array<LayerInstance>} all initiating layers
     */
    allInitiatingLayers(): Array<LayerInstance> {
        return this.allLayers().filter(l => l.initiationState === InitiationState.INITIATING);
    }

    /**
     * Get controls and disabled controls configuration of the layer with the given id.
     *
     * @param {string} layerId layer id or uid of the layer
     * @returns {Object | undefined} The layer's controls and disabled controls configuration. Returns undefined if layer is not found.
     */
    getLayerControls(layerId: string):
        | {
              controls: Array<LayerControl>;
              disabledControls: Array<LayerControl>;
          }
        | undefined {
        // fetch the layer first since given layerId can be layer id or uid
        const layer: LayerInstance | undefined = this.getLayer(layerId);
        if (!layer) {
            return;
        }

        // get controls config from layer.config since we do not expect this to change mid-session
        const controls: Array<LayerControl> = layer.config.controls?.slice() ?? [
            LayerControl.BoundaryZoom,
            LayerControl.Datatable,
            LayerControl.Identify,
            LayerControl.Metadata,
            LayerControl.Opacity,
            LayerControl.Refresh,
            LayerControl.Reload,
            LayerControl.Remove,
            LayerControl.Settings,
            LayerControl.Symbology,
            LayerControl.Visibility
        ];

        // remove controls if layer doesn't support them
        const controlsToRemove: Array<LayerControl> = [];
        if (!layer.supportsFeatures) {
            controlsToRemove.push(LayerControl.Datatable);
        }
        if (layer.extent === undefined) {
            controlsToRemove.push(LayerControl.BoundaryZoom);
        }
        const metaConfig =
            layer.config?.metadata || (layer.isSublayer ? layer.parentLayer?.config?.metadata : {}) || {};
        if (!metaConfig.url) {
            controlsToRemove.push(LayerControl.Metadata);
        }

        if (!layer.mapLayer && !layer.config.controls?.includes(LayerControl.Settings)) {
            controlsToRemove.push(LayerControl.Settings);
        }

        controlsToRemove.forEach(control => {
            const idx: number = controls?.indexOf(control) ?? -1;
            if (idx !== -1) {
                controls?.splice(idx, 1);
            }
        });

        // return default controls if controls is undefined
        return {
            controls: controls,
            disabledControls: layer.config.disabledControls ?? []
        };
    }

    /**
     * Will fetch metadata about a layer service endpoint on an ArcGIS server
     *
     * @param url the server url of the layer
     * @returns {Promise} resolves with relevant information about the layer service
     */
    async loadLayerMetadata(url: string): Promise<ArcGisServerMetadata> {
        // given all the error handlers, leaving this as a non-async function

        if (!url.trim()) {
            throw new Error('url missing on layer server metadata request.');
        }

        // extract info for this service
        const [err, serviceResult] = await to<__esri.RequestResponse>(EsriRequest(url, { query: { f: 'json' } }));
        if (!serviceResult) {
            // case where service request was unsuccessful
            console.error(`Service metadata load error: ${url}`, err);
            throw new Error(`Service metadata load error: ${url}`);
        }

        if (!serviceResult.data) {
            // case where service request was successful but no data appeared in result
            console.error(`Service metadata load error: ${url}`);
            throw new Error(`Service metadata load error: ${url}`);
        }

        const sData: any = serviceResult.data;

        // default response, will fill in things as we find them
        const md: ArcGisServerMetadata = {
            geometryType: GeometryType.NONE,
            minScale: 0,
            maxScale: 0,
            canModifyLayer: true,
            extent: undefined,
            defaultVisibility: true,
            fields: [],
            displayField: '',
            typeIdField: '',
            objectIdField: '',
            renderer: undefined,
            currentVersion: 0,
            name: '',
            dataFormat: DataFormat.UNKNOWN,
            mapLayer: true
        };

        // ----------
        // common to all layers

        md.name = sData.name || '';
        md.currentVersion = sData.currentVersion || -1;
        md.minScale = sData.effectiveMinScale || sData.minScale || 0;
        md.maxScale = sData.effectiveMaxScale || sData.maxScale || 0;
        md.extent = sData.extent ? Extent.fromArcServer(sData.extent, 'layer_extent') : undefined;
        // Default to true since user typically wants to see their stuff
        md.defaultVisibility = sData.defaultVisibility ?? true;
        md.canModifyLayer = sData.canModifyLayer ?? true;

        // ----------
        // specifics per layer type

        // properties for all endpoints

        if (sData.type === 'Feature Layer' || sData.type === 'Table') {
            md.dataFormat = DataFormat.ESRI_FEATURE;
            md.displayField = sData.displayField || '';
            md.typeIdField = sData.drawingInfo?.renderer?.field1 || sData.typeIdField || '';

            if (Array.isArray(sData.fields)) {
                // parse fields to our format
                const esriFields: Array<EsriField> = await Promise.all(
                    sData.fields.map((f: any) => EsriAPI.FieldFromJson(f))
                );
                md.fields = esriFields.map(f => {
                    return {
                        name: f.name!,
                        alias: f.alias!,
                        type: f.type!,
                        length: f.length!
                    };
                });

                // hunt the OID
                // find object id field (respectful scenario)
                const noFieldDefOid: boolean = esriFields.every(elem => {
                    if (elem.type === 'oid') {
                        md.objectIdField = elem.name;
                        return false; // break the loop
                    }

                    return true; // keep looping
                });

                // find again (disrespectful scenario)
                if (noFieldDefOid) {
                    // we encountered a service that does not mark a field as the object id.
                    // attempt to use alternate definition. if neither exists, we are toast.
                    md.objectIdField =
                        sData.objectIdField ||
                        (() => {
                            // TODO worth pinging the notification api, or pushing layer into error state?
                            //      this likely bricks the layer. Also very unlikely to ever happen
                            console.error(`Encountered service with no OID defined: ${url}`);
                            return '';
                        })();
                }

                // special stuff for layers with map data
                if (sData.type === 'Feature Layer') {
                    md.geometryType = this.$iApi.geo.geom.serverGeomTypeToRampGeomType(sData.geometryType);

                    if (sData.drawingInfo?.renderer) {
                        md.renderer = await EsriAPI.RendererFromJson(sData.drawingInfo.renderer);
                    }

                    if (sData.sourceSpatialReference) {
                        // our config format aligns with ESRI's RestAPI format
                        md.sourceSR = SpatialReference.fromConfig(sData.sourceSpatialReference);
                    }
                } else {
                    // it was a table
                    md.mapLayer = false;
                }
            }
        } else {
            // we are assuming the .type is "Raster Layer"
            // however I cannot find the ArcGIS Rest documentation on what the value actually is, and our
            // old sample is MIA. So using an ELSE for now to catch it.
            // If anyone finds the value, please update and make the Else block a "unknown/unsupported found" error place.
            md.dataFormat = DataFormat.ESRI_RASTER;
        }

        return md;
    }

    /**
     * Will fetch the feature count for an ArcGIS Server layer
     *
     * @param serviceUrl url of the layer to count
     * @param permanentFilter optional filter to apply to the count
     * @returns {Promise} that resolves with the feature count, -1 if error
     */
    async loadFeatureCount(serviceUrl: string, permanentFilter: string = ''): Promise<number> {
        if (!serviceUrl) {
            // case where a non-server subclass ends up calling this via .super magic.
            // will avoid failed attempts at reading a non-existing service.
            // class should implement their own logic to load feature count (e.g. scrape from file layer)
            console.error('A layer without a url attempted to run the server based feature count routine.');
            return 0;
        }

        // TODO detect when we are in Raster Layer case? if we do this, we would need the caller of this
        //      function to wait on the loadLayerMetadata promise, then check this.supportsFeatures

        // extract info for this service
        const restParam: __esri.RequestOptions = {
            query: {
                f: 'json',
                where: permanentFilter || '1=1', // apparently the 1=1 is required to make the count call work on entire dataset
                returnCountOnly: true,
                returnGeometry: false
            }
        };

        const [err, serviceResult] = await to<__esri.RequestResponse>(EsriRequest(`${serviceUrl}/query`, restParam));

        // Throw console warnings, don't crash the app
        if (!serviceResult) {
            // case where service request was unsuccessful
            console.error(`Feature count request unsuccessful: ${serviceUrl}`, err);
            return 0;
        }
        if (!serviceResult.data) {
            // case where service request was successful but no data appeared in result
            console.error(`Unable to load feature count: ${serviceUrl}`);
            return 0;
        }

        if (Number.isInteger(serviceResult.data.count)) return serviceResult.data.count;
        else {
            console.error(`Funny result (${serviceResult.data.count}) during feature count: ${serviceUrl}`);
            return 0;
        }
    }
}
