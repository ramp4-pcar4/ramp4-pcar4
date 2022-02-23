import { FixtureInstance } from '@/api';
import { OverviewmapConfig, OverviewmapStore } from '../store';

export class OverviewmapAPI extends FixtureInstance {
    /**
     * Parses the overview map config JSON snippet from the config file and save to the fixture store.
     *
     * @param {OverviewmapConfig} [OverviewmapConfig]
     * @memberof OverviewmapAPI
     */
    _parseConfig(overviewmapConfig?: OverviewmapConfig) {
        this.$vApp.$store.set(
            OverviewmapStore.basemaps,
            overviewmapConfig?.basemaps || {}
        );
        this.$vApp.$store.set(OverviewmapStore.mapConfig, {
            basemaps: overviewmapConfig
                ? Object.values(overviewmapConfig.basemaps)
                : []
        });
        this.$vApp.$store.set(
            OverviewmapStore.startMinimized,
            overviewmapConfig?.startMinimized || true
        );
    }

    get config(): OverviewmapConfig {
        return super.config;
    }
}
