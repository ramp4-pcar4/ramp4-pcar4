import { AttribLayer, InstanceAPI, MapImageLayer } from '../../api/internal';
import { SpatialReference, RampLayerMapImageSublayerConfig } from '../api';
/**
 * A layer class which implements an ESRI Map Image Sublayer.
 */
export declare class MapImageSublayer extends AttribLayer {
    constructor(config: RampLayerMapImageSublayerConfig, $iApi: InstanceAPI, parent: MapImageLayer);
    /**
     * Set the ESRI sublayer using the parent's sublayer list
     *
     * @param {MapImageLayer} parent: Parent MapImageLayer object
     */
    fetchEsriSublayer(parent: MapImageLayer): void;
    /**
     * Load actions for a MapImage sublayer
     */
    protected onLoadActions(): Array<Promise<void>>;
    /**
     * Initiate this sublayer
     *
     * This is called after the parent layer is initiated
     */
    protected onInitiate(): Promise<void>;
    reload(): Promise<void>;
    cancelLoad(): void;
    /**
     * Indicates if the Esri map sublayer and the parent's Esri map layer exist.
     */
    get layerExists(): boolean;
    /**
     * Returns the visibility of the sublayer.
     *
     * @function getVisibility
     * @returns {Boolean} visibility of the sublayer
     */
    get visibility(): boolean;
    /**
     * Applies visibility to sublayer.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean);
    /**
     * Returns the opacity of the sublayer.
     *
     * @function getOpacity
     * @returns {Boolean} opacity of the sublayer
     */
    get opacity(): number;
    /**
     * Applies opacity to sublayer.
     *
     * @function setOpacity
     * @param {Boolean} value the new opacity setting
     */
    set opacity(value: number);
    /**
     * Get the mouse tolerance in pixels for this sublayer's parent layer
     *
     * @returns {number} the mouse tolerance of the parent layer
     */
    get mouseTolerance(): number;
    /**
     * Set the mouse tolerance for this sublayer's parent layer in pixels
     *
     * @param {number} tolerance the new mouse tolerance
     */
    set mouseTolerance(tolerance: number);
    /**
     * Get the touch tolerance in pixels for this sublayer's parent layer
     *
     * @returns {number} the touch tolerance of the parent layer
     */
    get touchTolerance(): number;
    /**
     * Set the touch tolerance in pixels for this sublayer's parent layer
     *
     * @param {number} tolerance the new touch tolerance of the parent layer
     */
    set touchTolerance(tolerance: number);
    applySqlFilter(exclusions?: Array<string>): void;
    /**
     * Provides the spatial reference of the parent MIL.
     *
     * @returns {SpatialReference} the layer spatial reference in RAMP API format
     */
    getSR(): SpatialReference;
    /**
     * A utility method to allow a parent layer to request this layer to
     * update its internal attribute loader after field data has been
     * properly processed.
     * Generally should only be called internally.
     */
    updateFieldList(): void;
    /**
     * A utility method to allow a parent layer to request this layer to
     * update its fields to be trimmed after field data is processed.
     * Generally should only be called internally.
     */
    updateFieldsToTrim(): void;
    /**
     * Visibility of labels on this layer
     */
    get labelVisibility(): boolean;
    set labelVisibility(val: boolean);
    /**
     * Does any config override calculating for label visibility.
     *
     * @private
     * @returns {boolean | undefined} undefined if no overrides, otherwise the override value
     */
    protected labelVizOverride(): boolean | undefined;
    zoomToFeature(objectId: number): Promise<boolean>;
}
