import Vue, { VueConstructor } from 'vue';
import { RampMap } from 'ramp-geoapi';
import { RampConfigs } from '@/types';
import { Store } from 'vuex';
import { i18n } from '@/lang';
import screenfull from 'screenfull';

import App from '@/app.vue';
import { createStore, RootState } from '@/store';
import { ConfigStore } from '@/store/modules/config';

import { FixtureAPI, PanelAPI, GlobalEvents, EventAPI } from './internal';
import { MapAPI } from './map';

interface RampOptions {
    loadDefaultFixtures?: boolean;
    loadDefaultEvents?: boolean;
}

export class InstanceAPI {
    readonly fixture: FixtureAPI;
    readonly panel: PanelAPI;
    readonly event: EventAPI;
    readonly mapActions: MapAPI;

    // FIXME: temporarily store map in global, remove line below when map API is complete
    // set by the `map/esri-map.vue` file
    map!: RampMap;

    /**
     * The instance of Vue R4MP application controlled by this InstanceAPI.
     *
     * @type {Vue}
     * @memberof InstanceAPI
     */
    readonly $vApp: Vue;

    private _isFullscreen: boolean;

    constructor(element: HTMLElement, configs?: RampConfigs, options?: RampOptions) {
        this.event = new EventAPI(this);

        this.$vApp = createApp(element, this);

        this.fixture = new FixtureAPI(this); // pass the iApi reference to the FixtureAPI
        this.panel = new PanelAPI(this);
        this.mapActions = new MapAPI(this);

        // TODO: decide whether to move to src/main.ts:createApp
        // TODO: store a reference to the even bus in the global store [?]
        if (configs !== undefined) {
            const defaultConfig = configs[Object.keys(configs)[0]];
            this.$vApp.$store.set(ConfigStore.newConfig, defaultConfig !== undefined ? defaultConfig : undefined);

            // register first config for all available languages and then overwrite configs per language as needed
            this.$vApp.$store.set(ConfigStore.registerConfig, { config: defaultConfig });
            for (let lang in configs) {
                this.$vApp.$store.set(ConfigStore.registerConfig, { config: configs[lang], langs: [lang] });
            }
        }

        this._isFullscreen = screenfull.isEnabled && screenfull.isFullscreen && screenfull.element === this.$vApp.$root.$el;
        if (screenfull.isEnabled) {
            // update fullscreen flag as needed (getters don't work right with screenfull)
            screenfull.onchange(() => {
                // screnfull decrees a second enabled check
                this._isFullscreen = screenfull.isEnabled && screenfull.isFullscreen && screenfull.element === this.$vApp.$root.$el;
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
     * @returns {VueConstructor}
     * @memberof InstanceAPI
     */
    component(id: string): VueConstructor;
    /**
     * Registers a global Vue component given an id and a constructor.
     *
     * @template VC
     * @param {string} id
     * @param {VC} vueConstructor
     * @returns {VC}
     * @memberof InstanceAPI
     */
    component<VC extends VueConstructor>(id: string, vueConstructor: VC): VC;
    component(id: string, definition?: VueConstructor): VueConstructor {
        if (definition) {
            const vc = Vue.component(id, definition);
            this.event.emit(GlobalEvents.COMPONENT, id);
            return vc;
        }

        return Vue.component(id);
    }

    /**
     * The 'screen' size for the app. Returns the largest screen class on the element; 'lg', 'md', 'sm' or 'xs'.
     *
     * @readonly
     * @type string | null
     * @memberof InstanceAPI
     */
    get screenSize(): string | null {
        if (!this.$vApp || !this.$vApp.$el) {
            return null;
        }
        const classList = this.$vApp.$el.classList;
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
    getConfig(): void {
        const language = this.$vApp.$i18n.locale;
        return this.$vApp.$store.get(ConfigStore.getActiveConfig, language);
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

    get animate(): string{
        return " " // fix: return animate status
    }

    setAnimate(status:string): void {
        // toggle animate status
    }

    /**
     * The current animation status.
     * 
     * @readonly
     * @type string
     * @memberof InstanceAPI
     */
    get animate(): string {
        if (this.$vApp.$el.classList.contains("animation-enabled")) {
            return "on"
        }
        return "off"
    }

    /**
     * Toggles fullscreen for the app.
     *
     * @memberof InstanceAPI
     */
    toggleFullscreen(): void {
        if (screenfull.isEnabled) {
            // TODO: decide if we should add an event. theres already a `screefull.onchange`
            screenfull.toggle(this.$vApp.$root.$el);
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
}

/**
 * Creates a R4MP Vue application and mounts it on the provided element.
 *
 * @param {HTMLElement} element
 * @param {InstanceAPI} iApi R4MP API reference that controls this R4MP Vue application
 * @returns {Vue}
 */
function createApp(element: HTMLElement, iApi: InstanceAPI): Vue {
    const store: Store<RootState> = createStore();

    // passing the `iApi` reference to the root Vue component will propagate it to all the child component in this instance of R4MP Vue application
    // if several R4MP apps are created, each will contain a reference of its own API instance
    return new Vue({
        iApi,
        store,
        i18n,
        render: h => h(App)
    }).$mount(element);
}
