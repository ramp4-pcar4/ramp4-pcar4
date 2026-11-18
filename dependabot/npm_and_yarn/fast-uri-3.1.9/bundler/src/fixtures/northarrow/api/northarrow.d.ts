import { FixtureInstance } from '../../../api';
import { NortharrowConfig } from '../store';
export declare class NortharrowAPI extends FixtureInstance {
    /**
     * Parses the north arrow config JSON snippet from the config file and save to the fixture store.
     *
     * @param {NortharrowConfig} [northarrowConfig]
     * @memberof NortharrowAPI
     */
    _parseConfig(northarrowConfig?: NortharrowConfig): void;
    get config(): NortharrowConfig;
}
