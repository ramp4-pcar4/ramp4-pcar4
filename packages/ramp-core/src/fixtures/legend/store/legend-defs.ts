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
    _parent: LegendItem | undefined = undefined; // (mainly would be useful to deal with visibility sets)

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

    /**
     * Removes element from legend and removes layer if it's the last reference to it.
     */
    remove(): void {
        if (this._controls.includes(Controls.Remove) || this.type === LegendTypes.Info) {
            // TODO: implementation
        }
    }

    /**
     * Reloads element in legend.
     */
    reload(): void {
        if (this._controls.includes(Controls.Reload)) {
            // TODO: implementation
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
    _symbologyExpanded: boolean;
    _uid: string | undefined;
    _layer: BaseLayer | undefined;
    _layerTree: TreeNode | undefined;
    _isLoaded: boolean;
    _symbologyStack: any;

    /**
     * Creates a new single legend entry.
     * @param legendEntry legend entry config snippet
     */
    constructor(legendEntry: any, parent: LegendItem | undefined = undefined) {
        super(legendEntry);
        this._type = legendEntry.type !== undefined ? legendEntry.type : LegendTypes.Entry;
        this._symbologyExpanded = legendEntry.symbologyExpanded !== undefined ? legendEntry.symbologyExpanded : false;
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
    toggleVisibility(visibility: boolean | undefined = undefined): void {
        // TODO: need to rework some logic to check if legend entry is apart of a visibility set
        if (visibility !== undefined && this._controls.includes(Controls.Visibility)) {
            this._layer?.setVisibility(visibility);
        }
    }

    /**
     * Expand/collapses symbology stack.
     */
    // TODO: expand symbology stack implementation

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
    _children: Array<LegendEntry | LegendGroup> = [];
    _expanded: boolean;
    _visibility: boolean;
    _lastVisible: LegendEntry | LegendGroup | undefined;

    /**
     * Creates a new LegendGroup and stores all children.
     * @param legendGroup legend group config snippet
     */
    constructor(legendGroup: any, parent: LegendItem | undefined = undefined) {
        super(legendGroup);
        this._expanded = legendGroup.expanded !== undefined ? legendGroup.expanded : true;
        this._visibility = legendGroup.visibility !== undefined ? legendGroup.visibility : true;
        this._type = legendGroup.exclusiveVisibility !== undefined ? LegendTypes.Set : LegendTypes.Group;

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
    }

    /** Returns children of the group, which can be either legend groups (nested) or single legend entries. */
    get children(): Array<LegendGroup | LegendEntry> {
        return this._children;
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
     * Toggles/collapses legend group.
     * @param expanded true if group should be expanded, false if group should be collapsed, or undefined if group should just be toggled
     */
    toggleExpanded(expanded: boolean | undefined = undefined): void {
        expanded !== undefined ? (this._expanded = expanded) : (this._expanded = !this._expanded);
    }

    /**
     * Toggles group visibility to show/hide children.
     * @param visible true if group should have visibility toggled on, false if group visibility should be toggled off, or undefined if group visibility should be toggled
     */
    toggleVisibility(visible: boolean | undefined = undefined): void {
        // TODO: verify parent visibility b/c there can be complex nested groups or even sets
        const oldVal = this._visibility;
        visible !== undefined ? (this._visibility = visible) : (this._visibility = !this._visibility);
        // check if visibility value changes
        if (oldVal === this._visibility) {
            return;
        }

        // if current item is a legend group, simply toggle visibility for all children
        if (this._type === LegendTypes.Group) {
            this._children.forEach((entry: any) => {
                entry.toggleVisibility(visible);
            });
        } else {
            // otherwise ensure that there is only one child entry visible in a set
            if (this._visibility) {
                // if there is already a child with visibility toggled on, do nothing
                if (!this._children.some((entry: LegendItem) => entry instanceof LegendEntry && entry.visibility === this._visibility)) {
                    // otherwise toggle the last visible child on or by default the first child entry in the set
                    this._lastVisible !== undefined
                        ? this._lastVisible.toggleVisibility(this._visibility)
                        : this._children[0].toggleVisibility(this._visibility);
                }
            } else {
                // turn off visibility for all child entries and save/update the last legend entry
                this._children.forEach((entry: LegendItem) => {
                    if (entry instanceof LegendEntry && entry.visibility) {
                        entry.toggleVisibility(this._visibility);
                        this._lastVisible = entry;
                    }
                });
            }
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
