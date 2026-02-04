import type { Graphic } from '@/geo/api';
import { BaseHilightMode } from './base-hilight-mode';
export declare class LiftHilightMode extends BaseHilightMode {
    /**
     * Adds the given graphics to the hilight layer.
     */
    add(graphics: Array<Graphic>): Promise<void>;
    /**
     * Removes the given graphics from the hilight layer.
     */
    remove(graphics: Array<Graphic> | undefined): Promise<void>;
    /**
     * Reload the hilighter's map elements.
     */
    reloadHilight(graphics: Array<Graphic>): Promise<void>;
}
