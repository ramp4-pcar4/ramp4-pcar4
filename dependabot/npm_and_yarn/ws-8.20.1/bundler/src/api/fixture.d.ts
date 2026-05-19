import { Component, ComponentOptions } from '../../vue/dist/vue.esm-bundler.js';
import { APIScope, InstanceAPI } from './internal';
import { FixtureBase } from '../stores/fixture';
/**
 * A constructor returning an object implementing FixtureBase interface.
 */
type IFixtureBase = new () => FixtureBase;
export declare class FixtureAPI extends APIScope {
    /**
     * Creates an instance of FixtureAPI.
     *
     * @param {InstanceAPI} iApi
     * @memberof FixtureAPI
     */
    constructor(iApi: InstanceAPI);
    /**
     * Returns whether a given fixture exists.
     *
     * @param {string} id the fixture ID to be checked
     * @returns {boolean} whether the fixture identified by 'id' exists
     * @memberof FixtureAPI
     */
    exists(id: string): boolean;
    /**
     * Loads a (built-in) fixture or adds supplied fixture into the R4MP Vue instance.
     *
     * @param {string} id
     * @param {IFixtureBase} [constructor]
     * @returns {Promise<FixtureBase>}
     * @memberof FixtureAPI
     */
    add(id: string, constructor?: IFixtureBase): Promise<FixtureBase>;
    /**
     * Removes the specified fixture from R4MP instance.
     *
     * @template T
     * @param {(FixtureBase | string)} fixtureOrId
     * @returns {T}
     * @memberof FixtureAPI
     */
    remove<T extends FixtureBase = FixtureBase>(fixtureOrId: FixtureBase | string): T;
    /**
     * Remove every fixture whose persist flag is set to false from the R4MP instance.
     * For all other fixtures, simply call their removed hook.
     */
    flush(): void;
    /**
     * Restores every remaining fixture by calling its added/initialized hooks.
     */
    restore(): void;
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
    /**
     * Provides a promise that resolves when the fixture(s) have finished loading.
     *
     * @param {(string | string[])} fixtureId the fixture ID(s) for which the promise is requested
     * @memberof FixtureAPI
     */
    isLoaded<T extends string | string[]>(fixtureId: T): Promise<T extends string ? FixtureBase : FixtureBase[]>;
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
    addDefaultFixtures(fixtureNames?: Array<string>): Promise<Array<FixtureBase>>;
}
/**
 * A base class for Fixture subclasses. It provides some utility functions to Fixtures and also gives access to `$iApi` and `$vApp` globals.
 *
 * @export
 * @class FixtureInstance
 * @extends {APIScope}
 * @implements {FixtureBase}
 */
export declare class FixtureInstance extends APIScope implements FixtureBase {
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
    static updateBaseToInstance(rawFixture: FixtureBase, id: string, $iApi: InstanceAPI): FixtureInstance;
    /**
     * ID of this fixture.
     *
     * @type {string}
     * @memberof FixtureInstance
     */
    readonly id: string;
    persist: boolean;
    /**
     * Creates an instance of FixtureInstance.
     *
     * @param {string} id
     * @param {InstanceAPI} iApi
     * @memberof FixtureInstance
     */
    constructor(id: string, iApi: InstanceAPI);
    /**
     * Removes the specified fixture from R4MP instance.
     * This is a proxy to `rInstance.fixture.remove(...)`.
     *
     * @returns {this}
     * @memberof FixtureInstance
     */
    remove(): this;
    /**
     * A helper function to create a "subclass" of the base Vue constructor
     *
     * @param {VueConstructor<Vue>} vueComponent
     * @param {ComponentOptions<Vue>} [options={}]
     * @returns {Vue}
     * @memberof FixtureInstance
     */
    extend(vueComponent: Record<string, any>, options?: ComponentOptions): any;
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
    mount(component: Component, { props, children, element, app }?: any): {
        vNode: any;
        destroy: () => void;
        el: any;
    };
    added?(): void;
    removed?(): void;
    initialized?(): void;
    /**
     * Returns the fixture config section (JSON) taken from the global config.
     *
     * @readonly
     * @type {*}
     * @memberof FixtureInstance
     */
    get config(): any;
    /**
     * Get this fixture's config from the layer config with the given layer id
     * Will return `undefined` if layer config did not specify a config for this fixture
     *
     * @param {string} layerId The layer's id
     * @returns {any} This fixture's config for the given layer
     */
    getLayerFixtureConfig(layerId: string): any;
    /**
     * Combines this fixtures configs from layer configs into an indexed-dictionary
     *
     * @returns {{ [layerId: string]: any }} Dictionary where key is the layer id and the value is this fixture's config for that layer
     */
    getLayerFixtureConfigs(): {
        [layerId: string]: any;
    };
    /**
     * If the `panelWidth` property is provided, handle default and specified panel widths for the given fixture.
     *
     * @param {Array<string>} panels list of panel names for the calling fixture
     */
    handlePanelWidths(panels: Array<string>): void;
    /**
     * If the `panelTeleport` property is provided, handle specified panelTeleport for the given fixture.
     *
     * @param {Array<string>} panels list of panel names for the calling fixture
     */
    handlePanelTeleports(panels: Array<string>): void;
}
export {};
