import { ComponentPublicInstance, App as VueApp, DefineComponent } from '../../vue/dist/vue.esm-bundler.js';
import { RampConfig, RampConfigs } from '../types';
import { DevAPI, EventAPI, FixtureAPI, GeoAPI, NotificationAPI, PanelAPI } from './internal';
import { KeyboardnavAPI } from '../fixtures/keyboardnav/api/keyboardnav';
import { MaptipAPI } from '../geo/map/maptip';
import { Composer } from 'vue-i18n';
export interface RampOptions {
    loadDefaultFixtures?: boolean;
    loadDefaultEvents?: boolean;
    startRequired?: boolean;
}
export declare class InstanceAPI {
    readonly fixture: FixtureAPI;
    readonly panel: PanelAPI;
    readonly event: EventAPI;
    readonly geo: GeoAPI;
    readonly notify: NotificationAPI;
    readonly dev: DevAPI;
    readonly ui: {
        maptip: MaptipAPI;
        exposeOids: boolean;
        exposeMeasurements: boolean;
        getZoomIcon: () => string;
        formatNumber: (num: number) => string;
        scrollToInstance: boolean;
        suppressNumberLocalization: boolean;
        escapeHtml: (content: string) => string;
        isPlainText: (content: any) => boolean;
    };
    startRequired: boolean;
    private _eventsOn;
    /**
     * The instance of Vue R4MP application controlled by this InstanceAPI.
     *
     * @type {VueInstance}
     * @memberof InstanceAPI
     */
    readonly $vApp: ComponentPublicInstance;
    /**
     * An object of type `VueApp<Element>` that represents the RAMP instance within the Vue app
     */
    readonly $element: VueApp<Element>;
    readonly $i18n: Composer;
    /**
     * An object of type `Element` that represents the root DOM element for the RAMP instance
     */
    readonly $rootEl: Element;
    private _isFullscreen;
    constructor(element: HTMLElement, configs?: RampConfigs, options?: RampOptions);
    /**
     * Initializes a Vue R4MP instance with the given config and options
     *
     * @private
     * @param {boolean} first whether this is the first time initialize is being called for this R4MP instance
     * @param {RampConfigs | undefined} configs language-keyed R4MP config
     * @param {RampOptions | undefined} options startup options for this R4MP instance
     */
    private initialize;
    /**
     * Encapsulates the steps required to reload the instance. Utility to be called
     * by other orchestrator methods.
     *
     * @param {RampConfigs} configs language-keyed R4MP config
     * @param {RampOptions} options startup options for this R4MP instance
     */
    private reloadWorker;
    /**
     * Reloads Vue R4MP instance, with the option of providing a new config
     *
     * @param {RampConfigs} configs language-keyed R4MP config. if missing, the existing configs will be used
     * @param {RampOptions} options startup options for this R4MP instance
     */
    reload(configs?: RampConfigs, options?: RampOptions): void;
    /**
     * Retrieves a global Vue component by its id.
     *
     * @param {string} id
     * @returns {DefineComponent}
     * @memberof InstanceAPI
     */
    component(id: string): any;
    /**
     * Registers a global Vue component given an id and a constructor.
     *
     * @template VC
     * @param {string} id
     * @param {VC} vueConstructor
     * @returns {VC}
     * @memberof InstanceAPI
     */
    component<VC extends DefineComponent>(id: string, vueConstructor: any): VC;
    /**
     * The 'screen' size for the app. Returns the largest screen class on the element; 'lg', 'md', 'sm' or 'xs'.
     *
     * @readonly
     * @type string | null
     * @memberof InstanceAPI
     */
    get screenSize(): string | null;
    /**
     * Gets the [cloned] config linked to the current language of the app.
     *
     * @memberof InstanceAPI
     */
    getConfig(): RampConfig;
    /**
     * Returns the pinia store of the specified id, if it exists, else returns undefined.
     *
     * @param id the id of the store to return
     * @memberof InstanceAPI
     */
    useStore<T>(id: string): Readonly<T> | undefined;
    /**
     * Sets the language of the app to the specified string (e.g. 'en' or 'fr').
     *
     * @param {string} language The locale string to switch to
     * @memberof InstanceAPI
     */
    setLanguage(language: string): void;
    /**
     * The current locale string for the app.
     *
     * @readonly
     * @type string
     * @memberof InstanceAPI
     */
    get language(): string;
    /**
     * Provides access to the keyboard navigation API if the fixture is available.
     */
    get keyboardNav(): KeyboardnavAPI | undefined;
    /**
     * The current animation status.
     *
     * @readonly
     * @type boolean
     * @memberof InstanceAPI
     */
    get animate(): boolean;
    /**
     * Toggles fullscreen for the app.
     *
     * @memberof InstanceAPI
     */
    toggleFullscreen(): void;
    /**
     * Whether the app is fullscreen.
     *
     * @readonly
     * @type boolean
     * @memberof InstanceAPI
     */
    get isFullscreen(): boolean;
    /**
     * Whether the app has been started.
     *
     * @readonly
     * @type boolean
     * @memberof InstanceAPI
     */
    get started(): boolean;
    /**
     * Updates the screen reader alert. Use this to inform screen reader users of visual changes in the app (pieces of ui appearing/leaving).
     *
     * @param alert the alert to make available to screen readers
     * @memberof InstanceAPI
     */
    updateAlert(alert: string): void;
    /**
     * If `scrollToInstance` is set to true in the configuration file, scrolls the browser to this RAMP component.
     *
     * @memberof InstanceAPI
     */
    scrollToInstance(): void;
    start(): void;
    /**
     * Return whether the string contains valid html content (i.e. a html element with opening and closing tags)
     */
    containsValidHtml(content: string): boolean;
    /**
     * Return whether the string represents an object or array
     */
    representsObject(content: string): boolean;
}
