import { APIScope, CommonGraphicLayer, InstanceAPI } from '../../../../api';
import { HilightMode } from '../hilight-defs';
import { Graphic } from '../../../../geo/api';
/**
 * Base mode for hilighter modes. On its own, this mode will not hilight anything.
 */
export declare class BaseHilightMode extends APIScope {
    config: any;
    mode: HilightMode;
    constructor(config: any, iApi: InstanceAPI);
    /**
     * Adds the given graphics to the hilighter.
     *
     * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to hilight
     * @returns {Promise} resolves when graphics have been added
     */
    add(graphics: Array<Graphic> | Graphic): Promise<void>;
    /**
     * Removes the given graphics from the hilighter. No parmeter removes all graphics.
     *
     * @param {Graphic | Array<Graphic> | undefined} graphics one or more RAMP Graphics to remove
     * @returns {Promise} resolves when graphics have been added
     */
    remove(graphics: Array<Graphic> | Graphic | undefined): Promise<void>;
    /**
     * Reload the provided graphics that are currently highlighted.
     *
     * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to reload
     * @returns {Promise} resolves when graphics have been reloaded
     */
    reloadHilight(graphics: Array<Graphic> | Graphic): Promise<void>;
    /**
     * Returns the Hilight layer, if it exists.
     *
     * @returns {Promise<CommonGraphicLayer | undefined>}
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
