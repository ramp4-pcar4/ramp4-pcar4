import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';
import TreeNode from 'ramp-geoapi/dist/layer/TreeNode';

/**
 * Function definitions for legend item wrapper objects.
 */
export class LegendItem {
    _id: string;
    _name: string;
    _type: LegendTypes;
    _controls: Array<string>;
    _children: Array<LegendEntry | LegendGroup> = [];
    _parent: LegendGroup | undefined = undefined; // can only be a legend group or visibility set

    _hidden: boolean;
    _itemConfig: any;

    /**
     * Create a new legend item with defaulting for all properties given config snippet, id is required.
     */
    constructor(legendItem: any) {
        this._id = legendItem.layerId;
        this._name = legendItem.name !== undefined ? legendItem.name : '';
        this._type = legendItem.type !== undefined ? legendItem.type : LegendTypes.Entry;
        this._controls =
            legendItem.controls !== undefined
                ? legendItem.controls
                : [
                      Controls.Visibility,
                      Controls.BoundaryZoom,
                      Controls.Metadata,
                      Controls.Refresh,
                      Controls.Reload,
                      Controls.Remove,
                      Controls.Datatable,
                      Controls.Settings
                  ];
        this._hidden = legendItem.hidden !== undefined ? legendItem.hidden : false;
        this._itemConfig = legendItem;
    }

    /** Returns the item's id. */
    get id(): string {
        return this._id;
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

    /** Returns children of the legend entry, which is an empty array for single entries and and an array of legend groups (nested) or single legend entries for groups. */
    get children(): Array<LegendGroup | LegendEntry> {
        return this._children;
    }

    /**
     * Removes element from legend and removes layer if it's the last reference to it.
     */
    remove(): void {
        if (this._controls.includes(Controls.Remove) || this.type === LegendTypes.Info) {
            // TODO: implementation - involves removing from legend store property
        }
    }

    /**
     * Reloads element in legend.
     */
    reload(): void {
        if (this._controls.includes(Controls.Reload)) {
            // TODO: implementation - related to https://github.com/ramp4-pcar4/ramp4-pcar4/issues/126
        }
    }

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
    _uid: string | undefined;
    _layer: BaseLayer | undefined;
    _layerTree: TreeNode | undefined;
    _isLoaded: boolean;
    _symbologyStack: any;

    /**
     * Creates a new single legend entry.
     * @param legendEntry legend entry config snippet
     */
    constructor(legendEntry: any, parent: LegendGroup | undefined = undefined) {
        super(legendEntry);
        this._type = legendEntry.type !== undefined ? legendEntry.type : LegendTypes.Entry;
        this._parent = parent;

        // find matching BaseLayer in layer store to the layerId in config
        this._layer = legendEntry.layers.find((layer: BaseLayer) => layer.id === this._id);
        this._isLoaded = this._layer !== undefined ? this._layer.isValidState() : true;
        // initialize more layer properties after layer loads
        this._waitLayerLoad();
    }

    /**
     * Waits for layer to load before fetching layer properties - uid, tree structure, and more as needed.
     */
    _waitLayerLoad(): void {
        // wait for layer to finish loading
        this._layer?.isLayerLoaded().then(() => {
            // obtain uid and layer tree structure
            this._uid = this._layer?.uid;
            this._layerTree = this._layer?.getLayerTree();

            // toggle off visibility if entry is part of a visibility set with a set entry already toggled on
            if (this._parent instanceof LegendGroup && this._parent.type === LegendTypes.Set) {
                this._parent.children.some(entry => entry.visibility && entry.id !== this._id) ? this._layer?.setVisibility(false) : null;
            }
        });
    }

    /** Returns visibility of layer. */
    get visibility(): boolean | undefined {
        return this._layer?.getVisibility();
    }

    /** Returns uid associated with BaseLayer. */
    get uid(): string | undefined {
        return this._uid;
    }

    /** Returns BaseLayer associated with legend entry. */
    get layer(): BaseLayer | undefined {
        return this._layer;
    }

    /** Returns layer tree associated with legend entry. */
    get layerTree(): TreeNode | undefined {
        return this._layerTree;
    }

    /** Returns if layer is done loading. */
    get isLoaded(): boolean {
        return this._layer !== undefined ? this._layer.isValidState() : true;
    }

    /**
     * Sets visibility of the Legend Entry - needs to verify parent visibility is updated.
     * @param visibility - true if visible, false if invisible, undefined means toggle visibility
     */
    toggleVisibility(visibility: boolean | undefined = undefined, updateParent: boolean = true): void {
        if (this._controls.includes(Controls.Visibility)) {
            // do nothing if visibility of entry is already equal to the argument value
            if (this.visibility === visibility) {
                return;
            }
            visibility !== undefined ? this._layer?.setVisibility(visibility) : this._layer?.setVisibility(!this.visibility);
            // update parent visibility if current legend entry is part of a group or set
            if (this._parent instanceof LegendGroup && updateParent) {
                this._parent.checkVisibility(this);
            }
        }
    }

    /**
     * Expand/collapses symbology stack.
     * TODO: check if `LegendEntry` is an `InfoSection`
     */
    toggleSymbologyStack(): void {
        if (this._controls.includes(Controls.Symbology)) {
            this._symbologyStack.expanded = !this._symbologyStack.expanded;
        }
    }

    /**
     * Toggles metadata panel to open/close for the LegendItem.
     */
    toggleMetadata(): void {
        if (this._controlAvailable(Controls.Metadata)) {
            // TODO: toggle metadata panel through API/store call
        }
    }

    /**
     * Toggles settings panel to open/close type for the LegendItem.
     */
    toggleSettings(): void {
        if (this._controlAvailable(Controls.Settings)) {
            // TODO: toggle settings panel through API/store call
        }
    }

    /**
     * Toggles data table panel to open/close for the LegendItem.
     */
    toggleDataTable(): any {
        if (this._controlAvailable(Controls.Datatable)) {
            // TODO: toggle datatable through API using uid
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
        this._expanded = legendGroup.expanded !== undefined ? legendGroup.expanded : true;
        this._visibility = legendGroup.visibility !== undefined ? legendGroup.visibility : true;
        this._type = legendGroup.exclusiveVisibility !== undefined ? LegendTypes.Set : LegendTypes.Group;
        this._parent = parent;

        // initialize group children properties
        this._initGroupProperties(legendGroup);
    }

    /**
     * Set group properties such as id, visibility and opacity. Called whenever group is created or reloaded.
     * @param legendGroup config snippet for legend group
     */
    _initGroupProperties(legendGroup: any): void {
        // initialize objects for all non-hidden group/set children entries
        const children = this._type === LegendTypes.Set ? legendGroup.exclusiveVisibility : legendGroup.children;
        children
            .filter((entry: any) => !entry.hidden)
            .forEach((entry: any) => {
                // create new LegendGroup/LegendEntry and push to child array
                entry.layers = legendGroup.layers;
                if (entry.exclusiveVisibility !== undefined || entry.children !== undefined) {
                    this._children.push(new LegendGroup(entry, this));
                } else {
                    this._children.push(new LegendEntry(entry, this));
                }
            });
        this._visibleEntries = this._children;
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
     * Save a child entry by adding it to visibleEntries.
     * @param childEntry child entry to save as last toggled on
     */
    saveEntry(childEntry: LegendEntry | LegendGroup): void {
        this._visibleEntries.push(childEntry);
    }

    /**
     * Toggles/collapses legend group.
     * @param expanded true if group should be expanded, false if group should be collapsed, or undefined if group should just be toggled
     */
    toggleExpanded(expanded: boolean | undefined = undefined): void {
        expanded !== undefined ? (this._expanded = expanded) : (this._expanded = !this._expanded);
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
                this._visibleEntries = this._children.filter(entry => entry.visibility);
            } else if (this._children.every(entry => !entry.visibility)) {
                this._visibility = false;
                this._visibleEntries = [];
            }
        } else if (toggledChild.visibility) {
            // turn off all child entries except for the last one toggled on, mark that as the last visible entry in the set
            this.children.forEach(entry => {
                if (entry.visibility && entry.id !== toggledChild.id) {
                    entry instanceof LegendEntry ? entry.layer?.setVisibility(false) : entry.toggleVisibility(false, false);
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
    toggleVisibility(visible: boolean | undefined = undefined, updateParent: boolean = true): void {
        const oldVal = this._visibility;
        visible !== undefined ? (this._visibility = visible) : (this._visibility = !this._visibility);
        // check if visibility value changes
        if (oldVal === this._visibility) {
            return;
        }

        if (this._type === LegendTypes.Group) {
            // for legend groups, if group is toggled on turn on visibility for all children that are saved, and all children if none are saved
            if (this._visibility) {
                this._visibleEntries.length > 0
                    ? this._visibleEntries.forEach(entry => entry.toggleVisibility(this._visibility, false))
                    : this._children.forEach(entry => entry.toggleVisibility(this.visibility, false));
            } else {
                // otherewise turn off visibility for all children
                this._children.forEach(entry => entry.toggleVisibility(this._visibility, false));
            }
        } else {
            // otherwise for visibility sets ensure that there is only one child entry visible
            if (this._visibility) {
                // toggle the last visible child on or by default the first child entry in the set
                this._lastVisible !== undefined ? this._lastVisible.toggleVisibility(true) : this._children[0].toggleVisibility(true);
            } else {
                // turn off visibility for all child entries and save/update the last legend entry
                this._lastVisible = this._children.find(entry => entry.visibility);
                this._lastVisible?.toggleVisibility(false);
            }
        }

        // update parent visibility if current legend entry is part of a group or set
        if (this._parent instanceof LegendGroup && updateParent) {
            this._parent.checkVisibility(this);
        }
    }
}

enum LegendTypes {
    Group = 'LegendGroup',
    Set = 'VisibilitySet',
    Entry = 'LegendEntry',
    Info = 'InfoSection'
}

enum Controls {
    Opacity = 'opacity',
    Visibility = 'visibility',
    Boundingbox = 'boundingBox',
    BoundaryZoom = 'boundaryZoom',
    Query = 'query',
    Metadata = 'metadata',
    Refresh = 'refresh',
    Reload = 'reload',
    Remove = 'remove',
    Settings = 'settings',
    Datatable = 'datatable',
    Symbology = 'symbology'
}