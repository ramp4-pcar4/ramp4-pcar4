import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';
import TreeNode from 'ramp-geoapi/dist/layer/TreeNode';

/**
 * Function definitions for legend item wrapper objects
 */
export class LegendItem {
    _id: string;
    _name: string;
    _type: 'LegendEntry' | 'LegendGroup' | 'VisibilitySet' | 'InfoSection';
    _controls: Array<string>;
    _parent: LegendItem | undefined = undefined; // (mainly would be useful to deal with visibility sets)

    _uid: string;
    _layer: BaseLayer | undefined;
    _layerTree: TreeNode | undefined;

    _hidden: boolean;
    _opacity: number;
    _visibility: boolean;
    _itemConfig: any;

    /**
     * Create a new legend item with defaulting for all properties given config snippet, id is required.
     */
    constructor(legendItem: any) {
        this._id = legendItem.layerId;
        this._uid = legendItem.uid;
        this._name = legendItem.name !== undefined ? legendItem.name : '';
        this._type = legendItem.type !== undefined ? legendItem.type : 'LegendEntry';
        this._controls =
            legendItem.controls !== undefined
                ? legendItem.controls
                : [
                      Controls.Opacity,
                      Controls.Visibility,
                      Controls.Boundingbox,
                      Controls.Query,
                      Controls.Metadata,
                      Controls.BoundaryZoom,
                      Controls.Refresh,
                      Controls.Reload,
                      Controls.Remove,
                      Controls.Settings
                  ];
        this._opacity = legendItem.opacity !== undefined ? legendItem.opacity : 1;
        this._visibility = legendItem.visibility !== undefined ? legendItem.visibility : true;
        this._hidden = legendItem.hidden !== undefined ? legendItem.hidden : false;
        this._layer = legendItem.layer;
        this._layerTree = legendItem.layerTree;
        this._itemConfig = legendItem;
    }

    /** Returns the item's id */
    get id(): string {
        return this._id;
    }

    /** Returns the item's name */
    get name(): string {
        return this._name;
    }

    /** Returns the item's type */
    get type(): string {
        return this._type;
    }

    /** Returns if item is hidden */
    get hidden(): boolean {
        return this._hidden;
    }

    /**
     * Gets visibility of the LegendItem
     * @return {boolean | undefined} - true if the item is currently visible, false if invisible, undefined if "visibility" is not part of controls
     */
    get visibility(): boolean | undefined {
        return this._visibility;
    }

    /**
     * Returns the opacity of the LegendItem.
     * @return {number | undefined} - ranges from 0 (hidden) to 1 (fully visible). undefined if "opacity" is not
     * part of `LegendItem's` `_Controls`.
     */
    get opacity(): number | undefined {
        return this._opacity;
    }

    /**
     * Sets the opacity value for the LegendItem
     * @param opacity - ranges from 0 (hidden) to 1 (fully visible); `undefined` has no effect.
     */
    set opacity(opacity: number | undefined) {
        if (typeof opacity !== 'undefined' && this._controls.includes(Controls.Opacity)) {
            if (this._opacity !== opacity) {
                this._opacity = opacity;
                // some event/listener should trigger after opacity value changes
            }
        }
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
     * Check if a control is available for the legend item
     * @param control name of the control
     * @return {boolean} - true if the control is included in legend item's available controls
     */
    _controlAvailable(control: Controls): boolean {
        return this._controls.includes(control);
    }
}

/**
 * `LegendEntry` can either be a single legend entry or an info section (no link to layer)
 */
export class LegendEntry extends LegendItem {
    _symbologyExpanded: boolean;
    // _symbologyStack: any;

    /**
     * Creates a new single legend entry.
     * @param legendEntry legend entry config snippet
     */
    constructor(legendEntry: any) {
        super(legendEntry);
        this._type = legendEntry.type !== undefined ? legendEntry.type : 'LegendEntry';
        this._symbologyExpanded = legendEntry.symbologyExpanded !== undefined ? legendEntry.symbologyExpanded : false;
    }

    /** Returns uid associated with BaseLayer */
    get uid(): string {
        return this._uid;
    }

    /** Returns BaseLayer associated to legend entry */
    get layer(): BaseLayer | undefined {
        return this._layer;
    }

    /**
     * Sets visibility of the LegendItem
     * @param visibility - true if visible, false if invisible. Undefined has no effect.
     */
    toggleVisibility(visibility: boolean | undefined = undefined): void {
        // TODO: need to rework some logic to check if legend entry is apart of a visibility set
        if (visibility !== undefined && this._controls.includes(Controls.Visibility)) {
            this._visibility = visibility;
            // some event/listener should trigger after visibility value toggles
        } else {
            this._visibility = !this._visibility;
        }
    }

    /**
     * Expand/collapses symbology stack.
     */
    // toggleSymbologyStack(): void {
    //     if (this.type === LegendTypes.Entry) {
    //         // TODO: implementation
    //     }
    // }

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
        if (this._controlAvailable(Controls.Data)) {
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
    // _isSet: boolean;
    _lastVisible: LegendEntry | LegendGroup | undefined;

    /**
     * Creates a new LegendGroup and stores all children.
     * @param legendGroup legend group config snippet
     */
    constructor(legendGroup: any) {
        super(legendGroup);
        this._expanded = legendGroup.expanded !== undefined ? legendGroup.expanded : true;
        this._type = legendGroup.exclusiveVisibility !== undefined ? 'VisibilitySet' : 'LegendGroup';
        // this._isSet = this._type === 'VisibilitySet' ? true : false;

        // initialize group children properties
        this._initGroupProperties(legendGroup);
    }

    /**
     * Set group properties such as id, visibility and opacity. Called whenever group is created or reloaded.
     * @param legendGroup config snippet for legend group
     * @ignore
     */
    _initGroupProperties(legendGroup: any): void {
        // initialize objects for all non-hidden group children entries
        legendGroup.children
            .filter((entry: any) => !entry.hidden)
            .forEach((entry: any) => {
                // create new LegendGroup/LegendEntry/VisibilitySet and push to child array
                if (entry.exclusiveVisibility !== undefined)
                    if (entry._type === LegendTypes.Group || entry._type === LegendTypes.Set) {
                        this._children.push(new LegendGroup(entry));
                    } else {
                        this._children.push(new LegendEntry(entry));
                    }
            });

        this._children.forEach(child => {
            // TODO: setup events to watch for visibility and opacity (+ other key layer properties) changes here?
        });
    }

    /** Returns the children for the group (if any). Children can be either LegendGroups (if nested groups) or LegendEntrys. */
    get children(): Array<LegendGroup | LegendEntry> {
        return this._children;
    }

    /**
     * Gets expanded value of the LegendGroup
     * @return {boolean | undefined} - true if the group is expanded, false if the group is collapsed
     */
    get expanded(): boolean | undefined {
        return this._expanded;
    }

    /**
     * Toggles group to reveal/hide children
     * @param expanded true if group should be expanded, false if group should be collapsed, or undefined if group should just be toggled
     */
    toggleExpanded(expanded: boolean | undefined = undefined): void {
        expanded !== undefined ? (this._expanded = expanded) : (this._expanded = !this._expanded);
    }

    /**
     * Toggles group to reveal/hide children
     * @param visible true if group should have visibility toggled on, false if group visibility should be toggled off, or undefined if group visibility should be toggled
     */
    toggleVisibility(visible: boolean | undefined = undefined): void {
        const oldVal = this._visibility;
        visible !== undefined ? (this._visibility = visible) : (this._visibility = !this._visibility);
        if (this._type === LegendTypes.Group) {
            this._children.forEach((entry: any) => {
                entry.toggleVisibility(visible);
            });
        } else {
            // otherwise ensure that there is only one child entry visible in a set
            if (this._visibility) {
                // if there is already a child with visibility toggled on, do nothing
                if (!this._children.some((entry: LegendItem) => entry.visibility === this._visibility)) {
                    // otherwise toggle the last visible child on or by default the first child entry in the set
                    this._lastVisible !== undefined
                        ? this._lastVisible.toggleVisibility(this._visibility)
                        : this._children[0].toggleVisibility(this._visibility);
                }
            } else {
                // turn off visibility for all child entries and save/update the last legend entry
                this._children.forEach((entry: LegendEntry | LegendGroup) => {
                    if (entry.visibility) {
                        entry.toggleVisibility(this._visibility);
                        this._lastVisible = entry;
                    }
                })
            }
        }
    }

    /** Get a child LegendEntry or LegendGroup by uid */
    getById(id: string): any {
        return this._layerTree?.findChildByUid(id);
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
    Query = 'query',
    Snapshot = 'snapshot',
    Metadata = 'metadata',
    BoundaryZoom = 'boundaryZoom',
    Refresh = 'refresh',
    Reload = 'reload',
    Remove = 'remove',
    Settings = 'settings',
    Data = 'data',
    Symbology = 'symbology'
}
