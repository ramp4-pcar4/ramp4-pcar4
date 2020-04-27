import Vue, { Component, ComponentOptions, VueConstructor } from 'vue';
import merge from 'deepmerge';

import { APIScope, InstanceAPI, isVueConstructor, isComponentOptions, isTypeofImportVue } from './internal';

import {
    PanelConfig,
    PanelConfigRoute,
    PanelConfigScreens,
    PanelConfigStyle,
    AsyncComponentFactoryEh,
    AsyncComponentEh
} from '@/store/modules/panel';

import ScreenSpinnerV from '@/components/panel-stack/screen-spinner.vue';

import { I18nComponentOptions, fold } from '@/lang';
import { PanelRegistrationOptions } from './panel';

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
     * A list of screen component ids which are loaded and ready to be rendered.
     *
     * @private
     * @type {string[]}
     * @memberof PanelInstance
     */
    private readonly loadedScreens: string[] = [];

    /**
     * A collection of i18n locale messages that will be passed to any screen opened inside this panel.
     *
     * @type {I18nComponentOptions}
     * @memberof PanelInstance
     */
    readonly i18n: I18nComponentOptions = {};

    /**
     * Checks if a given screen component id is already loaded and ready to render.
     *
     * @param {string} id
     * @returns {boolean}
     * @memberof PanelInstance
     */
    isScreenLoaded(id: string): boolean {
        return this.loadedScreens.indexOf(id) !== -1;
    }

    /**
     * Loads and register panel screen components.
     * This function should be called just before the screen is to be shown; this will avoid needlessly loading components upfront
     * (sometimes certain screens might not get used at all).
     *
     * @param {string} id
     * @memberof PanelInstance
     */
    registerScreen(id: string): void {
        const screen = this.screens[id];

        let payload: AsyncComponentFactoryEh | VueConstructor | Component;

        // the `screen` value can be either a `string` component file path, an component `object`, a component constructor function, or an `AsynComponentFunction`
        // - `object` or `VueConstructor` => use as is as all the component code is already loaded
        // - `string` => load fixture file, pass as `component` in `AsyncComponentFactory` function
        // - `AsyncComponentFunction` => execute as it returns a promise, pass the output as `component` in `AsyncComponentFactory` function
        // https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State

        if (isComponentOptions(screen) || isVueConstructor(screen)) {
            // patch in panel's i18n messages into the Vue constructor or options object
            payload = patchI18nMessages(screen, this.i18n);

            this.loadedScreens.push(id); // mark this screen immediately as loaded
        } else {
            let asyncComponent: Promise<AsyncComponentEh>;

            if (typeof screen === 'string') {
                asyncComponent = import(/* webpackChunkName: "[request]" */ `./../../src/fixtures/${screen}`);
            } else {
                asyncComponent = screen(); // execute the async component function to get the promise
            }

            // for async components, wait until they are resolved and patch in panel's i18n messages
            const component = new Promise<Component>((resolve, reject) => {
                asyncComponent.then(data => {
                    // wait until the component promise is resolved and mark it as loaded
                    this.loadedScreens.push(id);

                    // if data is a `*.vue` file, use its `default` export
                    resolve(patchI18nMessages(isTypeofImportVue(data) ? data.default : data, this.i18n));
                });
                asyncComponent.catch(error => reject(error));
            });

            payload = () => ({
                // The component to load (should be a Promise)
                component,
                // A component to use while the async component is loading
                loading: ScreenSpinnerV,
                // A component to use if the load fails
                // TODO: add error component
                // error: ErrorComponent,
                // Delay before showing the loading component. Default: 200ms.
                delay: 200
                // The error component will be displayed if a timeout is
                // provided and exceeded. Default: Infinity.
                // TODO: restore the error timeout
                // timeout: 3000
            });
        }

        Vue.component(id, payload);
    }

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
     * @param {PanelRegistrationOptions} [options={}]
     * @memberof PanelInstance
     */
    constructor(iApi: InstanceAPI, id: string, config: PanelConfig, options: PanelRegistrationOptions = {}) {
        super(iApi);

        // copy values from the config adding `style` default
        ({ id: this.id, screens: this.screens, style: this.style } = { id, style: {}, ...config });

        // both the panel config nad panel registration options can specify locale messages as either i18n options or CSV rows
        // fold CSV rows and merge messages with panel config messages overriding same-key messages supplied in the registration options
        this.i18n = [options.i18n, config.i18n].reduce<I18nComponentOptions>((map, value = {}) => {
            const i18n = { messages: Array.isArray(value) ? fold(value) : {}, ...(!Array.isArray(value) ? value : {}) };
            return merge(map, i18n);
        }, {});

        // check if this panel has at least a single screen
        if (Object.keys(this.screens).length === 0) {
            throw new Error('panel must have at least a single screen');
        }

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
     *  - `somePanel.open()` -- opens the panel on the first screen in the set
     *  - `somePanel.open('screen-id')` -- opens the panel on the 'screen-id' screen
     *  - `somePanel.open({ screen: 'screen-id', props: {... } })` -- opens the panel on the 'screen-id' screen passing supplied `props` to it
     *
     * @param {(string | { screen: string; props?: object })} value a screen id, or an object of the form `{ screen: <id>, props: <object> }`.
     * @returns {this}
     * @memberof PanelInstance
     */
    open(value?: string | { screen: string; props?: object }): this {
        if (typeof value === 'undefined') {
            // if no screen id is provided, open the panel using the default value
            this.$iApi.panel.open(this);
        } else {
            // pass the screen id and props, if given, to the `open` function
            this.$iApi.panel.open({ id: this.id, ...(typeof value === 'string' ? { screen: value } : value) });
        }

        return this;
    }

    /**
     * Checks if the panel is open or not.
     *
     * @readonly
     * @type {boolean}
     * @memberof PanelInstance
     */
    get isOpen(): boolean {
        return this.$iApi.panel.opened.indexOf(this) !== -1;
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

/**
 * A helper function to patch i18n locale options/messages into the Vue construction or Vue component options.
 * The messages will be merged with any already specified on the constructor/options.
 *
 * @param {(VueConstructor | ComponentOptions<Vue>)} value
 * @param {I18nComponentOptions} i18n
 * @returns {(VueConstructor | ComponentOptions<Vue>)}
 */
function patchI18nMessages(
    value: VueConstructor | ComponentOptions<Vue>,
    i18n: I18nComponentOptions
): VueConstructor | ComponentOptions<Vue> {
    if (!i18n) {
        return value;
    }

    let options: ComponentOptions<Vue>;

    if (isComponentOptions(value)) {
        options = value;
    } else {
        // a Vue constructor has a `options` property although it's not present in types
        // see here how constructor options are resolved: https://github.com/vuejs/vue/blob/b9de23b1008b52deca7e7df40843e318a42f3f53/src/core/instance/init.js#L93
        options = (value as any).options;
    }

    options.i18n = merge(options.i18n || {}, i18n);

    return value;
}
