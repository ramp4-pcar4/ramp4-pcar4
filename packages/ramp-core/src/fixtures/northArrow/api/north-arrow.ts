import { FixtureInstance } from '@/api';
import { NorthArrowConfig, NorthArrowStore } from '../store';

export class NorthArrowAPI extends FixtureInstance {
    /**
     * Parses the north arrow config JSON snippet from the config file and save to the fixture store.
     *
     * @param {NorthArrowConfig} [northArrowConfig]
     * @memberof NorthArrowAPI
     */
    _parseConfig(northArrowConfig?: NorthArrowConfig) {
        if (!northArrowConfig) return;
        this.$vApp.$store.set(NorthArrowStore.arrowIcon, northArrowConfig.arrowIcon);
        this.$vApp.$store.set(NorthArrowStore.poleIcon, northArrowConfig.poleIcon);
    }

    get config(): NorthArrowConfig {
        return super.config;
    }
}
