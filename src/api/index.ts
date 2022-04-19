// this file defines the global `RAMP` interface that can be accessed outside of a ramp instance.

import { configUpgrade2to4, InstanceAPI } from './internal';
import { GeoCommonAPI } from '@/geo/api/geo-common';

export * from './internal';

export interface APIInterface {
    Instance: typeof InstanceAPI;

    /**
     * Version information of R4MP.
     *
     * @type {AppVersion}
     * @memberof APIInterface
     */
    version: typeof __VERSION__;

    /**
     * Common Geo classes and utilities not tied to a RAMP instance
     */
    GEO: GeoCommonAPI;

    /**
     * Will attempt to upgrade a RAMP2/3 config object (or an array of configs, one per language)
     * to a RAMP4 config object.
     */
    configUpgrade(ramp2Config: any | Array<any>): any;
}

export const geocommon: GeoCommonAPI = new GeoCommonAPI();

const api: APIInterface = {
    Instance: InstanceAPI,

    version: __VERSION__,

    get GEO(): GeoCommonAPI {
        return geocommon;
    },

    configUpgrade(ramp2Config: any | Array<any>): any {
        return configUpgrade2to4(ramp2Config);
    }
};

// export `InstanceApi` as `Instance` on global RAMP interface
export default api as APIInterface;
