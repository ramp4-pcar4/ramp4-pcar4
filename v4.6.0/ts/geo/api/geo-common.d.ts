import { GeometryAPI, ProjectionAPI, SharedUtilsAPI } from '@/geo/api';
import type { RampLodConfig } from '@/geo/api';
export declare class GeoCommonAPI {
    protected DEFAULT_MERCATOR: string;
    protected DEFAULT_LAMBERT: string;
    proj: ProjectionAPI;
    geom: GeometryAPI;
    sharedUtils: SharedUtilsAPI;
    constructor();
    defaultTileSchemas(): Array<string>;
    defaultLODs(keycode: string): Array<RampLodConfig>;
}
