import { FixtureInstance } from '../../../api';
import { ExtentguardConfig } from '../store';
/**
 * Will force map extent to remain within the defined maximum extent
 */
export declare class ExtentguardAPI extends FixtureInstance {
    /**
     * Parses the extentguard config JSON snippet from the config file and save to the fixture store.
     *
     * @param {extentguardConfig} [ExtentguardConfig]
     * @memberof ExtentguardAPI
     */
    _parseConfig(extentguardConfig?: ExtentguardConfig): void;
    get config(): ExtentguardConfig | undefined;
}
