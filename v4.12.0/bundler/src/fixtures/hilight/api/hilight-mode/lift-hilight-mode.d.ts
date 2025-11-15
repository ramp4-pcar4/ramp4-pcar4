import { Graphic } from '../../../../geo/api';
import { BaseHilightMode } from './base-hilight-mode';
/**
 * Hilight mode that places graphics in a top-most layer, essentially "lifting" them
 * above other map elements.
 */
export declare class LiftHilightMode extends BaseHilightMode {
    add(graphics: Array<Graphic> | Graphic): Promise<void>;
    remove(graphics: Array<Graphic> | Graphic | undefined): Promise<void>;
    reloadHilight(graphics: Array<Graphic> | Graphic): Promise<void>;
}
