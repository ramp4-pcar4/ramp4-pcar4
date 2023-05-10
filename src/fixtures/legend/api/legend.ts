import { FixtureInstance, LayerInstance } from '@/api';
import { LayerType, type TreeNode } from '@/geo/api';
import { type LegendConfig, useLegendStore } from '../store';
import { LayerItem } from '../store/layer-item';
import { LegendItem } from '../store/legend-item';
import { SectionItem } from '../store/section-item';

export class LegendAPI extends FixtureInstance {
    /**
     * Parses the legend config JSON snippet from the config file and save resulting objects to the fixture store.
     *
     * @param {LegendConfig | undefined} legendConfig
     */
    _parseConfig(legendConfig?: LegendConfig): void {
        // parse the header controls, or default the controls
        const controls: Array<string> =
            legendConfig?.headerControls?.slice() ?? [
                'wizard',
                'layerReorder',
                'groupToggle',
                'visibilityToggle'
            ];
        useLegendStore(this.$vApp.$pinia).headerControls = controls;

        if (!legendConfig || !legendConfig.root.children) {
            return;
        }

        this.handlePanelWidths(['legend']);

        // get all layer fixture configs to read layer-specific legend properties
        const layerLegendConfigs: { [layerId: string]: any } =
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
        let item: LegendItem | undefined = undefined;

        if (itemConf.layerId === undefined) {
            // (assuming visibility sets and groups will specify in config `exclusiveVisibility` or `children` properties, respectively)
            // create a wrapper legend object for group or visibility set
            item = new SectionItem(this.$iApi, itemConf, parent);
        } else {
            // create a wrapper legend object for single layer item
            // if the item is a sublayer, override the item id to the sublayers id
            if (itemConf.sublayerIndex !== undefined) {
                itemConf.layerId = `${itemConf.layerId}-${itemConf.sublayerIndex}`;
            }
            item = new LayerItem(
                this.$iApi,
                itemConf,
                parent
            ) as unknown as LegendItem;
        }

        // initialize objects for all non-hidden group/set children entries
        const children = itemConf.children;

        // construct children
        if (children) {
            children.forEach((childConf: any) => {
                // pass the layer fixture config to child items
                if (itemConf.layerLegendConfigs !== undefined) {
                    childConf.layerLegendConfigs = itemConf.layerLegendConfigs;
                }

                // ts ignoring below because returned item is "LegendItem", but accepted type is "LayerItem | SectionItem"
                // which is the same thing! (╯°□°）╯︵ ┻━┻
                //@ts-ignore
                item!.children.push(this.createItem(childConf, item));
            });
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
        const constructedItem: LegendItem =
            item instanceof LegendItem ? item : this.createItem(item, parent);
        this._insertItem(constructedItem, parent);

        return constructedItem;
    }

    /**
     * Add a layer legend item given a layer instance
     *
     * @param {LayerInstance} layer the layer to create an item for
     * @param {LegendItem | undefined} parent optional parent item to create this item under
     * @returns {Promise<LegendItem>} a promise that resolves with the added layer item
     * @memberof LegendAPI
     */
    async addLayerItem(
        layer: LayerInstance,
        parent?: LegendItem
    ): Promise<LayerItem> {
        // only create a top-level legend item for the layer that will be in a placeholder state
        const item: LayerItem = new LayerItem(
            this.$iApi,
            {
                layerId: layer.id,
                sublayerIndex:
                    layer.layerIdx !== -1 ? layer.layerIdx : undefined,
                name: layer.name
            },
            parent
        );
        // add the layer item to store
        // will be in a placeholder state until the layer is loaded
        this._insertItem(item as unknown as LegendItem, parent);

        if (layer.supportsSublayers) {
            // if layer supports sublayers, then we need to parse the
            // layer tree after loading and generate the children

            await layer.loadPromise();

            // for each child node -> parse & create item config -> create child legend item and append to this item
            layer
                .getLayerTree()
                .children.map(childNode => this._treeWalker(layer, childNode))
                .map(childConf =>
                    this.addItem(childConf, item as unknown as LegendItem)
                );
        }

        item.treeGrown = true;

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
            (useLegendStore(this.$vApp.$pinia)
                .children as unknown as Array<LegendItem>) || []
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
     * Get a legend item given its uid.
     *
     * @param {string} uid the uid of the legend item
     * @returns {LegendItem | undefined} return legend item with given uid. returns undefined if item is not found.
     * @memberof LegendAPI
     */
    getItem(uid: string): LegendItem | undefined {
        const legend: Array<LegendItem> = this.getLegend();

        let result: LegendItem | undefined;
        legend.some((item: LegendItem) => {
            result = this._searchTree(
                item,
                (item: LegendItem) => item.uid === uid
            );
            return result !== undefined;
        });

        return result;
    }

    /**
     * Get a layer item connected to the layer with the given id/uid or the given layer instance.
     *
     * @param {string | LayerInstance} layer the id/uid of the layer or layer instance
     * @returns {LegendItem | undefined} return layer item tied to the found layer. returns undefined if no such item is found.
     * @memberof LegendAPI
     */
    getLayerItem(layer: string | LayerInstance): LayerItem | undefined {
        let id: string = typeof layer === 'string' ? layer : layer.id;
        const legend: Array<LegendItem> = this.getLegend();

        let result: LayerItem | undefined;

        // first try fetching item with id
        legend.some((item: LegendItem) => {
            result = this._searchTree(
                item,
                (item: LegendItem) =>
                    item instanceof LayerItem && item.layerId === id
            ) as unknown as LayerItem;
            return result !== undefined;
        });

        if (result === undefined) {
            // if item couldn't be found with the id, try using uid instead
            id = typeof layer === 'string' ? layer : layer.uid;
            legend.some((item: LegendItem) => {
                result = this._searchTree(
                    item,
                    (item: LegendItem) =>
                        item instanceof LayerItem && item.layerUid === id
                ) as unknown as LayerItem;
                return result !== undefined;
            });
        }

        return result;
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
        const legend: Array<LegendItem> = this.getLegend();
        const items: Array<LegendItem> = [];
        const check = expanded ?? true;

        legend.forEach(item => {
            items.push(
                ...this._searchTreeAll(item, (item: LegendItem) => {
                    return (
                        item.children.length > 0 && item.expanded === check // Do we want to include leaves here?
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
        const legend: Array<LegendItem> = this.getLegend();
        const items: Array<LegendItem> = [];
        const check = visibility ?? true;

        legend.forEach(item => {
            items.push(
                ...this._searchTreeAll(item, (item: LegendItem) => {
                    return item.visibility === check;
                })
            );
        });

        return items;
    }

    // Update

    /**
     * Update an existing layer item with data from the given layer
     * Does nothing if the layer item is not found
     *
     * @param {LayerInstance} layer the layer to update the layer item with
     * @memberof LegendAPI
     */
    updateLegend(layer: LayerInstance): void {
        // helper function to link a layer into a layer item
        const updateLayerItem = (
            layer: LayerInstance | string,
            error: boolean
        ) => {
            const layerItem: LayerItem | undefined = this.getLayerItem(layer);
            if (error) {
                if (layerItem && layer instanceof LayerInstance) {
                    layerItem.layer = layer;
                }
                layerItem?.error();
            } else {
                layerItem?.load(
                    layer instanceof LayerInstance ? layer : undefined
                );
            }
        };
        layer
            .loadPromise()
            .then(() => {
                let layerItem: LayerItem | undefined = this.getLayerItem(layer);
                // if load was cancelled, just update the parent and do not grow out tree
                if (layerItem?.loadCancelled) {
                    updateLayerItem(layer, false);
                    return;
                }
                if (layer.layerType === LayerType.MAPIMAGE) {
                    // For MIL, need to do tree growing magic
                    const treeParser = (node: TreeNode) => {
                        if (node.isLayerRoot && !node.isLogicalLayer) {
                            // is root, but not logical layer (MIL)
                            // grow out the full tree if it has not already been grown
                            layerItem = this.getLayerItem(layer);
                            updateLayerItem(layer, false);
                            if (layerItem && !layerItem.treeGrown) {
                                node.children
                                    .map(childNode =>
                                        this._treeWalker(layer, childNode)
                                    )
                                    .map(childConf =>
                                        this.addItem(
                                            childConf,
                                            layerItem as unknown as LegendItem
                                        )
                                    );
                                layerItem.treeGrown = true;
                            }
                            // parse child nodes
                            node.children.forEach(childNode =>
                                treeParser(childNode)
                            );
                        } else if (!node.isLayerRoot && !node.isLogicalLayer) {
                            // is not root, and is not logical layer (MIL sub groups)
                            // we remove the current layer item for the group, and instead turn it into a group
                            layerItem = this.getLayerItem(
                                `${layer.id}-${node.layerIdx}`
                            );
                            if (layerItem) {
                                const layerItemConf = layerItem.getConfig();
                                delete layerItemConf.layerId;
                                delete layerItemConf.sublayerIndex;
                                delete layerItemConf.children;
                                if (!layerItemConf.name) {
                                    delete layerItemConf.name;
                                }
                                const replacementConf = {
                                    ...this._treeWalker(layer, node),
                                    ...layerItemConf
                                };
                                const replacementItem: LegendItem =
                                    this.createItem(replacementConf);
                                this._replaceItem(
                                    layerItem as unknown as LegendItem,
                                    replacementItem
                                );
                            }
                            // parse child nodes
                            node.children.forEach(childNode =>
                                treeParser(childNode)
                            );
                        } else if (node.isLogicalLayer) {
                            // is logical layer (regular layers and sublayers)
                            updateLayerItem(
                                this._treeWalker(layer, node).layer,
                                false
                            );
                        }
                    };
                    treeParser(layer.getLayerTree());
                } else {
                    // For all other layer types, just update the layer item
                    updateLayerItem(layer, false);
                }
            })
            .catch(() => {
                updateLayerItem(layer, true); // update the root layer item first
                if (layer.supportsSublayers) {
                    layer.config.sublayers.forEach((sublayer: any) => {
                        updateLayerItem(`${layer.id}-${sublayer.index}`, true); // hacky solution because sublayers arent created on error
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
        const legend: Array<LegendItem> = this.getLegend();
        const items = root === undefined ? legend : root.children;
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
        const legend: Array<LegendItem> = this.getLegend();
        const items = root === undefined ? legend : root.children;
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
        const item: LayerItem | undefined = this.getLayerItem(layerId);

        if (!item) {
            return false;
        }

        if (!(item instanceof LayerItem)) {
            console.warn('reloading is not supported for non layer items');
            return false;
        }

        item._loadCancelled = false;
        item.reload();
        return true;
    }

    // Delete

    /**
     * Removes the legend item with the given uid, or the item instance.
     *
     * @param {string | LegendItem} item the uid of item or legend item instance to be removed
     * @returns {boolean} returns true if item was removed, false otherwise
     * @memberof LegendAPI
     */
    removeItem(item: string | LegendItem): boolean {
        const itemToRemove: LegendItem | undefined =
            typeof item === 'string' ? this.getItem(item) : item;

        if (itemToRemove !== undefined) {
            return this._deleteItem(itemToRemove);
        }

        return false;
    }

    /**
     * Remove the layer item connected to the layer with the given id/uid or the given layer instance.
     *
     * @param {string | LayerInstance} layer the id/uid of the layer or layer instance
     * @returns {boolean} returns true if item was removed, false otherwise
     * @memberof LegendAPI
     */
    removeLayerItem(layer: string | LayerInstance): boolean {
        const itemToRemove: LayerItem | undefined = this.getLayerItem(layer);

        if (itemToRemove !== undefined) {
            return this._deleteItem(itemToRemove as unknown as LegendItem);
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
        const items: Array<LegendItem> = [];

        // good-ol' bfs
        const queue: Array<LegendItem> = [root];
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
        if (visibility !== undefined) {
            // Seems to be working fine magically without the edge case check.
            // Adding the edge case check breaks toggling all visibility in some cases.
            // visibility set edge case
            // if (!(item.parent && item.parent.visibility === visibility)) {
            item.toggleVisibility(visibility);
            // }
        }
        if (expanded !== undefined && item.children.length > 0) {
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
     * @param {LegendItem | undefined} parent the parent legend item for this item
     */
    private _insertItem(item: LegendItem, parent?: LegendItem): void {
        useLegendStore(this.$vApp.$pinia).addItem({ item, parent });
    }

    /**
     * Deletes the given legend item from the legend store
     *
     * @param {Legenditem} item the legend item to be deleted
     * @returns {boolean} returns true if item was removed, false otherwise
     */
    private _deleteItem(item: LegendItem): boolean {
        // Need this check for now because LegendItem does not completely encapsulate the item and section classes
        if (item.children.length > 0) {
            item.children.forEach((child: LegendItem) => {
                child.parent = item.parent;
                this._insertItem(child, item.parent);
            });
        }
        // unhook layer item listeners
        if (item instanceof LayerItem) {
            item.handlers.forEach(handler => this.$iApi.event.off(handler));
        }

        // remove item from store
        useLegendStore(this.$vApp.$pinia).removeItem(item);

        return true;
    }

    private _replaceItem(oldItem: LegendItem, newItem: LegendItem) {
        useLegendStore(this.$vApp.$pinia).replaceItem({ oldItem, newItem });
    }

    // map out layer's layer tree children into a legend configs
    private _treeWalker(
        layer: LayerInstance,
        node: TreeNode,
        extraConfig?: object
    ): any {
        // the tree node does not have a reference to the layer, so we need to fetch sublayers manually
        // will be undefined for non-root + non-logical layers (a.k.a MIL sub groups)

        // TODO: could modify LayerInstance's getSublayer to do what this helper is doing.
        //       current getSublayer only checks the sublayer list one level down, but in
        //       a more complex layer tree the requested sublayer can be much more nested

        // local function to search a sublayer instance in the layer's tree with the given layer uid
        // we need this local function because it is possible that this layer has not been added to
        // the map yet, hence using geo.layer.getLayer will not work
        const getLayer = (uid: string): LayerInstance | undefined => {
            const queue = [layer];
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

        const currLayer = getLayer(node.uid)!;

        // current item legend config snippet
        const currItem: any = {};

        if (node.isLayerRoot && !node.isLogicalLayer) {
            // is root, but not logical layer (MIL)
            currItem.layer = currLayer;
            currItem.name = currLayer.name;
            // TODO: since .children is used here, only legend groups will be created here when MIL is added
            //       can enhance later to use .exclusiveVisibility if user wants to add MIL as visibility set from wizard
            currItem.children = node.children.map(childNode =>
                this._treeWalker(layer, childNode, extraConfig)
            );
        } else if (!node.isLayerRoot && !node.isLogicalLayer) {
            // is not root, and is not logical layer (MIL sub groups)
            // coud merge above if-branch with this one, but will keep them separate for clarity
            currItem.name = node.name;
            // TODO: since .children is used here, only legend groups will be created here when MIL is added
            //       can enhance later to use .exclusiveVisibility if user wants to add MIL as visibility set from wizard
            currItem.children = node.children.map(childNode =>
                this._treeWalker(layer, childNode, extraConfig)
            );
        } else if (node.isLogicalLayer) {
            // is logical layer (regular layers and sublayers)
            currItem.layer = currLayer;
            currItem.name = currLayer.name;
            currItem.layerId = currLayer.id;
            currItem.sublayerIndex =
                layer.layerIdx === -1 ? undefined : layer.layerIdx;
        }

        return { ...currItem, ...extraConfig };
    }
}
