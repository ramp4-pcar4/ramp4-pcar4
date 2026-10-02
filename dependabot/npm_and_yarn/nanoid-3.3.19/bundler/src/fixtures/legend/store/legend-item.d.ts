import { APIScope, InstanceAPI } from '../../../api/internal';
import { DefPromise } from '../../../geo/api';
export declare const enum LegendControl {
    Visibility = "visibilityButton",
    Expand = "expandButton"
}
export declare const enum LegendType {
    Item = "item",
    Placeholder = "placeholder",
    Error = "error"
}
/**
 * A class that represents a generic item in the legend.
 */
export declare class LegendItem extends APIScope {
    _uid: string;
    _name: string;
    _type: LegendType;
    _children: Array<LegendItem>;
    _parent?: LegendItem | undefined;
    _loadPromise: DefPromise<void>;
    _hidden: boolean;
    _expanded: boolean;
    _visibility: boolean;
    _exclusive: boolean;
    _controls: Array<LegendControl> | undefined;
    _disabledControls: Array<LegendControl> | undefined;
    _lastVisible?: LegendItem;
    _visibleChildren: Array<LegendItem>;
    /**
     * Create a new legend item with defaulting for all properties given config snippet, id is required.
     * @param {InstanceAPI} iApi instance API for the RAMP that this is associated with
     * @param {any} config the config for the given legend item
     * @param {LegendItem} parent a legend item that this item is a child of
     */
    constructor(iApi: InstanceAPI, config: any, parent?: LegendItem);
    /** Returns the item's uid */
    get uid(): string;
    /** Returns the item's name */
    get name(): string;
    /** Sets the item's name
     * @param {string} name new item name
     */
    set name(name: string);
    /** Returns the item's type */
    get type(): LegendType;
    /** Returns children of the legend item */
    get children(): Array<LegendItem>;
    /** Sets new children for the legend item
     * @param {Array<LegendItem>} children new child legend items
     */
    set children(children: Array<LegendItem>);
    /** Returns item's parent - not yet initialized */
    get parent(): LegendItem | undefined;
    /**Sets new parent for the legend item */
    set parent(parent: LegendItem | undefined);
    /** Returns the load promise for this legend item */
    get loadPromise(): Promise<void>;
    /** Returns if item is hidden */
    get hidden(): boolean;
    /** Returns if item is expanded */
    get expanded(): boolean;
    /** Returns if item has visibility */
    get visibility(): boolean;
    /** Returns if item follows "exclusive set" behaviour */
    get exclusive(): boolean;
    /**
     * Check if a control is available for the legend item.
     * Returns:
     *  - true if the control is included in legend item's available controls
     *  - false if control is not included, or if control is disabled
     *  - undefined if controls are not defined
     * @param {LegendControl} control name of the control
     * @return {boolean | undefined}
     */
    controlAvailable(control: LegendControl): boolean | undefined;
    /**
     * Enable a disabled control, or disable an enabled control.
     * @param {LegendControl} control name of the control
     * @param {boolean} enable true for enabling, false for disabling
     */
    setControl(control: LegendControl, enable: boolean): void;
    /**
     * Toggle hidden state of a legend item.
     * @param {boolean} hidden set legend item to hidden/not hidden if given, otherwise toggle
     */
    toggleHidden(hidden?: boolean): void;
    /**
     * Toggle expand state of a legend item.
     * @param {boolean} expanded set legend item to expanded/not expanded if given, otherwise toggle
     */
    toggleExpanded(expanded?: boolean): void;
    /**
     * Toggle visibility state of a legend item. Needs to verify parent visibility is updated.
     * @param {boolean} visibility set legend item to visible/not visible if given, otherwise toggle
     * @param {boolean} updateParent whether or not toggleVisibiliity should 'bubble-up' the legend tree
     */
    toggleVisibility(visible?: boolean, updateParent?: boolean): void;
    /**
     * Ensures visibility rules are followed if legend item is nested in another item on initialization.
     */
    checkVisibilityRules(): void;
    /**
     * Updates parent visibility after a child item's visibility toggles.
     * @param {LegendItem} toggledChild given child legend item
     */
    checkVisibility(toggledChild: LegendItem): void;
    /**
     * Returns a legend config representation of this item.
     */
    getConfig(): any;
    /**
     * Runs right after legend item is added
     */
    onAdded(): void;
    /**
     * Runs right before legend item is removed
     */
    onRemoved(): void;
    /**
     * Sets legend item to a loaded state.
     */
    load(): void;
    /**
     * Sets legend item back to a loading/placeholder state
     */
    reload(): void;
    /**
     * Sets legend item to an error state
     */
    error(): void;
}
