import { FixtureInstance } from '@/api';
import { useExtentguardStore } from '../store';
import type { ExtentguardConfig } from '../store';

/**
 * Will force map extent to remain within the defined maximum extent
 */
export class ExtentguardAPI extends FixtureInstance {
    /**
     * Parses the extentguard config JSON snippet from the config file and save to the fixture store.
     *
     * @param {extentguardConfig} [ExtentguardConfig]
     * @memberof ExtentguardAPI
     */
    _parseConfig(extentguardConfig?: ExtentguardConfig) {
        // NOTE: do not set store.active in this method.
        //       it needs to remain inactive so the handler managing code
        //       can know if it needs to wire up new handlers

        if (extentguardConfig) {
            const store = useExtentguardStore(this.$vApp.$pinia);

            if (extentguardConfig.alwaysOn) {
                store.setAlwaysOn(true);
            }

            const esi = extentguardConfig.extentSetIds;
            if (esi && Array.isArray(esi) && esi.length > 0) {
                store.setExtentSetIds(esi);
            }
        }
    }

    get config(): ExtentguardConfig | undefined {
        return super.config;
    }
}
