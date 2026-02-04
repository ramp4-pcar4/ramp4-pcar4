import { CommonLayer, InstanceAPI } from '../../api/internal';
import { DefPromise, ScaleSet, SpatialReference, DrawOrder, RampLayerConfig } from '../api';
/**
 * A common layer class which is inherited by layer classes that implement map-based layers.
 */
export declare class MapLayer extends CommonLayer {
    _serverVisibility: boolean | undefined;
    _scaleSet: ScaleSet;
    _mouseTolerance: number;
    _touchTolerance: number;
    _drawOrder: Array<DrawOrder>;
    _lastFilterUpdate: string;
    protected viewDefProm: DefPromise<void>;
    esriWatches: Array<__esri.WatchHandle>;
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected noLayerErr(): void;
    protected notLoadedErr(): void;
    protected onInitiate(): Promise<void>;
    terminate(): Promise<void>;
    reload(): Promise<void>;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): any;
    removeEsriLayer(): void;
    protected onLoadActions(): Array<Promise<void>>;
    viewPromise(): Promise<void>;
    /**
     * Wraps an error test for when someone calls a map dependent function too early
     * @private
     */
    protected mapCheck(): boolean;
    /**
     * Returns the scale set (min and max visible scale) of the layer.
     *
     * @returns {ScaleSet} scale set of the layer
     */
    get scaleSet(): ScaleSet;
    /**
     * Set the scale set (min and max visible scale) of the layer.
     *
     * @param {ScaleSet} scaleSet the new scale set of the layer
     */
    set scaleSet(scaleSet: ScaleSet);
    /**
     * Indicates if the layer is not in a visible scale range.
     *
     * @function isOffscale
     * @param {Integer} [testScale] optional scale to test against. if not provided, current map scale is used.
     * @returns {Boolean} true if the layer is outside of a visible scale range
     */
    isOffscale(testScale?: number | undefined): boolean;
    /**
     * Cause the map to zoom to a scale level where the layer is visible.
     *
     * @returns {Promise} resolves when map has finished zooming
     */
    zoomToVisibleScale(): Promise<void>;
    /**
     * Cause the map to zoom to this layer's boundary extent
     *
     * @returns {Promise} resolves when map has finished zooming
     */
    zoomToLayerBoundary(): Promise<void>;
    /**
     * Get the mouse tolerance in pixels for this layer
     *
     * @returns {number} the mouse tolerance of this layer
     */
    get mouseTolerance(): number;
    /**
     * Set the mouse tolerance for this layer in pixels
     *
     * @param {number} tolerance the new mouse tolerance
     */
    set mouseTolerance(tolerance: number);
    /**
     * Get the touch tolerance in pixels for this layer
     *
     * @returns {number} the touch tolerance of this layer
     */
    get touchTolerance(): number;
    /**
     * Set the touch tolerance in pixels for this layer
     *
     * @param {number} tolerance the new touch tolerance
     */
    set touchTolerance(tolerance: number);
    /**
     * Indicates if the Esri map layer exists
     */
    get layerExists(): boolean;
    /**
     * Returns an array describing the draw order of features, if applicable.
     */
    get drawOrder(): Array<DrawOrder>;
    /**
     * Returns the visibility of the layer.
     *
     * @returns {Boolean} visibility of the layer
     */
    get visibility(): boolean;
    /**
     * Applies visibility to layer.
     *
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean);
    /**
     * Checks the visibility of the sublayers
     * If all sublayers are invisible, then this layer is also set to invisible
     *
     * @function checkVisibility
     */
    checkVisibility(): void;
    /**
     * Returns the opacity of the layer.
     *
     * @returns {number} opacity of the layer (range between 0 and 1)
     */
    get opacity(): number;
    /**
     * Applies opacity to layer.
     *
     * @param {number} value the new opacity setting (range between 0 and 1)
     */
    set opacity(value: number);
    /**
     * Provides the spatial reference of how the underlying ESRI layer is encoding geometry on the client.
     *
     * @returns {SpatialReference} the layer spatial reference in RAMP API format
     */
    getSR(): SpatialReference;
}
