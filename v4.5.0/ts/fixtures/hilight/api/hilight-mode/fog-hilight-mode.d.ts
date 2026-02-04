import { type InstanceAPI } from '@/api';
import { type Graphic } from '@/geo/api';
import { LiftHilightMode } from './lift-hilight-mode';
export declare class FogHilightMode extends LiftHilightMode {
    handlers: Array<string>;
    onOpacity: number;
    offOpacity: number;
    private lastAdd;
    constructor(config: any, iApi: InstanceAPI);
    private hilightSetup;
    private updateFogLayer;
    private reorderFogLayer;
    /**
     * Adds the given graphics to the hilight layer.
     */
    add(graphics: Array<Graphic>): Promise<void>;
    /**
     * Removes the given graphics from the hilight layer.
     */
    remove(graphics?: Array<Graphic>): Promise<void>;
    reloadHilight(graphics: Array<Graphic>): Promise<void>;
    /**
     * Returns the Hilight layer.
     */
    private getFogLayer;
}
