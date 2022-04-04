import { TinyEmitter } from 'tiny-emitter';
import {
    APIScope,
    InstanceAPI,
    LayerInstance,
    PanelInstance
} from './internal';
import type { DetailsAPI } from '@/fixtures/details/api/details';
import type { SettingsAPI } from '@/fixtures/settings/api/settings';
import type { HelpAPI } from '@/fixtures/help/api/help';
import type { GridAPI } from '@/fixtures/grid/api/grid';
import type { WizardAPI } from '@/fixtures/wizard/api/wizard';
import type { LegendAPI } from '@/fixtures/legend/api/legend';
import type { LayerReorderAPI } from '@/fixtures/layer-reorder/api/layer-reorder';
import type { MetadataAPI } from '@/fixtures/metadata/api/metadata';
import type { MetadataPayload } from '@/fixtures/metadata/store';
import { AppbarAction } from '@/fixtures/appbar/store';
import type { HilightAPI } from '@/fixtures/hilight/api/hilight';
import { LegendStore } from '@/fixtures/legend/store';
import { GridStore, GridAction } from '@/fixtures/grid/store';
import { LayerState } from '@/geo/api';
import type {
    MapClick,
    MapMove,
    MapCoords,
    RampBasemapConfig,
    ScreenPoint
} from '@/geo/api';
import type { RampConfig } from '@/types';
import { debounce, throttle } from 'throttle-debounce';
import { MapCaptionStore } from '@/store/modules/map-caption';
import { ConfigStore } from '@/store/modules/config';
import { DetailsStore } from '@/fixtures/details/store';

// TODO ensure some of the internal types used in the payload comments are published
//      as part of our API doc generator. Would be ideal if doc output hyperlinked to
//      those definitions. If not we might want to just write out object structures instead of names.
//      Obviously something like LayerInstance is too massive to do that with.

export enum GlobalEvents {
    /**
     * Fires when a Vue component is registered with `rInstance.component(...)`.
     * Payload: `(id: string)`
     */
    COMPONENT = 'ramp/component',

    /**
     * Fires when the config file changes.
     * Payload: `(config: RampConfig)`
     */
    CONFIG_CHANGE = 'config/configchanged',

    /**
     * Fires when a request is issued to show the details of an identify result.
     * Payload: `({ identifyItem: IdentifyItem, uid: string })`
     */
    DETAILS_OPEN = 'details/open',

    /**
     * Fires when a filter is changed.
     * Payload: `(params: FilterEventParam)`
     */
    FILTER_CHANGE = 'filter/change',

    /**
     * Fires when a fixture is added to the instance.
     * Payload: `(fixture: FixtureInstance)`
     */
    FIXTURE_ADDED = 'fixture/added',

    /**
     * Fires when a fixture is removed from the instance.
     * Payload: `(fixture: FixtureInstance)`
     */
    FIXTURE_REMOVED = 'fixture/removed',

    /**
     * Fires when a request is issued to toggle (show if hidden, hide if showing) the grid of attributes.
     * Payload: `(uid: string, force?: boolean)`
     */
    GRID_TOGGLE = 'grid/toggle',

    /**
     * Fires when a request is issued to toggle (show if hidden, hide if showing) help information.
     * Payload: `(force?: boolean)`
     */
    HELP_TOGGLE = 'help/toggle',

    /**
     * Fires when the drawing state of a layer changes.
     * Payload: `({ layer: LayerInstance, state: string })`
     */
    LAYER_DRAWSTATECHANGE = 'layer/drawstatechange',

    /**
     * Fires when the opacity of a layer changes.
     * Payload: `({ layer: LayerInstance, opacity: number })`
     */
    LAYER_OPACITYCHANGE = 'layer/opacitychange',

    /**
     * Fires when a layer is registered (added to the instance via the map).
     * Payload: `(layer: LayerInstance)`
     */
    LAYER_REGISTERED = 'layer/registered',

    /**
     * Fires when a layer completes its reload process.
     * Payload: `(layer: LayerInstance)`
     */
    LAYER_RELOAD_END = 'layer/reloadend',

    /**
     * Fires when a layer begins its reload process.
     * Payload: `(layer: LayerInstance)`
     */
    LAYER_RELOAD_START = 'layer/reloadstart',

    /**
     * Fires when a layer is removed from the map.
     * Payload: `(layer: LayerInstance)`
     */
    LAYER_REMOVE = 'layer/remove',

    /**
     * Fires when the load state of a layer changes.
     * Payload: `({ layer: LayerInstance, state: string })`
     */
    LAYER_LAYERSTATECHANGE = 'layer/layerstatechange',

    /**
     * Fires when the layer state of a layer changes.
     * Payload: `({ layer: LayerInstance, state: string})`
     */
    LAYER_INITIATIONSTATECHANGE = 'layer/initiationStatechange',

    /**
     * Fires when the visibility of a layer changes.
     * Payload: `({ layer: LayerInstance, visibility: boolean })`
     */
    LAYER_VISIBILITYCHANGE = 'layer/visibilitychange',

    /**
     * Fires when the basemap changes.
     * Payload: `({ basemapId: string, schemaChanged: boolean })`
     */
    MAP_BASEMAPCHANGE = 'map/basemapchanged',

    /**
     * Fires when the map gains focus.
     * Payload: `(params: KeyboardEvent)` (DOM Event)
     */
    MAP_FOCUS = 'map/focus',

    /**
     * Fires when the map loses focus.
     * Payload: `(params: KeyboardEvent)` (DOM Event)
     */
    MAP_BLUR = 'map/blur',

    /**
     * Fires when the map is clicked.
     * Payload: `(params: MapClick)`
     */
    MAP_CLICK = 'map/click',

    /**
     * Fires after the map is created.
     * Payload: none
     */
    MAP_CREATED = 'map/created',

    /**
     * Fires after the map is destroyed.
     * Payload: none
     */
    MAP_DESTROYED = 'map/destroyed',

    /**
     * Fires when the map is double-clicked.
     * Payload: `(params: MapClick)`
     */
    MAP_DOUBLECLICK = 'map/doubleclick',

    /**
     * Fires when the map extent changes.
     * Payload: `(extent: Extent)`
     */
    MAP_EXTENTCHANGE = 'map/extentchanged',

    /**
     * Fires when the mouse enters the graphic of a vector layer symbol.
     * Payload: TODO huge untyped object. Create type? Type it all out?
     */
    MAP_GRAPHICHIT = 'map/graphichit',

    /**
     * Fires when a map identify executes.
     * Payload: `(results: MapIdentifyResult)`
     */
    MAP_IDENTIFY = 'map/identify',

    /**
     * Fires when a key is pressed down while the map has focus.
     * Payload: `(params: KeyboardEvent)` (DOM Event)
     */
    MAP_KEYDOWN = 'map/keydown',

    /**
     * Fires when a key is released while the map has focus.
     * Payload: `(params: KeyboardEvent)` (DOM Event)
     */
    MAP_KEYUP = 'map/keyup',

    /**
     * Fires when the mouse (or alternate pointer) enters the "down" state.
     * Payload: `(params: PointerEvent)` (DOM Event)
     */
    MAP_MOUSEDOWN = 'map/mousedown',

    /**
     * Fires when the mouse moves while over the map.
     * Payload: `(params: MapMove)`
     */
    MAP_MOUSEMOVE = 'map/mousemove',

    /**
     * Fires when the mouse moves stops moving over the map.
     * Payload: `(params: MapMove)`
     */
    MAP_MOUSEMOVE_END = 'map/mousemoveend',

    /**
     * Fires when the mouse starts moving over the map.
     * Payload: `(params: MapMove)`
     */
    MAP_MOUSEMOVE_START = 'map/mousemovestart',

    /**
     * Fires when the map view finishes refreshing.
     * Payload: none
     */
    MAP_REFRESH_END = 'map/refreshend',

    /**
     * Fires when the map view starts refreshing.
     * Payload: none
     */
    MAP_REFRESH_START = 'map/refreshstart',

    /**
     * Fires when a layer is reordered in the map stack.
     * Payload: `( { layer: LayerInstance, newIndex: integer })`
     */
    MAP_REORDER = 'map/reorder',

    /**
     * Fires when the map view is resized.
     * Payload: `({ height: number, width: number })`
     */
    MAP_RESIZED = 'map/resized',

    /**
     * Fires when the map scale changes.
     * Payload: `(scale_denominator: number)`
     */
    MAP_SCALECHANGE = 'map/scalechanged',

    /**
     * Fires when the request to start the map is given.
     * Payload: none
     */
    MAP_START = 'map/start',

    /**
     * Fires when a request is issued to open the Metadata panel
     * Payload: `({ type: string, layerName: string, url: string })`
     */
    METADATA_OPEN = 'metadata/open',

    /**
     * Fires when a panel is closed.
     * Payload: `(panel: PanelInstance)`
     */
    PANEL_CLOSED = 'panel/closed',

    /**
     * Fires when a panel is minimized.
     * Payload: `(panel: PanelInstance)`
     */
    PANEL_MINIMIZED = 'panel/minimized',

    /**
     * Fires when a panel opens.
     * Payload: `(panel: PanelInstance)`
     */
    PANEL_OPENED = 'panel/opened',

    /**
     * Fires when a request is issued to open the Layer Reorder panel.
     * Payload: none
     */
    REORDER_OPEN = 'reorder/open',

    /**
     * Fires when a request is issued to toggle (show if hidden, hide if showing) layer settings.
     * Payload: `(uid: string)`
     */
    SETTINGS_TOGGLE = 'settings/toggle',

    /**
     * Fires when a user adds a layer, generally through the wizard.
     * Payload: `(layer: LayerInstance)`
     */
    USER_LAYER_ADDED = 'user/layeradded',

    /**
     * Fires when a request is issued to open the Add Layer Wizard.
     * Payload: none
     */
    WIZARD_OPEN = 'wizard/open'
}

// TODO export this enum?
//      would an outsider know enough to find the enum and use it, or would they just refer to the doc pages?
//      if it becomes public, use a better name, like DefaultEventHandlerNames ; I'm using short cuz its all internal
// Default Event Handler Names
// IMPORTANT: if changing the enum values, be sure to update the documentation to reflect it.
//            after v1.0.0 release, best to never edit them unless no other alternative,
//            as it will be a breaking change to API usage.
enum DefEH {
    APPBAR_ADDS_PANEL_BUTTON = 'appbar_adds_panel_button',
    APPBAR_REMOVES_PANEL_BUTTON = 'appbar_removes_panel_button',
    IDENTIFY_DETAILS = 'ramp_identify_opens_details',
    MAP_IDENTIFY = 'ramp_map_click_runs_identify',
    MAP_KEYDOWN = 'ramp_map_keydown',
    MAP_KEYUP = 'ramp_map_keyup',
    MAP_BLUR = 'ramp_map_blur',
    TOGGLE_SETTINGS = 'ramp_settings_toggles_panel',
    OPEN_DETAILS = 'opens_feature_details',
    TOGGLE_HELP = 'toggles_help_panel',
    TOGGLE_GRID = 'toggles_grid_panel',
    OPEN_WIZARD = 'opens_wizard_panel',
    OPEN_LAYER_REORDER = 'opens_layer_reorder_panel',
    OPEN_METADATA = 'opens_metadata_panel',
    UPDATE_LEGEND_LAYER_REGISTER = 'updates_legend_layer_register',
    UPDATE_LEGEND_LAYER_ERROR = 'updates_legend_layer_error',
    UPDATE_LEGEND_WIZARD_ADDED = 'updates_legend_wizard_added',
    UPDATE_LEGEND_LAYER_RELOAD = 'updates_legend_layer_reload',
    MAP_BASEMAPCHANGE_ATTRIBUTION = 'updates_map_caption_attribution_basemap',
    CONFIG_CHANGE_ATTRIBUTION = 'updates_map_caption_attribution_config',
    MAP_CREATED_ATTRIBUTION = 'updates_map_caption_attribution_map_created',
    MAP_RESIZED_SCALEBAR = 'resizes_map_caption_scale',
    MAP_SCALECHANGE_SCALEBAR = 'updates_map_caption_scale',
    MOUSE_MOVE_MAPTIP_CHECK = 'checks_maptip_mouse_move',
    EXTENT_CHANGE_MAPTIP_CHECK = 'checks_maptip_extent_change',
    SHOW_DEFAULT_MAPTIP = 'show_default_maptip',
    MAP_UPDATE_MOUSE_COORDS = 'updates_map_mouse_coords',
    MAP_UPDATE_CROSSHAIRS_COORDS = 'updates_map_crosshairs_coords',
    LEGEND_REMOVES_LAYER_ENTRY = 'legend_removes_layer_entry',
    LEGEND_RELOADS_LAYER_ENTRY = 'legend_reloads_layer_entry',
    GRID_REMOVES_LAYER_GRID = 'grid_removes_layer_grid',
    DETAILS_REMOVES_LAYER = 'details_removes_layer'
}

// private for EventBus internals, so don't export
// a simple data structure for managing the Event API on fixtures.
// TODO if we end up supporting toggle/disabled events, add an active boolean flag to the structure
class EventHandler {
    eventName: string;
    handlerName: string;
    handlerFunc: Function;

    constructor(eName: string, hName: string, handler: Function) {
        this.eventName = eName;
        this.handlerName = hName;
        this.handlerFunc = handler;
    }
}

export class EventAPI extends APIScope {
    /**
     * A vue instance that provides an event bus for all events.
     *
     * @private
     * @type {Vue}
     * @memberof EventAPI
     */
    private readonly _eventBus: any;

    // tracks active event handlers: event name, handler name, and the actual handler function
    private readonly _eventRegister: Array<EventHandler>;

    // a helpful register of event names that have been announced by the app and fixtures.
    // TODO this is not essential. we can decide to remove the feature. would also remove .registerEventName and .eventNames
    private readonly _nameRegister: Array<string>;

    // for autonamer
    private _funCounter: number;

    constructor(iApi: InstanceAPI) {
        super(iApi);
        this._eventBus = new TinyEmitter();
        this._eventRegister = [];
        this._funCounter = 1;

        // add the public enum items here, as they will always exist.
        // getting enum values is a mess. this code does it but assumes
        // all event names in global events use the slash format
        this._nameRegister = Object.values(GlobalEvents).filter(
            e => typeof e === 'string' && e.indexOf('/') > -1
        );
    }

    /**
     * Locates a registered handler by name, or undefined if not found
     *
     * @param {string} handlerName the name of the event handler
     * @returns {EventHandler | undefined} handler information or undefined
     * @memberof EventAPI
     * @private
     */
    private findHandler(handlerName: string): EventHandler | undefined {
        return this._eventRegister.find(eh => eh.handlerName === handlerName);
    }

    /**
     * Generates an event handler name. Used when caller doesnt provide one.
     *
     * @param {string} eventName the name of the event the handler is handling
     * @returns {String} a handler name
     * @memberof EventAPI
     * @private
     */
    private handlerNamer(eventName: string): string {
        this._funCounter++;
        return eventName.replace(/\//g, '_') + this._funCounter.toString();
    }

    /**
     * Adds event names to the names registry of the event bus.
     *
     * @param {string | Array} names event names or names to register
     * @memberof EventAPI
     */
    registerEventName(names: string | Array<string>): void {
        const arrr = Array.isArray(names) ? names : [names];
        arrr.forEach(n => {
            // don't add if name is already registered
            if (this._nameRegister.indexOf(n) === -1) {
                this._nameRegister.push(n);
            }
        });
    }

    /**
     * A list of event names that have been registered with the bus.
     *
     * @returns {Array} list of event names
     * @memberof EventAPI
     */
    eventNames(): Array<string> {
        return this._nameRegister.slice();
    }

    // TODO provide a method to unregister an event name? would that ever really need to happen?

    /**
     * Adds an event handler to an event.
     *
     * @param {string} event name of the event to react to
     * @param {Function} callback function to execute when event triggers
     * @param {string} [handlerName] name of the handler (for reference). a name will be generated if not provided.
     * @returns {string} the handler name
     * @memberof EventAPI
     */
    on(event: string, callback: Function, handlerName = ''): string {
        // check if name already registered
        if (this.findHandler(handlerName)) {
            // TODO decide if we are replacing, erroring, do nothing + console warn?
            throw new Error(
                'Duplicate handler name registration: ' + handlerName
            );
        }

        if (!handlerName) {
            handlerName = this.handlerNamer(event);
        }

        // track the event, register with main event bus
        const eh = new EventHandler(event, handlerName, callback);
        this._eventRegister.push(eh);
        this._eventBus.on(event, callback);

        return handlerName;
    }

    /**
     * Removes an event handler from an event.
     *
     * @param {string} handlerName name of the handler to remove
     * @memberof EventAPI
     */
    off(handlerName: string): void {
        // TODO support other overloads? like event name + handler function?
        // TODO handle the "off all" scenario?
        // TODO support "turn off all handlers for an event?".
        //      This is a bit tricky as it also uses a 1 string param sig.
        //      Could use a diff method, like .allOff(event)

        // check if name exists. if not... do nothing? console warn? error?
        const eh = this.findHandler(handlerName);

        if (eh) {
            // remove from event bus and the registry
            this._eventRegister.splice(this._eventRegister.indexOf(eh), 1);
            this._eventBus.off(eh.eventName, eh.handlerFunc);
        }

        // TODO case where no handler was found. do nothing? console warn? error?
        //      for now just exit. the goal was achived (non-existing handler will no longer react)
    }

    /**
     * Removes all event handlers, filtered to an event name if desired.
     * @param {string} [event] name of the event. Omission will remove all handlers for all events
     */
    offAll(event = ''): void {
        let active: Array<string> = this.activeHandlers(event);
        active.forEach(h => this.off(h));
    }

    /**
     * Triggers an event.
     *
     * @param {string} event the name of the event
     * @param {...any[]} args any arguements the event is expecting
     * @memberof EventAPI
     */
    emit(event: string, ...args: any[]): void {
        // TODO any checking that event exists? or we just agree it is global bus fun
        this._eventBus.emit(event, ...args);
    }

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
    once(event: string, callback: Function, handlerName = ''): string {
        // need to do this here and upfront, so we have the name for the unregistration.
        // otherwise we would let the .on() call do its naming thing
        if (!handlerName) {
            handlerName = this.handlerNamer(event);
        }

        const secretCallback = (...args: any[]) => {
            // run the original function. unregister our one-time handler
            callback(...args);
            this.off(handlerName);
        };

        return this.on(event, secretCallback, handlerName);
    }

    /**
     * Returns any active event handlers, filtered to an event name if desired.
     *
     * @param {string} [event] name of the event. Omission will return all active handlers
     * @returns {Array} list of handler names
     * @memberof EventAPI
     */
    activeHandlers(event = ''): Array<string> {
        // TODO add a filter if we implement disabled events

        if (event === '') {
            return this._eventRegister.map(eh => eh.handlerName);
        }
        return this._eventRegister
            .filter(eh => eh.eventName === event)
            .map(eh => eh.handlerName);
    }

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
    addDefaultEvents(eventHandlerNames?: Array<string>): Array<string> {
        if (
            !Array.isArray(eventHandlerNames) ||
            eventHandlerNames.length === 0
        ) {
            // use all the default event handlers
            // TODO the enum-values-to-array logic we use in the event names list
            //      fails a bit here. we could make it work if we force every default
            //      handler name to being with a specific prefix. Alternately use object, not enum.
            eventHandlerNames = [
                DefEH.APPBAR_ADDS_PANEL_BUTTON,
                DefEH.APPBAR_REMOVES_PANEL_BUTTON,
                DefEH.MAP_IDENTIFY,
                DefEH.MAP_KEYDOWN,
                DefEH.MAP_KEYUP,
                DefEH.MAP_BLUR,
                DefEH.IDENTIFY_DETAILS,
                DefEH.TOGGLE_SETTINGS,
                DefEH.OPEN_DETAILS,
                DefEH.TOGGLE_HELP,
                DefEH.TOGGLE_GRID,
                DefEH.OPEN_WIZARD,
                DefEH.OPEN_LAYER_REORDER,
                DefEH.OPEN_METADATA,
                DefEH.UPDATE_LEGEND_LAYER_REGISTER,
                DefEH.UPDATE_LEGEND_LAYER_ERROR,
                DefEH.UPDATE_LEGEND_WIZARD_ADDED,
                DefEH.UPDATE_LEGEND_LAYER_RELOAD,
                DefEH.MAP_BASEMAPCHANGE_ATTRIBUTION,
                DefEH.CONFIG_CHANGE_ATTRIBUTION,
                DefEH.MAP_CREATED_ATTRIBUTION,
                DefEH.MAP_RESIZED_SCALEBAR,
                DefEH.MAP_SCALECHANGE_SCALEBAR,
                DefEH.MOUSE_MOVE_MAPTIP_CHECK,
                DefEH.EXTENT_CHANGE_MAPTIP_CHECK,
                DefEH.SHOW_DEFAULT_MAPTIP,
                DefEH.MAP_UPDATE_MOUSE_COORDS,
                DefEH.MAP_UPDATE_CROSSHAIRS_COORDS,
                DefEH.LEGEND_REMOVES_LAYER_ENTRY,
                DefEH.LEGEND_RELOADS_LAYER_ENTRY,
                DefEH.GRID_REMOVES_LAYER_GRID,
                DefEH.DETAILS_REMOVES_LAYER
            ];
        }

        // add all the requested default event handlers.
        return eventHandlerNames.map(hn => this.defaultHandlerFactory(hn));
    }

    /**
     * Will apply the implementation of default events handlers
     *
     * @param {string} handlerName the name of the default event handler to create
     * @returns {String} name of the event handler
     * @memberof EventAPI
     * @private
     */
    private defaultHandlerFactory(handlerName: string): string {
        let zeHandler: Function;
        switch (handlerName) {
            case DefEH.APPBAR_ADDS_PANEL_BUTTON:
                zeHandler = (panel: PanelInstance) => {
                    if (
                        this.$iApi.fixture.get('appbar') &&
                        !(this.$iApi.$vApp.$store.get('appbar/order') as any)
                            .flat()
                            .find((item: string) => item === panel.id)
                    ) {
                        this.$iApi.$vApp.$store.dispatch(
                            `appbar/${AppbarAction.ADD_TEMP_BUTTON}`,
                            panel.id
                        );
                    }
                };
                this.on(GlobalEvents.PANEL_OPENED, zeHandler, handlerName);
                break;
            case DefEH.APPBAR_REMOVES_PANEL_BUTTON:
                zeHandler = (panel: PanelInstance) => {
                    if (
                        this.$iApi.fixture.get('appbar') &&
                        !(this.$iApi.$vApp.$store.get('appbar/order') as any)
                            .flat()
                            .find((item: string) => item === panel.id)
                    ) {
                        this.$iApi.$vApp.$store.dispatch(
                            `appbar/${AppbarAction.REMOVE_BUTTON}`,
                            panel.id
                        );
                    }
                };
                this.on(GlobalEvents.PANEL_CLOSED, zeHandler, handlerName);
                break;
            case DefEH.MAP_IDENTIFY:
                // when map clicks, run the identify action
                zeHandler = (clickParam: MapClick) => {
                    if (clickParam.button === 0) {
                        this.$iApi.geo.map.runIdentify(clickParam);
                    }
                };
                this.on(GlobalEvents.MAP_CLICK, zeHandler, handlerName);
                break;
            case DefEH.IDENTIFY_DETAILS:
                // when identify runs, open details fixture and show the results
                zeHandler = (identifyParam: any) => {
                    const detailFix: DetailsAPI =
                        this.$iApi.fixture.get('details');
                    if (detailFix) {
                        detailFix.openDetails(identifyParam.results);
                    }
                };
                this.on(GlobalEvents.MAP_IDENTIFY, zeHandler, handlerName);
                break;
            case DefEH.TOGGLE_SETTINGS:
                // opens or closes the settings panel and hooks it up to the requested layer.
                zeHandler = (layer: LayerInstance) => {
                    const settingsFixture: SettingsAPI =
                        this.$iApi.fixture.get('settings');
                    if (settingsFixture) {
                        settingsFixture.toggleSettings(layer);
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.SETTINGS_TOGGLE,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.OPEN_DETAILS:
                // opens the standard details panel when a show details event happens
                zeHandler = (payload: {
                    data: any;
                    uid: string;
                    format: string;
                }) => {
                    const detailsFixture: DetailsAPI =
                        this.$iApi.fixture.get('details');
                    if (detailsFixture) {
                        detailsFixture.openFeature(payload);
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.DETAILS_OPEN,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.TOGGLE_HELP:
                // opens or closes the standard help panel when a toggle help event happens
                zeHandler = (payload?: boolean) => {
                    const helpFixture: HelpAPI = this.$iApi.fixture.get('help');
                    if (helpFixture) {
                        helpFixture.toggleHelp(payload);
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.HELP_TOGGLE,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.TOGGLE_GRID:
                // opens or closes the standard grid panel when a toggle grid event happens
                zeHandler = (layer: LayerInstance, open?: boolean) => {
                    const gridFixture: GridAPI = this.$iApi.fixture.get('grid');
                    if (gridFixture) {
                        gridFixture.toggleGrid(layer.uid, open);
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.GRID_TOGGLE,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.OPEN_WIZARD:
                // opens the standard add layer wizard panel when an open wizard event happens
                zeHandler = () => {
                    const wizardFixture: WizardAPI =
                        this.$iApi.fixture.get('wizard');
                    if (wizardFixture) {
                        wizardFixture.openWizard();
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.WIZARD_OPEN,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.OPEN_LAYER_REORDER:
                // opens the standard layer reorder panel when an open reorder event happens
                zeHandler = () => {
                    const reorderFixture: LayerReorderAPI =
                        this.$iApi.fixture.get('layer-reorder');
                    if (reorderFixture) {
                        reorderFixture.openLayerReorder();
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.REORDER_OPEN,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.OPEN_METADATA:
                // opens the standard metadata panel when an open metadata event happens
                zeHandler = (payload: MetadataPayload) => {
                    const metadataFixture: MetadataAPI =
                        this.$iApi.fixture.get('metadata');
                    if (metadataFixture) {
                        metadataFixture.toggleMetadata(payload);
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.METADATA_OPEN,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.UPDATE_LEGEND_LAYER_REGISTER:
                // when a layer is registered, have the standard legend update in accordance to the layer
                zeHandler = (layer: LayerInstance) => {
                    const legendFixture: LegendAPI =
                        this.$iApi.fixture.get('legend');
                    if (legendFixture) {
                        legendFixture.updateLegend(layer);
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.LAYER_REGISTERED,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.UPDATE_LEGEND_LAYER_ERROR:
                // when a layer errors, have the standard legend update in accordance to the layer
                zeHandler = (payload: {
                    state: String;
                    layer: LayerInstance;
                }) => {
                    if (payload.layer.layerState === LayerState.ERROR) {
                        const legendFixture: LegendAPI =
                            this.$iApi.fixture.get('legend');
                        if (legendFixture) {
                            legendFixture.updateLegend(payload.layer);
                        }
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.LAYER_LAYERSTATECHANGE,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.UPDATE_LEGEND_WIZARD_ADDED:
                // when a layer is user-added, have the standard legend create a new stock entry for the layer
                zeHandler = (layer: LayerInstance) => {
                    const legendFixture: LegendAPI =
                        this.$iApi.fixture.get('legend');
                    if (legendFixture) {
                        legendFixture.generateLegend(layer);
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.USER_LAYER_ADDED,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.UPDATE_LEGEND_LAYER_RELOAD:
                // when a layer is reloaded, have the standard legend update in accordance to the layer
                zeHandler = (layer: LayerInstance) => {
                    const legendFixture: LegendAPI =
                        this.$iApi.fixture.get('legend');
                    if (legendFixture) {
                        legendFixture.updateLegend(layer);
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.LAYER_RELOAD_END,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.MAP_KEYDOWN:
                // processes keyboard interaction from the map view
                zeHandler = (payload: KeyboardEvent) => {
                    this.$iApi.geo.map.mapKeyDown(payload);
                };
                this.$iApi.event.on(
                    GlobalEvents.MAP_KEYDOWN,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.MAP_KEYUP:
                // processes keyboard interaction from the map view
                zeHandler = (payload: KeyboardEvent) => {
                    this.$iApi.geo.map.mapKeyUp(payload);
                };
                this.$iApi.event.on(
                    GlobalEvents.MAP_KEYUP,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.MAP_BLUR:
                // processes loss of focus from the map view
                zeHandler = (payload: KeyboardEvent) => {
                    this.$iApi.geo.map.stopKeyPan();
                };
                this.$iApi.event.on(
                    GlobalEvents.MAP_BLUR,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.MAP_BASEMAPCHANGE_ATTRIBUTION:
                // update any basemap attribution in the map caption when the basemap changes
                zeHandler = () => {
                    this.$iApi.geo.map.caption.updateAttribution(
                        (
                            this.$iApi.$vApp.$store.get(
                                ConfigStore.getActiveBasemapConfig
                            ) as RampBasemapConfig
                        )?.attribution
                    );
                };
                this.$iApi.event.on(
                    GlobalEvents.MAP_BASEMAPCHANGE,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.CONFIG_CHANGE_ATTRIBUTION:
                // update any basemap attribution in the map caption when the config changes (likely langauge switch)
                zeHandler = (payload: RampConfig) => {
                    let currentBasemapConfig: RampBasemapConfig | undefined =
                        payload.map.basemaps.find(
                            bms =>
                                bms.id ===
                                this.$iApi.geo.map.getCurrentBasemapId()
                        );

                    this.$iApi.geo.map.caption.updateAttribution(
                        currentBasemapConfig?.attribution
                    );
                };
                this.$iApi.event.on(
                    GlobalEvents.CONFIG_CHANGE,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.MAP_CREATED_ATTRIBUTION:
                // update any basemap attribution in the map caption when the map is created
                zeHandler = () => {
                    this.$iApi.geo.map.caption.updateAttribution(
                        (
                            this.$iApi.$vApp.$store.get(
                                ConfigStore.getActiveBasemapConfig
                            ) as RampBasemapConfig
                        )?.attribution
                    );
                };
                this.$iApi.event.on(
                    GlobalEvents.MAP_CREATED,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.MAP_RESIZED_SCALEBAR:
                // update the map scale caption when the window is resized
                this.$iApi.event.on(
                    GlobalEvents.MAP_RESIZED,
                    debounce(100, () =>
                        this.$iApi.geo.map.caption.updateScale()
                    ),
                    handlerName
                );
                break;
            case DefEH.MAP_SCALECHANGE_SCALEBAR:
                // update the map scale caption when the map scale changes
                this.$iApi.event.on(
                    GlobalEvents.MAP_SCALECHANGE,
                    debounce(300, () =>
                        this.$iApi.geo.map.caption.updateScale()
                    ),
                    handlerName
                );
                break;
            case DefEH.MOUSE_MOVE_MAPTIP_CHECK:
                // update any maptip state when the mouse moves over the map
                zeHandler = (mapMove: MapMove) => {
                    this.$iApi.geo.map.maptip.checkAtCoord({
                        screenX: mapMove.screenX,
                        screenY: mapMove.screenY
                    });
                };
                this.$iApi.event.on(
                    GlobalEvents.MAP_MOUSEMOVE,
                    throttle(200, (mapMove: MapMove) => zeHandler(mapMove)),
                    handlerName
                );
                break;
            case DefEH.EXTENT_CHANGE_MAPTIP_CHECK:
                // update any maptip state when the map extent changes
                zeHandler = () => {
                    if (this.$iApi.geo.map.keysActive) {
                        // The user is using the crosshairs, perform hit-test using center of screens
                        let screenCenter: ScreenPoint =
                            this.$iApi.geo.map.mapPointToScreenPoint(
                                this.$iApi.geo.map.getExtent().center()
                            );
                        this.$iApi.geo.map.maptip.checkAtCoord(screenCenter);
                    } else {
                        // regular extent change, hide maptip
                        this.$iApi.geo.map.maptip.clear();
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.MAP_EXTENTCHANGE,
                    throttle(50, true, () => zeHandler()), // Smaller throttle because extent change is intervalled
                    handlerName
                );
                break;
            case DefEH.SHOW_DEFAULT_MAPTIP:
                // show a maptip in default format when the mouse goes over a vector feature
                zeHandler = (tooltipInfo: any) => {
                    this.$iApi.geo.map.maptip.generateDefaultMaptip(
                        tooltipInfo
                    );
                };
                this.$iApi.event.on(
                    GlobalEvents.MAP_GRAPHICHIT,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.MAP_UPDATE_MOUSE_COORDS:
                // update the co-ordinate caption when the mouse moves over the map
                this.$iApi.event.on(
                    GlobalEvents.MAP_MOUSEMOVE,
                    throttle(200, (mapMove: MapMove) => {
                        // check if coords are disabled
                        // if it is, then do not update it
                        const currentCursorCoords: MapCoords | undefined =
                            this.$iApi.$vApp.$store.get(MapCaptionStore.coords);
                        if (currentCursorCoords?.disabled) {
                            return;
                        }

                        this.$iApi.geo.map.caption
                            .formatPoint(
                                this.$iApi.geo.map.screenPointToMapPoint(
                                    mapMove
                                )
                            )
                            .then(fs => {
                                this.$iApi.$vApp.$store.set(
                                    MapCaptionStore.setCoords,
                                    {
                                        formattedString: fs
                                    }
                                );
                            });
                    }),
                    handlerName
                );
                break;
            case DefEH.MAP_UPDATE_CROSSHAIRS_COORDS:
                // update the caption coordinates when the crosshairs pan over the map
                this.$iApi.event.on(
                    GlobalEvents.MAP_KEYDOWN,
                    throttle(200, () => {
                        // check if coords are disabled
                        // if they are, then do not update
                        const currentCrosshairsCoords: MapCoords | undefined =
                            this.$iApi.$vApp.$store.get(MapCaptionStore.coords);
                        if (
                            currentCrosshairsCoords?.disabled ||
                            !this.$iApi.geo.map.keysActive
                        ) {
                            return;
                        }
                        this.$iApi.geo.map.caption
                            .formatPoint(
                                this.$iApi.geo.map.getExtent().center()
                            )
                            .then(fs => {
                                this.$iApi.$vApp.$store.set(
                                    MapCaptionStore.setCoords,
                                    {
                                        formattedString: fs
                                    }
                                );
                            });
                    }),
                    handlerName
                );
                break;
            case DefEH.LEGEND_REMOVES_LAYER_ENTRY:
                // when a layer is removed from the map, remove any bound entries from the standard legend
                zeHandler = (layer: LayerInstance) => {
                    if (!!this.$iApi.fixture.get('legend')) {
                        this.$iApi.$vApp.$store.dispatch(
                            LegendStore.removeLayerEntry,
                            layer.uid
                        );
                        this.$iApi.updateAlert(
                            this.$vApp.$t('legend.alert.layerRemoved', {
                                name: layer.name
                            })
                        );
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.LAYER_REMOVE,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.LEGEND_RELOADS_LAYER_ENTRY:
                // when a layer starts to reload, reset any entries in the standard legend to a loading state
                zeHandler = (layer: LayerInstance) => {
                    if (!!this.$iApi.fixture.get('legend')) {
                        this.$iApi.$vApp.$store.dispatch(
                            LegendStore.reloadLayerEntry,
                            layer.uid
                        );
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.LAYER_RELOAD_START,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.GRID_REMOVES_LAYER_GRID:
                // when a layer is removed, close the standard grid if open for that layer
                zeHandler = (layer: LayerInstance) => {
                    if (!!this.$iApi.fixture.get('grid')) {
                        // remove cached grid state for layer from grid store
                        this.$vApp.$store.dispatch(
                            `grid/${GridAction.removeGrid}`,
                            layer.uid
                        );
                        // close grid panel if open or minimized with removed layer
                        const currentUid = this.$vApp.$store.get(
                            GridStore.currentUid
                        );
                        if (layer.uid === currentUid) {
                            const panel = this.$iApi.panel.get('grid');
                            if (panel.isOpen) {
                                this.$iApi.panel.close(panel);
                            }
                            this.$vApp.$store.set(GridStore.currentUid, null);
                        }
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.LAYER_REMOVE,
                    zeHandler,
                    handlerName
                );
                break;
            case DefEH.DETAILS_REMOVES_LAYER:
                // when a layer is removed, remove it from the details payload
                zeHandler = (layer: LayerInstance) => {
                    if (!!this.$iApi.fixture.get('details')) {
                        // remove the layer from the payload results
                        this.$iApi.$vApp.$store.set(
                            DetailsStore.removeLayer,
                            layer
                        )!;
                    }
                };
                this.$iApi.event.on(
                    GlobalEvents.LAYER_REMOVE,
                    zeHandler,
                    handlerName
                );
                break;
            default:
                console.error(
                    `Unrecognized default event handler name encountered: ${handlerName}`
                );
                return `ERROR_NOT_REGISTERED__${handlerName}`;
        }

        return handlerName;
    }
}
