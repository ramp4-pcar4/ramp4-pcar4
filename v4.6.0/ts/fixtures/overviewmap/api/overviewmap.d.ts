import { FixtureInstance } from '@/api';
import type { OverviewmapConfig } from '../store';
export declare class OverviewmapAPI extends FixtureInstance {
    /**
     * Parses the overview map config JSON snippet from the config file and save to the fixture store.
     *
     * @param {OverviewmapConfig} [OverviewmapConfig]
     * @memberof OverviewmapAPI
     */
    _parseConfig(overviewmapConfig?: OverviewmapConfig): void;
    get config(): OverviewmapConfig;
}
