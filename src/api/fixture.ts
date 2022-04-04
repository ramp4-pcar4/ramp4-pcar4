import { createApp, defineComponent, h, render } from 'vue';

import type { Component, ComponentOptions, ComponentPublicInstance } from 'vue';

import { APIScope, GlobalEvents, InstanceAPI } from './internal';
import { FixtureMutation } from '@/store/modules/fixture';
import type { FixtureBase, FixtureBaseSet } from '@/store/modules/fixture';
import type { RampConfig } from '@/types';

const fixtureModules = import.meta.glob<{ default: typeof FixtureInstance }>(
    `@/fixtures/*/index.ts`
);

// TODO: implement the same `internal.ts` pattern in store, so can import from a single place;

/**
 * A constructor returning an object implementing FixtureBase interface.
 */
type IFixtureBase = new () => FixtureBase;

/**
 * A constructor returning an instance of FixtureInstance class.
 */
type IFixtureInstance = new (id: string, iApi: InstanceAPI) => FixtureInstance;

export class FixtureAPI extends APIScope {
    /**
     * Creates an instance of FixtureAPI.
     *
     * @param {InstanceAPI} iApi
     * @memberof FixtureAPI
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);

        // when the map is created call the initialized method (if defined) for each fixture
        const onMapCreated = () => {
            const fixtures =
                this.$vApp.$store.get<FixtureBaseSet>(`fixture/items`)!;
            Object.keys(fixtures).forEach(fId => {
                fixtures[fId].initialized?.();
            });
        };
        this.$iApi.event.on(GlobalEvents.MAP_CREATED, onMapCreated);
    }

    /**
     * Loads a (built-in) fixture or adds supplied fixture into the R4MP Vue instance.
     *
     * @param {string} id
     * @param {IFixtureBase} [constructor]
     * @returns {Promise<FixtureBase>}
     * @memberof FixtureAPI
     */
    // TODO: implement overload to add a list of features
    async add(id: string, constructor?: IFixtureBase): Promise<FixtureBase> {
        let fixture: FixtureBase;

        // if the fixture already exist, do nothing and just return it
        if (id in this.$vApp.$store.get<FixtureBaseSet>(`fixture/items`)!) {
            return this.get(id);
        }

        // only need to provide fixture constructors for external fixtures since internal ones are loaded automatically
        if (constructor) {
            if (typeof constructor !== 'function') {
                throw new Error('malformed fixture constructor');
            }

            // run the provided constructor and update the resulting object with FixtureInstance functions/properties
            fixture = FixtureInstance.updateBaseToInstance(
                new constructor(),
                id,
                this.$iApi
            );
        } else {
            const instanceConstructor: IFixtureInstance = (
                await fixtureModules[`../fixtures/${id}/index.ts`]()
            ).default;

            fixture = new instanceConstructor(id, this.$iApi);
        }

        // TODO: calling `ADD_FIXTURE` mutation directly here; might want to switch to calling the action `addFixture`
        // TODO: using this horrible concatenated mixture `fixture/${FixtureMutation.ADD_FIXTURE}!` all the time doesn't seem like a good idea;
        // fixtures are always stored as objects implementing `FixtureBase` interfaces;
        this.$vApp.$store.set(`fixture/${FixtureMutation.ADD_FIXTURE}!`, {
            value: fixture
        });

        this.$iApi.event.emit(GlobalEvents.FIXTURE_ADDED, fixture);

        // call the fixture initialized method if it's late to the party
        if (this.$iApi.geo.map.created) fixture.initialized?.();

        return fixture;
    }

    /**
     * Removes the specified fixture from R4MP instance.
     *
     * @template T
     * @param {(FixtureBase | string)} fixtureOrId
     * @returns {T}
     * @memberof FixtureAPI
     */
    remove<T extends FixtureBase = FixtureBase>(
        fixtureOrId: FixtureBase | string
    ): T {
        const fixture = this.get<T>(fixtureOrId);

        if (!fixture) {
            throw new Error(
                `Could not find fixture ${fixtureOrId} for removal`
            );
        }

        this.$vApp.$store.set(`fixture/${FixtureMutation.REMOVE_FIXTURE}!`, {
            value: fixture
        });

        this.$iApi.event.emit(GlobalEvents.FIXTURE_REMOVED, fixture);
        return fixture;
    }

    /**
     * Finds and returns a `FixtureBase` object with the id specified.
     *
     * @template T subclass of the `FixtureBase`; defaults to `FixtureBase`
     * @param {(string | FixtureBase)} item fixture id or `FixtureBase` item
     * @returns {T}
     * @memberof FixtureAPI
     */
    get<T extends FixtureBase = FixtureBase>(item: string | FixtureBase): T;
    /**
     * Finds and returns a collection of `FixtureBase` objects given a list of ids.
     * This can be useful when retrieving several fixtures at one time as follows:
     * ```ts
     * const [one, two, three] = rInstance.fixture.get(['fixture-one', 'fixture-two', 'fixture-three']);
     * ```
     *
     * @template T subclass of the `FixtureBase`; defaults to `FixtureBase`
     * @param {string[]} item a list of fixture ids
     * @returns {T[]}
     * @memberof FixtureAPI
     */
    get<T extends FixtureBase = FixtureBase>(item: string[]): T[];
    get<T extends FixtureBase = FixtureBase>(
        item: string | FixtureBase | string[]
    ): T | undefined | (T | undefined)[] {
        const ids: string[] = [];

        // parse the input and figure our what it is
        if (typeof item === 'string') {
            ids.push(item);
        } else if (Array.isArray(item)) {
            ids.push(...item);
        } else {
            ids.push(item.id);
        }

        const fixtures = ids.map(id => {
            const fixture = this.$vApp.$store.get<T>(`fixture/items@${id}`);
            if (!fixture) {
                return undefined;
            }

            return fixture;
        });

        return fixtures.length === 1 ? fixtures[0] : fixtures;
    }

    /**
     * Loads the set of standard, built-in fixtures to the R4MP Vue instance.
     * This will quickly set up the vanilla version of RAMP.
     * Note this function is automatically run by the instance startup unless the loadDefaultFixtures option is
     * set to false. The function is exposed to allow custom pages the ability to call it at a different point
     * in the startup. Also, a subset of standard fixtures can be provided on the optional parameter if one
     * wishes to omit some of the standard fixtures.
     *
     * @param {Array<string>} [fixtureNames] list of built-in fixtures names to add. omission means all built-in fixtures will be added
     * @returns {Promise<Array<FixtureBase>>} resolves with array of default fixtures
     * @memberof FixtureAPI
     */
    addDefaultFixtures(
        fixtureNames?: Array<string>
    ): Promise<Array<FixtureBase>> {
        if (!Array.isArray(fixtureNames) || fixtureNames.length === 0) {
            fixtureNames = [
                'appbar',
                'basemap',
                'crosshairs',
                'details',
                'geosearch',
                'grid',
                'help',
                'hilight',
                'layer-reorder',
                'legend',
                'mapnav',
                'metadata',
                'northarrow',
                'overviewmap',
                'scrollguard',
                'panguard',
                'settings',
                'wizard'
            ];
        }

        // add all the requested default promises.
        // return the promise-all of all the add fixture promises
        // TODO alterately, don't do a promise.all, and just return the array of promises. not sure which is more useful.
        return Promise.all(fixtureNames.map(fn => this.add(fn)));
    }
}

/**
 * A base class for Fixture subclasses. It provides some utility functions to Fixtures and also gives access to `$iApi` and `$vApp` globals.
 *
 * @export
 * @class FixtureInstance
 * @extends {APIScope}
 * @implements {FixtureBase}
 */
export class FixtureInstance extends APIScope implements FixtureBase {
    /**
     * Adds missing functions and properties to the object implementing FixtureBase interface.
     * This is only needed for external fixtures as they can't inherit from FixtureInstance.
     *
     * TODO: If you know a better way to deep-mixin props/getters/functions from a class into another class instance, please tell me. I honestly don't know 🤷‍♂️.
     *
     * @static
     * @param {FixtureBase} value
     * @param {string} id
     * @param {InstanceAPI} $iApi
     * @returns {FixtureInstance}
     * @memberof FixtureInstance
     */
    static updateBaseToInstance(
        value: FixtureBase,
        id: string,
        $iApi: InstanceAPI
    ): FixtureInstance {
        const instance = new FixtureInstance(id, $iApi);

        Object.defineProperties(value, {
            id: { value: id },
            $iApi: { value: $iApi },
            $vApp: {
                get() {
                    return instance.$vApp;
                }
            },
            remove: { value: instance.remove },
            extend: { value: instance.extend },
            config: {
                get(): any {
                    return instance.config;
                }
            },
            mount: { value: instance.mount }
        });

        return value as FixtureInstance;
    }

    /**
     * ID of this fixture.
     *
     * @type {string}
     * @memberof FixtureInstance
     */
    readonly id: string;

    /**
     * Creates an instance of FixtureInstance.
     *
     * @param {string} id
     * @param {InstanceAPI} iApi
     * @memberof FixtureInstance
     */
    constructor(id: string, iApi: InstanceAPI) {
        super(iApi);

        this.id = id;
    }

    /**
     * Removes the specified fixture from R4MP instance.
     * This is a proxy to `rInstance.fixture.remove(...)`.
     *
     * @returns {this}
     * @memberof FixtureInstance
     */
    remove(): this {
        this.$iApi.fixture.remove(this);
        return this;
    }

    /**
     * A helper function to create a "subclass" of the base Vue constructor
     *
     * @param {VueConstructor<Vue>} vueComponent
     * @param {ComponentOptions<Vue>} [options={}]
     * @returns {Vue}
     * @memberof FixtureInstance
     */
    extend(vueComponent: Record<string, any>, options: ComponentOptions = {}) {
        const component = defineComponent({
            extends: vueComponent,
            iApi: this.$iApi,
            data() {
                return {
                    ...options
                };
            }
        });

        const componentApp = createApp(component);

        const { vNode, destroy, el } = this.mount(component, {
            props: { ...options.propsData },
            app: componentApp
        });

        return el;
    }

    /**
     * Helper with programatically creating a component in Vue 3 (replaces the deprecated Vue.extend)
     *
     * @param {Component} component
     * @param {object} props
     * @param {any} children
     * @param {HTMLElement} element
     * @param {App} app
     * @returns {VNode, function, HTMLElement}
     * @memberof FixtureInstance
     */
    mount(component: Component, { props, children, element, app }: any = {}) {
        let el = element;

        let vNode: any = h(component, props, children);
        if (app && app._context) {
            vNode.appContext = app._context;
        }
        el
            ? render(vNode, el)
            : render(vNode, (el = document.createElement('div')));

        const destroy = () => {
            if (el) {
                render(null, el);
            }
            el = null;
            vNode = null;
        };

        return { vNode, destroy, el };
    }

    added?(): void;
    removed?(): void;
    initialized?(): void;
    terminated?(): void;

    /**
     * Returns the fixture config section (JSON) taken from the global config.
     *
     * @readonly
     * @type {*}
     * @memberof FixtureInstance
     */
    get config(): any {
        return this.$vApp.$store.get('config/getFixtureConfig', this.id);
    }

    /**
     * Get this fixture's config from the layer config with the given layer id
     * Will return `undefined` if layer config did not specify a config for this fixture
     *
     * @param {string} layerId The layer's id
     * @returns {any} This fixture's config for the given layer
     */
    getLayerFixtureConfig(layerId: string): any {
        let fixtureConfigs: { [layerId: string]: any } =
            this.getLayerFixtureConfigs();
        return fixtureConfigs[layerId];
    }

    /**
     * Combines this fixtures configs from layer configs into an indexed-dictionary
     *
     * @returns {{ [layerId: string]: any }} Dictionary where key is the layer id and the value is this fixture's config for that layer
     */
    getLayerFixtureConfigs(): { [layerId: string]: any } {
        let mainConfig: RampConfig = this.$iApi.getConfig();
        let fixtureConfigs: { [layerId: string]: any } = {};

        const layerCrawler = (layer: any, parent: any = undefined) => {
            if (layer.fixtures && layer.fixtures[this.id] !== undefined) {
                let layerId: string = layer.id;
                if (parent !== undefined) {
                    // generate suffixed layer id for sublayer entry
                    layerId = `${parent.id}-${layer.index}`;
                }
                fixtureConfigs[layerId] = layer.fixtures[this.id];
            }

            // process child layer entries
            if (layer.sublayers) {
                layer.sublayers.forEach((sublayer: any) =>
                    layerCrawler(sublayer, layer)
                );
            }
        };

        mainConfig.layers.forEach(layer => layerCrawler(layer));

        return fixtureConfigs;
    }

    /**
     * If the `panelWidth` property is provided, handle default and specified panel widths for the given fixture.
     *
     * @param {Array<string>} panels list of panel names for the calling fixture
     */
    handlePanelWidths(panels: Array<string>): void {
        if (this.config?.panelWidth) {
            const panelWidths: any = {};

            // If only a number was provided, use it as the `default` value.
            if (typeof this.config?.panelWidth == 'number') {
                this.config.panelWidth = {
                    default: this.config?.panelWidth
                };
            }

            // If the `default` attribute is provided, set all panels owned by this fixture to the provided width.
            if (this.config.panelWidth.default) {
                panels.forEach((item: string) => {
                    panelWidths[item] = (this.config.panelWidth as any).default;
                });
            }

            // Handle other panels, if they have a specific width set.
            for (const item in this.config.panelWidth) {
                if (item == 'default') continue;
                panelWidths[item] = this.config.panelWidth[item];
            }

            // Update the width for each specified panel.
            for (const item in panelWidths) {
                // Set new panel widths.
                const panel = this.$iApi.panel.get(item);
                this.$iApi.panel.setStyle(
                    panel,
                    { width: `${panelWidths[item]}px` },
                    true
                );
            }
        }
    }
}
