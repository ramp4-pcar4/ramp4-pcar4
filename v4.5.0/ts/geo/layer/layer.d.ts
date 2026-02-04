import { APIScope, FileUtils, InstanceAPI, LayerInstance, OgcUtils } from '@/api/internal';
import type { ArcGisServerMetadata, RampLayerConfig } from '@/geo/api';
import { LayerControl } from '@/geo/api';
/**
 * Exposes methods for creating layers and fetching information about layers in the instance.
 */
export declare class LayerAPI extends APIScope {
    files: FileUtils;
    ogc: OgcUtils;
    constructor(iApi: InstanceAPI);
    /**
     * Will generate a RAMP Layer based on the supplied config object.
     *
     * @param {Object} config a valid layer configuration object
     * @returns {LayerInstance} Layer in uninitialized load state
     */
    createLayer(config: RampLayerConfig): LayerInstance;
    /**
     * Access an instantiated layer object.
     *
     * @param {string} layerId layer id or uid of the layer
     * @returns {LayerInstance | undefined} The layer instance with the given id. Returns undefined is layer is not found.
     */
    getLayer(layerId: string): LayerInstance | undefined;
    /**
     * Get the current map stack position of a given map layer
     *
     * @param {string} layerId layer id or uid of the layer
     * @returns {number | undefined} The layer position in the map stack. Undefined if a data layer or layer not found
     */
    getLayerPosition(layerId: string): number | undefined;
    /**
     * Return the Layer IDs of all registered map layers in the order they occupy,
     * or will occupy, the map stack.
     * @returns {Array<string>} layer ids, from bottom to top
     */
    layerOrderIds(): Array<string>;
    /**
     * Return all registered layers.
     * @returns {Array<LayerInstance>} all registered layers
     */
    allLayers(): Array<LayerInstance>;
    /**
     * Returns all layers that have initiated successfully and that have not errored.
     * @returns {Array<LayerInstance>} all layers that have initiated and not errored
     */
    allActiveLayers(): Array<LayerInstance>;
    /**
     * Returns all map-based layers currently on the map.
     * Result can be ordered in map stack order. Unordered is more performant.
     *
     * @param {boolean} [inMapOrder=true] if result array should be sorted by map order.
     * @returns {Array<LayerInstance>} all layers on the map
     */
    allLayersOnMap(inMapOrder?: boolean): Array<LayerInstance>;
    /**
     * Returns all initialized data-based layers currently registered with the map.
     * @returns {Array<LayerInstance>} all loaded data layers
     */
    allDataLayers(): Array<LayerInstance>;
    /**
     * Return all layers in an error state.
     * @returns {Array<LayerInstance>} all errored layers
     */
    allErrorLayers(): Array<LayerInstance>;
    /**
     * Returns all layers currently undergoing initiation process.
     * @returns {Array<LayerInstance>} all initiating layers
     */
    allInitiatingLayers(): Array<LayerInstance>;
    /**
     * Get controls and disabled controls configuration of the layer with the given id.
     *
     * @param {string} layerId layer id or uid of the layer
     * @returns {Object | undefined} The layer's controls and disabled controls configuration. Returns undefined if layer is not found.
     */
    getLayerControls(layerId: string): {
        controls: Array<LayerControl>;
        disabledControls: Array<LayerControl>;
    } | undefined;
    /**
     * Will fetch metadata about a layer service endpoint on an ArcGIS server
     *
     * @param url the server url of the layer
     * @returns {Promise} resolves with relevant information about the layer service
     */
    loadLayerMetadata(url: string): Promise<ArcGisServerMetadata>;
    /**
     * Will fetch the feature count for an ArcGIS Server layer
     *
     * @param serviceUrl url of the layer to count
     * @param permanentFilter optional filter to apply to the count
     * @returns {Promise} that resolves with the feature count, -1 if error
     */
    loadFeatureCount(serviceUrl: string, permanentFilter?: string): Promise<number>;
}
