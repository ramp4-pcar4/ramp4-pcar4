import { createApp as createRampApp, Transition, TransitionGroup } from 'vue';
import { createPinia } from 'pinia';
import type { ComponentPublicInstance, App as VueApp, DefineComponent } from 'vue';
import type { RampConfig, RampConfigs } from '@/types';
import { geo } from '@/main';
import { i18n } from '@/lang';
import screenfull from 'screenfull';

import { cloneDeep } from 'lodash-es';

import App from '@/app.vue';

import VueTippy from 'vue-tippy';
import { FocusList, FocusItem, FocusContainer } from '@/directives/focus-list';
import { Truncate } from '@/directives/truncate/truncate';

import { DevAPI, EventAPI, FixtureAPI, GeoAPI, GlobalEvents, NotificationAPI, PanelAPI } from './internal';

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
import type { KeyboardnavAPI } from '@/fixtures/keyboardnav/api/keyboardnav';
import type { MaptipAPI } from '@/geo/map/maptip';
import type { Composer } from 'vue-i18n';

import { useAppbarStore } from '@/fixtures/appbar/store';
import { useAreasOfInterestStore } from '@/fixtures/areas-of-interest/store';
import { useConfigStore } from '@/stores/config';
import { useDetailsStore } from '@/fixtures/details/store';
import { useExportStore } from '@/fixtures/export/store';
import { useExtentguardStore } from '@/fixtures/extentguard/store';
import { useFixtureStore } from '@/stores/fixture';
import { useGeosearchStore } from '@/fixtures/geosearch/store';
import { useGridStore } from '@/fixtures/grid/store';
import { useHelpStore } from '@/fixtures/help/store';
import { useKeyboardnavStore } from '@/fixtures/keyboardnav/store/keyboardnav-store';
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

        /**
         * Return whether the string should be interpreted as plain text. Returns false if input is not string
         */
        isPlainText: (content: any) => boolean;
    };
    startRequired: boolean = false;
    private _eventsOn: boolean = false; // internal tracker that indicates whether default event handlers are on.

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

    private _isFullscreen: boolean;

    constructor(element: HTMLElement, configs?: RampConfigs, options?: RampOptions) {
        this.event = new EventAPI(this);

        const appInstance = createApp(element, this);

        this.$vApp = appInstance.app;
        this.$element = appInstance.element;
        this.$i18n = appInstance.i18n;
        this.$rootEl = appInstance.app.$root?.$el;

        this.fixture = new FixtureAPI(this); // pass the iApi reference to the FixtureAPI
        this.panel = new PanelAPI(this);
        this.geo = new GeoAPI(this);
        this.dev = new DevAPI(this);
        //TODO before 1.0: does the ui namespace still make sense, should we just leave maptip under geo.map only?
        this.ui = {
            maptip: this.geo.map.maptip,
            exposeOids: false,
            exposeMeasurements: true,
            getZoomIcon: () => '',
            formatNumber: () => '',
            scrollToInstance: false,
            suppressNumberLocalization: false,
            escapeHtml: () => '',
            isPlainText: () => true
        };
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

        this.initialize(true, configs, options);
    }

    /**
     * Initializes a Vue R4MP instance with the given config and options
     *
     * @private
     * @param {boolean} first whether this is the first time initialize is being called for this R4MP instance
     * @param {RampConfigs | undefined} configs language-keyed R4MP config
     * @param {RampOptions | undefined} options startup options for this R4MP instance
     */
    private initialize(first: boolean, configs?: RampConfigs, options?: RampOptions): void {
        const configStore = useConfigStore(this.$vApp.$pinia);
        const panelStore = usePanelStore(this.$vApp.$pinia);
        const maptipStore = useMaptipStore(this.$vApp.$pinia);
        if (configs?.configs !== undefined) {
            // update the config set in the store, ensuring every language is mapped to something
            const allLangs = Object.keys(this.$i18n.messages.value);
            configStore.registerAllConfigs(configs, allLangs);

            // set the current languages' config as the active config
            const activeConfig = configStore.registeredConfigs[configStore.registeredLangs[this.$i18n.locale.value]];
            configStore.newConfig(activeConfig);

            // set the initial basemap
            configStore.activeBasemapConfig = activeConfig.map.basemaps.find(
                bm => bm.id === activeConfig.map.initialBasemapId
            );

            // need to wait for the map container div to appear
            // if startRequired is false, it will appear instantly and the map is created
            // if startRequired is true, it will appear after calling start() or setting started to true,
            // at which point the map is created
            const mapDivWatcher = setInterval(() => {
                const mapViewElement: Element | null = this.$vApp.$el.querySelector('#esriMap');
                if (mapViewElement) {
                    clearInterval(mapDivWatcher);

                    // create the map
                    this.geo.map.createMap(activeConfig.map, mapViewElement as HTMLDivElement).then(() => {
                        // Hide maptip on map creation
                        //@ts-expect-error  map view element will not recognize the tippy property
                        mapViewElement._tippy.hide(0);
                        //@ts-expect-error  map view element will not recognize the tippy property
                        maptipStore.setMaptipInstance(mapViewElement._tippy);

                        if (activeConfig.layers && activeConfig.layers.length > 0) {
                            // Add all the config layers to the instance, in order.
                            // Config layers always get "added first", so we provide order positions here for the map layers.
                            // Enhanced positioning logic is now handled by map.addLayer()
                            let mapOrderPos = 0;
                            activeConfig.layers.forEach(layerConfig => {
                                const layer = this.geo.layer.createLayer(layerConfig);
                                this.geo.map
                                    .addLayer(layer, mapOrderPos)
                                    // just to silence console about unhandled rejections.
                                    .catch(() => {});
                                if (layer.mapLayer) {
                                    // we only increment for map layers. Data layers get added but do not live in the map stack.
                                    // so no ++. We pass the param to map.addLayer above out of lazyness. It gets ignored for data layers.
                                    mapOrderPos++;
                                }
                            });
                        }
                    });
                }
            }, 100);

            if (activeConfig.panels) {
                // open and pin appropiate panels on startup
                // TODO: Note that certain panels like grid, settings, etc. need to get data for a specific layer.
                // Because different fixtures get this data in different ways (some use LayerInstance, some uid, some custom config),
                // there is no way to open the panel with layer data loaded without writing specific code for specific fixtures.
                // Once layer usage throughout RAMP is normalized, add an extra nugget in the config called options or something so that the panel
                // can load layer data as well.
                if (activeConfig.panels.open && activeConfig.panels.open.length > 0) {
                    const panelIds = activeConfig.panels.open.map(p => p.id);
                    this.panel.isRegistered(panelIds).then(() => {
                        activeConfig.panels?.open?.forEach(panel => {
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
                panelStore.reorderable = activeConfig.panels.reorderable ?? true;
            }

            // disable animations if needed
            if (!activeConfig.system?.animate && this.$element._container && this.$element._container.children[0]) {
                this.$element._container.children[0].classList.remove('animation-enabled');
            }

            // process system configurations
            if (activeConfig.system?.proxyUrl) {
                this.geo.proxy = activeConfig.system.proxyUrl;
            }
            if (activeConfig.system?.exposeOid) {
                this.ui.exposeOids = activeConfig.system.exposeOid;
            }
            if (activeConfig.system?.exposeMeasurements != undefined) {
                this.ui.exposeMeasurements = activeConfig.system.exposeMeasurements;
            }
            if (activeConfig.system?.scrollToInstance) {
                this.ui.scrollToInstance = activeConfig.system?.scrollToInstance;
            }
            if (activeConfig.system?.suppressNumberLocalization) {
                this.ui.suppressNumberLocalization = activeConfig.system?.suppressNumberLocalization;
            }

            // set up key to SVG bindings for zoom icons
            const zoomSvgs: { [key: string]: string } = {
                magnify: `<svg class="m-auto" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" /></svg>`,
                globe: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="16" height="16" viewBox="0 0 16 16" xml:space="preserve"><g transform="matrix(0.67 0 0 0.67 8 8)"><path style=" stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: #979797; fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -12)" d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 17.52 6.48 22 12 22 C 17.52 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 z M 11 19.93 C 7.05 19.44 4 16.08 4 12 C 4 11.38 4.08 10.79 4.21 10.21 L 9 15 L 9 16 C 9 17.1 9.9 18 11 18 L 11 19.93 z M 17.9 17.39 C 17.639999999999997 16.580000000000002 16.9 16 15.999999999999998 16 L 14.999999999999998 16 L 14.999999999999998 13 C 14.999999999999998 12.45 14.549999999999999 12 13.999999999999998 12 L 8 12 L 8 10 L 10 10 C 10.55 10 11 9.55 11 9 L 11 7 L 13 7 C 14.1 7 15 6.1 15 5 L 15 4.59 C 17.93 5.779999999999999 20 8.649999999999999 20 12 C 20 14.08 19.2 15.97 17.9 17.39 z" stroke-linecap="round" /></g></svg>`
            };

            // Set up custom zoom icon for the map and details panel. If not specified in the config, 'globe' is the default.
            const zoomKey: string = activeConfig.system?.zoomIcon || 'globe';
            const zoomIcon: string = zoomSvgs[zoomKey] || zoomKey;

            this.ui.getZoomIcon = () => {
                return zoomIcon;
            };

            this.ui.formatNumber = (num: number) => {
                return this.ui.suppressNumberLocalization ? num.toString() : this.$i18n.n(num, 'number');
            };

            /**
             * Return the string with all special html chars replaced by their corresponding entities
             */
            // Note: This function is duplicated in truncate.ts
            this.ui.escapeHtml = (content: string) => {
                const specialChars: Record<string, string> = {
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    "'": '&#039;'
                };
                return content.replace(/[<>"']/g, m => specialChars[m]);
            };

            /**
             * Return whether the string should be interpreted as plain text. Returns false if input is not string
             */
            this.ui.isPlainText = (content: any) => {
                return typeof content === 'string'
                    ? !this.containsValidHtml(content) && !this.representsObject(content)
                    : false;
            };
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
        if (first && (options.loadDefaultFixtures !== false || configs?.startingFixtures !== undefined)) {
            this.fixture.addDefaultFixtures(configs?.startingFixtures);
        } else if (!first) {
            this.fixture.restore();
        }
        if (options.loadDefaultEvents !== false && !this._eventsOn) {
            this.event.addDefaultEvents();
            this._eventsOn = true;
        }
    }

    /**
     * Encapsulates the steps required to reload the instance. Utility to be called
     * by other orchestrator methods.
     *
     * @param {RampConfigs} configs language-keyed R4MP config
     * @param {RampOptions} options startup options for this R4MP instance
     */
    private reloadWorker(configs?: RampConfigs, options?: RampOptions): void {
        const instanceStore = useInstanceStore(this.$vApp.$pinia);
        const notificationStore = useNotificationStore(this.$vApp.$pinia);
        const configStore = useConfigStore(this.$vApp.$pinia);
        const fixtureStore = useFixtureStore(this.$vApp.$pinia);
        const layerStore = useLayerStore(this.$vApp.$pinia);
        const gridStore = useGridStore(this.$vApp.$pinia);

        const newConfigProvided = !!configs;

        if (newConfigProvided) {
            // remove all fixtures
            // get list of all fixture ids currently added
            const addedFixtures: Array<string> = Object.keys(fixtureStore.items);
            // remove each fixture
            addedFixtures.forEach((id: string) => {
                // check if the fixture exists first otherwise it will error
                if (this.fixture.exists(id)) {
                    this.fixture.remove(id);
                }
            });
        } else {
            // remove all fixtures which we do not want to persist, otherwise just call the removed hook
            this.fixture.flush();
        }

        // remove all grids
        // get list of all grid ids currently added
        const addedGrids: Array<string> = Object.keys(gridStore.grids);
        //remove each grid
        addedGrids.forEach((id: string) => {
            gridStore.removeGrid(id);
        });

        // reset start flag
        instanceStore.started = false;

        // destroy map (calls private destroyMap)
        this.geo.map.destroyMap();

        // reset the layer store
        layerStore.$reset();

        // remove all default event handlers if new config wants them off
        if (options?.loadDefaultEvents === false) {
            this.event.removeDefaultEvents();
            this._eventsOn = false;
        }

        if (!newConfigProvided) {
            // if configs is not provided, use the current configs (e.g. language change, basic reload).
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
        // if a user provides their own config, we pretend that RAMP is initializing for the first time
        this.initialize(newConfigProvided, configs, options);

        if (newConfigProvided) {
            // raise event that the configuration changed.
            // call this last, as we need initialize() to register the new config first
            this.event.emit(GlobalEvents.CONFIG_CHANGE, this.getConfig());
        }
    }

    /**
     * Reloads Vue R4MP instance, with the option of providing a new config
     *
     * @param {RampConfigs} configs language-keyed R4MP config. if missing, the existing configs will be used
     * @param {RampOptions} options startup options for this R4MP instance
     */
    reload(configs?: RampConfigs, options?: RampOptions): void {
        this.reloadWorker(configs, options);
        this.event.emit(GlobalEvents.RAMP_RELOAD);
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

        const classList = (this.$vApp.$root.$refs['app-size'] as HTMLElement).classList;
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
    getConfig(): RampConfig {
        // clone it to avoid mutations to store config
        const configStore = useConfigStore(this.$vApp.$pinia);
        return JSON.parse(JSON.stringify(configStore.getActiveConfig(this.language)));
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
            'extentguard',
            'geosearch',
            'grid',
            'help',
            'keyboardnav',
            'legend',
            'mapnav',
            'metadata',
            'northarrow',
            'overviewmap',
            'scrollguard',
            'wizard'
        ];

        if (fixtureIds.includes(id) && !this.fixture.exists(id)) {
            // protects against a call wanting a store for a fixture that's been removed
            return undefined;
        }

        switch (id) {
            // Fixture stores
            case 'appbar':
                return <Readonly<T>>useAppbarStore(this.$vApp.$pinia);
            case 'areas-of-interest':
                return <Readonly<T>>useAreasOfInterestStore(this.$vApp.$pinia);
            case 'details':
                return <Readonly<T>>useDetailsStore(this.$vApp.$pinia);
            case 'export':
                return <Readonly<T>>useExportStore(this.$vApp.$pinia);
            case 'extentguard':
                return <Readonly<T>>useExtentguardStore(this.$vApp.$pinia);
            case 'geosearch':
                return <Readonly<T>>useGeosearchStore(this.$vApp.$pinia);
            case 'grid':
                return <Readonly<T>>useGridStore(this.$vApp.$pinia);
            case 'help':
                return <Readonly<T>>useHelpStore(this.$vApp.$pinia);
            case 'keyboardnav':
                return <Readonly<T>>useKeyboardnavStore(this.$vApp.$pinia);
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

            // core stores
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
        const notificationStore = useNotificationStore(this.$vApp.$pinia);
        const underlyingConfigLang = configStore.registeredLangs;

        // If monoconfig, clear all notifications (notification language isn't changed on lang change)
        if (Object.keys(configStore.registeredConfigs).length === 1) {
            notificationStore.clearAll();
        }

        const old = this.$i18n.locale.value;
        this.$i18n.locale.value = language;

        const activeConfig = this.getConfig();

        // reload the map and emit event if configs are different
        if (underlyingConfigLang[old] !== underlyingConfigLang[language]) {
            // reload, but in sneaky fashion. this is a lang change, not a forced reload.
            // calling the worker avoids the reload event getting yeet'd
            this.reloadWorker();

            // We are changing "active" configs, and the configs are actually different.
            // The reloader will not throw this event since we're using the existing config sets.
            // So throw the config event here. Do it after .reload() to match the timing of an API-triggered reload
            this.event.emit(GlobalEvents.CONFIG_CHANGE, activeConfig);
        }

        this.event.emit(GlobalEvents.LANG_CHANGE, {
            oldLang: old,
            newLang: language
        });
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
     * Provides access to the keyboard navigation API if the fixture is available.
     */
    get keyboardNav(): KeyboardnavAPI | undefined {
        return this.fixture.get<KeyboardnavAPI>('keyboardnav');
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
            this.$element._container.children[0].classList.contains('animation-enabled')
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
        const alertContainer = this.$vApp.$el.querySelector('.screen-reader-alert') as HTMLElement;

        if (alertContainer.childNodes.length > 0) {
            alertContainer.innerHTML = '';
        }
        const alertSpan = document.createElement('span');
        alertSpan.setAttribute('role', 'alert');
        const alertText = document.createTextNode(alert);
        alertSpan.appendChild(alertText);
        alertContainer.insertBefore(alertSpan, null);
    }

    /**
     * If `scrollToInstance` is set to true in the configuration file, scrolls the browser to this RAMP component.
     *
     * @memberof InstanceAPI
     */
    scrollToInstance(): void {
        if (this.ui.scrollToInstance) {
            this.$element._container?.scrollIntoView({
                behavior: 'smooth'
            });
        }
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

    /**
     * Return whether the string contains valid html content (i.e. a html element with opening and closing tags)
     */
    containsValidHtml(content: string): boolean {
        // Define a regular expression to match HTML elements with both opening and closing tags
        const tagPattern = /<(\w+)([^>]*)>(.*?)<\/\1>/;

        // Test if the string contains at least one valid HTML element
        return tagPattern.test(content);
    }

    /**
     * Return whether the string represents an object or array
     */
    representsObject(content: string): boolean {
        const tagPattern = /^(?:\[\s*(?:[\s\S]*?)\s*\]|\{\s*(?:[\s\S]*?)\s*\})$/;
        return tagPattern.test(content);
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
        const initialState = cloneDeep(store.$state);
        store.$reset = () => store.$patch(cloneDeep(initialState));
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

    vueElement.component('transition', Transition);
    vueElement.component('transition-group', TransitionGroup);

    // Add the $pinia and $iApi instances to the Vue components.
    vueElement.config.globalProperties.$iApi = iApi;
    vueElement.config.globalProperties.$pinia = pinia;

    // set the id prefix for the app for use in generating unique ids with `useId`
    vueElement.config.idPrefix = `ramp-${element.id || geo.sharedUtils.generateUUID()}`;

    vueElement.provide('iApi', iApi);

    const app = vueElement.mount(element);

    return { element: vueElement, app, i18n: thisi18n.global };
}
