import { APIScope, InstanceAPI } from '@/api/internal';
import { DefPromise, LayerControl } from '@/geo/api';
import { geo } from '@/main';
import { LayerItem } from './layer-item';

export const enum LegendControl {
    Visibility = 'visibilityButton',
    Expand = 'expandButton'
}

export const enum LegendType {
    Item = 'item',
    Placeholder = 'placeholder',
    Error = 'error'
}

/**
 * A class that represents a generic item in the legend.
 */
export class LegendItem extends APIScope {
    _uid: string;
    _name: string;
    _type: LegendType;

    _children: Array<LegendItem> = []; // list of child legend items
    _parent?: LegendItem | undefined = undefined; // parent of legend item

    _loadPromise: DefPromise; // deferred promise that resolves when legend item is loaded

    _hidden: boolean; // indicates if item (and its children) should be hidden from the legend
    _expanded: boolean; // expanded state of item
    _visibility: boolean; // visibility state of item
    _exclusive: boolean; // indicates if children should follow 'exclusive set' behavior (à la radio buttons)

    _controls: Array<LegendControl> | undefined; // will use layer controls if undefined
    _disabledControls: Array<LegendControl> | undefined; // will use layer's disabled controls if undefined
    _lastVisible?: LegendItem; // keeps track of last visible legend item, used for exclusive sets
    _visibleChildren: Array<LegendItem>; // keeps track of last visible child items

    /**
     * Create a new legend item with defaulting for all properties given config snippet, id is required.
     * @param {InstanceAPI} iApi instance API for the RAMP that this is associated with
     * @param {any} config the config for the given legend item
     * @param {LegendItem} parent a legend item that this item is a child of
     */
    constructor(iApi: InstanceAPI, config: any, parent?: LegendItem) {
        super(iApi);

        this._uid = geo.sharedUtils.generateUUID();
        this._name = config.name;
        this._type = config.type ?? LegendType.Placeholder;
        this._parent = parent;
        this._children = [];

        this._loadPromise = new DefPromise();

        this._hidden = config.hidden ?? false;
        this._expanded = config.expanded ?? true;
        this._visibility = true; // default value, gets updated later
        this._exclusive = config.exclusive ?? false;

        this._controls = config.controls?.slice() ?? [
            LegendControl.Visibility,
            LegendControl.Expand
        ];
        this._disabledControls = config.disabledControls?.slice();
        this._lastVisible;
        this._visibleChildren = [];
    }

    /** Returns the item's uid */
    get uid(): string {
        return this._uid;
    }

    /** Returns the item's name */
    get name(): string {
        return this._name;
    }

    /** Sets the item's name
     * @param {string} name new item name
     */
    set name(name: string) {
        this._name = name;
    }

    /** Returns the item's type */
    get type(): LegendType {
        return this._type;
    }

    /** Returns children of the legend item */
    get children(): Array<LegendItem> {
        return this._children;
    }

    /** Sets new children for the legend item
     * @param {Array<LegendItem>} children new child legend items
     */
    set children(children: Array<LegendItem>) {
        this._children = children;
    }

    /** Returns item's parent - not yet initialized */
    get parent(): LegendItem | undefined {
        return this._parent;
    }

    /**Sets new parent for the legend item */
    set parent(parent: LegendItem | undefined) {
        this._parent = parent;
    }

    /** Returns the load promise for this legend item */
    get loadPromise(): Promise<void> {
        return this._loadPromise.getPromise();
    }

    /** Returns if item is hidden */
    get hidden(): boolean {
        return this._hidden;
    }

    /** Returns if item is expanded */
    get expanded(): boolean {
        return this._expanded;
    }

    /** Returns if item has visibility */
    get visibility(): boolean {
        return this._visibility;
    }

    /** Returns if item follows "exclusive set" behaviour */
    get exclusive(): boolean {
        return this._exclusive;
    }

    /**
     * Check if a control is available for the legend item.
     * Returns:
     *  - true if the control is included in legend item's available controls
     *  - false if control is not included, or if control is disabled
     *  - undefined if controls are not defined
     * @param {LegendControl} control name of the control
     * @return {boolean | undefined}
     */
    controlAvailable(control: LegendControl): boolean | undefined {
        return this._disabledControls?.includes(control)
            ? false
            : this._controls?.includes(control);
    }

    /**
     * Enable a disabled control, or disable an enabled control.
     * @param {LegendControl} control name of the control
     * @param {boolean} enable true for enabling, false for disabling
     */
    setControl(control: LegendControl, enable: boolean): void {
        if (enable && this._disabledControls?.includes(control)) {
            this._disabledControls = this._disabledControls.filter(
                item => item !== control
            );
            this._controls?.push(control);
        } else if (!enable && this._controls?.includes(control)) {
            this._controls = this._controls.filter(item => item !== control);
            this._disabledControls?.push(control);
        }
    }

    /**
     * Toggle hidden state of a legend item.
     * @param {boolean} hidden set legend item to hidden/not hidden if given, otherwise toggle
     */
    toggleHidden(hidden?: boolean): void {
        this._hidden = hidden ?? !this.hidden;
    }

    /**
     * Toggle expand state of a legend item.
     * @param {boolean} expanded set legend item to expanded/not expanded if given, otherwise toggle
     */
    toggleExpanded(expanded?: boolean): void {
        this._expanded = expanded ?? !this.expanded;
    }

    /**
     * Toggle visibility state of a legend item. Needs to verify parent visibility is updated.
     * @param {boolean} visibility set legend item to visible/not visible if given, otherwise toggle
     * @param {boolean} updateParent whether or not toggleVisibiliity should 'bubble-up' the legend tree
     */
    toggleVisibility(visible?: boolean, updateParent: boolean = true): void {
        // pass if visibility of item is already equal to the argument value
        if (this.visibility === visible) return;

        this._visibility = visible ?? !this.visibility;

        if (!this.exclusive) {
            if (this.visibility) {
                // for parent items, if visiblility is toggled on
                // - if some children were previously visible, toggle on their visiblility
                // - if no children were previsouly visible, toggle on all children visiblility
                this._visibleChildren.length > 0
                    ? this._visibleChildren.forEach(item =>
                          item.toggleVisibility(true, false)
                      )
                    : this.children.forEach(item =>
                          item.toggleVisibility(true, false)
                      );
            } else {
                // otherewise turn off visibility for all children
                this.children.forEach(item =>
                    item.toggleVisibility(false, false)
                );
            }
        } else {
            // for exclusive sets ensure that there is only one child item visible
            if (this.visibility) {
                // toggle the last visible child on if it is toggleable, otherwise find a toggleable child and toggle it
                if (
                    this._lastVisible &&
                    (!(this._lastVisible instanceof LayerItem) ||
                        this._lastVisible.layerControlAvailable(
                            LayerControl.Visibility
                        ))
                ) {
                    this._lastVisible.toggleVisibility(true);
                } else {
                    const itemToTurnOn = this.children.find(
                        child =>
                            !(child instanceof LayerItem) ||
                            (
                                child as unknown as LayerItem
                            ).layerControlAvailable(LayerControl.Visibility)
                    );
                    if (itemToTurnOn) {
                        itemToTurnOn.toggleVisibility(true);
                    }
                }
            } else {
                // turn off visibility for all child items and save/update the last legend item
                this._lastVisible = this.children.find(item => item.visibility);
                this._lastVisible?.toggleVisibility(false);
            }
        }

        // update parent visibility if current legend item is a child
        if (this.parent && updateParent) {
            this.parent.checkVisibility(this);
        }
    }

    /**
     * Ensures visibility rules are followed if legend item is nested in another item on initialization.
     */
    checkVisibilityRules(): void {
        if (this.parent && !this.parent.visibility) {
            // if parent is not visible and legend item has visibility control, turn visiblity off
            this.toggleVisibility(false, false);
        } else if (this.parent?.exclusive) {
            // toggle not visible if item is part of a exclusive set with another item's visibility already toggled on
            const siblingVisible = this.parent.children.some(
                item =>
                    item.visibility &&
                    item !== this &&
                    item.type === LegendType.Item
            );
            if (siblingVisible) {
                this.toggleVisibility(false, false);
            }
        }
    }

    /**
     * Updates parent visibility after a child item's visibility toggles.
     * @param {LegendItem} toggledChild given child legend item
     */
    checkVisibility(toggledChild: LegendItem) {
        if (
            this instanceof LayerItem &&
            !this.layerControlAvailable(LayerControl.Visibility)
        ) {
            return;
        }
        if (!this.exclusive) {
            // if any child items are visible, parent must be toggled visible.
            // else all children items are not visible, so parent must be toggled not visible
            if (this.children.some(item => item.visibility)) {
                this._visibility = true;
                // save all child items with visibility
                this._visibleChildren = this.children.filter(
                    item => item.visibility
                );
                if (
                    this instanceof LayerItem &&
                    this.layer &&
                    this.layer.layerExists
                ) {
                    this.layer.visibility = true;
                }
            } else {
                this._visibility = false;
                this._visibleChildren = [];
                if (
                    this instanceof LayerItem &&
                    this.layer &&
                    this.layer.layerExists
                ) {
                    this.layer.visibility = false;
                }
            }
        } else if (toggledChild.visibility) {
            // turn off all child items except for the last one toggled on, mark that as the last visible item in the set
            this.children.forEach(item => {
                if (item.uid !== toggledChild.uid) {
                    item.toggleVisibility(false, false);
                }
            });
            this._lastVisible = toggledChild;
            this._visibility = true;
            if (
                this instanceof LayerItem &&
                this.layer &&
                this.layer.layerExists
            ) {
                this.layer.visibility = true;
            }
        } else {
            // item in exclusive set is being turned off
            this._visibility = false;
            if (
                this instanceof LayerItem &&
                this.layer &&
                this.layer.layerExists
            ) {
                this.layer.visibility = false;
            }
            this._lastVisible = toggledChild;
        }

        // to update nested items
        if (this.parent) {
            this.parent.checkVisibility(this);
        }
    }

    /**
     * Returns a legend config representation of this item.
     */
    getConfig(): any {
        const config: any = {
            name: this._name,
            hidden: this._hidden,
            expanded: this._expanded,
            exclusive: this._exclusive,
            controls: this._controls,
            disabledControls: this._disabledControls
        };

        const childConfigs: Array<any> = [];

        this.children.forEach(item => {
            childConfigs.push(item.getConfig());
        });

        if (this.exclusive) {
            config.exclusiveVisibility = childConfigs;
        } else {
            config.children = childConfigs;
        }

        return config;
    }

    /**
     * Runs right after legend item is added
     */
    onAdded() {}

    /**
     * Runs right before legend item is removed
     */
    onRemoved() {
        // set visibility to false and update parent visibility
        this.toggleVisibility(false);
    }

    /**
     * Sets legend item to a loaded state.
     */
    load() {
        this._type = LegendType.Item;
        this._loadPromise.resolveMe();
        this.checkVisibilityRules();
    }

    /**
     * Sets legend item back to a loading/placeholder state
     */
    reload(): void {
        this._type = LegendType.Placeholder;
        this._loadPromise = new DefPromise();
    }

    /**
     * Sets legend item to an error state
     */
    error() {
        this._type = LegendType.Error;
        this._loadPromise.rejectMe();
        this.checkVisibilityRules();
    }
}
