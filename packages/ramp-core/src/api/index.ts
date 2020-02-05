import Vue from 'vue';
import GapiLoader, { GeoApi } from 'ramp-geoapi';

import { InstanceAPI } from './internal';
import mixin from './mixin';

export * from './internal';

// install/register mixin plugin with Vue, so it's available on all Vue instances
Vue.use(mixin);

interface APIInterface {
    Instance: typeof InstanceAPI;
    geoapi: GeoApi;
    gapiPromise: Promise<GeoApi>;
}

let api: any = {};

api.Instance = InstanceAPI;

// Load geoapi
// moved from `main-build` since it was being attached to the api object anyways
const gapiPromise = GapiLoader(window);
api.gapiPromise = gapiPromise;

gapiPromise.then((gapi: GeoApi) => {
    api.geoapi = gapi;
});

// export `InstanceApi` as `Instance` on global RAMP interface
export default api as APIInterface;
