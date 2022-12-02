import { createApp as createRampApp } from 'vue';
import type {
    ComponentPublicInstance,
    App as VueApp,
    DefineComponent
} from 'vue';
import type { RampConfig, RampConfigs } from '@/types';
import { i18n } from '@/lang';
import screenfull from 'screenfull';
import mixin from './mixin';
import pathifyHelper from '@/store/pathify-helper';

import App from '@/app.vue';
import { store } from '@/store';
import { ConfigStore } from '@/store/modules/config';
import { MaptipStore } from '@/store/modules/maptip';

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
import type { LayerInstance } from './internal';

import PanelScreenV from '@/components/panel-stack/panel-screen.vue';
import PinV from '@/components/panel-stack/controls/pin.vue';
import CloseV from '@/components/panel-stack/controls/close.vue';
import BackV from '@/components/panel-stack/controls/back.vue';
import ExpandV from '@/components/panel-stack/controls/expand.vue';
import MinimizeV from '@/components/panel-stack/controls/minimize.vue';
import RightV from '@/components/panel-stack/controls/right.vue';
import LeftV from '@/components/panel-stack/controls/left.vue';
import PanelOptionsMenuV from '@/components/panel-stack/controls/panel-options-menu.vue';
import DropdownMenuV from '@/components/controls/dropdown-menu.vue';

import FullscreenNavV from '@/fixtures/mapnav/buttons/fullscreen-nav.vue';
import GeolocatorNavV from '@/fixtures/mapnav/buttons/geolocator-nav.vue';
import HomeNavV from '@/fixtures/mapnav/buttons/home-nav.vue';
import MapnavButtonV from '@/fixtures/mapnav/button.vue';

import AppbarButtonV from '@/fixtures/appbar/button.vue';
import type { MaptipAPI } from '@/geo/map/maptip';

export interface RampOptions {
    loadDefaultFixtures?: boolean;
    loadDefaultEvents?: boolean;
    startRequired?: boolean;
}

export class InstanceAPI {
    readonly fixture: FixtureAPI;
    readonly panel: PanelAPI;
    readonly event: EventAPI;
    readonly geo: GeoAPI;
    readonly notify: NotificationAPI;
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
        console.log(
            `RAMP v${__RAMP_VERSION__.major}.${__RAMP_VERSION__.minor}.${
                __RAMP_VERSION__.patch
            } [${__RAMP_VERSION__.hash.slice(0, 9)}] (Built on ${new Date(
                __RAMP_VERSION__.timestamp.toString()
            ).toLocaleString()})`
        );

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
        this.notify = new NotificationAPI(this);

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

        this.initialize(configs, options);
    }

    /**
     * Initializes a Vue R4MP instance with the given config and options
     *
     * @param {RampConfigs | undefined} configs language-keyed R4MP config
     * @param {RampOptions | undefined} options startup options for this R4MP instance
     */
    initialize(configs?: RampConfigs, options?: RampOptions): void {
        // TODO: decide whether to move to src/main.ts:createApp
        // TODO: store a reference to the event bus in the global store [?]
        if (configs?.configs !== undefined) {
            const langConfigs: {
                [key: string]: RampConfig;
            } = configs.configs;

            const langConfig =
                langConfigs[this.$vApp.$i18n.locale] ??
                langConfigs[Object.keys(langConfigs)[0]];
            this.$vApp.$store.set(ConfigStore.newConfig, langConfig);

            // register first config for all available languages and then overwrite configs per language as needed
            this.$vApp.$store.set(ConfigStore.registerConfig, {
                config: langConfig,
                configLangs: Object.keys(langConfigs),
                // @ts-ignore
                allLangs: Object.keys(this.$vApp.$i18n.messages)
            });

            for (const lang in langConfigs) {
                this.$vApp.$store.set(ConfigStore.registerConfig, {
                    config: langConfigs[lang],
                    configLangs: [lang]
                });
            }

            // set the initial basemap
            this.$vApp.$store.set(
                ConfigStore.setActiveBasemap,
                langConfig.map.basemaps.find(
                    bm => bm.id === langConfig.map.initialBasemapId
                )
            );

            // create the map
            // console.log('Creating map:', langConfig.map);
            const mapViewElement: Element | null =
                this.$vApp.$el.querySelector('#esriMap');

            this.geo.map.createMap(
                langConfig.map,
                mapViewElement as HTMLDivElement
            );

            // Hide hovertip on map creation
            //@ts-ignore
            mapViewElement._tippy.hide(0);
            this.$vApp.$store.set(
                MaptipStore.setMaptipInstance,
                //@ts-ignore
                mapViewElement._tippy
            );

            // add layers
            if (langConfig.layers && langConfig.layers.length > 0) {
                // console.log('Adding layers:', langConfig.layers);
                langConfig.layers
                    .map(layerConfig => {
                        const layer = this.geo.layer.createLayer(layerConfig);
                        this.geo.map.addLayer(layer!);
                        return layer;
                    })
                    .filter(Boolean)
                    .forEach((layer: LayerInstance, index: number) => {
                        layer
                            ?.loadPromise()
                            .then(() => {
                                if (layer?.isLoaded) {
                                    this.geo.map.reorder(layer!, index);
                                }
                            })
                            .catch(() =>
                                console.error(
                                    `Failed to add/reorder layer: ${layer.id}.`
                                )
                            );
                    });
            }

            if (langConfig.panels) {
                // open and pin appropiate panels on startup
                // TODO: Note that certain panels like grid, settings, etc. need to get data for a specific layer.
                // Because different fixtures get this data in different ways (some use LayerInstance, some uid, some custom config),
                // there is no way to open the panel with layer data loaded without writing specific code for specific fixtures.
                // Once layer usage throughout RAMP is normalized, add an extra nugget in the config called options or something so that the panel
                // can load layer data as well.
                if (
                    langConfig.panels.open &&
                    langConfig.panels.open.length > 0
                ) {
                    const panelIds = langConfig.panels.open.map(p => p.id);
                    this.panel.isRegistered(panelIds).then(() => {
                        langConfig.panels?.open?.forEach(panel => {
                            this.panel.open({
                                id: panel.id,
                                screen: panel.screen
                            });
                            if (panel.pin) {
                                this.panel.pin(panel.id);
                            }
                        });
                    });
                }

                // enable/disable reorder controls
                const enable = langConfig.panels.reorderable ?? true;
                this.$vApp.$store.set('panel/reorderable', enable);
            }

            // disable animations if needed
            if (
                !langConfig.system?.animate &&
                this.$element._container &&
                this.$element._container.children[0]
            ) {
                this.$element._container.children[0].classList.remove(
                    'animation-enabled'
                );
            }

            // process system configurations
            if (langConfig.system?.proxyUrl) {
                this.geo.proxy = langConfig.system.proxyUrl;
            }
        }

        // default missing options
        if (!options) {
            options = {};
        }

        // use strict check against false, as missing properties have default value of true.
        // run the default setup functions unless flags have been set to false.
        // override the loadDefaultFixtures flag if startingFixtures is provided
        if (
            !(options.loadDefaultFixtures === false) ||
            configs?.startingFixtures !== undefined
        ) {
            this.fixture.addDefaultFixtures(configs?.startingFixtures);
        }
        if (!(options.loadDefaultEvents === false)) {
            this.event.addDefaultEvents();
        }
    }

    /**
     * Reloads Vue R4MP instance with a new config
     *
     * @param {RampConfigs} configs language-keyed R4MP config
     * @param {RampOptions} options startup options for this R4MP instance
     */
    reload(configs?: RampConfigs, options?: RampOptions): void {
        // remove all fixtures
        // get list of all fixture ids currently added
        const addedFixtures: Array<string> = Object.keys(
            this.$vApp.$store.get('fixture/items') as any
        );
        // remove each fixture
        addedFixtures.forEach((id: string) => {
            // check if the fixture exists first otherwise it will error
            if (this.fixture.get(id) !== undefined) {
                this.fixture.remove(id);
            }
        });

        // destroy map (calls private destroyMap)
        // @ts-ignore
        this.geo.map.destroyMap();

        // remove all event handlers
        this.event.offAll();

        // if configs is not provided, use the current configs
        if (configs === undefined) {
            // Need to clone this config to trigger config watch handlers
            configs = JSON.parse(
                JSON.stringify({
                    startingFixtures: this.$vApp.$store.get(
                        ConfigStore.getStartingFixtures
                    )!,
                    configs: this.$vApp.$store.get(
                        ConfigStore.getRegisteredConfigs
                    )!
                })
            );
        }

        // clear all notifications (using set to call action)
        this.$vApp.$store.set('notification/clearAll!', {});

        // clear maptip
        this.geo.map.maptip.clear();

        // reset start flag
        this.started = false;

        // re-initalize ramp
        this.initialize(configs, options);
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
        if (!this.$vApp?.$root || !this.$vApp.$root.$refs['app-size']) {
            return null;
        }

        const classList = (this.$vApp.$root.$refs['app-size'] as HTMLElement)
            .classList;
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
     * Gets the [cloned] config linked to the current language of the app.
     *
     * @memberof InstanceAPI
     */
    getConfig() {
        const language = this.$vApp.$i18n.locale;

        // clone it to avoid mutations to store config
        return JSON.parse(
            JSON.stringify(
                this.$vApp.$store.get(
                    ConfigStore.getActiveConfig,
                    language
                ) as RampConfig
            )
        );
    }

    /**
     * Sets the language of the app to the specified string (e.g. 'en' or 'fr').
     *
     * @param {string} language The locale string to switch to
     * @memberof InstanceAPI
     */
    setLanguage(language: string): void {
        if (this.$vApp.$i18n.locale === language) {
            return;
        }

        const langs = this.$vApp.$store.get(ConfigStore.getRegisteredLangs) as {
            [key: string]: string;
        };

        // prevent full map reload if the new language uses the same config
        if (langs[language] === langs[this.$vApp.$i18n.locale]) {
            this.$vApp.$i18n.locale = language;
            return;
        }

        this.$vApp.$i18n.locale = language;

        const activeConfig = this.getConfig();
        this.$vApp.$iApi.event.emit(GlobalEvents.CONFIG_CHANGE, activeConfig);

        // reload the map to apply new config
        this.reload();
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
     * @type boolean
     * @memberof InstanceAPI
     */
    get animate(): boolean {
        return !!(
            this.$element._container &&
            this.$element._container.children[0] &&
            this.$element._container.children[0].classList.contains(
                'animation-enabled'
            )
        );
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
    const thisStore = store();
    const thisi18n = i18n();
    const vueElement = createRampApp(App)
        .use(thisStore)
        .use(thisi18n)
        .use(VueTippy, {
            directive: 'tippy', // => v-tippy
            component: 'tippy' // => <tippy/>
        })
        .use(mixin)
        .use(pathifyHelper);

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
    vueElement.component('right', RightV);
    vueElement.component('left', LeftV);

    // ported from mapnav.vue
    vueElement.component('fullscreen-nav-button', FullscreenNavV);
    vueElement.component('geolocator-nav-button', GeolocatorNavV);
    vueElement.component('home-nav-button', HomeNavV);
    vueElement.component('mapnav-button', MapnavButtonV);

    vueElement.component('appbar-button', AppbarButtonV);

    // Add the $store and $iApi instances to the Vue components.
    vueElement.config.globalProperties.$store = thisStore;
    vueElement.config.globalProperties.$iApi = iApi;

    const app = vueElement.mount(element);

    return { element: vueElement, app };
}
