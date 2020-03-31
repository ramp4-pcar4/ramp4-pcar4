import Vue, { VueConstructor, ComponentOptions } from 'vue';

import { APIScope, InstanceAPI } from './internal';
import { FixtureBase, FixtureMutation } from '@/store/modules/fixture';

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
     * Loads a (built-in) fixture or adds supplied fixture into the R4MP Vue instance.
     *
     * @param {string} id
     * @param {IFixtureBase} [constructor]
     * @returns {Promise<FixtureBase>}
     * @memberof FixtureAPI
     */
    async add(id: string, constructor?: IFixtureBase): Promise<FixtureBase> {
        let fixture: FixtureBase;

        // only need to provide fixture constructors for external fixtures since internal ones are loaded automatically
        if (constructor) {
            if (typeof constructor !== 'function') {
                throw new Error('malformed fixture constructor');
            }

            // run the provided constructor and update the resulting object with FixtureInstance functions/properties
            fixture = FixtureInstance.updateBaseToInstance(new constructor(), id, this.$iApi);
        } else {
            // perform a dynamic webpack import of a internal fixture (allows for code splitting)
            const instanceConstructor: IFixtureInstance = (await import(/* webpackChunkName: "[request]" */ `@/fixtures/${id}/index.ts`))
                .default;

            fixture = new instanceConstructor(id, this.$iApi);
        }

        // TODO: calling `ADD_FIXTURE` mutation directly here; might want to switch to calling the action `addFixture`
        // TODO: using this horrible concatenated mixture `fixture/${FixtureMutation.ADD_FIXTURE}!` all the time doesn't seem like a good idea;
        // fixtures are always stored as objects implementing `FixtureBase` interfaces;
        this.$vApp.$store.set(`fixture/${FixtureMutation.ADD_FIXTURE}!`, { value: fixture });

        return fixture;
    }

    /**
     * Removes the specified fixture from R4MP instance.
     *
     * @template T
     * @param {(FixtureBase | string)} fixtureOrId
     * @returns {(T | null)}
     * @memberof FixtureAPI
     */
    remove<T extends FixtureBase = FixtureBase>(fixtureOrId: FixtureBase | string): T | null {
        const fixture = this.get<T>(fixtureOrId);

        // TODO: output warning to a log that a fixture with this id cannot be found
        if (!fixture) {
            return null;
        }

        this.$vApp.$store.set(`fixture/${FixtureMutation.REMOVE_FIXTURE}!`, { value: fixture });

        return fixture;
    }

    /**
     * Finds and returns a fixture with the id specified.
     *
     * @template T
     * @param {(string | { id: string })} item
     * @returns {(T | null)}
     * @memberof FixtureAPI
     */
    get<T extends FixtureBase = FixtureBase>(item: string | { id: string }): T | null {
        const id = typeof item === 'string' ? item : item.id;
        const fixture = this.$vApp.$store.get<T>(`fixture/items@${id}`);

        // TODO: output warning to a log that a fixture with this id cannot be found
        if (!fixture) {
            return null;
        }

        return fixture;
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
    static updateBaseToInstance(value: FixtureBase, id: string, $iApi: InstanceAPI): FixtureInstance {
        const instance = new FixtureInstance(id, $iApi);

        Object.defineProperties(value, {
            id: { value: id },
            $iApi: { value: $iApi },
            $vApp: {
                get(): Vue {
                    return instance.$vApp;
                }
            },
            remove: { value: instance.remove },
            extend: { value: instance.extend }
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
     * Creates an instance of FixtureItemAPI.
     */
    constructor(id: string, iApi: InstanceAPI) {
        super(iApi);

        this.id = id;
    }

    /**
     * Removes the specified fixture from R4MP instance.
     * This is a proxy to `RAMP.fixture.remove(...)`.
     *
     * @returns {this}
     * @memberof FixtureInstance
     */
    remove(): this {
        this.$iApi.fixture.remove(this);
        return this;
    }

    /**
     *
     *
     * @param {VueConstructor<Vue>} vueConstructor
     * @param {ComponentOptions<Vue>} [options={}]
     * @param {boolean} [mount=true]
     * @returns {Vue}
     * @memberof FixtureInstance
     */
    extend(vueConstructor: VueConstructor<Vue>, options: ComponentOptions<Vue> = {}, mount: boolean = true): Vue {
        const component = new (Vue.extend(vueConstructor))({
            iApi: this.$iApi,
            ...options,
            propsData: {
                ...options.propsData,
                fixture: this
            }
        });

        component.$mount();

        return component;
    }

    added?(): void;
    removed?(): void;
    initialized?(): void;
    terminated?(): void;
}
