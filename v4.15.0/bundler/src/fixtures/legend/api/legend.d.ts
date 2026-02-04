import { FixtureInstance, LayerInstance } from '../../../api';
import { LegendConfig } from '../store';
import { LayerItem } from '../store/layer-item';
import { LegendItem } from '../store/legend-item';
export declare class LegendAPI extends FixtureInstance {
    /**
     * Parses the legend config JSON snippet from the config file and save resulting objects to the fixture store.
     *
     * @param {LegendConfig | undefined} legendConfig
     */
    _parseConfig(legendConfig?: LegendConfig): void;
    /**
     * Construct a legend item given the legend config
     *
     * @param {any} itemConf legend item config
     * @param {LegendItem | undefined} parent the parent legend item for the created item
     * @returns {LegendItem} returns the constructed legend item
     * @memberof LegendAPI
     */
    createItem(itemConf: any, parent?: LegendItem): LegendItem;
    /**
     * Add a legend item given the legend config, or legend item instance
     *
     * @param {any | LegendItem} item the config for the legend item or a legend item instance
     * @param {LegendItem | undefined} parent optional parent item to create this item under
     * @returns {LegendItem} the added legend item
     * @memberof LegendAPI
     */
    addItem(item: any | LegendItem, parent?: LegendItem): LegendItem;
    /**
     * Add a layer legend item given a layer instance
     *
     * @param {LayerInstance} layer the layer to create an item for
     * @param {LegendItem | undefined} parent optional parent item to create this item under
     * @returns {Promise<LegendItem>} a promise that resolves with the added layer item
     * @memberof LegendAPI
     */
    addLayerItem(layer: LayerInstance, parent?: LegendItem): Promise<LayerItem>;
    /**
     * Returns `LegendConfig` section of the global config file.
     *
     * @readonly
     * @type {LegendConfig}
     * @memberof LegendAPI
     */
    get config(): LegendConfig | undefined;
    /**
     * Returns the full legend tree.
     * Note: This returns a direct reference to the legend tree. Mutations will persist.
     *
     * @returns {Array<LegendItem>} returns the full legend tree
     * @memberof LegendAPI
     */
    getLegend(): Array<LegendItem>;
    /**
     * Maps the current legend tree into a legend config snippet.
     *
     * In addition to legend config schema properties, this snippet will also include
     * properties such as the item type, item's uid, layer uid etc.
     *
     * @returns {any} returns the legend config
     * @memberof LegendAPI
     */
    getLegendConfig(): any;
    /**
     * Get a legend item given its uid.
     *
     * @param {string} uid the uid of the legend item
     * @returns {LegendItem | undefined} return legend item with given uid. returns undefined if item is not found.
     * @memberof LegendAPI
     */
    getItem(uid: string): LegendItem | undefined;
    /**
     * Get the first found layer item connected to the layer with the given id/uid or the given layer instance.
     *
     * @param {string | LayerInstance} layer the id/uid of the layer or layer instance
     * @returns {LegendItem | undefined} return layer item tied to the found layer. returns undefined if no such item is found.
     * @memberof LegendAPI
     */
    getLayerItem(layer: string | LayerInstance): LayerItem | undefined;
    /**
     * Get all legend items with the given expanded state.
     * Not specifying the expanded state will return all items with expanded set to `true`
     *
     * @param {boolean | undefined} expanded the expanded state to check for
     * @returns {Array<LegendItem>} the items with the given expanded state
     * @memberof LegendAPI
     */
    getAllExpanded(expanded?: boolean): Array<LegendItem>;
    /**
     * Get all legend items with the given visibility state.
     * Not specifying the visibility state will return all items with visibility set to `true`
     *
     * @param {boolean | undefined} visibility the visibility state to check for
     * @returns {Array<LegendItem>} the items with the given expanded state
     * @memberof LegendAPI
     */
    getAllVisible(visibility?: boolean): Array<LegendItem>;
    /**
     * Return every legend block bound to a registered layer. Parent-child layer types will
     * return everything tied to the entire layer (parent & children)
     *
     * @param {LayerInstance | string} layer a layer instance, layer id, or layer uid
     * @returns {Array<LayerItem>} all legend items bound to the layer
     */
    getLayerBoundItems(layer: LayerInstance | string): Array<LayerItem>;
    /**
     * Update all layer items bound to the given layer.
     * Does nothing if no layer items are found
     *
     * @param {LayerInstance} layer the layer to update the legend with
     * @memberof LegendAPI
     */
    updateLegend(layer: LayerInstance): void;
    /**
     * Set the expanded state of legend items to `expanded`
     *
     * @param {boolean} expanded the expanded state the items will be set to
     * @param {LegendItem | undefined} root the root item to start updating the expanded state from
     * @memberof LegendAPI
     */
    expandItems(expanded: boolean, root?: LegendItem): void;
    /**
     * Set the visibility state of legend items to `visibility`
     *
     * @param {boolean} visibility the visibility state the items will be set to
     * @param {LegendItem | undefined} root the root item to start updating the visibility state from
     * @memberof LegendAPI
     */
    showItems(visibility: boolean, root?: LegendItem): void;
    /**
     * Reload the all legend items connected to the given layer.
     * This preps the items for the reload. It does not reload the actual layer.
     * Parent-child layer types will prep all items related to the layer (both
     * parent and sublayers)
     *
     * @param {LayerInstance | string} layer a layer instance, layer id, or layer uid referencing the reloaded layer
     * @returns {boolean} returns true if item was successfully reloaded, false otherwise
     * @memberof LegendAPI
     */
    reloadLayerItem(layer: LayerInstance | string): boolean;
    /**
     * Removes the legend item with the given uid, or the item instance.
     *
     * @param {string | LegendItem} item the uid of item or legend item instance to be removed
     * @returns {boolean} returns true if item was removed, false otherwise
     * @memberof LegendAPI
     */
    removeItem(item: string | LegendItem): boolean;
    /**
     * Remove the layer item connected to the layer with the given id/uid or the given layer instance.
     *
     * @param {string | LayerInstance} layer the id/uid of the layer or layer instance
     * @returns {boolean} returns true if item was removed, false otherwise
     * @memberof LegendAPI
     */
    removeLayerItem(layer: string | LayerInstance): boolean;
    /**
     * Search for the first legend item that satisfies the predicate, starting from the given root item.
     *
     * @param {LegendItem} root the root item to start searching from
     * @param {(item: LegendItem) => boolean} predicate boolean predicate to test each item
     * @returns {LegendItem \ undefined} return the first item that satisfies the given predicate. returns undefined if item is not found.
     */
    searchTreeFirst(root: LegendItem, predicate: (item: LegendItem) => boolean): LegendItem | undefined;
    /**
     * Search for all legend items that satisfy the predicate, starting from the given root item.
     *
     * @param {LegendItem} root the root item to start searching from
     * @param {(item: LegendItem) => boolean} predicate predicate boolean predicate to test each item
     * @returns {Array<LegendItem>} return all items that satisfies the given predicate.
     */
    searchTreeAll(root: LegendItem, predicate: (item: LegendItem) => boolean): Array<LegendItem>;
    /**
     * Search the entire legend for items that satisfy the predicate
     *
     * @param {(item: LegendItem) => boolean} predicate predicate boolean predicate to test each item
     * @returns {Array<LegendItem>} return all items that satisfies the given predicate.
     */
    searchLegend(predicate: (item: LegendItem) => boolean): Array<LegendItem>;
    /**
     * Toggles visibility for all items or expands/collapses all groups.
     *
     * @param {LegendItem} item current legend item that is being checked
     * @param {any} options specifies whether visibility or expand/collapse functionality is to be changed
     */
    private _toggleState;
    /**
     * Add the given legend item to the legend store
     *
     * @param {Legenditem} item the legend item to be added
     * @param {LegendItem | undefined} parent the parent legend item for this item
     */
    private _insertItem;
    /**
     * Deletes the given legend item from the legend store
     *
     * @param {Legenditem} item the legend item to be deleted
     * @returns {boolean} returns true if item was removed, false otherwise
     */
    private _deleteItem;
    private _replaceItem;
    private _treeWalker;
}
