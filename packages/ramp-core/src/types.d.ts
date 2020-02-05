import { GeoApi, RampLayerConfig, RampMapConfig } from 'ramp-geoapi';

/**
 * The global window object enhanced with RAMP
 *
 * @interface EnhancedWindow
 * @extends Window
 */
export interface EnhancedWindow extends Window {
    RAMP: any;
}

/**
 * The configuration object for RAMP apps
 *
 * @interface RampConfig
 */
export interface RampConfig {
    map: RampMapConfig;
    layers: RampLayerConfig[];
}
