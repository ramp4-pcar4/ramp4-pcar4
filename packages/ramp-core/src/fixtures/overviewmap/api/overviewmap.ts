import { FixtureInstance } from '@/api';
import { OverviewmapConfig, OverviewmapStore } from '../store';
import { config } from '../default-config';

export class OverviewmapAPI extends FixtureInstance {
    /**
     * Parses the overview map config JSON snippet from the config file and save to the fixture store.
     *
     * @param {OverviewmapConfig} [OverviewmapConfig]
     * @memberof OverviewmapAPI
     */
    _parseConfig(overviewmapConfig?: OverviewmapConfig) {
        // use the default config if overview map config is not provided
        let mapConfig: OverviewmapConfig = overviewmapConfig || config;
        this.$vApp.$store.set(OverviewmapStore.mapConfig, mapConfig.map);
        this.$vApp.$store.set(
            OverviewmapStore.startMinimized,
            mapConfig.startMinimized
        );
    }

    get config(): OverviewmapConfig {
        return super.config;
    }
}
