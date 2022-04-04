export const HILIGHT_LAYER_NAME = 'Ramp-Hilight';

export const DEFAULT_CONFIG = {
    mode: 'glow',
    options: {
        haloColor: [0, 255, 0], // lime green
        haloOpacity: 0.8
    }
};

export enum HilightMode {
    NONE = 'none', // no hilight
    GLOW = 'glow', // an ESRI highlight
    LIFT = 'lift' // adds identified graphics to the hilightlayer
}

export interface HilightConfig {
    mode: HilightMode;
    options: any; // options for the specified hilight mode
}
