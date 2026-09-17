export declare const HILIGHT_LAYER_NAME = "Ramp-Hilight";
export declare const FOG_HILIGHT_LAYER_NAME = "Ramp-Hilight-Fog-Basemap";
export declare const DEFAULT_CONFIG: {
    mode: string;
    options: {
        haloColor: number[];
        haloOpacity: number;
    };
};
export declare const enum HilightMode {
    NONE = "none",// no hilight
    GLOW = "glow",// an ESRI highlight
    LIFT = "lift",// adds identified graphics to the hilightlayer
    FOG = "fog"
}
export interface HilightConfig {
    mode: HilightMode;
    options: any;
}
