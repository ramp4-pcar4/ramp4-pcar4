import { FixtureInstance } from '@/api';
import { useOverviewmapStore } from '../store';
import type { OverviewmapConfig } from '../store';

export class OverviewmapAPI extends FixtureInstance {
    /**
     * Parses the overview map config JSON snippet from the config file and save to the fixture store.
     *
     * @param {OverviewmapConfig} [OverviewmapConfig]
     * @memberof OverviewmapAPI
     */
    _parseConfig(overviewmapConfig?: OverviewmapConfig) {
        const overviewmapStore = useOverviewmapStore(this.$vApp.$pinia);

        overviewmapStore.basemaps = overviewmapConfig?.basemaps || {};
        overviewmapStore.mapConfig.basemaps = overviewmapConfig
            ? Object.values(overviewmapConfig.basemaps)
            : [];
        overviewmapStore.startMinimized =
            overviewmapConfig?.startMinimized ?? true;
        overviewmapStore.expandFactor = overviewmapConfig?.expandFactor ?? 1.5;
        overviewmapStore.borderColour =
            overviewmapConfig?.borderColour ?? '#FF0000';
        overviewmapStore.borderWidth = overviewmapConfig?.borderWidth ?? 1;
        overviewmapStore.areaColour =
            overviewmapConfig?.areaColour ?? '#000000';
        overviewmapStore.areaOpacity = overviewmapConfig?.areaOpacity ?? 0.25;
    }

    get config(): OverviewmapConfig {
        return super.config;
    }
}
