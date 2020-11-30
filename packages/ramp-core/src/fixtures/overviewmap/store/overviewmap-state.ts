import { RampMapConfig, RampLodConfig, RampBasemapConfig, RampSpatialReference } from 'ramp-geoapi'

export class OverviewmapState {
    mapConfig: RampMapConfig | undefined = undefined;
}

export interface OverviewmapConfig {
    lods: RampLodConfig;
    basemap: RampBasemapConfig;
    spatialReference: RampSpatialReference;
}
