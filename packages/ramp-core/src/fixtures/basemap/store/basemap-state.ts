import { RampBasemapConfig, RampTileSchemaConfig } from '@/geo/api';

export class BasemapState {
    tileSchemas: Array<RampTileSchemaConfig> = [];
    basemaps: Array<RampBasemapConfig> = [];
    selectedBasemap: RampBasemapConfig | null = null;
}

export interface BasemapConfig {
    basemaps: Array<RampBasemapConfig>;
    tileSchemas: Array<RampTileSchemaConfig>;
    initialBasemapId: string;
}
