import { Basemap, CommonMapAPI, InstanceAPI, LayerInstance, MaptipAPI, MapIdentifyResult } from '../../api/internal';
import { Point, ScaleSet, GraphicHitResult, LayerTimes, MapClick, RampMapConfig, ScreenPoint, Screenshot } from '../api';
import { MapCaptionAPI } from './caption';
export declare class MapAPI extends CommonMapAPI {
    maptip: MaptipAPI;
    caption: MapCaptionAPI;
    /**
     * The throttle level for map mouse move events
     * @private
     */
    private mapMouseThrottle;
    /**
     * Map wide defaults for layer times. Layers can override.
     */
    layerDefaultTimes: LayerTimes;
    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI);
    createMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): Promise<void>;
    /**
     * Destroys the ESRI map. Typically called by internal system, use at your own risk.
     */
    destroyMap(): void;
    /**
     * Will generate a ESRI map view and add it to the page
     * Can optionally provide the basemap or basemap id to be used when creating the map view
     *
     * @protected
     * @param {string | Basemap | undefined} basemap the id of the basemap that should be used when creating the map view
     * @returns {Promise} resolves when the map view has been created.
     */
    protected createMapView(basemap?: string | Basemap): Promise<void>;
    /**
     * Destroys the ESRI map view
     *
     * @protected
     */
    protected destroyMapView(): void;
    /**
     * Sets the basemap to the basemap with the given id or the basemap object
     * Throws error if basemap could not be found
     *
     * @param {string | basemap} basemap the basemap id or object
     * @returns {Promise} resolves when the basemap has been applied
     * @protected
     */
    protected applyBasemap(basemap: string | Basemap): Promise<void>;
    /**
     * Set the map's basemap to the basemap with the given id.
     * If the new basemap's tile schema differs from the current one, the map view will be refreshed
     *
     * The returned boolean indicates if the schema has changed.
     *
     * @param {string} basemapId the basemap id
     * @returns {Promise<boolean>} resolves with boolean indicates if the schema has changed
     */
    setBasemap(basemapId: string): Promise<boolean>;
    /**
     * Will attempt to change to another basemap if the very first basemap failed.
     * If nothing is defined, will do nothing but manage our watching state.
     *
     * @param {string} basemapSchemaId the basemap schema id (where the fallback is defined)
     * @returns {Promise<void>} resolves after recovery has initiated
     */
    recoverBasemap(basemapSchemaId: string): Promise<void>;
    /**
     * Registers a layer with the instance and attempts to add it to the the map.
     * The return value provides an async indicator if the map add was successful,
     * but the layer is registered regardless.
     * Optionally can specify the layer order index for map layers.
     *
     * @param {LayerInstance} layer the Ramp layer to add
     * @param {number | undefined} index optional order index to add the layer to
     * @returns {Promise<void>} a promise that resolves when the layer has been added to the map
     */
    addLayer(layer: LayerInstance, index?: number | undefined): Promise<void>;
    /**
     * Utility method to insert a Map Layer into the ESRI map. The position in ESRI map
     * is derived from global order and what layers are currently in the map.
     *
     * @param {LayerInstance} layer the RAMP layer to insert. Must be a Map layer
     */
    insertToEsriMap(layer: LayerInstance): void;
    /**
     * Reorders a layer on the map. The position is based on the instance layer order state
     * maintained by the LayerAPI.
     * If ignoreCosmetic is set, the index changes to a different basis. Essentially the
     * as if cosmetic layers did not exists in the layer order state.
     *
     * @param {LayerInstance} layer the RAMP layer to be moved. If a sublayer is passed, the parent will be reordered.
     * @param {number} index the RAMP layer index where the layer will be moved to
     * @param {boolean} ignoreCosmetic indicates if the index should ignore cosmetic layers
     */
    reorder(layer: LayerInstance, index: number, ignoreCosmetic?: boolean): void;
    /**
     * Removes a sublayer from the map
     *
     * @param {LayerInstance | string} layer the Ramp sublayer or sublayer id/uid to remove
     * @returns {Promise<void>} a promise that resolves when the layer has been removed from the map
     */
    removeSublayer(sublayer: LayerInstance | string): void;
    /**
     * Removes a layer from the map and fires the layer remove event.
     * This will also unregister the layer from the Ramp instance.
     *
     * @param {LayerInstance | string} layer the Ramp layer or layer id/uid to remove
     * @returns {Promise<void>} a promise that resolves when the layer has been removed from the map
     */
    removeLayer(layer: LayerInstance | string): void;
    /**
     * Set's the map's mapMouseThrottle value to newThrottle.
     * If newThrottle is not a positive number, a console error is thrown.
     *
     * The returned boolean indicates if the value has been successfully set.
     *
     * @param {number} newThrottle the new mapMouseThrottle value, which must be a positive number
     * @returns {boolean} indicates if the value was set successfully
     */
    setMapMouseThrottle(newThrottle: number): boolean;
    /**
     * Creates a throttled map mouse move handler.
     * Uses mapMouseThrottle for the throttle delay
     *
     * @returns the throttled handler function
     */
    private createMouseMoveHandler;
    /**
     * Zooms the map to a given zoom level. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @param {number} zoomLevel An integer matching the level of detail / zoom level the map should adjust to
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    zoomToLevel(zoomLevel: number): Promise<void>;
    /**
     * Zooms the map to the next zoom level in towards the earth. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    zoomIn(): Promise<void>;
    /**
     * Zooms the map to the next zoom level out away from the earth. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    zoomOut(): Promise<void>;
    /**
     * Zooms the map to the closest zoom level that will be visible for a given scale set.
     * Does nothing if scale set is already visible for the map.
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    zoomToVisibleScale(scaleSet: ScaleSet): Promise<void>;
    /**
     * Finds the tile scale (level of detail) closest to the provided scale.
     * If using a map with no scale levels, will return the given scale.
     *
     * @function findClosestScale
     * @param  {Number} scale   scale value to search for in the levels of detail
     * @return {Number}         the level of detail scale closest to the input
     */
    findClosestScale(scale: number): number;
    /**
     * Create a screenshot of the current view.
     *
     * Possible ESRI takeScreenshot() options:
     * https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#takeScreenshot
     * Will default to quality = 1 and format = 'png'.
     *
     * @param {__esri.MapViewTakeScreenshotOptions} options ESRI takeScreenshot() options
     * @returns {Promise<Screenshot>} a promise that resolves with a Screenshot
     */
    takeScreenshot(options: __esri.MapViewTakeScreenshotOptions): Promise<Screenshot>;
    /**
     * Get a point in map co-ordinates corresponding to a pixel in screen co-ordinates.
     *
     * @param {ScreenPoint} screenPoint pixel screen co-ord of the point on the map
     * @returns {Point} the map point analagous to the screen point
     */
    screenPointToMapPoint(screenPoint: ScreenPoint): Point;
    /**
     * Get a pixel in screen co-ordinates corresponding to a point in map co-ordinates.
     *
     * @param {Point} mapPoint point on the map
     * @returns {ScreenPoint} the screen point analagous to the map point
     */
    mapPointToScreenPoint(mapPoint: Point): ScreenPoint;
    /**
     * Determines any client-side symbol hits at a map pixel. Handles any declustering.
     *
     * @param screenX
     * @param screenY
     * @returns promise resolving in all graphic hits under the pixel
     */
    private symbolIdentify;
    /**
     * Performs an identify request on all layers that support identify, and combines the results.
     *
     * @param {MapClick | Point} targetPoint the place on the map to execute the identify
     * @memberof MapAPI
     * @returns {MapIdentifyResult} results of the identify
     */
    runIdentify(targetPoint: MapClick | Point): MapIdentifyResult;
    /**
     * Get the top-most graphic at the given screen point
     * Returns undefined if there is no graphic
     *
     * @param {ScreenPoint} screenPoint The screen coordinates to inspect
     * @returns {Promise<GraphicHitResult | undefined>} resolves with topmost graphic or undefined
     */
    getGraphicAtCoord(screenPoint: ScreenPoint): Promise<GraphicHitResult | undefined>;
    private _activeKeys;
    private _panInterval;
    private _mouseFocus;
    /**
     * Processes keydown event on map and initiates panning/zooming
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     */
    mapKeyDown(payload: KeyboardEvent): void;
    /**
     * Processes keyup event on map and deactivates key
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     */
    mapKeyUp(payload: KeyboardEvent): void;
    /**
     * Sets the map focus source from the mouse
     *
     * @memberof MapAPI
     */
    setMouseFocus(): void;
    /**
     * Stops panning and deactivates all keys
     *
     * @memberof MapAPI
     */
    stopKeyPan(): void;
    /**
     * Returns if keys are active on map
     *
     * @memberof MapAPI
     * @returns {boolean} - true if any pan/zoom keys are active
     */
    get keysActive(): boolean;
    /**
     * Returns if map focus is caused by mouse click
     *
     * @memberof MapAPI
     * @returns {boolean}
     */
    get mouseFocus(): boolean;
    /**
     * Pauses pan interval to process zoom from keyboard
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     * @private
     */
    private keyZoom;
    /**
     * Starts/restarts panning with active keys
     *
     * @memberof MapAPI
     * @private
     */
    private keyPan;
}
