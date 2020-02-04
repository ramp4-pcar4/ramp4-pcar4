import { APIScope } from './internal';
import { FixtureConfig, FixtureMutation } from '@/store/modules/fixture';
import { InstanceAPI } from './instance';
// TODO: implement the same `internal.ts` pattern in store, so can import from a single place;

export class FixtureAPI extends APIScope {
    // TODO: moves this fixture loading function to a separate file
    // TODO: write logic for loading external fixtures

    /**
     * TODO: sample code to load an external fixture
     *
     * Loads (built-in) fixture or adds supplied fixture configs into the R4MP Vue instance.
     *
     * @param {string} value
     * @returns {Promise<void>}
     * @memberof FixtureAPI
     */
    async add(value: string): Promise<FixtureItemAPI> {
        // perform a dynamic webpack import of a internal fixture (allows for code splitting)
        const { default: fixtureConfig }: { default: FixtureConfig } = await import(
            /* webpackChunkName: "[request]" */ `@/fixtures/${value}/index.ts`
        );

        if (typeof fixtureConfig.created !== 'function') {
            throw new Error('malformed fixture config; `created` life hook is missing');
        }

        // pass the reference to the API instance to the fixture config
        fixtureConfig.created(this.iApi);

        // TODO: calling `ADD_FIXTURE` mutation directly here; might want to switch to calling the action `addFixture`
        // TODO: using this horrible concatenated mixture `fixture/${FixtureMutation.ADD_FIXTURE}!` all the time doesn't seem like a good idea;
        this.vApp.$store.set(`fixture/${FixtureMutation.ADD_FIXTURE}!`, { value: fixtureConfig });

        return new FixtureItemAPI(this.iApi, fixtureConfig);
    }

    /**
     * Removes the specified fixture from R4MP instance.
     *
     * @param {(string | FixtureItemAPI)} value
     * @returns {(FixtureItemAPI | null)}
     * @memberof FixtureAPI
     */
    remove(value: string | FixtureItemAPI): FixtureItemAPI | null {
        const fixtureConfig = typeof value === 'string' ? this.get(value) : value;

        // TODO: output warning to a log that a fixture with this id cannot be found
        if (!fixtureConfig) {
            return null;
        }

        this.vApp.$store.set(`fixture/${FixtureMutation.REMOVE_FIXTURE}!`, { value });

        return fixtureConfig;
    }

    /**
     * Finds and returns a fixture with the id specified.
     *
     * @param {string} id
     * @returns {(FixtureItemAPI | null)}
     * @memberof FixtureAPI
     */
    get(id: string): FixtureItemAPI | null {
        const fixtureConfig = this.vApp.$store.get<FixtureConfig>(`fixture/items@${id}`);

        // TODO: output warning to a log that a fixture with this id cannot be found
        if (!fixtureConfig) {
            return null;
        }

        return new FixtureItemAPI(this.iApi, fixtureConfig);
    }
}

export class FixtureItemAPI extends APIScope {
    /**
     * The original `FixtureConfig` object. Kept for reference.
     *
     * @type {FixtureConfig}
     * @memberof FixtureItemAPI
     */
    readonly _config: FixtureConfig;

    /**
     * ID of this fixture.
     *
     * @readonly
     * @type {string}
     * @memberof FixtureItemAPI
     */
    get id(): string {
        return this._config.id;
    }

    /**
     * Creates an instance of FixtureItemAPI.
     *
     * @param {InstanceAPI} iApi
     * @param {FixtureConfig} config
     * @memberof FixtureItemAPI
     */
    constructor(iApi: InstanceAPI, config: FixtureConfig) {
        super(iApi);

        this._config = config;
    }
}
