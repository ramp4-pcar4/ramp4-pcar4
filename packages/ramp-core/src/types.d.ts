import Vue from 'vue';

import { RampLayerConfig, RampMapConfig } from './geo/api';
import { APIInterface, InstanceAPI } from './api';

// extend `ComponentOptions` to accept `iApi` as one of the component options
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        /**
         * A reference to R4MP API instance controlling this R4MP Vue app.
         *
         * @type {InstanceAPI}
         * @memberof ComponentOptions
         */
        iApi?: InstanceAPI;
    }
}

// extend `Vue` to expose `$iApi` as the existing property
declare module 'vue/types/vue' {
    interface Vue {
        /**
         * A reference to R4MP API instance controlling this R4MP Vue app.
         *
         * @type {InstanceAPI}
         * @memberof Vue
         */
        $iApi: InstanceAPI;
    }
}

// extend `window` to expose `RAMP` and `initRAMP`
declare global {
    // this is a convenience shortcut to, so it's possible to use `RAMP.[something]` instead of `window.RAMP.[something]`
    /**
     * Global RAMP api.
     *
     * @type {APIInterface}
     */
    const RAMP: APIInterface;

    interface Window {
        /**
         * Global RAMP api.
         *
         * @type {APIInterface}
         * @memberof Window
         */
        RAMP: APIInterface;

        /**
         * An optional callback function defined by the host page to be run when RAMP is fully loaded and geoapi is available.
         *
         * @memberof Window
         */
        initRAMP?: () => void;

        Vue: typeof Vue;
    }
}

/**
 * The configuration object for RAMP apps
 *
 * @interface RampConfig
 */
export interface RampConfig {
    map: RampMapConfig;
    layers: RampLayerConfig[];
    fixtures: { [key: string]: any };
}

/**
 * Multiple configuration objects pertaining to different languages for RAMP apps
 *
 * @interface RampConfigs
 */
export interface RampConfigs {
    [key: string]: RampConfig;
}
