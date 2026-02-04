import { APIScope, PanelInstance } from './internal';
import { HTMLScreen, PanelDirection, HTMLPanelInstance, PanelConfig, PanelConfigRoute } from '../stores/panel';
import { I18nComponentOptions } from '../lang';
export declare class PanelAPI extends APIScope {
    panelStore: import('pinia').Store<"panel", import('pinia')._UnwrapAll<Pick<import('../stores/panel').PanelStore, "opacity" | "pinned" | "priority" | "stackWidth" | "remWidth" | "mobileView" | "reorderable" | "items" | "regPromises" | "orderedItems" | "teleported" | "visible">>, Pick<import('../stores/panel').PanelStore, "getRemainingWidth">, Pick<import('../stores/panel').PanelStore, "remove" | "close" | "open" | "move" | "getVisible" | "getRegPromises" | "openPanel" | "closePanel" | "movePanel" | "removePanel" | "setOpacity" | "setStackWidth" | "setMobileView" | "updateVisible" | "registerPanel" | "addRegPromise">>;
    /** Updates the content of a specific HTML-based screen of a panel, using HTML content
     *
     * @param {PanelInstance | string} panel The `PanelInstance` object, or its respective id, that corresponds to
     * the panel whose content is to be updated.
     * @param {{ [key: string]: string | HTMLElement }} html keyed language object containing HTML content for each
     * language, represented as an HTMLElement object or a string.
     * @param {string} [screenId] id of the screen to be updated. If not provided, it will update the first screen in the panel
     * @memberof PanelAPI
     */
    updateHTML(panel: PanelInstance | string, html: HTMLScreen | {
        [key: string]: string;
    }, screenId?: string): void;
    /**
     * Helper for `registerHTML()`. Creates and returns the `PanelConfigSet` required to register the HTML panel
     *
     * @param {HTMLPanelInstance} htmlPanel a `HTMLPanelInstance` object, excluding its `i18nMap` (if it exists),
     * corresponding to the new html panel
     * @returns {PanelConfigSet} The `PanelConfigSet` corresponding to the panel that is to be created
     * @memberof PanelAPI
     */
    private registerHTMLConfig;
    /** Registers a new panel containing a screen of HTML content and returns the PanelInstance
     *
     * @param {HTMLPanelInstance} htmlPanel a HTMLPanelInstance object corresponding to the new html panel
     * @memberof PanelAPI
     */
    registerHTML(htmlPanel: HTMLPanelInstance): PanelInstance;
    /**
     * Registers a provided panel object and returns the resulting `PanelInstance` objects.
     * When the panel is registered, all its screens are added to the Vue as components right away.
     *
     * @param {PanelConfigPair} value a PanelConfig/id pair in the form of `{ id: string, config: PanelConfig }`
     * @param {PanelRegistrationOptions} [options]
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    register(value: PanelConfigPair, options?: PanelRegistrationOptions): PanelInstance;
    /**
     * Registers a set of provided panel objects and returns the resulting `PanelInstance` object set.
     * When the panel is registered, all its screens are added to the Vue as components right away.
     *
     * @param {PanelConfigSet} value a set of PanelConfig objects in the form of `{ [name: string]: PanelConfig }` where keys assumed to be ids
     * @param {PanelRegistrationOptions} [options] a set of options that will apply to all the panel in the set
     * @returns {PanelInstanceSet}
     * @memberof PanelAPI
     */
    register(value: PanelConfigSet, options?: PanelRegistrationOptions): PanelInstanceSet;
    /**
     * Provides a promise that resolves when the panel(s) have finished registration.
     *
     * @param {(string | string[])} panelId the panel ID(s) for which the promise is requested
     * @memberof PanelAPI
     */
    isRegistered<T extends string | string[]>(panelId: T): Promise<T extends string ? PanelInstance : PanelInstance[]>;
    /**
     * Returns the panel ids of all currently registered panels
     *
     * @returns {Array<string>}
     * @memberof PanelAPI
     */
    allRegistered(): Array<string>;
    /**
     * Removes a panel instance
     *
     * @param {(string | PanelInstance)} value
     * @memberof PanelAPI
     */
    remove(value: string | PanelInstance): void;
    /**
     * Finds and returns a panel with the id specified.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    get(value: string | PanelInstance): PanelInstance;
    /**
     * Opens a registered panel in the panel stack.
     *
     *  - `rInstance.panel.open('panel-id')` -- opens the 'panel-id' panel on the first screen in the set
     *  - `rInstance.panel.open(<PanelInstance>)` -- opens the provided `PanelInstance` object on the first screen in the set
     *  - `rInstance.panel.open({ id: 'panel-id', screen: 'screen-id' })` -- opens the 'panel-id' panel on the 'screen-id' screen
     *  - `rInstance.panel.open({ id: 'panel-id', screen: 'screen-id', props: {... } })` -- opens the 'panel-id' panel on the 'screen-id' screen passing supplied `props` to it
     *
     * @param {(string | PanelInstance | PanelInstancePath)} value a panel id, a `PanelInstance` object or an object of the form `{ id: <panel-id>, screen: <id>, props: <object> }`.
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    open(value: string | PanelInstance | PanelInstancePath): PanelInstance | undefined;
    /**
     * Returns an array of open `PanelInstance` objects.
     *
     * @readonly
     * @type {PanelInstance[]}
     * @memberof PanelAPI
     */
    get opened(): PanelInstance[];
    /**
     * Returns an array of visible `PanelInstance` object.
     * This is not every *open* panel, only the ones currently visible to the user.
     *
     * @readonly
     * @type {PanelInstance[]}
     * @memberof PanelAPI
     */
    get visible(): PanelInstance[];
    /**
     * Closes the panel specified.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    close(value: string | PanelInstance): PanelInstance | undefined;
    /**
     * Minimizes the panel specified, mechanically the same as closing however it does not emit the close event so that temporary appbar buttons stay.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    minimize(value: string | PanelInstance): PanelInstance | undefined;
    /**
     * Moves the specifed visible panel to the left or right.
     *
     * @param {(string | PanelInstance)} value
     * @param {PanelDirection} direction the direction of movement, either "left" or "right".
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    move(value: string | PanelInstance, direction: PanelDirection): PanelInstance | undefined;
    /**
     * Toggle panel.
     *
     * @param {string | PanelInstance | PanelInstancePath} [value]
     * @param {boolean} toggle Optional param. True forces a panel open, false forces the panel to close.
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    toggle(value: string | PanelInstance | PanelInstancePath, toggle?: boolean): PanelInstance | undefined;
    /**
     * Toggle panel's minimized state
     *
     * @param {string | PanelInstance | PanelInstancePath} [value]
     * @param {boolean} toggle Optional param. True forces a panel open, false forces the panel to minimize.
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    toggleMinimize(value: string | PanelInstance | PanelInstancePath, toggle?: boolean): PanelInstance | undefined;
    /**
     * Pin/unpin/toggle (if no value provided) pin status of the provided panel. When pinning, automatically unpins any previous pinned panel if exists.
     *
     * @param {(string | PanelInstance)} value
     * @param {boolean} [pin]
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    pin(value: string | PanelInstance, pin?: boolean): PanelInstance | undefined;
    /**
     * Returns the currently pinned panel instance, if exists.
     *
     * @readonly
     * @type {(PanelInstance | undefined)}
     * @memberof PanelAPI
     */
    get pinned(): PanelInstance | undefined;
    /**
     * Sets route to the specified screen id and pass props to the panel screen components.
     *
     * @param {(string | PanelInstance)} value
     * @param {PanelConfigRoute} route
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered and the specified screen exists, undefined otherwise.
     * @memberof PanelAPI
     */
    show(value: string | PanelInstance, route: PanelConfigRoute): PanelInstance | undefined;
    /**
     * Sets the styles of the specified panel by using a provided CSS styles object.
     *
     * @param {(string | PanelInstance)} value
     * @param {object} style
     * @param {boolean} [replace=false] merge with existing styles if `false`; replace if `true`
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    setStyle(value: string | PanelInstance, style: object, replace?: boolean): PanelInstance | undefined;
    /**
     * Expands/collapses the expand state of the panel. Toggles whether the panel expands if no expand value is given.
     *
     * @param {(string | PanelInstance)} value
     * @param {boolean} expand Optional. Whether the panel should expand, toggles the value if not set
     * @returns {PanelInstance | undefined} the panel instance if the panel is currently registered, undefined otherwise.
     * @memberof PanelAPI
     */
    expand(value: string | PanelInstance, expand?: boolean): PanelInstance | undefined;
}
/**
 * A set of key-value pairs with `PanelConfig` objects and their ids.
 */
export type PanelConfigSet = {
    [name: string]: PanelConfig;
};
/**
 * A single pair of `PanelConfig`/id values.
 */
export type PanelConfigPair = {
    id: string;
    config: PanelConfig;
};
/**
 * A set of key-value pairs with `PanelInstance` objects and their ids.
 */
export type PanelInstanceSet = {
    [name: string]: PanelInstance;
};
/**
 * A path specifying panel id, screen id, and any props for that panel screen. Used when opening a panel through `$iApi.panel.open(...)`.
 */
export type PanelInstancePath = {
    id: string;
    screen?: string;
    props?: object;
};
/**
 * A set of common registration options to apply to panels being registered.
 */
export type PanelRegistrationOptions = {
    /**
     * Locale messages in the form of either i18n options object or un-parsed CSV rows.
     * These messages will be passed to any screen opened inside this panel.
     *
     * @type {(I18nComponentOptions)}
     */
    i18n?: I18nComponentOptions;
};
export interface PanelWidthObject {
    /**
     * The default panel width for this fixtures panels.
     *
     * @type number
     * @memberof PanelWidthObject
     */
    default?: number;
    /**
     * Used for setting a specific panel width.
     *
     * @type number
     * @memberof PanelWidthObject
     */
    [panel: string]: number | any;
}
export type PanelTeleportConfig = PanelTeleportObject | {
    [id: string]: PanelTeleportObject;
};
export interface PanelTeleportObject {
    /**
     * The element to teleport the panel to. Can be the actual element or a query selector string.
     *
     * @type string | Element
     * @memberof PanelTeleportObject
     */
    target?: string | Element;
    /**
     * Whether or not to show the panel header.
     *
     * @type boolean
     * @memberof PanelTeleportObject
     */
    showHeader?: boolean;
    /**
     * Whether or not opening/closing the panel will show/hide an appbar button for it.
     * Will only apply to temporary appbar buttons.
     *
     * @type boolean
     * @memberof PanelTeleportObject
     */
    showAppbarButton?: boolean;
    /**
     * Custom class breakpoints for the teleported panel.
     *
     * @type object
     * @memberof PanelTeleportObject
     */
    breakpoints?: {
        [key: string]: number;
    };
}
