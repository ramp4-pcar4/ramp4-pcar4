// the structure of the geo element of the RAMP API

import {
    APIScope,
    AttributeAPI,
    GlobalEvents,
    InstanceAPI,
    LayerAPI,
    MapAPI,
    NotificationType,
    QueryAPI,
    SymbologyAPI
} from '@/api/internal';
import { geo } from '@/main';
import { Point, SpatialReference } from '@/geo/api';
import type { GeometryAPI, ProjectionAPI, SharedUtilsAPI } from '@/geo/api';
import { EsriConfig } from '@/geo/esri';

interface GeolocationResult {
    success: boolean;
    coord?: Point | undefined;
    error?: 'permission' | 'internal';
}

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

    /**
     * Stores any geolocation result to avoid multiple hits
     * @private
     */
    private glCoord: Array<number> = [];

    // These exist in all browsers but aren't predefined, so this tells eslint everything is a-ok
    /* global GeolocationPosition, GeolocationPositionError, PositionOptions */

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
    async getGeolocation(hideFailNotification: boolean = false): Promise<GeolocationResult> {
        // prompt user to geolocate via browser
        const browserLocate = (options: PositionOptions): Promise<GeolocationPosition> => {
            return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options));
        };

        const greatSuccess = (): GeolocationResult => ({
            success: true,
            coord: new Point('geolocation', this.glCoord, SpatialReference.latLongSR(), true)
        });

        let resultObj: GeolocationResult;

        // use cached location
        if (this.glCoord.length) {
            resultObj = greatSuccess();
        } else {
            // request current location from browser
            const positionOrError = await browserLocate({
                maximumAge: Infinity,
                timeout: 5000
            }).catch((error: GeolocationPositionError) => {
                return error.code === GeolocationPositionError.PERMISSION_DENIED ? 'permission' : 'internal';
            });

            if (!positionOrError || typeof positionOrError === 'string') {
                // got a nothing result or the .catch hit

                const safeError = positionOrError || 'internal';

                if (!hideFailNotification) {
                    // lang key search helpers:  mapnav.geolocator.error.permission  mapnav.geolocator.error.internal

                    this.$iApi.notify.show(
                        NotificationType.ERROR,
                        this.$iApi.$i18n.t('mapnav.geolocator.error.' + safeError)
                    );
                }
                resultObj = { success: false, error: safeError };
            } else {
                // store geolocation as array for speedy zoomIn
                this.glCoord = [positionOrError.coords.longitude, positionOrError.coords.latitude];
                resultObj = greatSuccess();
            }
        }

        this.$iApi.event.emit(GlobalEvents.MAP_GEOLOCATE, resultObj);

        return resultObj;
    }
}
