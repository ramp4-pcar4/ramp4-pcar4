import { FixtureInstance } from '@/api';
import { OverviewmapStore } from '../store';
import type { OverviewmapConfig } from '../store';

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
            overviewmapConfig?.startMinimized ?? true
        );
        this.$vApp.$store.set(
            OverviewmapStore.expandFactor,
            overviewmapConfig?.expandFactor ?? 1.5
        );
        this.$vApp.$store.set(
            OverviewmapStore.borderColour,
            overviewmapConfig?.borderColour ?? '#FF0000'
        );
        this.$vApp.$store.set(
            OverviewmapStore.borderWidth,
            overviewmapConfig?.borderWidth ?? 1
        );
        this.$vApp.$store.set(
            OverviewmapStore.areaColour,
            overviewmapConfig?.areaColour ?? '#000000'
        );
        this.$vApp.$store.set(
            OverviewmapStore.areaOpacity,
            overviewmapConfig?.areaOpacity ?? 0.25
        );
    }

    get config(): OverviewmapConfig {
        return super.config;
    }
}
