import { InstanceAPI } from '@/api';
import type { Graphic } from '@/geo/api';
import { LiftHilightMode } from './lift-hilight-mode';
export declare class GlowHilightMode extends LiftHilightMode {
    handlers: Array<string>;
    constructor(config: any, iApi: InstanceAPI);
    private hilightSetup;
    /**
     * Adds the given graphics to the hilight layer.
     */
    add(graphics: Array<Graphic>): Promise<void>;
    /**
     * Removes the given graphics from the hilight layer.
     */
    remove(graphics?: Array<Graphic>): Promise<void>;
}
