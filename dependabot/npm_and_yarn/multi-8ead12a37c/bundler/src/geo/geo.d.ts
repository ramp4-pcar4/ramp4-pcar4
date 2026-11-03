import { APIScope, AttributeAPI, InstanceAPI, LayerAPI, MapAPI, QueryAPI, SymbologyAPI } from '../api/internal';
import { Point, GeometryAPI, ProjectionAPI, SharedUtilsAPI } from './api';
interface GeolocationResult {
    success: boolean;
    coord?: Point | undefined;
    error?: 'permission' | 'internal';
}
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
    /**
     * Stores any geolocation result to avoid multiple hits
     * @private
     */
    private glCoord;
    /**
     * Gets the geolocation of the user's browser. May prompt the user for permission.
     * Will also emit event 'map/geolocate' when done.
     *
     * @param {boolean} [hideFailNotification=false] option to suppress a RAMP notification if the request fails
     * @returns resolves with an object containing the these properties:
     *          - success (boolean)
     *          - coord (Point) location in lat lon if successful
     *          - error ('permission' | 'internal') if not successful, indicates if it's a permission problem or something else
     */
    getGeolocation(hideFailNotification?: boolean): Promise<GeolocationResult>;
}
export {};
