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

const gapiPromise = GapiLoader(window);

api.Instance = InstanceAPI;
api.gapiPromise = gapiPromise;

gapiPromise.then((gapi: GeoApi) => {
    api.geoapi = gapi;
});

// export `InstanceApi` as `Instance` on global RAMP interface
export default api as APIInterface;
