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
        this.$vApp.$store.set('panel/ADD_PANEL!', { value: config });

        const panel = this.get(config.id)!;

        // TODO: does the condition below constitute business logic? should this be moved to the store mutation?
        // if the panel route is not defined, set it to the first panel screen automatically
        if (!panel._config.route) {
            this.route(panel, { id: panel._config.screens[0].id });
        }

        return panel;
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

        // unpin the panel before removing if it was pinned
        if (panel.isPinned) {
            panel.pin(false);
        }

        this.$vApp.$store.set(`panel/REMOVE_PANEL!`, { value: panel._config });

        return panel;
    }

    /**
     * Pin/unpin/toggle (if no value provided) pin status of the provided panel. When pinning, automatically unpins any previous pinned panel if exists.
     *
     * @param {(string | PanelItemAPI)} panelOrId
     * @param {boolean} value
     * @returns {(PanelItemAPI | null)}
     * @memberof PanelAPI
     */
    pin(panelOrId: PanelItemAPI | string, value?: boolean): PanelItemAPI | null {
        const panel = this.get(panelOrId);

        if (!panel) {
            return null;
        }

        // use the provided value or negate the existing `isPinned` status of this panel
        value = typeof value !== 'undefined' ? value : !panel.isPinned;

        // if the panel is not currently pinned, and the `value` is not `true`, don't do anything,
        // as this might unintentionally unpin a different panel;
        // say `panelA` is pinned and if the following is called `$iApi.panel.pin(panelB, false)`, it should do nothing
        if (!panel.isPinned && !value) {
            return panel;
        }

        // NOTE: we store `pinned` in the store as a reference to a panel config object, not a panel id
        this.$vApp.$store.set('panel/pinned', value ? panel._config : null);

        return panel;
    }

    /**
     * Returns the currently pinned panel API item, if exists.
     *
     * @readonly
     * @type {(PanelItemAPI | null)}
     * @memberof PanelAPI
     */
    get pinned(): PanelItemAPI | null {
        const config = this.$vApp.$store.get<PanelConfig | null>('panel/pinned');

        return config ? new PanelItemAPI(this.$iApi, config) : null;
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
        const panel = this.get(panelOrId);

        if (!panel) {
            return null;
        }

        this.$vApp.$store.set(`panel/items@${panel.id}.route`, route);

        return panel;
    }

    /**
     * Finds and returns a panel with the id specified.
     *
     * @param {(string | PanelItemAPI)} item
     * @returns {(PanelItemAPI | null)}
     * @memberof PanelAPI
     */
    get(item: string | PanelItemAPI): PanelItemAPI | null {
        const id = typeof item === 'string' ? item : item.id;
        const config = this.$vApp.$store.get<PanelConfig>(`panel/items@${id}`);

        // TODO: output warning to a log that a fixture with this id cannot be found
        if (!config) {
            return null;
        }

        return new PanelItemAPI(this.$iApi, config);
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
        this._config.screens.forEach(({ id, component }) => {
            // only register if it hasn't been registered before
            if (!(id in this.$vApp.$options.components!)) {
                Vue.component(id, component);
            }
        });
    }

    /**
     * Pin/unpin/toggle (if no value provided) pin status of this panel. When pinning, automatically unpins any previous pinned panel if exists.
     * This is a proxy to `RAMP.panel.pin(...)`.
     *
     * @param {boolean} [value]
     * @returns {this}
     * @memberof PanelItemAPI
     */
    pin(value?: boolean): this {
        // use the provided value or negate the existing `isPinned` status of this panel
        value = typeof value !== 'undefined' ? value : !this.isPinned;

        // TODO: change to toggle the pin status
        this.$iApi.panel.pin(this, value);

        return this;
    }

    /**
     * Checks if this panel is pinned or not.
     *
     * @readonly
     * @type {boolean}
     * @memberof PanelItemAPI
     */
    get isPinned(): boolean {
        return this.$iApi.panel.pinned !== null && this.$iApi.panel.pinned.id === this.id;
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
