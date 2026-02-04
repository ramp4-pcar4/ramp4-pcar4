import { FixtureInstance } from '../../../api/internal';
import { AreasOfInterestConfig } from '../store';
export declare class AreasOfInterestAPI extends FixtureInstance {
    /**
     * Get the current areas of interest config
     */
    get config(): AreasOfInterestConfig | undefined;
    /**
     * Parses the areas of interest config snippet from the config json
     */
    _parseConfig(areasOfInterest?: AreasOfInterestConfig): void;
}
