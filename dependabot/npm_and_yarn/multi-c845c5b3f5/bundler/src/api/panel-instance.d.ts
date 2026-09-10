import { APIScope, InstanceAPI, PanelTeleportObject } from './internal';
import { PanelConfig, PanelConfigRoute, PanelConfigScreens, PanelConfigStyle, PanelDirection } from '../stores/panel';
export declare class PanelInstance extends APIScope {
    /**
     * ID of this panel.
     *
     * @type {string}
     * @memberof PanelInstance
     */
    readonly id: string;
    /**
     * A collection of panel screens to be displayed inside the panel.
     *
     * @type {PanelConfigScreens}
     * @memberof PanelInstance
     */
    readonly screens: PanelConfigScreens;
    /**
     * A list of screen component ids which are loaded and ready to be rendered.
     *
     * @private
     * @type {string[]}
     * @memberof PanelInstance
     */
    private readonly loadedScreens;
    readonly alertName: string;
    /**
     * The config for the element to render the panel screen in (instead of its usual spot in the panel stack).
     */
    teleport?: PanelTeleportObject;
    controls: any;
    button: any;
    /**
     * Checks if a given screen component id is already loaded and ready to render.
     *
     * @param {string} id
     * @returns {boolean}
     * @memberof PanelInstance
     */
    isScreenLoaded(id: string): boolean;
    /**
     * Loads and register panel screen components.
     * This function should be called just before the screen is to be shown; this will avoid needlessly loading components upfront
     * (sometimes certain screens might not get used at all).
     *
     * @param {string} id
     * @memberof PanelInstance
     */
    registerScreen(id: string): void;
    /**
     * The style object applied to the panel.
     *
     * @type {PanelConfigStyle}
     * @memberof PanelInstance
     */
    style: PanelConfigStyle;
    /**
     * Whether the panel expands to fill empty space.
     *
     * @type {boolean}
     * @memberof PanelInstance
     */
    expanded: boolean;
    /**
     * Returns the width of the panel in pixels or undefined if not set.
     *
     * @readonly
     * @type {(number | undefined)}
     * @memberof PanelInstance
     */
    get width(): number | undefined;
    /**
     * Specifies which panel screen to display and optional props to be passed to the screen panel component.
     *
     * @type {PanelConfigRoute}
     * @memberof PanelConfig
     */
    route: PanelConfigRoute;
    /**
     * Creates an instance of PanelInstance.
     *
     * @param {InstanceAPI} iApi
     * @param {string} id
     * @param {PanelConfig} config
     * @param {PanelRegistrationOptions} [options={}]
     * @memberof PanelInstance
     */
    constructor(iApi: InstanceAPI, id: string, config: PanelConfig);
    /**
     * Opens a registered panel in the panel stack.
     * This is a proxy to `InstanceAPI.panel.open(...)`.
     *
     *  - `somePanel.open()` -- opens the panel on the first screen in the set
     *  - `somePanel.open('screen-id')` -- opens the panel on the 'screen-id' screen
     *  - `somePanel.open({ screen: 'screen-id', props: {... } })` -- opens the panel on the 'screen-id' screen passing supplied `props` to it
     *
     * @param {(string | { screen: string; props?: object })} value a screen id, or an object of the form `{ screen: <id>, props: <object> }`.
     * @returns {this}
     * @memberof PanelInstance
     */
    open(value?: string | {
        screen: string;
        props?: object;
    }): this;
    /**
     * Checks if the panel is open or not.
     *
     * @readonly
     * @type {boolean}
     * @memberof PanelInstance
     */
    get isOpen(): boolean;
    /**
     * true if the panel is currently visible
     *
     * @readonly
     * @type {boolean}
     * @memberof PanelInstance
     */
    get isVisible(): boolean;
    /**
     * Close this panel.
     * This is a proxy to `InstanceAPI.panel.close(...)`.
     *
     * @returns {this}
     * @memberof PanelInstance
     */
    close(): this;
    /**
     * Minimize this panel.
     * This is a proxy to `InstanceAPI.panel.minimize(...)`.
     *
     * @returns {this}
     * @memberof PanelInstance
     */
    minimize(): this;
    /**
     * Move this panel left or right in the stack.
     * This is a proxy to `InstanceAPI.panel.move(...)`.
     *
     * @param {PanelDirection} direction the direction of movement, either "left" or "right".
     * @returns {this}
     * @memberof PanelInstance
     */
    move(direction: PanelDirection): this;
    /**
     * Checks if this panel is the leftmost visible and not-teleported panel.
     *
     * @readonly
     * @type {boolean}
     * @memberof PanelInstance
     */
    get isLeftMostPanel(): boolean;
    /**
     * Checks if this panel is the rightmost visible and non-teleported panel.
     * Note that a traditional for each loop is used due to reverse traversal of the array.
     *
     * @readonly
     * @type {boolean}
     * @memberof PanelInstance
     */
    get isRightMostPanel(): boolean;
    /**
     * Remove this panel.
     * This is a proxy to `InstanceAPI.panel.remove(...)`.
     *
     * @returns {this}
     * @memberof PanelInstance
     */
    remove(): this;
    /**
     * Toggle panel.
     * This is a proxy to `InstanceAPI.panel.toggle(...)`.
     *
     * @param {(boolean | { screen: string; props?: object; toggle?: boolean })} [value]
     * @returns {this}
     * @memberof PanelInstance
     */
    toggle(value?: boolean | {
        screen: string;
        props?: object;
        toggle?: boolean;
    }): this;
    /**
     * Toggle panel's minimize state.
     * This is a proxy to `InstanceAPI.panel.toggleMinimize(...)`.
     *
     * @param {(boolean | { screen: string; props?: object; toggle?: boolean })} [value]
     * @returns {this}
     * @memberof PanelInstance
     */
    toggleMinimize(value?: boolean | {
        screen: string;
        props?: object;
        toggle?: boolean;
    }): this;
    /**
     * Pin/unpin/toggle (if no value provided) pin status of this panel. When pinning, automatically unpins any previous pinned panel if exists.
     * This is a proxy to `InstanceAPI.panel.pin(...)`.
     *
     *
     * @param {boolean} [value]
     * @returns {this}
     * @memberof PanelInstance
     */
    pin(value?: boolean): this;
    /**
     * Checks if this panel is pinned or not.
     *
     * @readonly
     * @type {boolean}
     * @memberof PanelInstance
     */
    get isPinned(): boolean;
    /**
     * Sets route to the specified screen id and pass props to the panel screen components.
     * This is a proxy to `InstanceAPI.panel.route(...)`.
     *
     * @param {(string | PanelConfigRoute)} value
     * @returns {this}
     * @memberof PanelInstance
     */
    show(value: string | PanelConfigRoute): this;
    /**
     * Sets the styles of the specified panel by using a provided CSS styles object.
     * This is a proxy to `InstanceAPI.panel.setStyles(...)`.
     *
     * @param {object} style
     * @param {boolean} [replace=false]
     * @returns {this}
     * @memberof PanelInstance
     */
    setStyles(style: object, replace?: boolean): this;
    /**
     * Expands/collapses/toggles the expand state of the panel. Panels set to expand fill empty space.
     * This is a proxy to `InstanceAPI.panel.expand(...)`.
     *
     * @param {boolean} expand Optional. Whether the panel should expand. Toggles if no value is given.
     * @returns {this}
     * @memberof PanelInstance
     */
    expand(expand?: boolean): this;
}
