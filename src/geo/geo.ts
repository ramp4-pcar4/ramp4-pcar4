// the structure of the geo element of the RAMP API

import {
    APIScope,
    AttributeAPI,
    InstanceAPI,
    LayerAPI,
    MapAPI,
    QueryAPI,
    SymbologyAPI
} from '@/api/internal';
import { geo } from '@/main';
import type { GeometryAPI, ProjectionAPI, SharedUtilsAPI } from '@/geo/api';
import { EsriConfig } from '@/geo/esri';

export class GeoAPI extends APIScope {
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
    constructor(iApi: InstanceAPI) {
        super(iApi);

        // Refer to global instance
        this.geom = geo.geom;
        this.proj = geo.proj;
        this.shared = geo.sharedUtils;

        this.map = new MapAPI(iApi);
        this.layer = new LayerAPI(iApi);
        this.attributes = new AttributeAPI(iApi);
        this.query = new QueryAPI(iApi);
        this.symbology = new SymbologyAPI(iApi);
    }

    /**
     * Set a proxy service to allow consumption of cross-domain non-CORS resources.
     *
     * @param {string} proxyUrl Url to proxy or empty string to clear. Must be relative url on host domain, or full url to CORS supported server
     */
    set proxy(proxyUrl: string) {
        EsriConfig.request.proxyUrl = proxyUrl;
    }

    /**
     * Read the current proxy setting, returns url string, empty string if no proxy
     */
    get proxy(): string {
        return EsriConfig.request.proxyUrl || '';
    }
}
