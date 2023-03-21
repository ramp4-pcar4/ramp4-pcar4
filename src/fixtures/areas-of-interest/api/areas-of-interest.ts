import { FixtureInstance } from '@/api/internal';
import { useAreasOfInterestStore } from '../store';
import type { AreasOfInterestConfig } from '../store';

export class AreasOfInterestAPI extends FixtureInstance {
    /**
     * Get the current areas of interest config
     */
    get config(): AreasOfInterestConfig | undefined {
        return super.config;
    }

    /**
     * Parses the areas of interest config snippet from the config json
     */
    _parseConfig(areasOfInterest?: AreasOfInterestConfig) {
        if (!areasOfInterest) {
            return;
        }
        const areasOfInterestStore = useAreasOfInterestStore(this.$vApp.$pinia);
        areasOfInterestStore.areas = areasOfInterest.areas;
    }
}
