export const HILIGHT_LAYER_NAME = 'Ramp-Hilight';
export const FOG_HILIGHT_LAYER_NAME = 'Ramp-Hilight-Fog-Basemap';

export const DEFAULT_CONFIG = {
    mode: 'glow',
    options: {
        haloColor: [0, 255, 0], // lime green
        haloOpacity: 0.8
    }
};

export const enum HilightMode {
    NONE = 'none', // no hilight
    GLOW = 'glow', // an ESRI highlight
    LIFT = 'lift', // adds identified graphics to the hilightlayer
    FOG = 'fog' // dims non-hilighted geometries
}

export interface HilightConfig {
    mode: HilightMode;
    options: any; // options for the specified hilight mode
}
