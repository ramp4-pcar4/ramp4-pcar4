import { DefPromise, LayerType, LegendSymbology, TreeNode } from '@/geo/api';
import { LayerInstance } from '@/api/internal';

/**
 * Function definitions for legend item wrapper objects.
 */
export class LegendItem {
    _uid: string;
    _id: string;
    _name: string;
    _type: LegendTypes;
    _controls: Array<string>;
    _children: Array<LegendEntry | LegendGroup> = [];
    _parent: LegendGroup | undefined = undefined; // can only be a legend group or visibility set
    _loadPromise: DefPromise; // promise that resolves when legend item is loaded

    _hidden: boolean;
    _itemConfig: any;

    /**
     * Create a new legend item with defaulting for all properties given config snippet, id is required.
     */
    constructor(legendItem: any) {
        this._loadPromise = new DefPromise();
        this._id = legendItem.layerId;
        this._name = legendItem.name !== undefined ? legendItem.name : '';
        this._type =
            legendItem.type !== undefined ? legendItem.type : LegendTypes.Entry;
        this._controls =
            legendItem.controls !== undefined
                ? legendItem.controls
                : [
                      Controls.Visibility,
                      Controls.BoundaryZoom,
                      Controls.Refresh,
                      Controls.Reload,
                      Controls.Remove,
                      Controls.Datatable,
                      Controls.Settings,
                      Controls.Symbology
                  ];
        this._hidden =
            legendItem.hidden !== undefined ? legendItem.hidden : false;
        this._itemConfig = legendItem;

        this._uid = RAMP.GEO.sharedUtils.generateUUID();
    }

    /** Returns the item's id. */
    get id(): string {
        return this._id;
    }

    /** Returns the item's uid. */
    get uid(): string {
        return this._uid;
    }

    /** Returns the item's name. */
    get name(): string {
        return this._name;
    }

    /** Returns the item's type. */
    get type(): string {
        return this._type;
    }

    /** Returns if item is hidden. */
    get hidden(): boolean {
        return this._hidden;
    }

    /** Returns item's parent - not yet initialized. */
    get parent(): LegendItem | undefined {
        return this._parent;
    }

    /** Returns children of the legend item, which is an empty array for single entries and and an array of legend groups (nested) or single legend entries for groups. */
    get children(): Array<LegendGroup | LegendEntry> {
        return this._children;
    }

    /** Sets children of the legend item */
    set children(children: Array<LegendGroup | LegendEntry>) {
        this._children = children;
    }

    /** Returns the load promise for this legend item */
    get loadPromise(): Promise<void> {
        return this._loadPromise.getPromise();
    }

    /**
     * Removes element from legend and removes layer if it's the last reference to it.
     */
    remove(): void {}

    /**
     * Reloads element in legend.
     */
    reload(): void {}

    /**
     * Check if a control is available for the legend item.
     * @param control name of the control
     * @return {boolean} - true if the control is included in legend item's available controls
     */
    _controlAvailable(control: Controls): boolean {
        return this._controls.includes(control);
    }
}

/**
 * `LegendEntry` can either be a single legend entry or an info section (no link to layer).
 */
export class LegendEntry extends LegendItem {
    _layer: LayerInstance | undefined;
    _layerParentId: string | undefined;
    _layerIdx: number | undefined;
    _symbologyExpanded: boolean;

    /**
     * Creates a new single legend entry.
     * @param legendEntry legend entry config snippet
     */
    constructor(legendEntry: any, parent: LegendGroup | undefined = undefined) {
        super(legendEntry);
        this._parent = parent;
        this._type = LegendTypes.Placeholder; // entry will be in a placeholder state by default

        this._layerParentId = legendEntry.layerParentId; // will only be defined for sublayers
        this._layerIdx = legendEntry.entryIndex; // will only be defined for sublayers
        this._symbologyExpanded = legendEntry.symbologyExpanded || false;

        if (legendEntry.layer !== undefined) {
            // the legend entry config provides a layer, load layer properties from it
            this.loadLayer(legendEntry.layer);
        }
    }

    /** Returns the UID of the layer */
    get layerUID(): string | undefined {
        return this._layer?.uid;
    }

    /** Returns the parent layer id for this layer. Only defined for sublayers */
    get layerParentId(): string | undefined {
        return this._layerParentId;
    }

    /** Returns the entry index of the layer */
    get entryIndex(): number | undefined {
        return this._layerIdx;
    }

    /** Returns visibility of layer. */
    get visibility(): boolean | undefined {
        return this._layer?.visibility;
    }

    /** Returns BaseLayer associated with legend entry. */
    get layer(): LayerInstance | undefined {
        return this._layer;
    }

    /** Returns layer tree associated with legend entry. */
    get layerTree(): TreeNode | undefined {
        return this._layer?.getLayerTree();
    }

    /** Returns the layer's legend symbology */
    get legend(): Array<LegendSymbology> | undefined {
        return this._layer?.legend;
    }

    /** Returns true if symbology stack is expanded. */
    get symbologyExpanded(): boolean {
        return this._symbologyExpanded;
    }

    /**
     * Sets entry back to a loading state
     */
    reload(): void {
        // reset the entry to a placeholder state
        this._type = LegendTypes.Placeholder;
        this._loadPromise = new DefPromise();
    }

    /**
     * Removes element from legend and removes layer if it's the last reference to it.
     */
    remove(): void {
        // set it's visibility to false and update parent visibility
        this.toggleVisibility(false, true);
    }

    /**
     * Have the entry adapt and update to the given layer as it loads.
     * Is either called in the constructor, or through the legend api
     */
    loadLayer(layer: LayerInstance): void {
        this._layer = layer;
        this._layer.isLayerLoaded().then(() => {
            if (
                this._layer?.layerType === LayerType.MAPIMAGE &&
                !this._layerIdx
            ) {
                this._type = LegendTypes.Placeholder;
                console.error(
                    `MapImageLayer has no entryIndex defined - ${this._itemConfig.layerId} (${this._itemConfig.name})`
                );
                this._loadPromise.rejectMe();
            } else {
                this._type = LegendTypes.Entry;
                // override config values with layer properties
                this._id = layer.id;
                this._layerIdx =
                    layer.layerIdx === -1 ? undefined : layer.layerIdx;
                this._layerParentId = layer.isSublayer
                    ? layer.parentLayer!.id
                    : undefined;

                // remove controls if layer doesn't support them
                let controlsToRemove: Array<string> = [];
                if (!layer.supportsFeatures) {
                    controlsToRemove.push(Controls.Datatable);
                }
                if (layer.extent === undefined) {
                    controlsToRemove.push(Controls.BoundaryZoom);
                }
                controlsToRemove.forEach(control => {
                    let idx: number = this._controls.indexOf(control);
                    if (idx !== -1) {
                        this._controls.splice(idx, 1);
                    }
                });

                this.checkVisibilityRules();
                if (!layer.visibility) {
                    // if the layer is invisible, set all child symbols to invisible
                    this.setChildSymbologyVisibility(undefined, false);
                }
                this._loadPromise.resolveMe();
            }
        });
    }

    /**
     * Toggles the symbology expand and returns the new value
     *
     * @param {boolean} expanded optional parameter to toggle expanded to a certain value
     */
    toggleSymbologyExpand(expanded: boolean | undefined = undefined): boolean {
        this._symbologyExpanded =
            expanded !== undefined ? expanded : !this._symbologyExpanded;
        return this._symbologyExpanded;
    }

    /**
     * Sets the visibility of the child symbology with the given uid
     * If the provided UID is undefined, set the visibility of all symbols
     *
     * @param {uid | undefined} uid the uid of the child legend symbology
     * @param value The new visibility value
     */
    setChildSymbologyVisibility(uid: string | undefined, value: boolean): void {
        this._layer?.legend.some((item: LegendSymbology) => {
            if (uid === undefined || item.uid === uid) {
                item.visibility = value;
                item.lastVisbility = value;
            }
            return uid !== undefined && item.uid === uid;
        });
    }

    /**
     * Ensures visibility rules are followed if legend entry nested in legend group/set on initialization.
     */
    checkVisibilityRules(): void {
        if (!this._layer) {
            return;
        }

        // if parent is turned off turn layer entry visiblity off
        if (this._parent !== undefined && !this._parent.visibility) {
            this._layer.visibility = false;
        } else if (this._parent?.type === LegendTypes.Set) {
            // toggle off visibility if entry is part of a visibility set with a set entry already toggled on
            const childVisible = this._parent.children.some(
                entry => entry.visibility && entry !== this
            );

            if (childVisible) {
                this._layer.visibility = false;
            }
        }
    }

    /**
     * Sets visibility of the Legend Entry - needs to verify parent visibility is updated.
     * @param visibility - true if visible, false if invisible, undefined means toggle visibility
     */
    toggleVisibility(
        visibility: boolean | undefined = undefined,
        updateParent: boolean = true
    ): void {
        if (this._controls.includes(Controls.Visibility)) {
            // do nothing if visibility of entry is already equal to the argument value
            if (this.visibility === visibility || !this._layer) {
                return;
            }

            this._layer.visibility =
                visibility !== undefined ? visibility : !this.visibility;

            // Check if some of the child symbols have their definition visibility on
            const noDefinitionsVisible: boolean = !this._layer.legend.some(
                (item: LegendSymbology) => item.lastVisbility
            );

            this._layer.legend.forEach((item: LegendSymbology) => {
                if (noDefinitionsVisible) {
                    // If there are no definitions visible and we toggled the parent layer on
                    // then we set all the children to visible
                    item.lastVisbility = true;
                }
                item.visibility = this.visibility ? item.lastVisbility : false;
            });

            // update parent visibility if current legend entry is part of a group or set
            if (this._parent instanceof LegendGroup && updateParent) {
                this._parent.checkVisibility(this);
            }
        }
    }

    /**
     * Set the layer's opacity
     * Value must be within [0, 1]
     *
     * @param opacity the new layer opacity
     */
    setOpacity(opacity: number): void {
        if (this._layer) {
            this._layer.opacity = opacity;
        }
    }

    /**
     * Toggle the layer's identify
     */
    toggleIdentify(identify: boolean): void {
        if (this._layer) {
            this._layer.identify = identify;
        }
    }
}

/**
 * Create a legend group (which can also be visibility sets) which can contain children - providing nesting capability for Legends.
 */
export class LegendGroup extends LegendItem {
    _expanded: boolean;
    _visibility: boolean;
    _lastVisible: LegendEntry | LegendGroup | undefined;
    _visibleEntries: Array<LegendEntry | LegendGroup> = [];

    /**
     * Creates a new LegendGroup and stores all children.
     * @param legendGroup legend group config snippet
     */
    constructor(legendGroup: any, parent: LegendGroup | undefined = undefined) {
        super(legendGroup);
        this._parent = parent;
        this._type = LegendTypes.Placeholder; // group will be in a placeholder state by default

        this._expanded = legendGroup.expanded || true;
        this._visibility = legendGroup.visibility || true;

        if (legendGroup.layer !== undefined) {
            // if provided a layer object, wait for the layer to load before initializing
            legendGroup.layer.isLayerLoaded().then(() => {
                const parseLayers = (layers: Array<LayerInstance>): any => {
                    return layers.map((layer: LayerInstance) =>
                        layer.isSublayer
                            ? {
                                  // create legend entry config
                                  layer: layer,
                                  layerId: layer.id,
                                  name: layer.name,
                                  entryIndex:
                                      layer.layerIdx === -1
                                          ? undefined
                                          : layer.layerIdx
                              }
                            : {
                                  // create legend group config
                                  name: layer.name,
                                  children: parseLayers(layer.sublayers)
                              }
                    );
                };
                // map the sublayers of the given layer into legend entries/groups
                legendGroup.children = parseLayers(legendGroup.layer.sublayers);
                this._initGroupProperties(legendGroup);
            });
        } else {
            // otherwise just initialize the group
            this._initGroupProperties(legendGroup);
        }
    }

    /**
     * Set group properties such as id, visibility and opacity. Called whenever group is created or reloaded.
     * @param legendGroup config snippet for legend group
     */
    _initGroupProperties(legendGroup: any): void {
        // update the type
        if (legendGroup.exclusiveVisibility !== undefined) {
            this._type = legendGroup.exclusiveVisibility
                ? LegendTypes.Set
                : LegendTypes.Group;
        } else {
            this._type = LegendTypes.Group;
        }

        // initialize objects for all non-hidden group/set children entries
        const children =
            this._type === LegendTypes.Set
                ? legendGroup.exclusiveVisibility
                : legendGroup.children;
        children
            .filter((entry: any) => !entry.hidden)
            .forEach((entry: any) => {
                // create new LegendGroup/LegendEntry and push to child array
                if (
                    entry.exclusiveVisibility !== undefined ||
                    entry.children !== undefined
                ) {
                    this._children.push(new LegendGroup(entry, this));
                } else {
                    // if the entry is a sublayer, set the entry id to the sublayers id
                    if (entry.entryIndex !== undefined) {
                        entry.layerParentId = entry.layerId;
                        entry.layerId = `${entry.layerId}-${entry.entryIndex}`;
                    }
                    this._children.push(new LegendEntry(entry, this));
                }
            });

        this._loadPromise.resolveMe();
    }

    /**
     * Ensures visibility rules are followed if legend group is nested in another group/set on initialization.
     */
    checkVisibilityRules(): void {
        if (!this._visibility) {
            return;
        }
        // if parent is turned off turn layer entry visiblity off
        if (this._parent !== undefined && !this._parent.visibility) {
            this.toggleVisibility(false, false);
        } else if (this._parent?.type === LegendTypes.Set) {
            // toggle off visibility if entry is part of a visibility set with a set entry already toggled on
            const childVisible = this._parent.children.some(
                entry => entry.visibility && entry !== this
            );

            if (childVisible) {
                this.toggleVisibility(false, false);
            }
        }
    }

    /**
     * Gets visibility of the Legend Group.
     * @return {boolean | undefined} - true if the item is currently visible, false if invisible, undefined if "visibility" is not part of controls
     */
    get visibility(): boolean | undefined {
        return this._visibility;
    }

    /**
     * Gets expanded value of the LegendGroup.
     * @return {boolean | undefined} - true if the group isexpanded, false if the group is collapsed
     */
    get expanded(): boolean | undefined {
        return this._expanded;
    }

    /**
     * Sets last visible child entry for visibility sets.
     * @param entry last visible entry in set
     */
    set lastVisible(entry: LegendEntry | LegendGroup) {
        this._lastVisible = entry;
    }

    /**
     * Toggles/collapses legend group.
     * @param expanded true if group should be expanded, false if group should be collapsed, or undefined if group should just be toggled
     */
    toggleExpanded(expanded: boolean | undefined = undefined): void {
        expanded !== undefined
            ? (this._expanded = expanded)
            : (this._expanded = !this._expanded);
    }

    /**
     * Updates group visibility after a child entry's visibility toggles.
     */
    checkVisibility(toggledChild: LegendEntry | LegendGroup): void {
        if (this._type === LegendTypes.Group) {
            // if any children entries are toggled on group must be toggled on, else if all children entries are toggled off, group must be toggled off
            if (this._children.some(entry => entry.visibility)) {
                this._visibility = true;
                // save all entries with visibility on
                this._visibleEntries = this._children.filter(
                    entry => entry.visibility
                );
            } else if (this._children.every(entry => !entry.visibility)) {
                this._visibility = false;
                this._visibleEntries = [];
            }
        } else if (toggledChild.visibility) {
            // turn off all child entries except for the last one toggled on, mark that as the last visible entry in the set
            this.children.forEach(entry => {
                if (entry.visibility && entry.id !== toggledChild.id) {
                    entry.toggleVisibility(false, false);
                }
            });
            this._lastVisible = toggledChild;
            this._visibility = true;
        } else {
            this._lastVisible = toggledChild;
            this._visibility = false;
        }

        // case for updating nested groups
        if (this.parent instanceof LegendGroup) {
            this.parent.checkVisibility(this);
        }
    }

    /**
     * Toggles group visibility to show/hide children.
     * @param visible true if group should have visibility toggled on, false if group visibility should be toggled off, or undefined if group visibility should be toggled
     */
    toggleVisibility(
        visible: boolean | undefined = undefined,
        updateParent: boolean = true
    ): void {
        const oldVal = this._visibility;
        this._visibility = visible !== undefined ? visible : !this._visibility;
        // check if visibility value changes
        if (oldVal === this._visibility) {
            return;
        }

        if (this._type === LegendTypes.Group) {
            // for legend groups, if group is toggled on turn on visibility for all children that are saved, and all children if none are saved
            if (this._visibility) {
                this._visibleEntries.length > 0
                    ? this._visibleEntries.forEach(entry =>
                          entry.toggleVisibility(this._visibility, false)
                      )
                    : this._children.forEach(entry =>
                          entry.toggleVisibility(this._visibility, false)
                      );
            } else {
                // otherewise turn off visibility for all children
                this._children.forEach(entry =>
                    entry.toggleVisibility(this._visibility, false)
                );
            }
        } else {
            // otherwise for visibility sets ensure that there is only one child entry visible
            if (this._visibility) {
                // toggle the last visible child on or by default the first child entry in the set
                this._lastVisible !== undefined
                    ? this._lastVisible.toggleVisibility(true)
                    : this._children[0].toggleVisibility(true);
            } else {
                // turn off visibility for all child entries and save/update the last legend entry
                this._lastVisible = this._children.find(
                    entry => entry.visibility
                );
                this._lastVisible?.toggleVisibility(false);
            }
        }

        // update parent visibility if current legend entry is part of a group or set
        if (this._parent instanceof LegendGroup && updateParent) {
            this._parent.checkVisibility(this);
        }
    }
}

export enum LegendTypes {
    Group = 'LegendGroup',
    Set = 'VisibilitySet',
    Entry = 'LegendEntry',
    Info = 'InfoSection',
    Placeholder = 'Placeholder'
}

export enum Controls {
    Opacity = 'opacity',
    Visibility = 'visibility',
    Boundingbox = 'boundingBox',
    BoundaryZoom = 'boundaryZoom',
    Identify = 'identify',
    Metadata = 'metadata',
    Refresh = 'refresh',
    Reload = 'reload',
    Remove = 'remove',
    Settings = 'settings',
    Datatable = 'datatable',
    Symbology = 'symbology'
}
