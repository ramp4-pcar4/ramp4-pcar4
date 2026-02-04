import { APIScope, AttributeAPI, InstanceAPI, LayerAPI, MapAPI, QueryAPI, SymbologyAPI } from '../api/internal';
import { GeometryAPI, ProjectionAPI, SharedUtilsAPI } from './api';
export declare class GeoAPI extends APIScope {
    attributes: AttributeAPI;
    geom: GeometryAPI;
    layer: LayerAPI;
    map: MapAPI;
    proj: ProjectionAPI;
    query: QueryAPI;
    shared: SharedUtilsAPI;
    symbology: SymbologyAPI;
    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI);
    /**
     * Set a proxy service to allow consumption of cross-domain non-CORS resources.
     *
     * @param {string} proxyUrl Url to proxy or empty string to clear. Must be relative url on host domain, or full url to CORS supported server
     */
    set proxy(proxyUrl: string);
    /**
     * Read the current proxy setting, returns url string, empty string if no proxy
     */
    get proxy(): string;
}
