import Vue from 'vue';
import GapiLoader, { GeoApi } from 'ramp-geoapi';

import { InstanceAPI, AppVersion } from './internal';
import mixin from './mixin';

export * from './internal';

declare const __VERSION__: AppVersion;

// install/register mixin plugin with Vue, so it's available on all Vue instances
Vue.use(mixin);

export interface APIInterface {
    Instance: typeof InstanceAPI;
    geoapi: GeoApi;
    gapiPromise: Promise<GeoApi>;

    /**
     * Version information of R4MP.
     *
     * @type {AppVersion}
     * @memberof APIInterface
     */
    version: AppVersion;
}

// Load geoapi
// moved from `main-build` since it was being attached to the api object anyways
let geoapi: GeoApi;
const gapiPromise = GapiLoader(window);
gapiPromise.then((gapi: GeoApi) => {
    geoapi = gapi;
});

const api: APIInterface = {
    Instance: InstanceAPI,
    gapiPromise,
    get geoapi(): GeoApi {
        if (typeof geoapi === 'undefined') {
            throw new Error("Attempting to access `geoapi` before it's resolved. Use `initRamp` global function instead.");
        }

        return geoapi;
    },
    version: __VERSION__ // this is populated by the build process; see `vue.config.js`
};

// export `InstanceApi` as `Instance` on global RAMP interface
export default api as APIInterface;
