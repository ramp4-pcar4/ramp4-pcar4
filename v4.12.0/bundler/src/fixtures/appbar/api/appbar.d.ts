import { FixtureInstance } from '../../../api';
import { AppbarFixtureConfig } from '../store';
export declare class AppbarAPI extends FixtureInstance {
    /**
     * Returns `AppbarFixtureConfig` section of the global config file.
     *
     * @readonly
     * @type {AppbarFixtureConfig}
     * @memberof AppbarFixture
     */
    get config(): AppbarFixtureConfig | undefined;
    /**
     * Parses the appbar config JSON snippet from the config file and save resulting objects to the fixture store.
     *
     * @param {AppbarFixtureConfig} [appbarConfig]
     * @returns
     * @memberof AppbarAPI
     */
    _parseConfig(appbarConfig?: AppbarFixtureConfig): void;
    /**
     * Checks if components specified as appbar items are registered or not.
     *
     * @memberof AppbarAPI
     */
    _validateItems(): void;
}
