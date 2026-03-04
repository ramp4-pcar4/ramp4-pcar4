import type { ComponentPublicInstance, App as VueApp, DefineComponent } from 'vue';
import type { RampConfigs } from '@/types';
import { EventAPI, FixtureAPI, GeoAPI, PanelAPI, NotificationAPI } from './internal';
import type { MaptipAPI } from '@/geo/map/maptip';
import type { Composer } from 'vue-i18n';
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
    readonly ui: {
        maptip: MaptipAPI;
        exposeOids: boolean;
        exposeMeasurements: boolean;
        getZoomIcon: () => string;
        formatNumber: (num: number) => string;
        scrollToInstance: boolean;
        suppressNumberLocalization: boolean;
    };
    startRequired: boolean;
    /**
     * The instance of Vue R4MP application controlled by this InstanceAPI.
     *
     * @type {VueInstance}
     * @memberof InstanceAPI
     */
    readonly $vApp: ComponentPublicInstance;
    readonly $element: VueApp<Element>;
    readonly $i18n: Composer;
    private _isFullscreen;
    constructor(element: HTMLElement, configs?: RampConfigs, options?: RampOptions);
    /**
     * Initializes a Vue R4MP instance with the given config and options
     *
     * @private
     * @param {RampConfigs | undefined} configs language-keyed R4MP config
     * @param {RampOptions | undefined} options startup options for this R4MP instance
     */
    private initialize;
    /**
     * Reloads Vue R4MP instance with a new config
     *
     * @param {RampConfigs} configs language-keyed R4MP config
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
    getConfig(): any;
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
}
