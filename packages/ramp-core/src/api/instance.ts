import Vue from 'vue';
import { RampMapConfig } from 'ramp-geoapi';
import { Store } from 'vuex';

import App from '@/app.vue';
import { createStore, RootState } from '@/store';
import { ConfigStore } from '@/store/modules/config';

import { FixtureAPI /* PanelAPI */ } from './internal';

export class InstanceAPI {
    fixture: FixtureAPI;
    // panel: PanelAPI;

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
    readonly vApp: Vue;

    constructor(element: HTMLElement, config?: RampMapConfig) {
        this._eventBus = new Vue();

        this.vApp = createApp(element, this);

        this.fixture = new FixtureAPI(this); // pass the iApi reference to the FixtureAPI
        // this.panel = new PanelAPI(this);

        // TODO: decide whether to move to src/main.ts:createApp
        // TODO: store a reference to the even bus in the global store [?]
        this.vApp.$store.set(ConfigStore.setConfig, config || undefined);
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
        this._eventBus.$off(event, ...args);
        return this;
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
        render: h => h(App)
    }).$mount(element);
}
