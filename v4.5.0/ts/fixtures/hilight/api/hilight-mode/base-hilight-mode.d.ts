import { APIScope, CommonGraphicLayer, InstanceAPI } from '@/api';
import { HilightMode } from '../hilight-defs';
import type { Graphic } from '@/geo/api';
export declare class BaseHilightMode extends APIScope {
    config: any;
    mode: HilightMode;
    constructor(config: any, iApi: InstanceAPI);
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
    /**
     * Returns the Hilight layer.
     */
    getHilightLayer(): Promise<CommonGraphicLayer | undefined>;
    private notImplementedError;
    /**
     * Provides a short grace period to avoid scenarios where the layer is still getting created.
     * Not overly long, as the highlight layer is a local graphics layer so no server lag involved.
     *
     * @returns Promise resolving in the LayerInstace, or undefined if we could not locate the layer.
     */
    private layerFetcher;
}
