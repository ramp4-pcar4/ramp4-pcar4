// the structure of the geo element of the RAMP API

import { APIScope, AttributeAPI, InstanceAPI, LayerAPI, MapAPI, QueryAPI, SymbologyAPI } from '@/api/internal';
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

        if (!Array.isArray(EsriConfig.request.interceptors)) {
            EsriConfig.request.interceptors = [];
        }

        // This will stop tile services from blasting 404s when tiles don't exist.
        // https://developers.arcgis.com/rest/services-reference/enterprise/map-tile/#request-parameters
        // See issue #2231 for more context.
        // If ESRI ever patches the bug described in that issue then we can probably remove this.
        EsriConfig.request.interceptors.push({
            before: prams => {
                if (prams.url.includes('?blankTile=false')) {
                    prams.url = prams.url.replace('?blankTile=false', '?blankTile=true');
                }
            }
        });
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
