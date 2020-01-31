import Vue from 'vue';

import { RampMapConfig } from 'ramp-geoapi';

import { createApp } from '@/main-build';
import { ConfigStore } from '@/store/modules/config';

import { FixtureAPI } from './internal';

export class InstanceAPI {
    fixture: FixtureAPI;

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

        this.vApp = createApp(element);

        this.fixture = new FixtureAPI(this); // pass the iApi reference to the FixtureAPI

        // TODO: decide whether to move to src/main.ts:createApp
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

// (new InstanceAPI(document.getElementById('aa') as HTMLElement)).on()
