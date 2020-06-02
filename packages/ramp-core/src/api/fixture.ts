import Vue, { VueConstructor, ComponentOptions } from 'vue';

import { APIScope, InstanceAPI } from './internal';
import { FixtureBase, FixtureMutation, FixtureBaseSet } from '@/store/modules/fixture';

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
     * @returns {T}
     * @memberof FixtureAPI
     */
    remove<T extends FixtureBase = FixtureBase>(fixtureOrId: FixtureBase | string): T {
        const fixture = this.get<T>(fixtureOrId);

        this.$vApp.$store.set(`fixture/${FixtureMutation.REMOVE_FIXTURE}!`, { value: fixture });

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
     * const [one, two, three] = RAMP.fixture.get(['fixture-one', 'fixture-two', 'fixture-three']);
     * ```
     *
     * @template T subclass of the `FixtureBase`; defaults to `FixtureBase`
     * @param {string[]} item a list of fixture ids
     * @returns {T[]}
     * @memberof FixtureAPI
     */
    get<T extends FixtureBase = FixtureBase>(item: string[]): T[];
    get<T extends FixtureBase = FixtureBase>(item: string | FixtureBase | string[]): T | T[] {
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
                throw new Error("fixture doesn't exist");
            }

            return fixture;
        });

        return fixtures.length === 1 ? fixtures[0] : fixtures;
    }
}

// private for fixture internals, so don't export
// a simple data structure for managing the Event API on fixtures.
// TODO if we end up supporting toggle/disabled events, add an active boolean flag to the structure
class FixtureEventHandler {
    eventName: string;
    handlerName: string;
    handlerFunc: Function;

    constructor (eName: string, hName: string, handler: Function) {
        this.eventName = eName;
        this.handlerName = hName;
        this.handlerFunc = handler;
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
            extend: { value: instance.extend },
            config: {
                get(): any {
                    return instance.config;
                }
            },
            on: { value: instance.on },
            off: { value: instance.off },
            emit: { value: instance.emit },
            activeHandlers: { value: instance.activeHandlers },
            availableEvents: { value: instance.availableEvents }
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
     * A helper function to create a "subclass" of the base Vue constructor
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

    // ------ EVENT API LAND ------

    // need something that manages event name, handler name, and the actual handler function
    private eventRegister: Array<FixtureEventHandler> = [];

    /**
     * Takes a fixture event name and derives the secret name for the global bus
     *
     * @param {string} event the name of the fixture event
     * @returns {string} secret name for the global bus
     * @memberof FixtureInstance
     * @private
     */
    private eventNamer(event: string): string {
        return `${this.id}/${event}`;
    }

    /**
     * Locates a handler name registered on this fixture, or undefined if not found
     *
     * @param {string} handlerName the name of the fixture event handler
     * @returns {FixtureEventHandler | undefined} handler information or undefined
     * @memberof FixtureInstance
     * @private
     */
    private findHandler(handlerName: string): FixtureEventHandler | undefined {
        return this.eventRegister.find(feh => feh.handlerName === handlerName);
    }

    /**
     * Adds an event handler to the fixture.
     *
     * @param {string} event name of the fixture event to react to
     * @param {Function} callback function to execute when event triggers
     * @param {string} [handlerName] name of the handler (for reference). a name will be generated if not provided.
     * @returns {string} the handler name
     * @memberof FixtureInstance
     */
    on(event: string, callback: Function, handlerName: string = ''): string {
        // check if name already registered
        if (this.findHandler(handlerName)) {
            // TODO decide if we are replacing, erroring, do nothing + console warn?
            throw new Error('Duplicate handler name registration: ' + handlerName);
        }

        if (!handlerName) {
            const d = new Date();
            handlerName = this.id + btoa(d.getTime().toString());
        }

        // track the event, register with main event bus
        const feh = new FixtureEventHandler(event, handlerName, callback);
        this.eventRegister.push(feh);
        this.$iApi.on(this.eventNamer(event), callback);

        return handlerName;
    }

    /**
     * Removes an event handler on the fixture.
     *
     * @param {string} handlerName name of the handler to remove
     * @memberof FixtureInstance
     */
    off(handlerName: string): void {
        // TODO support other overloads? like event + handler function?
        // TODO handle the "off all" scenario?

        // check if name exists. if not... do nothing? console warn? error?
        const feh = this.findHandler(handlerName);

        if (feh) {
            // remove from event bus and the registry
            this.eventRegister.splice(this.eventRegister.indexOf(feh), 1);
            this.$iApi.off(this.eventNamer(feh.eventName), feh.handlerFunc);
        }

        // TODO case where no handler was found. do nothing? console warn? error?
        //      for now just exit. the goal was achived (non-existing handler will no longer react)
    }

    /**
     * Triggers an event on the fixture.
     *
     * @param {string} event the name of the event
     * @param {...any[]} args any arguements the event is expecting
     * @memberof FixtureInstance
     */
    emit(event: string, ...args: any[]): void {
        // TODO any checking that event exists? or we just agree it is global bus fun
        this.$iApi.emit(this.eventNamer(event), ...args);
    }

    /**
     * Returns any active event handler names for an event.
     *
     * @param {string} event name of the event
     * @returns {Array} handler names for the given event
     * @memberof FixtureInstance
     */
    activeHandlers(event: string): Array<string> {
        // TODO add a filter if we implement disabled events
        return this.eventRegister.filter(feh => feh.eventName === event).map(feh => feh.handlerName);
    }

    /**
     * Returns a list of event names the fixture supports.
     *
     * @returns {Array} event names for the fixture
     * @memberof FixtureInstance
     */
    availableEvents(): Array<string> {
        // suppose this needs to be defined on specific fixtures?
        // it's a bit odd as we can add any event off the cuff
        // but there would also be events that fixtures raise that could have no listeners.
        // so maybe return value is merge or fixture defined event names plus any events that
        // listeners have been created on
        // TODO implement after comment choice is resolved
        return []; //shut up warnings
    }

}
