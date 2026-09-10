import { InstanceAPI } from '../../../../api';
import { Graphic } from '../../../../geo/api';
import { LiftHilightMode } from './lift-hilight-mode';
/**
 * Hilight mode that lifts graphics and applies a glow outline to make them
 * stand out from the rest of the map.
 */
export declare class GlowHilightMode extends LiftHilightMode {
    handlers: Array<string>;
    constructor(config: any, iApi: InstanceAPI);
    private hilightSetup;
    add(graphics: Array<Graphic> | Graphic): Promise<void>;
    remove(graphics?: Array<Graphic> | Graphic | undefined): Promise<void>;
}
