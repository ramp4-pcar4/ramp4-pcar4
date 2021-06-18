import Vue from 'vue';
import { InstanceAPI, AppVersion } from './internal';
import { GeoCommonAPI } from '@/geo/api/geo-common';
import mixin from './mixin';

export * from './internal';

declare const __VERSION__: AppVersion;

// install/register mixin plugin with Vue, so it's available on all Vue instances
Vue.use(mixin);

// TODO some of the stateless geoapi stuff needs to be still available.
//      e.g. we need default LODs to be there before an instance is created.
//      might as well make the geometry stuff available too? We can always expose later.
//      The files that expose this will need to be in classes that do not require a an instance on the constructor

export interface APIInterface {
    Instance: typeof InstanceAPI;

    /**
     * Version information of R4MP.
     *
     * @type {AppVersion}
     * @memberof APIInterface
     */
    version: AppVersion;

    GEO: GeoCommonAPI;
}

// Load geoapi
// moved from `main-build` since it was being attached to the api object anyways
// TODO revist this after no-dojo migration. this approach might be dumb without geoapi promise
let geocommon: GeoCommonAPI = new GeoCommonAPI(); // TODO: pass in EpsgLookup function here if there is one

const api: APIInterface = {
    Instance: InstanceAPI,

    version: __VERSION__, // this is populated by the build process; see `vue.config.js`

    get GEO(): GeoCommonAPI {
        return geocommon;
    }
};

// export `InstanceApi` as `Instance` on global RAMP interface
export default api as APIInterface;
