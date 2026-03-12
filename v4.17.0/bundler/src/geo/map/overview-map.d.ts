import { Basemap, CommonMapAPI, GraphicLayer, InstanceAPI } from '../../api/internal';
import { Extent } from '../api';
export declare class OverviewMapAPI extends CommonMapAPI {
    protected overviewGraphicLayer: GraphicLayer;
    overviewmapStore: any;
    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI);
    /**
     * Will generate a ESRI map view and add it to the page
     * Must provide the basemap or basemap id to be used when creating the map view
     *
     * @param {string | Basemap} basemap the id of the basemap that should be used when creating the map view
     * @returns {Promise} resolves when the map view has been created.
     * @protected
     */
    protected createMapView(basemap: string | Basemap): Promise<void>;
    addMapGraphicLayer(): Promise<void>;
    removeMapGraphicLayer(): Promise<void>;
    /**
     * Destroys the ESRI map view
     *
     * @protected
     */
    protected destroyMapView(): void;
    /**
     * Searches the local basemap list, then the main map basemaps for a basemap with the given id
     * Throws error if basemap could not be found
     *
     * @param {string} id basemap id
     * @returns {Promise<Basemap>} resolves with the found basemap
     * @protected
     */
    findBasemap(id: string): Promise<Basemap>;
    /**
     * Sets the overview map's basemap to the basemap with the given id.
     * Will refresh the map view if set basemap uses different tile schema.
     *
     * Should only be called by the overview map component
     *
     * @param {string} basemapId the basemap id
     * @returns {Promise<boolean>} resolves with boolean indicates if the schema has changed
     */
    setBasemap(basemapId: string): Promise<boolean>;
    /**
     * Initial esri extent of graphic during drag
     *
     * @private
     */
    private startExtent;
    /**
     * Moves graphic and zooms main map if extent graphic is dragged
     *
     * @param {__esri.ViewDragEvent} esriDrag
     * @private
     */
    private mapDrag;
    /**
     * Updates overviewmap extent and graphic based on main map extent
     *
     * @param {Extent} newExtent new main map extent
     * @returns {Promise<void>} A promise that resolves when the overviewmap has finished updating
     */
    updateOverview(newExtent: Extent): Promise<void>;
    /**
     * Checks if mouse event intersects with extent graphic
     *
     * @param {MouseEvent} e
     * @returns {Promise<boolean>}
     */
    cursorHitTest(e: MouseEvent | __esri.MapViewScreenPoint): Promise<boolean>;
}
