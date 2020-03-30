import Vue from 'vue';

import { APIScope, InstanceAPI } from './internal';
import { PanelConfig, PanelConfigRoute, PanelMutation, PanelConfigScreens, PanelConfigStyle, PanelAction } from '@/store/modules/panel';

export type PanelConfigSet = { [name: string]: PanelConfig };

export type PanelConfigPair = { id: string; config: PanelConfig };

export type PanelInstanceSet = { [name: string]: PanelInstance };

export type PanelInstancePath = { id: string; screen?: string; props?: object };

export class PanelAPI extends APIScope {
    /**
     * Register provided panel object (could be several of just one) and return the resulting `PanelInstance` objects.
     * When the panel is registered, all its screens are added to the Vue as components right away.
     *
     * @param {(PanelConfigPair | PanelConfigSet)} value
     * @returns {(PanelInstance | PanelInstanceSet)}
     * @memberof PanelAPI
     */
    register(value: PanelConfigPair): PanelInstance;
    register(value: PanelConfigSet): PanelInstanceSet;
    register(value: PanelConfigPair | PanelConfigSet): PanelInstance | PanelInstanceSet {
        const panels: PanelInstance[] = [];

        if (isPanelConfigPair(value)) {
            panels.push(new PanelInstance(this.$iApi, value.id, value.config));
        } else {
            Object.entries(value).reduce((map, [id, config]) => {
                map.push(new PanelInstance(this.$iApi, id, config));
                return map;
            }, panels);
        }

        panels.forEach(panel => this.$vApp.$store.set(`panel/${PanelMutation.REGISTER_PANEL}!`, { panel }));

        if (panels.length === 1) {
            return panels[0];
        } else {
            return panels.reduce<PanelInstanceSet>((map, panel) => {
                map[panel.id] = panel;
                return map;
            }, {});
        }
    }

    /**
     * Finds and returns a panel with the id specified.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    get(value: string | PanelInstance): PanelInstance {
        const id = typeof value === 'string' ? value : value.id;
        const panel = this.$vApp.$store.get<PanelInstance>(`panel/items@${id}`);

        if (!panel) {
            throw new Error("panel doesn't exist");
        }

        return panel;
    }

    /**
     * Opens a registered panel in the panel stack.
     *
     * @param {(string | PanelInstance | PanelInstancePath)} value
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    open(value: string | PanelInstance | PanelInstancePath): PanelInstance {
        let panel: PanelInstance, screen: string | undefined, props: object | undefined;

        // figure out what is passed to the function and retrieve the panel object
        if (typeof value === 'string' || value instanceof PanelInstance) {
            panel = this.get(value);
        } else {
            panel = this.get(value.id);
            ({ screen, props } = value);
        }

        // if the screen route is not defined, the default is the first screen component
        if (screen) {
            this.show(panel, { screen, props });
        }

        this.$vApp.$store.set(`panel/${PanelAction.openPanel}!`, { panel });

        return panel;
    }

    /**
     * Closes the panel specified.
     *
     * @param {(string | PanelInstance)} value
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    close(value: string | PanelInstance): PanelInstance {
        const panel = this.get(value);

        // unpin the panel before removing if it was pinned
        if (panel.isPinned) {
            panel.pin(false);
        }

        this.$vApp.$store.set(`panel/${PanelAction.closePanel}!`, { panel });

        return panel;
    }

    /**
     * Pin/unpin/toggle (if no value provided) pin status of the provided panel. When pinning, automatically unpins any previous pinned panel if exists.
     *
     * @param {(string | PanelInstance)} value
     * @param {boolean} [pin]
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    pin(value: string | PanelInstance, pin?: boolean): PanelInstance {
        const panel = this.get(value);

        // use the provided value or negate the existing `isPinned` status of this panel
        pin = typeof pin !== 'undefined' ? pin : !panel.isPinned;

        // if the panel is not currently pinned, and the `value` is not `true`, don't do anything,
        // as this might unintentionally unpin a different panel;
        // say `panelA` is pinned and if the following is called `$iApi.panel.pin(panelB, false)`, it should do nothing
        if (!panel.isPinned && !pin) {
            return panel;
        }

        // NOTE: we store `pinned` in the store as a reference to a panel instance object
        this.$vApp.$store.set('panel/pinned', pin ? panel : null);

        return panel;
    }

    /**
     * Returns the currently pinned panel instance, if exists.
     *
     * @readonly
     * @type {(PanelInstance | null)}
     * @memberof PanelAPI
     */
    get pinned(): PanelInstance | null {
        return this.$vApp.$store.get<PanelInstance>('panel/pinned') || null;
    }

    /**
     * Sets route to the specified screen id and pass props to the panel screen components.
     *
     * @param {(string | PanelInstance)} value
     * @param {PanelConfigRoute} route
     * @returns {PanelInstance}
     * @memberof PanelAPI
     */
    // TODO: implement panel route history
    show(value: string | PanelInstance, route: PanelConfigRoute): PanelInstance {
        const panel = this.get(value);

        this.$vApp.$store.set(`panel/items@${panel.id}.route`, route);

        return panel;
    }

    /**
     * Sets the styles of the specified panel by using a provided CSS styles object.
     *
     * @param {(string | PanelInstance)} value
     * @param {object} style
     * @param {boolean} [replace=false] merge with existing styles if `false`; replace if `true`
     * @returns {(PanelItemAPI | null)}
     * @memberof PanelAPI
     */
    setStyle(value: string | PanelInstance, style: object, replace: boolean = false): PanelItemAPI | null {
        const panel = this.get(value);

        this.$vApp.$store.set(`panel/items@${panel.id}.style`, replace ? style : { ...panel.style, ...style });

        return panel;
    }
}

export class PanelInstance extends APIScope {
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
     * The style object to apply to the panel.
     *
     * @type {PanelConfigStyle}
     * @memberof PanelConfig
     */
    style: PanelConfigStyle;

    /**
     * Returns the width of the panel in pixels or undefined if not set.
     *
     * @readonly
     * @type {(number | undefined)}
     * @memberof PanelInstance
     */
    get width(): number | undefined {
        if (!this.style.width || this.style.width.slice(-2) !== 'px') {
            return undefined;
        }

        return parseInt(this.style.width);
    }

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
     * @memberof PanelInstance
     */
    constructor(iApi: InstanceAPI, id: string, config: PanelConfig) {
        super(iApi);

        // copy values from the config adding `style` default
        ({ id: this.id, screens: this.screens, style: this.style } = { id, style: {}, ...config });

        if (Object.keys(this.screens).length === 0) {
            throw new Error('panel must have at least a single screen');
        }

        // register all the panel screen components globally
        Object.entries(this.screens).forEach(([id, component]) => {
            // only register if it hasn't been registered before
            if (!(id in this.$vApp.$options.components!)) {
                Vue.component(id, component);
            } else {
                throw new Error('duplicate component');
            }
        });

        // set the first screen as the default route
        this.route = { screen: Object.keys(this.screens).pop()! };

        // auto-set `flex-basis` value on the panel if not already set
        if (!this.style['flex-basis']) {
            this.style['flex-basis'] = this.style.width || '350px';
        }
    }

    /**
     * Opens a registered panel in the panel stack.
     * This is a proxy to `RAMP.panel.open(...)`.
     *
     * @param {(string | { screen: string; props?: object })} value
     * @returns {this}
     * @memberof PanelInstance
     */
    open(value: string | { screen: string; props?: object }): this {
        if (typeof value === 'string') {
            this.$iApi.panel.open(this);
        } else {
            this.$iApi.panel.open({ id: this.id, ...value });
        }

        return this;
    }

    /**
     * Close this panel.
     * This is a proxy to `RAMP.panel.close(...)`.
     *
     * @returns {this}
     * @memberof PanelInstance
     */
    close(): this {
        this.$iApi.panel.close(this);

        return this;
    }

    /**
     * Pin/unpin/toggle (if no value provided) pin status of this panel. When pinning, automatically unpins any previous pinned panel if exists.
     * This is a proxy to `RAMP.panel.pin(...)`.
     *
     *
     * @param {boolean} [value]
     * @returns {this}
     * @memberof PanelInstance
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
     * @memberof PanelInstance
     */
    get isPinned(): boolean {
        return this.$iApi.panel.pinned !== null && this.$iApi.panel.pinned.id === this.id;
    }

    /**
     * Sets route to the specified screen id and pass props to the panel screen components.
     * This is a proxy to `RAMP.panel.route(...)`.
     *
     * @param {(string | PanelConfigRoute)} value
     * @returns {this}
     * @memberof PanelInstance
     */
    show(value: string | PanelConfigRoute): this {
        const route = typeof value === 'string' ? { screen: value } : value;

        this.$iApi.panel.show(this, route);

        return this;
    }

    /**
     * Sets the styles of the specified panel by using a provided CSS styles object.
     * This is a proxy to `RAMP.panel.setStyles(...)`.
     *
     * @param {object} style
     * @param {boolean} [replace=false]
     * @returns {this}
     * @memberof PanelInstance
     */
    setStyles(style: object, replace: boolean = false): this {
        this.$iApi.panel.setStyle(this, style, replace);

        return this;
    }
}

// TODO: deprecated
export class PanelItemAPI extends APIScope {
    /**
     * The original `PanelConfig` object. Kept for reference.
     *
     * @type {PanelConfig}
     * @memberof PanelItemAPI
     */
    /* readonly _config: PanelConfig; */

    /**
     * ID of this fixture.
     *
     * @readonly
     * @type {string}
     * @memberof FixtureItemAPI
     */
    /* get id(): string {
        return this._config.id;
    } */

    /**
     * Creates an instance of PanelItemAPI.
     *
     * @param {InstanceAPI} iApi
     * @param {PanelConfig} config
     * @memberof PanelItemAPI
     */
    constructor(iApi: InstanceAPI, config: PanelConfig) {
        super(iApi);

        /* this._config = config; */

        // register all the panel screen components globally
        /* this._config.screens.forEach(({ id, component }) => {
            // only register if it hasn't been registered before
            if (!(id in this.$vApp.$options.components!)) {
                Vue.component(id, component);
            }
        }); */
    }
}

/**
 * Check if the provided value is of `PanelConfigPair` type.
 *
 * @param {(PanelConfigPair | PanelConfigSet)} value
 * @returns {value is PanelConfigPair}
 */
function isPanelConfigPair(value: PanelConfigPair | PanelConfigSet): value is PanelConfigPair {
    return value.id !== undefined && typeof value.id === 'string' && value.config !== undefined;
}
