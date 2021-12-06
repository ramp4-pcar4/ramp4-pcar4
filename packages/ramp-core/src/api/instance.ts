import {
    ComponentPublicInstance,
    createApp as createRampApp,
    App as VueApp,
    DefineComponent
} from 'vue';
import { RampConfig, RampConfigs } from '@/types';
import { i18n } from '@/lang';
import screenfull from 'screenfull';
import mixin from './mixin';

import App from '@/app.vue';
import { store, storeType } from '@/store';
import { ConfigStore } from '@/store/modules/config';

//@ts-ignore
import VueTippy from 'vue-tippy';
import { FocusList, FocusItem, FocusContainer } from '@/directives/focus-list';
import { Truncate } from '@/directives/truncate/truncate';

import {
    EventAPI,
    FixtureAPI,
    GeoAPI,
    GlobalEvents,
    PanelAPI,
    NotificationAPI
} from './internal';

import PanelScreenV from '@/components/panel-stack/panel-screen.vue';
import PinV from '@/components/panel-stack/controls/pin.vue';
import CloseV from '@/components/panel-stack/controls/close.vue';
import BackV from '@/components/panel-stack/controls/back.vue';
import ExpandV from '@/components/panel-stack/controls/expand.vue';
import MinimizeV from '@/components/panel-stack/controls/minimize.vue';
import PanelOptionsMenuV from '@/components/panel-stack/controls/panel-options-menu.vue';
import DropdownMenuV from '@/components/controls/dropdown-menu.vue';

import FullscreenNavV from '@/fixtures/mapnav/buttons/fullscreen-nav.vue';
import HomeNavV from '@/fixtures/mapnav/buttons/home-nav.vue';
import MapnavButtonV from '@/fixtures/mapnav/button.vue';

import DividerV from '@/fixtures/appbar/divider.vue';
import AppbarButtonV from '@/fixtures/appbar/button.vue';
import Toggle from '@vueform/toggle';
import { MaptipAPI } from '@/geo/map/maptip';

interface RampOptions {
    loadDefaultFixtures?: boolean;
    loadDefaultEvents?: boolean;
    startRequired?: boolean;
}

export class InstanceAPI {
    readonly fixture: FixtureAPI;
    readonly panel: PanelAPI;
    readonly event: EventAPI;
    readonly geo: GeoAPI;
    readonly notifications: NotificationAPI;
    readonly startRequired: boolean;
    readonly ui: { maptip: MaptipAPI };
    started: boolean = false;

    /**
     * The instance of Vue R4MP application controlled by this InstanceAPI.
     *
     * @type {VueInstance}
     * @memberof InstanceAPI
     */
    readonly $vApp: ComponentPublicInstance;
    readonly $element: VueApp<Element>;

    private _isFullscreen: boolean;

    constructor(
        element: HTMLElement,
        configs?: RampConfigs,
        options?: RampOptions
    ) {
        if (options?.startRequired) {
            this.startRequired = true;
        } else {
            this.startRequired = false;
        }

        this.event = new EventAPI(this);

        const appInstance = createApp(element, this);

        this.$vApp = appInstance.app;
        this.$element = appInstance.element;

        this.fixture = new FixtureAPI(this); // pass the iApi reference to the FixtureAPI
        this.panel = new PanelAPI(this);
        this.geo = new GeoAPI(this);
        //TODO before 1.0: does the ui namespace still make sense, should we just leave maptip under geo.map only?
        this.ui = { maptip: this.geo.map.maptip };
        //TODO before 1.0: is 'notifications' too long of a name? maybe 'log' or 'notify'
        this.notifications = new NotificationAPI(this);

        // TODO: decide whether to move to src/main.ts:createApp
        // TODO: store a reference to the even bus in the global store [?]
        if (configs !== undefined) {
            const defaultConfig = configs[Object.keys(configs)[0]];
            this.$vApp.$store.set(
                ConfigStore.newConfig,
                defaultConfig !== undefined ? defaultConfig : undefined
            );

            // register first config for all available languages and then overwrite configs per language as needed
            this.$vApp.$store.set(ConfigStore.registerConfig, {
                config: defaultConfig
            });
            for (let lang in configs) {
                this.$vApp.$store.set(ConfigStore.registerConfig, {
                    config: configs[lang],
                    langs: [lang]
                });
            }

            const langConfig = configs[this.$vApp.$i18n.locale];

            // set the initial basemap
            this.$vApp.$store.set(
                ConfigStore.setActiveBasemap,
                langConfig.map.basemaps.find(
                    bm => bm.id === langConfig.map.initialBasemapId
                )
            );

            // disable animations if needed
            if (!langConfig.animate && this.$element._container) {
                this.$element._container.classList.remove('animation-enabled');
            }

            // process system configurations
            if (langConfig.system?.proxyUrl) {
                this.geo.proxy = langConfig.system.proxyUrl;
            }
        }

        this._isFullscreen =
            screenfull.isEnabled &&
            !!this.$vApp.$root &&
            screenfull.isFullscreen &&
            screenfull.element === this.$vApp.$root.$el;
        if (screenfull.isEnabled) {
            // update fullscreen flag as needed (getters don't work right with screenfull)
            screenfull.onchange(() => {
                // screnfull decrees a second enabled check
                this._isFullscreen =
                    screenfull.isEnabled &&
                    !!this.$vApp.$root &&
                    screenfull.isFullscreen &&
                    screenfull.element === this.$vApp.$root.$el;
            });
        }

        // default missing options
        if (!options) {
            options = {};
        }

        // use strict check against false, as missing properties have default value of true.
        // run the default setup functions unless flags have been set to false.
        if (!(options.loadDefaultFixtures === false)) {
            this.fixture.addDefaultFixtures();
        }
        if (!(options.loadDefaultEvents === false)) {
            this.event.addDefaultEvents();
        }
    }

    // TODO: we probably need to expose other Vue global functions here like `set`, `use`, etc.
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
    component(id: string, definition?: any) {
        if (definition) {
            const vc = this.$element.component(id, definition);
            this.event.emit(GlobalEvents.COMPONENT, id);
            return vc;
        }

        return this.$element.component(id);
    }

    /**
     * The 'screen' size for the app. Returns the largest screen class on the element; 'lg', 'md', 'sm' or 'xs'.
     *
     * @readonly
     * @type string | null
     * @memberof InstanceAPI
     */
    get screenSize(): string | null {
        if (!this.$element || !this.$element._container) {
            return null;
        }
        const classList = this.$element._container.children[0].classList;
        if (classList.contains('lg')) {
            return 'lg';
        } else if (classList.contains('md')) {
            return 'md';
        } else if (classList.contains('sm')) {
            return 'sm';
        } else {
            return 'xs';
        }
    }

    /**
     * Gets the config linked to the current language of the app.
     *
     * @memberof InstanceAPI
     */
    getConfig() {
        const language = this.$vApp.$i18n.locale;

        return this.$vApp.$store.get(
            ConfigStore.getActiveConfig,
            language
        ) as RampConfig;
    }

    /**
     * Sets the language of the app to the specified string (e.g. 'en' or 'fr').
     *
     * @param {string} language The locale string to switch to
     * @memberof InstanceAPI
     */
    setLanguage(language: string): void {
        this.$vApp.$i18n.locale = language;
        const activeConfig = this.getConfig();
        console.log('active config: ', activeConfig);
        // TODO: do something with active config - reload map?

        this.$vApp.$iApi.event.emit(GlobalEvents.CONFIG_CHANGE, activeConfig);
    }

    /**
     * The current locale string for the app.
     *
     * @readonly
     * @type string
     * @memberof InstanceAPI
     */
    get language(): string {
        return this.$vApp.$i18n.locale;
    }

    /**
     * The current animation status.
     *
     * @readonly
     * @type string
     * @memberof InstanceAPI
     */
    get animate(): string {
        if (
            this.$element._container &&
            this.$element._container.classList.contains('animation-enabled')
        ) {
            return 'on';
        }
        return 'off';
    }

    /**
     * Toggles fullscreen for the app.
     *
     * @memberof InstanceAPI
     */
    toggleFullscreen(): void {
        if (screenfull.isEnabled) {
            // TODO: decide if we should add an event. theres already a `screefull.onchange`
            screenfull.toggle(this.$element._container || undefined);
        }
    }

    /**
     * Whether the app is fullscreen.
     *
     * @readonly
     * @type boolean
     * @memberof InstanceAPI
     */
    get isFullscreen(): boolean {
        return this._isFullscreen;
    }

    /**
     * Updates the screen reader alert. Use this to inform screen reader users of visual changes in the app (pieces of ui appearing/leaving).
     *
     * @param alert the alert to make available to screen readers
     * @memberof InstanceAPI
     */
    updateAlert(alert: string): void {
        const alertContainer = this.$vApp.$el.querySelector(
            '.screen-reader-alert'
        ) as HTMLElement;

        if (alertContainer.childNodes.length > 0) {
            alertContainer.innerHTML = '';
        }
        const alertSpan = document.createElement('span');
        alertSpan.setAttribute('role', 'alert');
        const alertText = document.createTextNode(alert);
        alertSpan.appendChild(alertText);
        alertContainer.insertBefore(alertSpan, null);
    }

    start(): void {
        // delay map loading
        if (!this.started && this.startRequired) {
            this.event.emit(GlobalEvents.MAP_START);
            this.started = true;
        } else if (this.started) {
            console.warn('start has already been called');
        }
    }
}

/**
 * Creates a R4MP Vue application and mounts it on the provided element.
 *
 * @param {HTMLElement} element
 * @param {InstanceAPI} iApi R4MP API reference that controls this R4MP Vue application
 * @returns {Vue}
 */
function createApp(element: HTMLElement, iApi: InstanceAPI) {
    // passing the `iApi` reference to the root Vue component will propagate it to all the child component in this instance of R4MP Vue application
    // if several R4MP apps are created, each will contain a reference of its own API instance
    const vueElement = createRampApp(App)
        .use(store)
        .use(i18n)
        .use(VueTippy, {
            directive: 'tippy', // => v-tippy
            component: 'tippy' // => <tippy/>
        })
        .use(mixin);

    vueElement.directive('focus-container', FocusContainer);
    vueElement.directive('focus-list', FocusList);
    vueElement.directive('focus-item', FocusItem);
    vueElement.directive('truncate', Truncate);

    // ported from panel-container.vue
    vueElement.component('panel-screen', PanelScreenV);
    vueElement.component('pin', PinV);
    vueElement.component('close', CloseV);
    vueElement.component('back', BackV);
    vueElement.component('expand', ExpandV);
    vueElement.component('panel-options-menu', PanelOptionsMenuV);
    vueElement.component('dropdown-menu', DropdownMenuV);
    vueElement.component('minimize', MinimizeV);

    // ported from mapnav.vue
    vueElement.component('fullscreen-nav-button', FullscreenNavV);
    vueElement.component('home-nav-button', HomeNavV);
    vueElement.component('mapnav-button', MapnavButtonV);

    vueElement.component('divider', DividerV);
    vueElement.component('appbar-button', AppbarButtonV);
    vueElement.component('toggle-button', Toggle);

    // Add the $store and $iApi instances to the Vue components.
    vueElement.config.globalProperties.$store = store;
    vueElement.config.globalProperties.$iApi = iApi;

    const app = vueElement.mount(element);

    return { element: vueElement, app };
}
