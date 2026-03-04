import { InstanceAPI } from '../../../../api';
import { Graphic } from '../../../../geo/api';
import { LiftHilightMode } from './lift-hilight-mode';
/**
 * Hilight mode that places a translucent tile beneath a graphics to make them
 * stand out from the rest of the map.
 */
export declare class FogHilightMode extends LiftHilightMode {
    handlers: Array<string>;
    onOpacity: number;
    offOpacity: number;
    private lastAdd;
    constructor(config: any, iApi: InstanceAPI);
    private hilightSetup;
    private updateFogLayer;
    private reorderFogLayer;
    add(graphics: Array<Graphic> | Graphic): Promise<void>;
    remove(graphics?: Array<Graphic> | Graphic | undefined): Promise<void>;
    reloadHilight(graphics: Array<Graphic> | Graphic): Promise<void>;
    /**
     * Returns the "fog" tile layer.
     */
    private getFogLayer;
}
