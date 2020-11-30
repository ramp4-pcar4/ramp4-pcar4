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
        if (!overviewmapConfig) return;
        let mapConfig = {
            extent: {
                xmax: 1,
                xmin: 0,
                ymax: 1,
                ymin: 0,
                spatialReference: overviewmapConfig.spatialReference
            },
            lods: overviewmapConfig.lods,
            basemaps: [overviewmapConfig.basemap],
            initialBasemapId: overviewmapConfig.basemap.id
        }
        this.$vApp.$store.set(OverviewmapStore.mapConfig, mapConfig);
    }

    get config(): OverviewmapConfig {
        return super.config;
    }
}
