import { FixtureInstance } from '@/api';
import { NortharrowConfig, NortharrowStore } from '../store';

export class NortharrowAPI extends FixtureInstance {
    /**
     * Parses the north arrow config JSON snippet from the config file and save to the fixture store.
     *
     * @param {NortharrowConfig} [northarrowConfig]
     * @memberof NortharrowAPI
     */
    _parseConfig(northarrowConfig?: NortharrowConfig) {
        if (!northarrowConfig) return;
        this.$vApp.$store.set(NortharrowStore.arrowIcon, northarrowConfig.arrowIcon);
        this.$vApp.$store.set(NortharrowStore.poleIcon, northarrowConfig.poleIcon);
    }

    get config(): NortharrowConfig {
        return super.config;
    }
}
