import Vue, { VueConstructor } from 'vue';
import { RampMapConfig, RampMap } from 'ramp-geoapi';
import { Store } from 'vuex';
import { i18n } from '@/lang';
import screenfull from 'screenfull';

import App from '@/app.vue';
import { createStore, RootState } from '@/store';
import { ConfigStore } from '@/store/modules/config';

import { FixtureAPI, PanelAPI, GlobalEvents, EventBus } from './internal';

export class InstanceAPI {
    fixture: FixtureAPI;
    panel: PanelAPI;

    // FIXME: temporarily store map in global, remove line below when map API is complete
    // set by the `map/esri-map.vue` file
    map!: RampMap;

    /**
     * A public event bus for all events. Can also be used by fixtures to talk to each other.
     *
     * @private
     * @type {Vue}
     * @memberof InstanceAPI
     */
    private readonly _eventBus: EventBus;

    /**
     * The instance of Vue R4MP application controlled by this InstanceAPI.
     *
     * @type {Vue}
     * @memberof InstanceAPI
     */
    readonly $vApp: Vue;

    private _isFullscreen: boolean;

    constructor(element: HTMLElement, config?: RampMapConfig) {
        this._eventBus = new EventBus();

        this.$vApp = createApp(element, this);

        this.fixture = new FixtureAPI(this); // pass the iApi reference to the FixtureAPI
        this.panel = new PanelAPI(this);

        // TODO: decide whether to move to src/main.ts:createApp
        // TODO: store a reference to the even bus in the global store [?]
        this.$vApp.$store.set(ConfigStore.newConfig, config || undefined);

        this._isFullscreen = screenfull.isEnabled && screenfull.isFullscreen && screenfull.element === this.$vApp.$root.$el;
        if (screenfull.isEnabled) {
            // update fullscreen flag as needed (getters don't work right with screenfull)
            screenfull.onchange(() => {
                // screnfull decrees a second enabled check
                this._isFullscreen = screenfull.isEnabled && screenfull.isFullscreen && screenfull.element === this.$vApp.$root.$el;
            });
        }
    }

    // TODO: we probably need to expose other Vue global functions here like `set`, `use`, etc.
    /**
     * Retrieves a global Vue component by its id.
     *
     * @param {string} id
     * @returns {VueConstructor}
     * @memberof InstanceAPI
     */
    component(id: string): VueConstructor;
    /**
     * Registers a global Vue component given an id and a constructor.
     *
     * @template VC
     * @param {string} id
     * @param {VC} vueConstructor
     * @returns {VC}
     * @memberof InstanceAPI
     */
    component<VC extends VueConstructor>(id: string, vueConstructor: VC): VC;
    component(id: string, definition?: VueConstructor): VueConstructor {
        if (definition) {
            const vc = Vue.component(id, definition);
            this.emit(GlobalEvents.COMPONENT, id);
            return vc;
        }

        return Vue.component(id);
    }

    // TODO for now, am exposing the choice event bus functions on the instance via basic wrappers
    //      we may chose to just expose the bus, making calls look like instance.event.on() .
    //      on the instance feels a bit cleaner, but the code looks rather silly below. wrapper wrapping a wrapper.
    // TODO if the event design is accepted, consider re-adding some of the overloads (via param magic or new methods).
    //      there are more comments in the event.ts file on this.

    /**
     * Listen for a custom event. Events can be triggered by `emit`. The callback will receive all the additional arguments passed into these event-triggering methods.
     *
     * @param {string} event
     * @param {Function} callback
     * @param {string} [handlerName] name of the handler (for reference). a name will be generated if not provided.
     * @returns {string} the handler name
     * @memberof InstanceAPI
     */
    on(event: string, callback: Function, handlerName: string = ''): string {
        return this._eventBus.on(event, callback, handlerName);
    }

    /**
     * Listen for a custom event, but only once. The listener will be removed once it triggers for the first time.
     *
     * Proxied to `Vue.$once`.
     *
     * @param {(string | string[])} event
     * @param {Function} callback
     * @returns {this}
     * @memberof InstanceAPI
     */
    /* TODO strongly consider reimplmenting once event design is OKd.
    once(event: string | string[], callback: Function): this {
        this._eventBus.$once(event, callback);
        return this;
    }
    */

    /**
     * Remove custom event handler
     *
     * @param {string} handlerName name of the handler to remove
     * @memberof InstanceAPI
     */
    off(handlerName: string): void {
        this._eventBus.off(handlerName);
    }

    /**
     * Trigger an event on the current instance. Any additional arguments will be passed into the listener’s callback function.
     *
     * @param {string} event
     * @param {...any[]} args
     * @memberof InstanceAPI
     */
    emit(event: string, ...args: any[]): void {
        this._eventBus.emit(event, ...args);
    }

    /**
     * Returns any active event handler names for an event.
     *
     * @param {string} event name of the event
     * @returns {Array} handler names for the given event
     * @memberof InstanceAPI
     */
    activeHandlers(event: string): Array<string> {
        return this._eventBus.activeHandlers(event);
    }

    /**
     * Returns a list of event names known to exist on the bus.
     *
     * @returns {Array} event names for the fixture
     * @memberof InstanceAPI
     */
    availableEvents(): Array<string> {
        return this._eventBus.availableEvents();
    }

    /**
     * Adds event names to the names registry of the event bus.
     *
     * @param {string | Array} names event names or names to register
     * @memberof InstanceAPI
     */
    registerEventName(names: string | Array<string>): void {
        this._eventBus.registerEventName(names);
    }

    /**
     * The 'screen' size for the app. Returns the largest screen class on the element; 'lg', 'md', 'sm' or 'xs'
     *
     * @readonly
     * @type string | null
     * @memberof InstanceAPI
     */
    get screenSize(): string | null {
        if (!this.$vApp || !this.$vApp.$el) {
            return null;
        }
        const classList = this.$vApp.$el.classList;
        if (classList.contains('lg')) {
            return 'lg';
        } else if (classList.contains('md')) {
            return 'md';
        } else if (classList.contains('sm')) {
            return 'sm';
        } else {
            return 'xs';
        }
    }

    /**
     * Sets the language of the app to the specified string (e.g. 'en' or 'fr').
     *
     * @param {string} language The locale string to switch to
     * @memberof InstanceAPI
     */
    setLanguage(language: string): void {
        this.$vApp.$i18n.locale = language;
    }

    /**
     * The current locale string for the app.
     *
     * @readonly
     * @type string
     * @memberof InstanceAPI
     */
    get language(): string {
        return this.$vApp.$i18n.locale;
    }

    /**
     * Toggles fullscreen for the app.
     *
     * @memberof InstanceAPI
     */
    toggleFullscreen(): void {
        if (screenfull.isEnabled) {
            // TODO: decide if we should add an event. theres already a `screefull.onchange`
            screenfull.toggle(this.$vApp.$root.$el);
        }
    }

    /**
     * Whether the app is fullscreen.
     *
     * @readonly
     * @type boolean
     * @memberof InstanceAPI
     */
    get isFullscreen(): boolean {
        return this._isFullscreen;
    }
}

/**
 * Creates a R4MP Vue application and mounts it on the provided element.
 *
 * @param {HTMLElement} element
 * @param {InstanceAPI} iApi R4MP API reference that controls this R4MP Vue application
 * @returns {Vue}
 */
function createApp(element: HTMLElement, iApi: InstanceAPI): Vue {
    const store: Store<RootState> = createStore();

    // passing the `iApi` reference to the root Vue component will propagate it to all the child component in this instance of R4MP Vue application
    // if several R4MP apps are created, each will contain a reference of its own API instance
    return new Vue({
        iApi,
        store,
        i18n,
        render: h => h(App)
    }).$mount(element);
}
