import { FixtureInstance, LayerInstance } from '@/api';
import type { TreeNode } from '@/geo/api';
import { LegendStore } from '../store';
import type { LegendConfig } from '../store';
import { LegendItem, LegendEntry, LegendGroup } from '../store/legend-defs';

export class LegendAPI extends FixtureInstance {
    /**
     * Parses the legend config JSON snippet from the config file and save resulting objects to the fixture store.
     *
     * @param {LegendConfig | undefined} legendConfig
     */
    _parseConfig(legendConfig?: LegendConfig): void {
        // parse the header controls, or default the controls
        let controls: Array<string> = legendConfig?.headerControls?.slice() ?? [
            'wizard',
            'layerReorder',
            'groupToggle',
            'visibilityToggle'
        ];
        this.$vApp.$store.set(LegendStore.headerControls, controls);

        if (!legendConfig || !legendConfig.root.children) {
            return;
        }

        this.handlePanelWidths(['legend']);

        // get all layer fixture configs to read layer-specific legend properties
        let layerLegendConfigs: { [layerId: string]: any } =
            this.getLayerFixtureConfigs();

        legendConfig.root.children.forEach(legendItem => {
            // pass the layer legend fixture config
            legendItem.layerLegendConfigs = layerLegendConfigs;
            this.addItem(legendItem);
        });

        // update legend in case layers were added before the legend was created
        this.$iApi.geo.layer.allLayers().forEach(l => {
            this.updateLegend(l);
        });
        this.$iApi.geo.layer.allErrorLayers().forEach(l => {
            this.updateLegend(l);
        });
    }

    // Create

    /**
     * Construct a legend item given the legend config
     *
     * @param {any} itemConf legend item config
     * @param {LegendItem | undefined} parent the parent legend item for the created item
     * @returns {LegendItem} returns the constructed legend item
     * @memberof LegendAPI
     */
    createItem(itemConf: any, parent?: LegendItem): LegendItem {
        // validate the parent
        let parentItem = this._validateParent(parent);
        let item: LegendItem | undefined = undefined;

        if (
            itemConf.children !== undefined ||
            itemConf.exclusiveVisibility !== undefined
        ) {
            // (assuming visibility sets and groups will specify in config `exclusiveVisibility` or `children` properties, respectively)
            // create a wrapper legend object for group or visibility set
            item = new LegendGroup(itemConf, parentItem);

            // initialize objects for all non-hidden group/set children entries
            const children =
                itemConf.exclusiveVisibility !== undefined
                    ? itemConf.exclusiveVisibility
                    : itemConf.children;

            // construct children
            children
                .filter((childConf: any) => !childConf.hidden)
                .forEach((childConf: any) => {
                    // pass the layer fixture config to child items
                    if (itemConf.layerLegendConfigs !== undefined) {
                        childConf.layerLegendConfigs =
                            itemConf.layerLegendConfigs;
                    }

                    // ts ignoring below because returned item is "LegendItem", but accepted type is "LegendEntry | LegendGroup"
                    // which is the same thing! (╯°□°）╯︵ ┻━┻
                    //@ts-ignore
                    item!.children.push(this.createItem(childConf, item));
                });
        } else if (itemConf.layerId !== undefined) {
            // create a wrapper legend object for single legend entry
            // if the entry is a sublayer, override the entry id to the sublayers id
            if (itemConf.sublayerIndex !== undefined) {
                itemConf.layerParentId = itemConf.layerId;
                itemConf.layerId = `${itemConf.layerId}-${itemConf.sublayerIndex}`;
            }
            item = new LegendEntry(itemConf, parentItem);
        }

        return item!;
    }

    /**
     * Add a legend item given the legend config, or legend item instance
     *
     * @param {any | LegendItem} item the config for the legend item or a legend item instance
     * @param {LegendItem | undefined} parent optional parent item to create this item under
     * @returns {LegendItem} the added legend item
     * @memberof LegendAPI
     */
    addItem(item: any | LegendItem, parent?: LegendItem): LegendItem {
        // validate the parent
        parent = this._validateParent(parent);

        let constructedItem: LegendItem =
            item instanceof LegendItem ? item : this.createItem(item, parent);
        this._insertItem(constructedItem, parent);

        return constructedItem;
    }

    /**
     * Add a layer legend item given a layer instance
     *
     * @param {LayerInstance} layer the layer to create an item for
     * @param {LegendItem | undefined} parent optional parent item to create this item under
     * @returns {Promise<LegendItem>} a promise that resolves with the added legend item
     * @memberof LegendAPI
     */
    async addLayerItem(
        layer: LayerInstance,
        parent?: LegendItem
    ): Promise<LegendItem> {
        // validate the parent
        let parentItem = this._validateParent(parent);

        // only create a top-level legend item for the layer that will be in a placeholder state
        // if layer supports sublayers, create a legend group, else create a legend entry
        const item: LegendItem = layer.supportsSublayers
            ? new LegendGroup(
                  {
                      layer: layer,
                      name: layer.name,
                      visibility: layer.visibility
                  },
                  parentItem
              )
            : new LegendEntry(
                  {
                      layer: layer,
                      name: layer.name,
                      layerId: layer.id,
                      visibility: layer.visibility
                  },
                  parentItem
              );

        // add the legend entry/group to store
        // will be in a placeholder state until the layer is loaded
        this._insertItem(item, parentItem);

        if (layer.supportsSublayers) {
            // if layer supports sublayers, then we need to parse the
            // layer tree after loading and generate the children

            await layer.loadPromise();

            // TODO: could modify LayerInstance's getSublayer to do what this helper is doing.
            //       current getSublayer only checks the sublayer list one level down, but in
            //       a more complex layer tree the requested sublayer can be much more nested

            // local function to search a sublayer instance in the layer's tree with the given layer uid
            // we need this local function because it is possible that this layer has not been added to
            // the map yet, hence using geo.layer.getLayer will not work
            const getLayer = (uid: string): LayerInstance | undefined => {
                let queue = [layer];
                while (queue.length > 0) {
                    const l = queue.shift();
                    if (l && l.uid === uid) {
                        return l;
                    }
                    if (l) {
                        queue.push(...l.sublayers);
                    }
                }
            };

            // map out the layer's layer tree children into a legend configs and call addItem on each config
            const treeWalker = (node: TreeNode): any => {
                // the tree node does not have a reference to the layer, so we need to fetch sublayers manually
                // will be undefined for non-root + non-logical layers (a.k.a MIL sub groups)
                let currLayer = getLayer(node.uid)!;

                // current item legend config snippet
                let currItem: any = {};

                if (node.isLayerRoot && !node.isLogicalLayer) {
                    // is root, but not logical layer (MIL)
                    currItem.layer = currLayer;
                    currItem.name = currLayer.name;
                    // TODO: since .children is used here, only legend groups will be created here when MIL is added
                    //       can enhance later to use .exclusiveVisibility if user wants to add MIL as visibility set from wizard
                    currItem.children = node.children.map(childNode =>
                        treeWalker(childNode)
                    );
                } else if (!node.isLayerRoot && !node.isLogicalLayer) {
                    // is not root, and is not logical layer (MIL sub groups)
                    // coud merge above if-branch with this one, but will keep them separate for clarity
                    currItem.name = node.name;
                    // TODO: since .children is used here, only legend groups will be created here when MIL is added
                    //       can enhance later to use .exclusiveVisibility if user wants to add MIL as visibility set from wizard
                    currItem.children = node.children.map(childNode =>
                        treeWalker(childNode)
                    );
                } else if (node.isLogicalLayer) {
                    // is logical layer (regular layers and sublayers)
                    currItem.layer = currLayer;
                    currItem.name = currLayer.name;
                    currItem.layerId = currLayer.id;
                    currItem.sublayerIndex =
                        layer.layerIdx === -1 ? undefined : layer.layerIdx;
                }

                return currItem;
            };

            // for each child node -> parse & create item config -> create child legend item and append to this item
            layer
                .getLayerTree()
                .children.map(childNode => treeWalker(childNode))
                .map(childConf => this.addItem(childConf, item));
        }

        return item;
    }

    // Read

    /**
     * Returns `LegendConfig` section of the global config file.
     *
     * @readonly
     * @type {LegendConfig}
     * @memberof LegendAPI
     */
    get config(): LegendConfig | undefined {
        return super.config;
    }

    /**
     * Returns the full legend tree.
     * Note: This returns a direct reference to the legend tree. Mutations will persist.
     *
     * @returns {Array<LegendItem>} returns the full legend tree
     * @memberof LegendAPI
     */
    getLegend(): Array<LegendItem> {
        return (
            this.$vApp.$store.get<Array<LegendItem>>(LegendStore.children) || []
        );
    }

    /**
     * Maps the current legend tree into a legend config snippet.
     *
     * In addition to legend config schema properties, this snippet will also include
     * properties such as the item type, item's uid, layer uid etc.
     *
     * @returns {any} returns the legend config
     * @memberof LegendAPI
     */
    getLegendConfig(): any {
        return {
            root: {
                children: this.getLegend().map(item => item.getConfig())
            }
        };
    }

    /**
     * Get a legend item given its id or uid.
     *
     * @param {string} id the id or uid of the legend item
     * @returns {LegendItem | undefined} return legend item with given id or uid. returns undefined if item is not found.
     * @memberof LegendAPI
     */
    getItem(id: string): LegendItem | undefined {
        let legend: Array<LegendItem> = this.getLegend();

        let result: LegendItem | undefined;

        // first try fetching item with id
        legend.some((item: LegendItem) => {
            result = this._searchTree(
                item,
                (item: LegendItem) => item.id === id
            );
            return result !== undefined;
        });

        if (result === undefined) {
            // if item couldn't be found with the id, try using uid instead
            legend.some((item: LegendItem) => {
                result = this._searchTree(
                    item,
                    (item: LegendItem) => item.uid === id
                );
                return result !== undefined;
            });
        }

        return result;
    }

    /**
     * Get a legend item connected to the layer with the given id/uid or the given layer instance.
     *
     * @param {string | LayerInstance} layer the id/uid of the layer or layer instance
     * @returns {LegendItem | undefined} return legend item tied to the found layer. returns undefined if no such item is found.
     * @memberof LegendAPI
     */
    getLayerItem(layer: string | LayerInstance): LegendItem | undefined {
        let l: LayerInstance | undefined =
            typeof layer === 'string'
                ? this.$iApi.geo.layer.getLayer(layer)
                : layer;
        return this.getItem(l?.id || '');
    }

    /**
     * Get all legend items with the given expanded state.
     * Not specifying the expanded state will return all items with expanded set to `true`
     *
     * @param {boolean | undefined} expanded the expanded state to check for
     * @returns {Array<LegendItem>} the items with the given expanded state
     * @memberof LegendAPI
     */
    getAllExpanded(expanded?: boolean): Array<LegendItem> {
        let legend: Array<LegendItem> = this.getLegend();
        let items: Array<LegendItem> = [];
        let check = expanded ?? true;

        legend.forEach(item => {
            items.push(
                ...this._searchTreeAll(item, (item: LegendItem) => {
                    return (
                        item instanceof LegendGroup && item.expanded === check
                    );
                })
            );
        });

        return items;
    }

    /**
     * Get all legend items with the given visibility state.
     * Not specifying the visibility state will return all items with visibility set to `true`
     *
     * @param {boolean | undefined} visibility the visibility state to check for
     * @returns {Array<LegendItem>} the items with the given expanded state
     * @memberof LegendAPI
     */
    getAllVisible(visibility?: boolean): Array<LegendItem> {
        let legend: Array<LegendItem> = this.getLegend();
        let items: Array<LegendItem> = [];
        let check = visibility ?? true;

        legend.forEach(item => {
            items.push(
                ...this._searchTreeAll(item, (item: LegendItem) => {
                    return (
                        (item instanceof LegendGroup ||
                            item instanceof LegendEntry) &&
                        item.visibility === check
                    );
                })
            );
        });

        return items;
    }

    // Update

    /**
     * Update an existing legend entry with data from the given layer
     * Does nothing if the legend entry is not found
     *
     * @param {LayerInstance} layer the layer to update the legend entry with
     * @memberof LegendAPI
     */
    updateLegend(layer: LayerInstance): void {
        // helper function to link a layer into a legend entry
        const updateEntry = (layer: LayerInstance) => {
            const entry: LegendItem | undefined = this.getItem(layer.id);
            (entry as LegendEntry)?.loadLayer(layer);
        };
        const errorEntry = (layer: LayerInstance | string) => {
            const entry: LegendItem | undefined = this.getItem(
                layer instanceof LayerInstance ? layer.id : layer
            );
            (entry as LegendEntry)?.setErrorType();
        };
        layer
            .loadPromise()
            .then(() => {
                updateEntry(layer); // update the root entry first
                if (layer.supportsSublayers) {
                    layer.sublayers.forEach((sublayer: LayerInstance) => {
                        updateEntry(sublayer); // the legend entries will use the sublayer
                    });
                }
            })
            .catch(() => {
                errorEntry(layer); // update the root entry first
                if (layer.supportsSublayers) {
                    layer.config.sublayers.forEach((sublayer: any) => {
                        errorEntry(`${layer.id}-${sublayer.index}`); // hacky solution because sublayers arent created on error
                    });
                }
            });
    }

    /**
     * Set the expanded state of legend items to `expanded`
     *
     * @param {boolean} expanded the expanded state the items will be set to
     * @param {LegendItem | undefined} root the root item to start updating the expanded state from
     * @memberof LegendAPI
     */
    expandItems(expanded: boolean, root?: LegendItem): void {
        let legend: Array<LegendItem> = this.getLegend();
        let items = root === undefined ? legend : root.children;
        if (root !== undefined) {
            this._toggleState(root, { expanded: expanded });
        }
        items.forEach((item: LegendItem) => {
            this._toggleState(item, { expanded: expanded });
        });
    }

    /**
     * Set the visibility state of legend items to `visibility`
     *
     * @param {boolean} visibility the visibility state the items will be set to
     * @param {LegendItem | undefined} root the root item to start updating the visibility state from
     * @memberof LegendAPI
     */
    showItems(visibility: boolean, root?: LegendItem): void {
        let legend: Array<LegendItem> = this.getLegend();
        let items = root === undefined ? legend : root.children;
        if (root !== undefined) {
            this._toggleState(root, { visibility: visibility });
        }
        items.forEach((item: LegendItem) => {
            this._toggleState(item, { visibility: visibility });
        });
    }

    /**
     * Reload the legend item connected to the layer with the given layer id/uid
     *
     * @param {string} layerId the id or uid of the reloaded layer
     * @returns {boolean} returns true if item was successfully reloaded, false otherwise
     * @memberof LegendAPI
     */
    reloadLayerItem(layerId: string): boolean {
        let item: LegendItem | undefined = this.getLayerItem(layerId);

        if (!item) {
            return false;
        }

        if (!(item instanceof LegendEntry)) {
            console.warn(
                'reloading is not supported for non-legend entry items'
            );
            return false;
        }

        item.reload();
        return true;
    }

    // Delete

    /**
     * Removes the legend item with the given id, uid, or the item instance.
     *
     * @param {string | LegendItem} item the uid/id of item or legend item instance to be removed
     * @returns {boolean} returns true if item was removed, false otherwise
     * @memberof LegendAPI
     */
    removeItem(item: string | LegendItem): boolean {
        let itemToRemove: LegendItem | undefined =
            typeof item === 'string' ? this.getItem(item) : item;

        if (itemToRemove !== undefined) {
            return this._deleteItem(itemToRemove);
        }

        return false;
    }

    /**
     * Remove the legend item connected to the layer with the given id/uid or the given layer instance.
     *
     * @param {string | LayerInstance} layer the id/uid of the layer or layer instance
     * @returns {boolean} returns true if item was removed, false otherwise
     * @memberof LegendAPI
     */
    removeLayerItem(layer: string | LayerInstance): boolean {
        let itemToRemove: LegendItem | undefined = this.getLayerItem(layer);

        if (itemToRemove !== undefined) {
            return this._deleteItem(itemToRemove);
        }

        return false;
    }

    // _Helpers

    /**
     * Search for first legend item that satisfies the predicate, starting from the given root item.
     *
     * @param {LegendItem} root the root item to start searching from
     * @param {(item: LegendItem) => boolean} predicate boolean predicate to test each item
     * @returns {LegendItem \ undefined} return the first item that satisfies the given predicate. returns undefined if item is not found.
     */
    private _searchTree(
        root: LegendItem,
        predicate: (item: LegendItem) => boolean
    ): LegendItem | undefined {
        if (predicate(root)) {
            return root;
        } else {
            let result: LegendItem | undefined;
            root.children.some((child: LegendItem) => {
                result = this._searchTree(child, predicate);
                return result !== undefined;
            });
            return result;
        }
    }

    /**
     * Search for all legend items that satisfy the predicate, starting from the given root item.
     *
     * @param {LegendItem} root the root item to start searching from
     * @param {(item: LegendItem) => boolean} predicate predicate boolean predicate to test each item
     * @returns {LegendItem \ undefined} return the first item that satisfies the given predicate. returns undefined if item is not found.
     */
    private _searchTreeAll(
        root: LegendItem,
        predicate: (item: LegendItem) => boolean
    ): Array<LegendItem> {
        let items: Array<LegendItem> = [];

        // good-ol' bfs
        let queue: Array<LegendItem> = [root];
        while (queue.length > 0) {
            const item = queue.shift();
            if (item && predicate(item)) {
                items.push(item);
            }
            if (item) {
                queue.push(...item.children);
            }
        }

        return items;
    }

    /**
     * Toggles visibility for all items or expands/collapses all groups.
     *
     * @param {LegendItem} item current legend item that is being checked
     * @param {any} options specifies whether visibility or expand/collapse functionality is to be changed
     */
    private _toggleState(item: LegendItem, options: any): void {
        const visibility = options.visibility;
        const expanded = options.expanded;
        // for current legend child toggle properties if possible, check for appropriate legend element type
        if (
            visibility !== undefined &&
            (item instanceof LegendGroup || item instanceof LegendEntry)
        ) {
            // visibility set edge case
            if (
                !(
                    item.parent instanceof LegendGroup &&
                    item.parent.visibility === visibility
                )
            ) {
                item.toggleVisibility(visibility);
            }
        }
        if (expanded !== undefined && item instanceof LegendGroup) {
            item.toggleExpanded(expanded);
        }
        // traverse the tree and make recursive calls
        if (item.children && item.children.length > 0) {
            item.children.forEach(ch => {
                // level order traversal
                this._toggleState(ch, options);
            });
        }
    }

    /**
     * Add the given legend item to the legend store
     *
     * @param {Legenditem} item the legend item to be added
     * @param {LegendItem | undefined} parent the parent legend group for this entry
     */
    private _insertItem(item: LegendItem, parent?: LegendItem): void {
        // remove item to store
        this.$iApi.$vApp.$store.dispatch(LegendStore.addItem, { item, parent });
    }

    /**
     * Deletes the given legend item from the legend store
     *
     * @param {Legenditem} item the legend item to be deleted
     * @returns {boolean} returns true if item was removed, false otherwise
     */
    private _deleteItem(item: LegendItem): boolean {
        // Need this check for now because LegendItem does not completely encapsulate the entry and group classes
        if (!(item instanceof LegendEntry)) {
            console.error(
                'deleting is not supported for non-legend entry items'
            );
            return false;
        }

        // remove item from store
        this.$iApi.$vApp.$store.dispatch(LegendStore.removeItem, item);

        return true;
    }

    /**
     * Checks if the given legend item is a legend group.
     * Will return the same item if it is a legend group, and will return undefined otherwise
     *
     * @param {LegendItem | undefined} parent the legend item to validate
     * @returns {LegendGroup | undefined} returns the parent parameter if it is a legend group, and returns undefined otherwise
     */
    private _validateParent(parent?: LegendItem): LegendGroup | undefined {
        if (parent !== undefined && !(parent instanceof LegendGroup)) {
            console.warn(
                'attempted to use a non-group legend item as a parent item - will default to using the legend root'
            );
            return undefined;
        }
        return parent;
    }
}
