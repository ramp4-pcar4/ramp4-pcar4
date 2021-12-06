import {
    RampExtentSetConfig,
    RampMapConfig,
    RampBasemapConfig,
    RampLodSetConfig
} from '@/geo/api';

export class OverviewmapState {
    mapConfig: RampMapConfig | undefined = undefined;
    startMinimized: boolean = true;
}

export interface OverviewmapConfig {
    map: {
        lodSets: Array<RampLodSetConfig>;
        extentSets: Array<RampExtentSetConfig>;
        basemaps: Array<RampBasemapConfig>;
    };
    startMinimized: boolean;
}
