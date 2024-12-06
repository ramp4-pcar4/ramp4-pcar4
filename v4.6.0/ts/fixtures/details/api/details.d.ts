import { FixtureInstance, LayerInstance } from '@/api';
import type { Graphic, IdentifyItem, IdentifyResult } from '@/geo/api';
import type { DetailsConfig } from '../store';
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
     * Provided with the data for a single feature, toggles the details panel directly with the feature screen.
     *
     * @param {{data: any, uid: string, format: string}} featureData
     * @param {boolean | undefined} open
     * @memberof DetailsAPI
     */
    toggleFeature(featureData: {
        data: any;
        uid: string;
        format: string;
    }, open: boolean | undefined): void;
    /**
     * Read the details section of the layers' fixture config
     *
     * @param {DetailsConfig} [config]
     * @memberof DetailsAPI
     */
    _parseConfig(config?: DetailsConfig): void;
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
     * Reload map elements of the hilighter.
     * @param items items to reload
     * @param layerUid uid of layer the items belong to
     */
    reloadDetailsHilight(items: IdentifyItem | Array<IdentifyItem>, layerUid: string): Promise<void>;
    /**
     * Return the graphics of the given IdentifyItems.
     * @param items items to hilight
     * @param layerUid uid of layer the items belong to
     */
    getHilightGraphics(items: Array<IdentifyItem>, layerUid: string): Promise<Array<Graphic>>;
    /**
     * Updates hilighted graphics when the hilight toggler is toggled.
     *
     * @param hilightOn Whether the toggler has been turned on/off
     * @param items The items that are affected by the toggle
     * @param layerUid the layer UID
     */
    onHilightToggle(hilightOn: boolean, items: IdentifyItem | Array<IdentifyItem>, layerUid: string): void;
    /**
     * Return whether or not a HilightMode has been defined (other than NONE)
     */
    hasHilighter(): boolean;
}
