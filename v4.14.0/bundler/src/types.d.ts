import { RampLayerConfig, RampMapConfig } from './geo/api';

/**
 * The configuration object for RAMP apps
 *
 * @interface RampConfig
 */
export interface RampConfig {
    map: RampMapConfig;
    layers: RampLayerConfig[];
    fixtures: { [key: string]: any };
    panels?: {
        open?: {
            id: string;
            screen?: string;
            pin?: boolean;
        }[];
        reorderable?: boolean;
    };
    system?: {
        proxyUrl?: string;
        animate?: boolean;
        exposeOid?: boolean;
        exposeMeasurements?: boolean;
        zoomIcon?: string;
        scrollToInstance?: boolean;
        suppressNumberLocalization?: boolean;
    };
}

/**
 * Multiple configuration objects pertaining to different languages for RAMP apps
 * Can optionally provide a list of starting fixtures to load when RAMP loads
 *
 * @interface RampConfigs
 */
export interface RampConfigs {
    startingFixtures?: string[];
    configs: {
        [key: string]: RampConfig;
    };
}
