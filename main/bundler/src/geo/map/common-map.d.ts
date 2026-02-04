import { APIScope, Basemap, InstanceAPI } from '../../api/internal';
import { EsriMap } from '../esri';
import { BaseGeometry, DefPromise, Extent, ExtentSet, SpatialReference, RampLabelsConfig, RampMapConfig, ZoomEasing } from '../api';
export declare class CommonMapAPI extends APIScope {
    /**
     * The internal esri map. Avoid referencing outside of geoapi.
     * @private
     */
    esriMap: EsriMap | undefined;
    /**
     * Local storage of Basemap objects
     * @private
     */
    _basemapStore: Array<Basemap>;
    /**
     * Indicates if the map has been created
     * @public
     */
    created: boolean;
    /**
     * Identifies the map. Primarily used for debugging.
     */
    name: string;
    /**
     * Tracks if we are watching for the first basemap to load.
     * @private
     */
    protected trackFirstBasemap: boolean;
    /**
     * The internal esri map view. Changes from outside of RAMP may break the instance. Use caution.
     */
    esriView: __esri.MapView | undefined;
    /**
     * Internal deferred managing the view promise
     * @private
     */
    protected _viewPromise: DefPromise<void>;
    /**
     * A promise that resolves when the map view has been created
     */
    get viewPromise(): Promise<void>;
    /**
     * The map spatial reference in RAMP API Spatial Reference format.
     * Saves us from converting from ESRI format every time it is needed
     * @private
     */
    protected _rampSR: SpatialReference | undefined;
    /**
     * The active extent set in RAMP API Extent Set format.
     * Allows a quick reference to the available extents if needed.
     * @private
     */
    protected _rampExtentSet: ExtentSet | undefined;
    /**
     * The viewDiv for the ESRI MapView
     * The map will be rendered using this div object
     * @private
     */
    protected _targetDiv: string | HTMLDivElement | undefined;
    /**
     * List of ESRI watch handlers
     * @private
     */
    protected handlers: Array<{
        type: string;
        handler: any;
    }>;
    /**
     * The default zoom level when zooming to a point feature
     * @private
     */
    protected pointZoomScale: number;
    protected constructor(iApi: InstanceAPI, name?: string);
    protected noMapErr(): void;
    protected abstractError(): void;
    /**
     * Any map labels defaulting
     */
    labelsDefault: RampLabelsConfig;
    /**
     * Will generate the actual Map control objects and construct it on the page
     * @param {RampMapConfig} config the config for the map
     * @param {string | HTMLDivElement} targetDiv the div to be used for the map view
     * @returns {Promise} resolves when the map has been created
     */
    createMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): Promise<void>;
    /**
     * Destroys the ESRI map
     *
     * @protected
     */
    destroyMap(): void;
    /**
     * Reloads the map with the given map config and target div.
     * This breaks down and re-creates the internal map state.
     *
     * @param {RampMapConfig} config the config for the map
     * @param {string | HTMLDivElement | undefined} targetDiv the div to be used for the map view
     * @returns {Promise} resolves when the map has been re-created. Layers may still be loading.
     */
    reloadMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): Promise<void>;
    /**
     * Will generate a ESRI map view and add it to the page
     * Can optionally provide the basemap or basemap id to be used when creating the map view
     *
     * This method should be overidden by other map sub-classes
     *
     * @param {string | Basemap | undefined} basemap the id of the basemap that should be used when creating the map view
     * @returns {Promise} resolves when the map view has been created.
     * @protected
     */
    protected createMapView(basemap?: string | Basemap): Promise<void>;
    /**
     * Destroys the ESRI map view
     *
     * @protected
     */
    protected destroyMapView(): void;
    /**
     * Searches the local basemap list for a basemap with the given id
     * Throws error if basemap could not be found
     *
     * @param {string} id basemap id
     * @returns {Promise<Basemap>} resolves with the found basemap
     * @protected
     */
    findBasemap(id: string): Promise<Basemap>;
    /**
     * Applies the given basemap (or basemap with given id) to the esri map
     * Throws error if basemap could not be found with the given id
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
     * This method should be overidden by child map classes
     *
     * @param {string} basemapId the basemap id
     * @returns {Promise<boolean>} resolves with boolean indicates if the schema has changed
     * @abstract
     */
    setBasemap(basemapId: string): Promise<boolean>;
    /**
     * Will attempt to change to another basemap if the very first basemap failed.
     * If nothing is defined, will do nothing but manage our watching state.
     *
     * This method is overidden as needed
     *
     * @param {string} basemapSchemaId the basemap schema id (where the fallback is defined)
     * @returns {Promise<void>} resolves after recovery has initiated
     */
    recoverBasemap(basemapSchemaId: string): Promise<void>;
    /**
     * Get the id of the currently used basemap
     * Returns undefined if there is no map
     * @returns {string | undefined} current basemap id
     */
    getCurrentBasemapId(): string | undefined;
    /**
     * Projects a geometry to the map's spatial reference
     *
     * @private
     * @param {BaseGeometry} geom the RAMP API geometry to project
     * @returns {Promise<BaseGeometry>} the geometry projected to the map's projection, in RAMP API Geometry format
     */
    private geomToMapSR;
    /**
     * Zooms the map to a given geometry.
     *
     * @param {BaseGeometry} geom A RAMP API geometry to zoom the map to
     * @param {number} [scale] An optional scale value of the map. Is ignored for non-Point geometries
     * @param {boolean} [animate] Option to turn off the zoom animation. On by default
     * @param {number} [duration] Option to change animation duration (in milliseconds). Default of 200. Ignored if animate is off.
     * @param {ZoomEasing} [easing] Option to change animation easing function. Default of 'ease'. Ignored if animate is off.
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    zoomMapTo(geom: BaseGeometry, scale?: number, animate?: boolean, duration?: number, easing?: ZoomEasing): Promise<void>;
    /**
     * Provides the zoom level of the map
     *
     * @returns {number} the map zoom level
     */
    getZoomLevel(): number;
    /**
     * Provides the scale of the map (the scale denominator as integer)
     *
     * @returns {number} the map scale
     */
    getScale(): number;
    /**
     * Provides the resolution of the map. This means the number of map units that is covered by one pixel.
     *
     * @returns {number} the map resolution
     */
    getResolution(): number;
    /**
     * Provides the extent of the map
     *
     * @returns {Extent} the map extent in RAMP API Extent format
     */
    getExtent(): Extent;
    /**
     * Provides the active extent set of the map
     *
     * @returns {ExtentSet} the active extent set of the map
     */
    getExtentSet(): ExtentSet;
    /**
     * Provides the spatial reference of the map
     *
     * @returns {SpatialReference} the map spatial reference in RAMP API format
     */
    getSR(): SpatialReference;
    /**
     * Get the height of the map on the screen in pixels
     *
     * @returns {Number} pixel height
     */
    getPixelHeight(): number;
    /**
     * Get the width of the map on the screen in pixels
     *
     * @returns {Number} pixel width
     */
    getPixelWidth(): number;
    /**
     * Set's the map's pointZoomScale value to newScale.
     * If newScale is not a positive number, a console error is thrown.
     *
     * The returned boolean indicates if the value has been successfully set.
     *
     * @param {number} newScale the new pointZoomScale value, which must be a positive number
     * @returns {boolean} indicates if the value was set successfully
     */
    setPointZoomScale(newScale: number): boolean;
}
