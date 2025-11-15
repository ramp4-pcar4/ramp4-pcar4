import { APIScope, InstanceAPI } from './internal';
export declare enum GlobalEvents {
    /**
     * Fires when an appbar button is clicked.
     * Payload: `(id: string)`
     */
    APPBAR_BUTTON_CLICK = "appbar/click",
    /**
     * Fires when a Vue component is registered with `rInstance.component(...)`.
     * Payload: `(id: string)`
     */
    COMPONENT = "ramp/component",
    /**
     * Fires when the config file changes.
     * Payload: `(config: RampConfig)`
     */
    CONFIG_CHANGE = "config/configchanged",
    /**
     * Fires when a request is issued to toggle (show if hidden, hide if showing) the details of an identify result.
     * Payload: `({ identifyItem: IdentifyItem, uid: string, format: string }, force?: boolean)`
     */
    DETAILS_TOGGLE = "details/toggle",
    /**
     * Fires when a filter is changed.
     * Payload: `(params: FilterEventParam)`
     */
    FILTER_CHANGE = "filter/change",
    /**
     * Fires when a fixture is added to the instance.
     * Payload: `(fixture: FixtureInstance)`
     */
    FIXTURE_ADDED = "fixture/added",
    /**
     * Fires when a fixture is removed from the instance.
     * Payload: `(fixture: FixtureInstance)`
     */
    FIXTURE_REMOVED = "fixture/removed",
    /**
     * Fires when a request is issued to toggle (show if hidden, hide if showing) the grid of attributes.
     * Payload: `(uid: string, force?: boolean)`
     */
    GRID_TOGGLE = "grid/toggle",
    /**
     * Fires when a request is issued to toggle (show if hidden, hide if showing) help information.
     * Payload: `(force?: boolean)`
     */
    HELP_TOGGLE = "help/toggle",
    /**
     * Fires when the language of the app changes.
     * Payload: `({ oldLang: string, newLang: string })`
     */
    LANG_CHANGE = "lang/change",
    /**
     * Fires when the drawing state of a layer changes.
     * Payload: `({ layer: LayerInstance, state: string })`
     */
    LAYER_DRAWSTATECHANGE = "layer/drawstatechange",
    /**
     * Fires when the layer state of a layer changes.
     * Payload: `({ layer: LayerInstance, state: string})`
     */
    LAYER_INITIATIONSTATECHANGE = "layer/initiationStatechange",
    /**
     * Fires when the load state of a layer changes.
     * Payload: `({ layer: LayerInstance, state: string, userCancel: boolean })`
     */
    LAYER_LAYERSTATECHANGE = "layer/layerstatechange",
    /**
     * Fires when the opacity of a layer changes.
     * Payload: `({ layer: LayerInstance, opacity: number })`
     */
    LAYER_OPACITYCHANGE = "layer/opacitychange",
    /**
     * Fires when a layer is registered (added to the instance via the map).
     * Payload: `(layer: LayerInstance)`
     */
    LAYER_REGISTERED = "layer/registered",
    /**
     * Fires when a layer completes its reload process.
     * Payload: `(layer: LayerInstance)`
     */
    LAYER_RELOAD_END = "layer/reloadend",
    /**
     * Fires when a layer begins its reload process.
     * Payload: `(layer: LayerInstance)`
     */
    LAYER_RELOAD_START = "layer/reloadstart",
    /**
     * Fires when a layer is removed from the map.
     * Payload: `(layer: LayerInstance)`
     */
    LAYER_REMOVE = "layer/remove",
    /**
     * Fires when the visibility of a layer changes.
     * Payload: `({ layer: LayerInstance, visibility: boolean })`
     */
    LAYER_VISIBILITYCHANGE = "layer/visibilitychange",
    /**
     * Fires when the basemap changes.
     * Payload: `({ basemapId: string, schemaChanged: boolean })`
     */
    MAP_BASEMAPCHANGE = "map/basemapchanged",
    /**
     * Fires when the map loses focus.
     * Payload: `(params: KeyboardEvent)` (DOM Event)
     */
    MAP_BLUR = "map/blur",
    /**
     * Fires when the map is clicked.
     * Payload: `(params: MapClick)`
     */
    MAP_CLICK = "map/click",
    /**
     * Fires after the map is created.
     * Payload: none
     */
    MAP_CREATED = "map/created",
    /**
     * Fires after the map is destroyed.
     * Payload: none
     */
    MAP_DESTROYED = "map/destroyed",
    /**
     * Fires when the map is double-clicked.
     * Payload: `(params: MapClick)`
     */
    MAP_DOUBLECLICK = "map/doubleclick",
    /**
     * Fires when the map extent changes.
     * Payload: `(extent: Extent)`
     */
    MAP_EXTENTCHANGE = "map/extentchanged",
    /**
     * Fires when the map gains focus.
     * Payload: `(params: KeyboardEvent)` (DOM Event)
     */
    MAP_FOCUS = "map/focus",
    /**
     * Fires when the mouse enters the graphic of a vector layer symbol.
     * Payload: TODO huge untyped object. Create type? Type it all out?
     */
    MAP_GRAPHICHIT = "map/graphichit",
    /**
     * Fires when a map identify executes.
     * Payload: `(results: MapIdentifyResult)`
     */
    MAP_IDENTIFY = "map/identify",
    /**
     * Fires when a key is pressed down while the map has focus.
     * Payload: `(params: KeyboardEvent)` (DOM Event)
     */
    MAP_KEYDOWN = "map/keydown",
    /**
     * Fires when a key is released while the map has focus.
     * Payload: `(params: KeyboardEvent)` (DOM Event)
     */
    MAP_KEYUP = "map/keyup",
    /**
     * Fires when the mouse (or alternate pointer) enters the "down" state.
     * Payload: `(params: PointerEvent)` (DOM Event)
     */
    MAP_MOUSEDOWN = "map/mousedown",
    /**
     * Fires when the mouse leaves the map.
     * Payload: `(params: PointerEvent)` (DOM Event)
     */
    MAP_MOUSELEAVE = "map/mouseleave",
    /**
     * Fires when the mouse moves while over the map.
     * Payload: `(params: MapMove)`
     */
    MAP_MOUSEMOVE = "map/mousemove",
    /**
     * Fires when the mouse moves stops moving over the map.
     * Payload: `(params: MapMove)`
     */
    MAP_MOUSEMOVE_END = "map/mousemoveend",
    /**
     * Fires when the mouse starts moving over the map.
     * Payload: `(params: MapMove)`
     */
    MAP_MOUSEMOVE_START = "map/mousemovestart",
    /**
     * Fires when the map view finishes refreshing.
     * Payload: none
     */
    MAP_REFRESH_END = "map/refreshend",
    /**
     * Fires when the map view starts refreshing.
     * Payload: none
     */
    MAP_REFRESH_START = "map/refreshstart",
    /**
     * Fires when a layer is reordered in the map stack.
     * Payload: `( { layer: LayerInstance, newIndex: integer })`
     */
    MAP_REORDER = "map/reorder",
    /**
     * Fires when the map view is resized.
     * Payload: `({ height: number, width: number })`
     */
    MAP_RESIZED = "map/resized",
    /**
     * Fires when the map scale changes.
     * Payload: `(scale_denominator: number)`
     */
    MAP_SCALECHANGE = "map/scalechanged",
    /**
     * Fires when the request to start the map is given.
     * Payload: none
     */
    MAP_START = "map/start",
    /**
     * Fires when a request is issued to toggle the Metadata panel.
     * Payload: `({ type: string, layerName: string, url: string }, open: boolean)`
     */
    METADATA_TOGGLE = "metadata/toggle",
    /**
     * Fires when a panel is closed.
     * Payload: `(panel: PanelInstance)`
     */
    PANEL_CLOSED = "panel/closed",
    /**
     * Fires when a panel is minimized.
     * Payload: `(panel: PanelInstance)`
     */
    PANEL_MINIMIZED = "panel/minimized",
    /**
     * Fires when a panel opens.
     * Payload: `(panel: PanelInstance)`
     */
    PANEL_OPENED = "panel/opened",
    /**
     * Fires when screen size changes from/to mobile resolution.
     * Payload `(mobileMode: boolean)`
     */
    RAMP_MOBILEVIEW_CHANGE = "ramp/mobileviewchange",
    /**
     * Fires when the instance has been explicitly reloaded / restarted
     * Payload: none
     */
    RAMP_RELOAD = "ramp/reload",
    /**
     * Fires when a request is issued to toggle (open/close) the Layer Reorder panel.
     * Payload: none
     */
    REORDER_TOGGLE = "reorder/toggle",
    /**
     * Fires when a request is issued to toggle (show if hidden, hide if showing) layer settings.
     * Payload: `(uid: string, force?: boolean)`
     */
    SETTINGS_TOGGLE = "settings/toggle",
    /**
     * Fires when a user adds a layer, generally through the wizard.
     * Payload: `(layer: LayerInstance)`
     */
    USER_LAYER_ADDED = "user/layeradded",
    /**
     * Fires when a request is issued to toggle (open/close) the Add Layer Wizard panel.
     * Payload: none
     */
    WIZARD_TOGGLE = "wizard/toggle"
}
export declare class EventAPI extends APIScope {
    /**
     * A vue instance that provides an event bus for all events.
     *
     * @private
     * @type {Vue}
     * @memberof EventAPI
     */
    private readonly _eventBus;
    private readonly _eventRegister;
    private readonly _nameRegister;
    private _funCounter;
    constructor(iApi: InstanceAPI);
    /**
     * Locates a registered handler by name, or undefined if not found
     *
     * @param {string} handlerName the name of the event handler
     * @returns {EventHandler | undefined} handler information or undefined
     * @memberof EventAPI
     * @private
     */
    private findHandler;
    /**
     * Generates an event handler name. Used when caller doesnt provide one.
     *
     * @param {string} eventName the name of the event the handler is handling
     * @returns {String} a handler name
     * @memberof EventAPI
     * @private
     */
    private handlerNamer;
    /**
     * Adds event names to the names registry of the event bus.
     *
     * @param {string | Array} names event names or names to register
     * @memberof EventAPI
     */
    registerEventName(names: string | Array<string>): void;
    /**
     * A list of event names that have been registered with the bus.
     *
     * @returns {Array} list of event names
     * @memberof EventAPI
     */
    eventNames(): Array<string>;
    /**
     * Adds an event handler to an event.
     *
     * @param {string} event name of the event to react to
     * @param {Function} callback function to execute when event triggers
     * @param {string} [handlerName] name of the handler (for reference). a name will be generated if not provided.
     * @returns {string} the handler name
     * @memberof EventAPI
     */
    on(event: string, callback: (...args: any[]) => void, handlerName?: string): string;
    /**
     * Removes an event handler from an event.
     *
     * @param {string} handlerName name of the handler to remove
     * @memberof EventAPI
     */
    off(handlerName: string): void;
    /**
     * Removes all event handlers, filtered to an event name if desired.
     * @param {string} [event] name of the event. Omission will remove all handlers for all events
     */
    offAll(event?: string): void;
    /**
     * Removes all default event handlers.
     */
    removeDefaultEvents(): void;
    /**
     * Triggers an event.
     *
     * @param {string} event the name of the event
     * @param {...any[]} args any arguements the event is expecting
     * @memberof EventAPI
     */
    emit(event: string, ...args: any[]): void;
    /**
     * Adds an event handler to an event that will be respected once. After the handler
     * reacts to the event, it will be removed.
     *
     * @param {string} event name of the event to react to once
     * @param {Function} callback function to execute when event triggers
     * @param {string} [handlerName] name of the handler (for reference). a name will be generated if not provided.
     * @returns {string} the handler name
     * @memberof EventAPI
     */
    once(event: string, callback: (args: any[]) => void, handlerName?: string): string;
    /**
     * Returns any active event handlers, filtered to an event name if desired.
     *
     * @param {string} [event] name of the event. Omission will return all active handlers
     * @returns {Array} list of handler names
     * @memberof EventAPI
     */
    activeHandlers(event?: string): Array<string>;
    /**
     * Loads the set of standard, built-in event handlers to the R4MP Vue instance.
     * This will quickly set up the vanilla version of RAMP.
     * Note this function is automatically run by the instance startup unless the loadDefaultEvents option is
     * set to false. The function is exposed to allow custom pages the ability to call it at a different point
     * in the startup. Also, a subset of standard event handlers can be provided on the optional parameter if one
     * wishes to omit some of the standard handlers.
     *
     * @param {Array<string>} [eventHandlerNames] list of built-in event handler names to add. omission means all built-in event handlers will be added
     * @returns {Array<string>} resolves with array of event handler names
     * @memberof EventAPI
     */
    addDefaultEvents(eventHandlerNames?: Array<string>): Array<string>;
    /**
     * Will apply the implementation of default events handlers
     *
     * @param {string} handlerName the name of the default event handler to create
     * @returns {String} name of the event handler
     * @memberof EventAPI
     * @private
     */
    private defaultHandlerFactory;
}
