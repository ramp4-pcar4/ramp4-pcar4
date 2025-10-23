import { FixtureInstance } from '../../../api';
import { MapnavFixtureConfig } from '../store';
export declare class MapnavAPI extends FixtureInstance {
    private mapnavStore;
    /**
     * Returns `MapnavFixtureConfig` section of the global config file.
     *
     * @readonly
     * @type {MapnavFixtureConfig}
     * @memberof MapnavFixture
     */
    get config(): MapnavFixtureConfig | undefined;
    /**
     * Parses the mapnav config JSON snippet from the config file and save resulting objects to the fixture store.
     *
     * @param {MapnavFixtureConfig} [mapnavConfig]
     * @returns
     * @memberof MapnavAPI
     */
    _parseConfig(mapnavConfig?: MapnavFixtureConfig): void;
    /**
     * Checks if components specified as mapnav items are registered or not.
     * Will check the literal id values, and id values with `-nav-button` suffixes appended.
     *
     * @memberof MapnavAPI
     */
    _validateItems(): void;
}
