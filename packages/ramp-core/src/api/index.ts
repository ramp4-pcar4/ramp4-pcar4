import { InstanceAPI } from './internal';
import GapiLoader, { GeoApi } from 'ramp-geoapi';

interface APIInterface {
    Instance: typeof InstanceAPI;
    geoapi: GeoApi;
    gapiPromise: Promise<GeoApi>;
}

let api: any = {};

const gapiPromise = GapiLoader(window);

api.Instance = InstanceAPI;
api.gapiPromise = gapiPromise;

gapiPromise.then((gapi: GeoApi) => {
    api.geoapi = gapi;
});

// export `InstanceApi` as `Instance` on global RAMP interface
export default api as APIInterface;
