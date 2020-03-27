import Vue from 'vue';
import { InstanceAPI } from '@/api/internal';

export class FixtureState {
    items: { [name: string]: FixtureBase } = {};
}

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
}

// TODO: deprecated;
export class FixtureConfigHelper implements FixtureBase {
    id: string;

    /**
     * Creates an instance of FixtureConfigHelper.
     *
     * @param {string} id
     * @memberof FixtureConfigHelper
     */
    constructor(id: string) {
        this.id = id;
    }

    /**
     * Called at the very beginning of the life cycle with the `iApi` reference which is store at `this.$iApi`.
     *
     * @param {InstanceAPI} $iApi
     * @memberof FixtureConfigHelper
     */
    created($iApi: InstanceAPI): void {
        this.$iApi = $iApi;
    }

    /**
     * A reference to the InstanceAPI this fixture is running inside.
     * NOTE: This is guaranteed to have value by the time `added()` life hook is called.
     *
     * @type {InstanceAPI}
     * @memberof FixtureConfigHelper
     */
    $iApi!: InstanceAPI;

    /**
     * The instance of Vue R4MP application controlled by the InstanceAPI.
     *
     * @readonly
     * @protected
     * @type {Vue}
     * @memberof APIScope
     */
    get vApp(): Vue {
        return this.$iApi.$vApp;
    }

    added?(): void;
    removed?(): void;
    initialized?(): void;
    terminated?(): void;
}
