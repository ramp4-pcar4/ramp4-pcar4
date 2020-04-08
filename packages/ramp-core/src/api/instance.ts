import Vue, { VueConstructor } from 'vue';
import { RampMapConfig, RampMap } from 'ramp-geoapi';
import { Store } from 'vuex';
import { i18n } from '@/lang';

import App from '@/app.vue';
import { createStore, RootState } from '@/store';
import { ConfigStore } from '@/store/modules/config';

import { FixtureAPI, PanelAPI, GlobalEvents } from './internal';

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
    private readonly _eventBus: Vue;

    /**
     * The instance of Vue R4MP application controlled by this InstanceAPI.
     *
     * @type {Vue}
     * @memberof InstanceAPI
     */
    readonly $vApp: Vue;

    constructor(element: HTMLElement, config?: RampMapConfig) {
        this._eventBus = new Vue();

        this.$vApp = createApp(element, this);

        this.fixture = new FixtureAPI(this); // pass the iApi reference to the FixtureAPI
        this.panel = new PanelAPI(this);

        // TODO: decide whether to move to src/main.ts:createApp
        // TODO: store a reference to the even bus in the global store [?]
        this.$vApp.$store.set(ConfigStore.newConfig, config || undefined);
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

    /**
     * Listen for a custom event. Events can be triggered by `emit`. The callback will receive all the additional arguments passed into these event-triggering methods.
     *
     * Proxied to `Vue.$on`.
     *
     * @param {(string | string[])} event
     * @param {Function} callback
     * @returns {this}
     * @memberof InstanceAPI
     */
    // TODO: rename event-related global functions to use `$` prefix to match them to Vue default event functions, for consistency
    on(event: string | string[], callback: Function): this {
        this._eventBus.$on(event, callback);
        return this;
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
    once(event: string | string[], callback: Function): this {
        this._eventBus.$once(event, callback);
        return this;
    }

    /**
     * Remove custom event listener(s).
     * - If no arguments are provided, remove all event listeners;
     * - If only the event is provided, remove all listeners for that event;
     * - If both event and callback are given, remove the listener for that specific callback only.
     *
     * Proxied to `Vue.$off`.
     *
     * @param {(string | string[])} [event]
     * @param {Function} [callback]
     * @returns {this}
     * @memberof InstanceAPI
     */
    off(event?: string | string[], callback?: Function): this {
        this._eventBus.$off(event, callback);
        return this;
    }

    /**
     * Trigger an event on the current instance. Any additional arguments will be passed into the listener’s callback function.
     *
     * Proxied to `Vue.$emit`.
     *
     * @param {string} event
     * @param {...any[]} args
     * @returns {this}
     * @memberof InstanceAPI
     */
    emit(event: string, ...args: any[]): this {
        this._eventBus.$emit(event, ...args);
        return this;
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
