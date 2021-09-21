import { RampMapConfig, RampBasemapConfig, RampLodConfig, RampSpatialReference } from '@/geo/api';

export class OverviewmapState {
    mapConfig: RampMapConfig | undefined = undefined;
    startMinimized: boolean = true;
}

export interface OverviewmapConfig {
    map: {
        lods: RampLodConfig;
        basemap: RampBasemapConfig;
        spatialReference: RampSpatialReference;
    };
    startMinimized: boolean;
}
