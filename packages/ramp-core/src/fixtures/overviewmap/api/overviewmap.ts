import { FixtureInstance } from '@/api';
import { OverviewmapConfig, OverviewmapStore } from '../store';

export class OverviewmapAPI extends FixtureInstance {
    /**
     * Parses the overview map config JSON snippet from the config file and save to the fixture store.
     *
     * @param {OverviewmapConfig} [OverviewmapConfig]
     * @memberof OverviewmapAPI
     */
    _parseConfig(OverviewmapConfig?: OverviewmapConfig) {
        if (!OverviewmapConfig) return;
    }

    get config(): OverviewmapConfig {
        return super.config;
    }
}
