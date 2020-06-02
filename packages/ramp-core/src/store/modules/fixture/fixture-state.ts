import Vue from 'vue';
import { InstanceAPI } from '@/api/internal';

export class FixtureState {
    items: { [name: string]: FixtureBase } = {};
}

export type FixtureBaseSet = { [name: string]: FixtureBase };

export interface FixtureBase {
    /**
     * ID of this fixture.
     *
     * @type {string}
     * @memberof Fixture
     */
    id: string;

    /**
     * [Optional] Called synchronously when the fixture is added to R4MP.
     *
     * @memberof Fixture
     */
    added?(): void;

    /**
     * [Optional] Called synchronously when the fixture is removed from R4MP.
     *
     * @memberof Fixture
     */
    removed?(): void;

    /**
     * [Optional] Called after the core map logic has executed. If the fixture is added after the map initialization, this is called immediately.
     *
     * At this point, any custom content (panels, on-map components, etc.) can be added to R4MP. Custom content can also be added throughout the life of the [module].
     *
     * @memberof Fixture
     */
    initialized?(): void;

    /**
     * [Optional] Called before the fixture is removed from R4MP.
     *
     * This is a clean-up phase, and at this point, any custom content (panels, on-map components, etc.) must be removed.
     *
     * @memberof Fixture
     */
    terminated?(): void;

    /**
     * Adds an event handler to the fixture.
     *
     * @param {string} event name of the fixture event to react to
     * @param {Function} callback function to execute when event triggers
     * @param {string} [handlerName] name of the handler (for reference). a name will be generated if not provided.
     * @returns {string} the handler name
     * @memberof Fixture
     */
    on(event: string, callback: Function, handlerName?: string): string;

    /**
     * Removes an event handler on the fixture.
     *
     * @param {string} handlerName name of the handler to remove
     * @memberof Fixture
     */
    off(handlerName: string): void;

    /**
     * Triggers an event on the fixture.
     *
     * @param {string} event the name of the event
     * @param {...any[]} args any arguements the event is expecting
     * @memberof Fixture
     */
    emit(event: string, ...args: any[]): void;

    /**
     * Returns any active event handler names for an event.
     *
     * @param {string} event name of the event
     * @returns {Array} handler names for the given event
     * @memberof Fixture
     */
    activeHandlers(event: string): Array<string>;

    /**
     * Returns a list of event names the fixture supports.
     *
     * @returns {Array} event names for the fixture
     * @memberof Fixture
     */
    availableEvents(): Array<string>;


    // TODO add event toggle or enable/disable? do we want it?
    // TODO add event "once()"? do we want it?

}

// TODO: deprecated;
//export class FixtureConfigHelper implements FixtureBase {
//    id: string;
//
//    /**
//     * Creates an instance of FixtureConfigHelper.
//     *
//     * @param {string} id
//     * @memberof FixtureConfigHelper
//     */
//    constructor(id: string) {
//        this.id = id;
//    }
//
//    /**
//     * Called at the very beginning of the life cycle with the `iApi` reference which is store at `this.$iApi`.
//     *
//     * @param {InstanceAPI} $iApi
//     * @memberof FixtureConfigHelper
//     */
//    created($iApi: InstanceAPI): void {
//        this.$iApi = $iApi;
//    }
//
//    /**
//     * A reference to the InstanceAPI this fixture is running inside.
//     * NOTE: This is guaranteed to have value by the time `added()` life hook is called.
//     *
//     * @type {InstanceAPI}
//     * @memberof FixtureConfigHelper
//     */
//    $iApi!: InstanceAPI;
//
//    /**
//     * The instance of Vue R4MP application controlled by the InstanceAPI.
//     *
//     * @readonly
//     * @protected
//     * @type {Vue}
//     * @memberof APIScope
//     */
//    get vApp(): Vue {
//        return this.$iApi.$vApp;
//    }
//
//    added?(): void;
//    removed?(): void;
//    initialized?(): void;
//    terminated?(): void;
//}

