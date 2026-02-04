import { FixtureInstance, LayerInstance, IdentifyItem, IdentifyResult } from '../../../api';
import { Graphic, IdentifyResultFormat } from '../../../geo/api';
import { DetailsConfig } from '../store';
export declare const ORIGIN_DETAILS = "details";
export declare class DetailsAPI extends FixtureInstance {
    private detailsStore;
    get config(): DetailsConfig | undefined;
    /**
     * Updates the identify result in the store, and then opens the details panel.
     *
     * @param {IdentifyResult[]} payload
     * @memberof DetailsAPI
     */
    openDetails(payload: IdentifyResult[]): void;
    /**
     * Provided with the data for a single feature, shows or hides details panel.
     * If panel is closed or incoming data is different than current content, panel is shown.
     * If panel open and incoming data is what is currently shown, panel closes.
     * The `open` parameter can override the behavior.
     * featureData payload (can be empty if forcing closed)
     * - uid     : uid string of the layer hosting the feature
     * - format  : structure of the data. IdentifyResultFormat value.
     * - data    : source information for the feature. Analogous to the data property of an IdentifyItem
     * - layerId : optional layerId string of the layer hosting the feature. Will be looked up if not provided
     *
     * @param {{data: any, uid: string, format: IdentifyResultFormat}} featureData
     * @param {boolean | undefined} open can force the panel to open (true) or close (false) regardless of current panel state
     * @memberof DetailsAPI
     */
    toggleFeature(featureData: {
        data: any;
        uid: string;
        layerId?: string;
        format: IdentifyResultFormat;
    }, open: boolean | undefined): void;
    /**
     * Read the details section of the layers' fixture config
     *
     * @param {DetailsConfig} [config]
     * @memberof DetailsAPI
     */
    _parseConfig(config?: DetailsConfig): void;
    /**
     * Will see if we have this layer's detail fixture config cached, and if not,
     * cache it.
     *
     * @param layer the layer to check
     * @private
     */
    _loadDetailsConfig(layer: LayerInstance | undefined): void;
    /**
     * Check to see if the stored components are registered properly.
     *
     * @memberof DetailsAPI
     */
    _validateItems(): void;
    /**
     * Highlight identified items
     * @param items items to add
     * @param layerUid uid of layer the items belong to
     */
    hilightDetailsItems(items: IdentifyItem | Array<IdentifyItem>, layerUid: string): Promise<void>;
    /**
     * Remove all details panel map hilights.
     */
    removeDetailsHilight(): Promise<void>;
    /**
     * Reload map elements of the hilighter for a set of identify items.
     *
     * @param {IdentifyItem | Array<IdentifyItem>} items items to reload
     * @param {string} layerUid uid of layer the items belong to
     */
    reloadDetailsHilight(items: IdentifyItem | Array<IdentifyItem>, layerUid: string): Promise<void>;
    /**
     * Return the graphics of the given IdentifyItems once the items have loaded.
     * @param {Array<IdentifyItem>} items identify items to hilight. Items should be of ESRI format
     * @param layerUid uid of layer the items belong to
     * @returns {Promise<Array<Graphic>>} resolves with array of graphics
     */
    getHilightGraphics(items: Array<IdentifyItem>, layerUid: string): Promise<Array<Graphic>>;
    /**
     * Updates hilighted graphics when the hilight toggler is toggled.
     *
     * @param {boolean} hilightOn Whether the toggler has been turned on/off
     * @param {IdentifyItem | Array<IdentifyItem>} items The identify items to highlight. Only required if turning on
     * @param {string} layerUid the layer UID that owns the items. Only required if turning on
     */
    onHilightToggle(hilightOn: boolean, items?: IdentifyItem | Array<IdentifyItem>, layerUid?: string): void;
    /**
     * Return whether or not a HilightMode has been defined (other than NONE)
     */
    hasHilighter(): boolean;
}
