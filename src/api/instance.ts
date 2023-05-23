import { createApp as createRampApp } from 'vue';
import { createPinia } from 'pinia';
import type {
    ComponentPublicInstance,
    App as VueApp,
    DefineComponent
} from 'vue';
import type { RampConfig, RampConfigs } from '@/types';
import { i18n } from '@/lang';
import screenfull from 'screenfull';

import clonedeep from 'lodash.clonedeep';

import App from '@/app.vue';

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
import type { Composer } from 'vue-i18n';

import { useAppbarStore } from '@/fixtures/appbar/store';
import { useAreasOfInterestStore } from '@/fixtures/areas-of-interest/store';
import { useConfigStore } from '@/stores/config';
import { useDetailsStore } from '@/fixtures/details/store';
import { useExportStore } from '@/fixtures/export/store';
import { useFixtureStore } from '@/stores/fixture';
import { useGeosearchStore } from '@/fixtures/geosearch/store';
import { useGridStore } from '@/fixtures/grid/store';
import { useHelpStore } from '@/fixtures/help/store';
import { useInstanceStore } from '@/stores/instance';
import { useLayerStore } from '@/stores/layer';
import { useLegendStore } from '@/fixtures/legend/store';
import { useMapCaptionStore } from '@/stores/map-caption';
import { useMapnavStore } from '@/fixtures/mapnav/store';
import { useMaptipStore } from '@/stores/maptip';
import { useMetadataStore } from '@/fixtures/metadata/store';
import { useNortharrowStore } from '@/fixtures/northarrow/store';
import { useNotificationStore } from '@/stores/notification';
import { useOverviewmapStore } from '@/fixtures/overviewmap/store';
import { usePanelStore } from '@/stores/panel';
import { useScrollguardStore } from '@/fixtures/scrollguard/store';
import { useWizardStore } from '@/fixtures/wizard/store';

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
    readonly ui: { maptip: MaptipAPI };
    startRequired: boolean = false;

    /**
     * The instance of Vue R4MP application controlled by this InstanceAPI.
     *
     * @type {VueInstance}
     * @memberof InstanceAPI
     */
    readonly $vApp: ComponentPublicInstance;
    readonly $element: VueApp<Element>;
    readonly $i18n: Composer;

    private _isFullscreen: boolean;

    constructor(
        element: HTMLElement,
        configs?: RampConfigs,
        options?: RampOptions
    ) {
        this.event = new EventAPI(this);

        const appInstance = createApp(element, this);

        this.$vApp = appInstance.app;
        this.$element = appInstance.element;
        this.$i18n = appInstance.i18n;

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
     * @private
     * @param {RampConfigs | undefined} configs language-keyed R4MP config
     * @param {RampOptions | undefined} options startup options for this R4MP instance
     */
    private initialize(configs?: RampConfigs, options?: RampOptions): void {
        const configStore = useConfigStore(this.$vApp.$pinia);
        const panelStore = usePanelStore(this.$vApp.$pinia);
        const maptipStore = useMaptipStore(this.$vApp.$pinia);
        if (configs?.configs !== undefined) {
            const langConfigs: {
                [key: string]: RampConfig;
            } = configs.configs;

            const langConfig =
                langConfigs[this.$i18n.locale.value] ??
                langConfigs[Object.keys(langConfigs)[0]];
            configStore.newConfig(langConfig);

            // register first config for all available languages and then overwrite configs per language as needed
            configStore.registerConfig({
                config: langConfig,
                configLangs: Object.keys(langConfigs),
                // @ts-ignore
                allLangs: Object.keys(this.$i18n.messages.value)
            });

            for (const lang in langConfigs) {
                configStore.registerConfig({
                    config: langConfigs[lang],
                    configLangs: [lang]
                });
            }

            // set the initial basemap
            configStore.activeBasemapConfig = langConfig.map.basemaps.find(
                bm => bm.id === langConfig.map.initialBasemapId
            );

            // need to wait for the map container div to appear
            // if startRequired is false, it will appear instantly and the map is created
            // if startRequired is true, it will appear after calling start() or setting started to true,
            // at which point the map is created
            const mapDivWatcher = setInterval(() => {
                const mapViewElement: Element | null =
                    this.$vApp.$el.querySelector('#esriMap');
                if (mapViewElement) {
                    clearInterval(mapDivWatcher);

                    // create the map
                    this.geo.map.createMap(
                        langConfig.map,
                        mapViewElement as HTMLDivElement
                    );

                    // Hide hovertip on map creation
                    //@ts-ignore
                    mapViewElement._tippy.hide(0);
                    //@ts-ignore
                    maptipStore.setMaptipInstance(mapViewElement._tippy);

                    // add layers
                    if (langConfig.layers && langConfig.layers.length > 0) {
                        // console.log('Adding layers:', langConfig.layers);
                        langConfig.layers
                            .map(layerConfig => {
                                const layer =
                                    this.geo.layer.createLayer(layerConfig);
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
                }
            }, 100);

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
                panelStore.reorderable = langConfig.panels.reorderable ?? true;
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

        const instanceStore = useInstanceStore(this.$vApp.$pinia);
        if (options?.startRequired) {
            this.startRequired = true;
            instanceStore.started = false;
        } else {
            this.startRequired = false;
            instanceStore.started = true;
            this.event.emit(GlobalEvents.MAP_START);
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
        const instanceStore = useInstanceStore(this.$vApp.$pinia);
        const notificationStore = useNotificationStore(this.$vApp.$pinia);
        const configStore = useConfigStore(this.$vApp.$pinia);
        const fixtureStore = useFixtureStore(this.$vApp.$pinia);

        // remove all fixtures
        // get list of all fixture ids currently added
        const addedFixtures: Array<string> = Object.keys(fixtureStore.items);
        // remove each fixture
        addedFixtures.forEach((id: string) => {
            // check if the fixture exists first otherwise it will error
            if (this.fixture.get(id) !== undefined) {
                this.fixture.remove(id);
            }
        });

        // reset start flag
        instanceStore.started = false;

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
                    startingFixtures: configStore.startingFixtures,
                    configs: configStore.registeredConfigs
                })
            );
        }

        // clear all notifications (using set to call action)
        notificationStore.clearAll();

        // clear maptip
        this.geo.map.maptip.clear();

        // re-initalize ramp
        this.initialize(configs, options);
    }

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
        // clone it to avoid mutations to store config
        const configStore = useConfigStore(this.$vApp.$pinia);
        return JSON.parse(
            JSON.stringify(configStore.getActiveConfig(this.language))
        );
    }

    /**
     * Returns the pinia store of the specified id, if it exists, else returns undefined.
     *
     * @param id the id of the store to return
     * @memberof InstanceAPI
     */
    useStore<T>(id: string): Readonly<T> | undefined {
        const fixtureIds = [
            'appbar',
            'areas-of-interest',
            'details',
            'export',
            'geosearch',
            'grid',
            'help',
            'legend',
            'mapnav',
            'metadata',
            'northarrow',
            'overviewmap',
            'scrollguard',
            'wizard'
        ];

        if (fixtureIds.includes(id) && !this.fixture.get(id)) {
            return undefined;
        }

        switch (id) {
            case 'appbar':
                return <Readonly<T>>useAppbarStore(this.$vApp.$pinia);
            case 'areas-of-interest':
                return <Readonly<T>>useAreasOfInterestStore(this.$vApp.$pinia);
            case 'details':
                return <Readonly<T>>useDetailsStore(this.$vApp.$pinia);
            case 'export':
                return <Readonly<T>>useExportStore(this.$vApp.$pinia);
            case 'geosearch':
                return <Readonly<T>>useGeosearchStore(this.$vApp.$pinia);
            case 'grid':
                return <Readonly<T>>useGridStore(this.$vApp.$pinia);
            case 'help':
                return <Readonly<T>>useHelpStore(this.$vApp.$pinia);
            case 'legend':
                return <Readonly<T>>useLegendStore(this.$vApp.$pinia);
            case 'mapnav':
                return <Readonly<T>>useMapnavStore(this.$vApp.$pinia);
            case 'metadata':
                return <Readonly<T>>useMetadataStore(this.$vApp.$pinia);
            case 'northarrow':
                return <Readonly<T>>useNortharrowStore(this.$vApp.$pinia);
            case 'overviewmap':
                return <Readonly<T>>useOverviewmapStore(this.$vApp.$pinia);
            case 'scrollguard':
                return <Readonly<T>>useScrollguardStore(this.$vApp.$pinia);
            case 'wizard':
                return <Readonly<T>>useWizardStore(this.$vApp.$pinia);
            case 'config':
                return <Readonly<T>>useConfigStore(this.$vApp.$pinia);
            case 'fixture':
                return <Readonly<T>>useFixtureStore(this.$vApp.$pinia);
            case 'instance':
                return <Readonly<T>>useInstanceStore(this.$vApp.$pinia);
            case 'layer':
                return <Readonly<T>>useLayerStore(this.$vApp.$pinia);
            case 'map-caption':
                return <Readonly<T>>useMapCaptionStore(this.$vApp.$pinia);
            case 'maptip':
                return <Readonly<T>>useMaptipStore(this.$vApp.$pinia);
            case 'notification':
                return <Readonly<T>>useNotificationStore(this.$vApp.$pinia);
            case 'panel':
                return <Readonly<T>>usePanelStore(this.$vApp.$pinia);
            default:
                console.error(`The store ${id} does not exist.`);
                return undefined;
        }
    }

    /**
     * Sets the language of the app to the specified string (e.g. 'en' or 'fr').
     *
     * @param {string} language The locale string to switch to
     * @memberof InstanceAPI
     */
    setLanguage(language: string): void {
        if (this.$i18n.locale.value === language) {
            return;
        }
        const configStore = useConfigStore(this.$vApp.$pinia);
        const langs = configStore.registeredLangs;

        // prevent full map reload if the new language uses the same config
        if (langs[language] === langs[this.$i18n.locale.value]) {
            this.$i18n.locale.value = language;
            return;
        }

        this.$i18n.locale.value = language;

        const activeConfig = this.getConfig();
        this.event.emit(GlobalEvents.CONFIG_CHANGE, activeConfig);

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
     * Whether the app has been started.
     *
     * @readonly
     * @type boolean
     * @memberof InstanceAPI
     */
    get started(): boolean {
        return useInstanceStore(this.$vApp.$pinia).started;
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
        const instanceStore = useInstanceStore(this.$vApp.$pinia);
        // delay map loading
        if (!instanceStore.started && this.startRequired) {
            this.event.emit(GlobalEvents.MAP_START);
            instanceStore.started = true;
        } else if (instanceStore.started) {
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
    const pinia = createPinia();
    // generic reset function to reset store state to initial state
    pinia.use(({ store }) => {
        // We are currently using clonedeep to make a deep clone of the initial state, but this is not preferred
        // because the lodash package is not particularly lightweight.
        // There were attempts to use deepmerge library, but that did not clone nested arrays containing objects properly,
        // whereas the builtin structuredClone and JSON.parse(JSON.stringify()) can't handle serialization.
        // Hence, we are opting to use clonedeep until a better solution is found.
        const initialState = clonedeep(store.$state);
        store.$reset = () => store.$patch(clonedeep(initialState));
    });
    const thisi18n = i18n();
    const vueElement = createRampApp(App)
        .use(thisi18n)
        .use(VueTippy, {
            directive: 'tippy', // => v-tippy
            component: 'tippy' // => <tippy/>
        })
        .use(pinia);

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

    // Add the $pinia and $iApi instances to the Vue components.
    vueElement.config.globalProperties.$iApi = iApi;
    vueElement.config.globalProperties.$pinia = pinia;

    vueElement.provide('iApi', iApi);

    const app = vueElement.mount(element);

    return { element: vueElement, app, i18n: thisi18n.global };
}
