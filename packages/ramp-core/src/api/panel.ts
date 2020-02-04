import Vue from 'vue';

import { APIScope, InstanceAPI } from './internal';
import { PanelConfig } from '@/store/modules/panel';

export class PanelAPI extends APIScope {
    /**
     * Adds and automatically opens a new panel in the panel stack.
     *
     * @param {PanelConfig} value
     * @returns {PanelItemAPI}
     * @memberof PanelAPI
     */
    add(value: PanelConfig): PanelItemAPI {
        this.vApp.$store.set('panel/ADD_PANEL!', { value });

        return new PanelItemAPI(this.iApi, value);
    }

    remove(value: string | PanelItemAPI): PanelItemAPI | null {
        const panelConfig = typeof value === 'string' ? this.get(value) : value;

        // TODO: output warning to a log that a fixture with this id cannot be found
        if (!panelConfig) {
            return null;
        }

        this.vApp.$store.set(`panel/REMOVE_PANEL!`, { value });

        return panelConfig;
    }

    /**
     * Finds and returns a panel with the id specified.
     *
     * @param {string} id
     * @returns {(PanelItemAPI | null)}
     * @memberof PanelAPI
     */
    get(id: string): PanelItemAPI | null {
        const panel = this.vApp.$store.get<PanelConfig>(`panel/items@${id}`);

        if (!panel) {
            return null;
        }

        return new PanelItemAPI(this.iApi, panel);
    }

    /**
     * Returns the id of the currently pinned panel, if exists.
     *
     * @readonly
     * @type {(string | null)}
     * @memberof PanelAPI
     */
    get pinned(): string | null {
        return this.vApp.$store.get<string | null>('panel/pinned')!;
    }
}

export class PanelItemAPI extends APIScope {
    /**
     * The original `PanelConfig` object. Kept for reference.
     *
     * @type {PanelConfig}
     * @memberof PanelItemAPI
     */
    readonly _config: PanelConfig;

    /**
     * ID of this fixture.
     *
     * @readonly
     * @type {string}
     * @memberof FixtureItemAPI
     */
    get id(): string {
        return this._config.id;
    }

    /**
     * Creates an instance of PanelItemAPI.
     *
     * @param {InstanceAPI} iApi
     * @param {PanelConfig} config
     * @memberof PanelItemAPI
     */
    constructor(iApi: InstanceAPI, config: PanelConfig) {
        super(iApi);

        this._config = config;

        // register all the panel screen components globally
        // TODO: check if already registered and don't do it again
        this._config.screens.forEach(({ id, component }) => Vue.component(id, component));
    }

    /**
     * Mark this panel as pinned. This automatically unpins any previous pinned panel if exists.
     *
     * @param {boolean} value
     * @returns {this}
     * @memberof PanelItemAPI
     */
    pin(value: boolean): this {
        this.vApp.$store.set('panel/pinned', value ? this._config.id : null);

        return this;
    }

    close(): this {
        this.iApi.panel.remove(this);
        return this;
    }

    /**
     * Sets route to the specified screen id and pass props to the panel screen components.
     *
     * @param {string} id
     * @param {object} [props={}]
     * @returns {this}
     * @memberof PanelItemAPI
     */
    route(id: string, props: object = {}): this {
        this.vApp.$store.set(`panel/items@${this.id}.route`, { id, props });

        return this;
    }
}
