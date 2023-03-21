import { defineAsyncComponent } from 'vue';
import type { Component } from 'vue';

import {
    APIScope,
    InstanceAPI,
    isVueConstructor,
    isComponentOptions,
    isTypeofImportVue
} from './internal';

import type {
    PanelConfig,
    PanelConfigRoute,
    PanelConfigScreens,
    PanelConfigStyle,
    AsyncComponentFactoryEh,
    AsyncComponentEh
} from '@/stores/panel';

import ScreenSpinnerV from '@/components/panel-stack/screen-spinner.vue';
const screenModules = import.meta.glob<Component>('../fixtures/*/screen.vue');

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

    readonly alertName: string;

    controls: any;

    button: any;

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

        let payload: AsyncComponentFactoryEh | Component;

        // the `screen` value can be either a `string` component file path, an component `object`, a component constructor function, or an `AsynComponentFunction`
        // - `object` or `VueConstructor` => use as is as all the component code is already loaded
        // - `string` => load fixture file, pass as `component` in `AsyncComponentFactory` function
        // - `AsyncComponentFunction` => execute as it returns a promise, pass the output as `component` in `AsyncComponentFactory` function
        // https://vuejs.org/v2/guide/components-dynamic-async.html#Handling-Loading-State
        if (isComponentOptions(screen) || isVueConstructor(screen)) {
            payload = screen;
            this.loadedScreens.push(id); // mark this screen immediately as loaded
        } else {
            let asyncComponent: Promise<AsyncComponentEh>;

            if (typeof screen === 'string') {
                asyncComponent = screenModules[`../fixtures/${screen}`]();
            } else {
                asyncComponent = screen(); // execute the async component function to get the promise
            }

            // for async components, wait until they are resolved and patch in panel's i18n messages
            const component = new Promise<Component>((resolve, reject) => {
                asyncComponent.then(data => {
                    // wait until the component promise is resolved and mark it as loaded
                    this.loadedScreens.push(id);
                    // if data is a `*.vue` file, use its `default` export
                    resolve(isTypeofImportVue(data) ? data.default : data);
                });
                asyncComponent.catch(error => reject(error));
            });

            payload = defineAsyncComponent({
                // The component to load (should be a Promise)
                loader: () => component,
                // A component to use while the async component is loading
                loadingComponent: ScreenSpinnerV,
                // A component to use if the load fails
                // TODO: add error component
                // error: ErrorComponent,
                // Delay before showing the loading component. Default: 200ms.
                delay: 200
                // The error component will be displayed if a timeout is
                // provided and exceeded. Default: Infinity.
                // TODO: restore the error timeout
                // timeout: 3000,
            });
        }
        this.$iApi.$element.component(id, payload);
    }

    /**
     * The style object applied to the panel.
     *
     * @type {PanelConfigStyle}
     * @memberof PanelInstance
     */
    style: PanelConfigStyle;

    /**
     * Whether the panel expands to fill empty space.
     *
     * @type {boolean}
     * @memberof PanelInstance
     */
    expanded: boolean;

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
    constructor(iApi: InstanceAPI, id: string, config: PanelConfig) {
        super(iApi);

        // copy values from the config adding `style` default
        ({
            id: this.id,
            screens: this.screens,
            style: this.style,
            expanded: this.expanded,
            alertName: this.alertName,
            button: this.button,
            controls: this.controls
        } = {
            id,
            style: {},
            expanded: false,
            controls: {
                expand: false,
                ...config.controls
            },
            ...config
        });

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

        // set the panel width to 100% for mobile resolutions. The flex-basis property above
        // will handle the regular width.
        this.style['width'] = '80%';
    }

    /**
     * Opens a registered panel in the panel stack.
     * This is a proxy to `InstanceAPI.panel.open(...)`.
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
            this.$iApi.panel.open({
                id: this.id,
                ...(typeof value === 'string' ? { screen: value } : value)
            });
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
     * true iff the panel is currently visible
     *
     * @readonly
     * @type {boolean}
     * @memberof PanelInstance
     */
    get isVisible(): boolean {
        return this.$iApi.panel.visible.indexOf(this) !== -1;
    }

    /**
     * Close this panel.
     * This is a proxy to `InstanceAPI.panel.close(...)`.
     *
     * @returns {this}
     * @memberof PanelInstance
     */
    close(): this {
        this.$iApi.panel.close(this);

        return this;
    }

    /**
     * Minimize this panel.
     * This is a proxy to `InstanceAPI.panel.minimize(...)`.
     *
     * @returns {this}
     * @memberof PanelInstance
     */
    minimize(): this {
        this.$iApi.panel.minimize(this);

        return this;
    }

    /**
     * Move this panel left or right in the stack.
     * This is a proxy to `InstanceAPI.panel.move(...)`.
     *
     * @returns {this}
     * @memberof PanelInstance
     */
    move(direction: string): this {
        this.$iApi.panel.move(this, direction);

        return this;
    }

    /**
     * Checks if this panel is the leftmost visible panel.
     *
     * @readonly
     * @type {boolean}
     * @memberof PanelInstance
     */
    get isLeftMostPanel(): boolean {
        if (this.$iApi.panel.visible.length > 0) {
            return this.id === this.$iApi.panel.visible[0].id;
        }
        return false;
    }

    /**
     * Checks if this panel is the rightmost visible panel.
     *
     * @readonly
     * @type {boolean}
     * @memberof PanelInstance
     */
    get isRightMostPanel(): boolean {
        if (this.$iApi.panel.visible.length > 0) {
            return this.id === this.$iApi.panel.visible.slice(-1)[0].id;
        }
        return false;
    }

    /**
     * Remove this panel.
     * This is a proxy to `InstanceAPI.panel.remove(...)`.
     *
     * @returns {this}
     * @memberof PanelInstance
     */
    remove(): this {
        this.$iApi.panel.remove(this);

        return this;
    }

    /**
     * Toggle panel.
     * This is a proxy to `InstanceAPI.panel.toggle(...)`.
     *
     * @param {(boolean | { screen: string; props?: object; toggle?: boolean })} [value]
     * @returns {this}
     * @memberof PanelInstance
     */
    toggle(
        value?: boolean | { screen: string; props?: object; toggle?: boolean }
    ): this {
        // toggle panel if no value provided, force toggle panel if value specified, or toggle panel on specified screen if provided
        // ensure that a toggle value must be provided to panel API toggle if called
        if (typeof value === 'undefined') {
            this.$iApi.panel.toggle(this, !this.isOpen);
        } else if (typeof value === 'boolean') {
            // only call forced toggle if it is possible to do so
            if (value !== this.isOpen) {
                this.$iApi.panel.toggle(this, value);
            }
        } else {
            this.$iApi.panel.toggle(
                { id: this.id, screen: value.screen, props: value.props },
                typeof value.toggle !== 'undefined'
                    ? value.toggle
                    : !this.isOpen
            );
        }

        return this;
    }

    /**
     * Toggle panel's minimize state.
     * This is a proxy to `InstanceAPI.panel.toggleMinimize(...)`.
     *
     * @param {(boolean | { screen: string; props?: object; toggle?: boolean })} [value]
     * @returns {this}
     * @memberof PanelInstance
     */
    toggleMinimize(
        value?: boolean | { screen: string; props?: object; toggle?: boolean }
    ): this {
        if (typeof value === 'undefined' || typeof value === 'boolean') {
            // value is a toggle so we pass it through
            this.$iApi.panel.toggleMinimize(this, value);
        } else {
            // value is not a toggle, split into what panel.toggleMinimize is expecting
            this.$iApi.panel.toggleMinimize(
                { id: this.id, screen: value.screen, props: value.props },
                typeof value.toggle !== 'undefined'
                    ? value.toggle
                    : !this.isOpen
            );
        }

        return this;
    }

    /**
     * Pin/unpin/toggle (if no value provided) pin status of this panel. When pinning, automatically unpins any previous pinned panel if exists.
     * This is a proxy to `InstanceAPI.panel.pin(...)`.
     *
     *
     * @param {boolean} [value]
     * @returns {this}
     * @memberof PanelInstance
     */
    pin(value?: boolean): this {
        // use the provided value or negate the existing `isPinned` status of this panel
        value = typeof value !== 'undefined' ? value : !this.isPinned;

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
        return (
            this.$iApi.panel.pinned !== null &&
            this.$iApi.panel.pinned.id === this.id
        );
    }

    /**
     * Sets route to the specified screen id and pass props to the panel screen components.
     * This is a proxy to `InstanceAPI.panel.route(...)`.
     *
     * @param {(string | PanelConfigRoute)} value
     * @returns {this}
     * @memberof PanelInstance
     */
    show(value: string | PanelConfigRoute): this {
        const route = typeof value === 'string' ? { screen: value } : value;
        this.route = route;

        this.$iApi.panel.show(this, route);

        return this;
    }

    /**
     * Sets the styles of the specified panel by using a provided CSS styles object.
     * This is a proxy to `InstanceAPI.panel.setStyles(...)`.
     *
     * @param {object} style
     * @param {boolean} [replace=false]
     * @returns {this}
     * @memberof PanelInstance
     */
    setStyles(style: object, replace = false): this {
        this.$iApi.panel.setStyle(this, style, replace);

        return this;
    }

    /**
     * Expands/collapses/toggles the expand state of the panel. Panels set to expand fill empty space.
     * This is a proxy to `InstanceAPI.panel.expand(...)`.
     *
     * @param {boolean} expand Optional. Whether the panel should expand. Toggles if no value is given.
     * @returns {this}
     * @memberof PanelInstance
     */
    expand(expand?: boolean): this {
        this.$iApi.panel.expand(this, expand);

        return this;
    }
}
