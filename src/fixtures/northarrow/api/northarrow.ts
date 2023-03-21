import { FixtureInstance } from '@/api';
import { useNortharrowStore } from '../store';
import type { NortharrowConfig } from '../store';

export class NortharrowAPI extends FixtureInstance {
    /**
     * Parses the north arrow config JSON snippet from the config file and save to the fixture store.
     *
     * @param {NortharrowConfig} [northarrowConfig]
     * @memberof NortharrowAPI
     */
    _parseConfig(northarrowConfig?: NortharrowConfig) {
        const northarrowStore = useNortharrowStore(this.$vApp.$pinia);

        if (!northarrowConfig) return;
        northarrowStore.arrowIcon = northarrowConfig.arrowIcon;
        northarrowStore.poleIcon, northarrowConfig.poleIcon;
    }

    get config(): NortharrowConfig {
        return super.config;
    }
}
