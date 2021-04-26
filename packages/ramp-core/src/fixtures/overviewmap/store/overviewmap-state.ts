import { RampMapConfig, RampBasemapConfig, RampSpatialReference } from '@/geo/internal';
import { RampLodConfig } from '@/geo/api/geo-common';

export class OverviewmapState {
    mapConfig: RampMapConfig | undefined = undefined;
    startMinimized: boolean = true;
}

export interface OverviewmapConfig {
    map: {
        lods: RampLodConfig;
        basemap: RampBasemapConfig;
        spatialReference: RampSpatialReference;
    },
    startMinimized: boolean;
}
