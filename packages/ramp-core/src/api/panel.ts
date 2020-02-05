import Vue from 'vue';

import { APIScope, InstanceAPI } from './internal';
import { PanelConfig, PanelConfigRoute } from '@/store/modules/panel';

export class PanelAPI extends APIScope {
    /**
     * Adds and automatically opens a new panel in the panel stack.
     *
     * @param {PanelConfig} config
     * @returns {PanelItemAPI}
     * @memberof PanelAPI
     */
    open(config: PanelConfig): PanelItemAPI {
        this.vApp.$store.set('panel/ADD_PANEL!', { value: config });

        return new PanelItemAPI(this.$iApi, config);
    }

    /**
     * Closes the panel specified.
     *
     * @param {(string | PanelItemAPI)} panelOrId
     * @returns {(PanelItemAPI | null)}
     * @memberof PanelAPI
     */
    close(panelOrId: PanelItemAPI | string): PanelItemAPI | null {
        const panel = this.get(panelOrId);

        if (!panel) {
            return null;
        }

        this.vApp.$store.set(`panel/REMOVE_PANEL!`, { value: panel._config });

        return panel;
    }

    /**
     * Mark this panel as pinned. This automatically unpins any previous pinned panel if exists.
     *
     * @param {(string | PanelItemAPI)} panelOrId
     * @param {boolean} value
     * @returns {(PanelItemAPI | null)}
     * @memberof PanelAPI
     */
    pin(panelOrId: PanelItemAPI | string, value: boolean): PanelItemAPI | null {
        const panel = this.get(panelOrId);

        if (!panel) {
            return null;
        }

        this.vApp.$store.set('panel/pinned', value ? panel.id : null);

        return panel;
    }

    /**
     * Sets route to the specified screen id and pass props to the panel screen components.
     *
     * @param {(PanelItemAPI | string)} panelOrId
     * @param {PanelConfigRoute} route
     * @returns {(PanelItemAPI | null)}
     * @memberof PanelAPI
     */
    route(panelOrId: PanelItemAPI | string, route: PanelConfigRoute): PanelItemAPI | null {
        const panelItem = this.get(panelOrId);

        if (!panelItem) {
            return null;
        }

        this.vApp.$store.set(`panel/items@${panelItem.id}.route`, route);

        return panelItem;
    }

    /**
     * Finds and returns a panel with the id specified.
     *
     * @param {(string | { id: string })} item
     * @returns {(PanelItemAPI | null)}
     * @memberof PanelAPI
     */
    get(item: string | { id: string }): PanelItemAPI | null {
        const id = typeof item === 'string' ? item : item.id;
        const panel = this.vApp.$store.get<PanelConfig>(`panel/items@${id}`);

        // TODO: output warning to a log that a fixture with this id cannot be found
        if (!panel) {
            return null;
        }

        return new PanelItemAPI(this.$iApi, panel);
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
     * This is a proxy to `RAMP.panel.pin(...)`.
     *
     * @param {boolean} value
     * @returns {this}
     * @memberof PanelItemAPI
     */
    pin(value: boolean): this {
        this.$iApi.panel.pin(this, value);
        return this;
    }

    /**
     * Close this panel.
     * This is a proxy to `RAMP.panel.close(...)`.
     *
     * @returns {this}
     * @memberof PanelItemAPI
     */
    close(): this {
        this.$iApi.panel.close(this);
        return this;
    }

    /**
     * Sets route to the specified screen id and pass props to the panel screen components.
     * This is a proxy to `RAMP.panel.route(...)`.
     *
     * @param {PanelConfigRoute} route
     * @returns {this}
     * @memberof PanelItemAPI
     */
    route(route: PanelConfigRoute): this {
        this.$iApi.panel.route(this, route);

        return this;
    }
}
