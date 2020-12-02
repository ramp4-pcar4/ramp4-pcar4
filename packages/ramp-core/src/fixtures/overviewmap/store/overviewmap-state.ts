import { RampMapConfig, RampLodConfig, RampBasemapConfig, RampSpatialReference } from 'ramp-geoapi'

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
