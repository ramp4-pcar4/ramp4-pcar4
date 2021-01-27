import { RampMapConfig, RampLodConfig, RampBasemapConfig, RampSpatialReference } from '@/geo/internal';

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
