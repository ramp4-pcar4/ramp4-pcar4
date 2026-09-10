import { GeometryAPI, ProjectionAPI, SharedUtilsAPI, RampLodConfig } from '.';
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
