/* eslint-disable @typescript-eslint/no-unused-vars */

import { APIScope, CommonGraphicLayer, InstanceAPI, LayerInstance } from '@/api';
import { HilightMode, HILIGHT_LAYER_NAME } from '../hilight-defs';
import type { Graphic } from '@/geo/api';

/**
 * Base mode for hilighter modes. On its own, this mode will not hilight anything.
 */
export class BaseHilightMode extends APIScope {
    config: any = {};
    mode: HilightMode = HilightMode.NONE;

    constructor(config: any, iApi: InstanceAPI) {
        super(iApi);
        this.config = config;
        this.mode = config.mode;
    }

    /**
     * Adds the given graphics to the hilighter.
     *
     * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to hilight
     * @returns {Promise} resolves when graphics have been added
     */
    async add(graphics: Array<Graphic> | Graphic): Promise<void> {
        this.notImplementedError('addGraphics');
    }

    /**
     * Removes the given graphics from the hilighter. No parmeter removes all graphics.
     *
     * @param {Graphic | Array<Graphic> | undefined} graphics one or more RAMP Graphics to remove
     * @returns {Promise} resolves when graphics have been added
     */
    async remove(graphics: Array<Graphic> | Graphic | undefined): Promise<void> {
        this.notImplementedError('removeGraphics');
    }

    /**
     * Reload the provided graphics that are currently highlighted.
     *
     * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to reload
     * @returns {Promise} resolves when graphics have been reloaded
     */
    async reloadHilight(graphics: Array<Graphic> | Graphic): Promise<void> {
        this.notImplementedError('reloadHilight');
    }

    /**
     * Returns the Hilight layer, if it exists.
     *
     * @returns {Promise<CommonGraphicLayer | undefined>}
     */
    async getHilightLayer(): Promise<CommonGraphicLayer | undefined> {
        const hilightLayer = await this.layerFetcher();
        if (hilightLayer) {
            if (hilightLayer.isLoaded && hilightLayer instanceof CommonGraphicLayer) {
                return hilightLayer;
            } else {
                console.warn('Hilight layer exists but is in bad form.');
                return undefined;
            }
        } else {
            console.warn('Hilight layer could not be fetched.');
            return undefined;
        }
    }

    private notImplementedError(method: string) {
        console.warn(`Hilight mode method ${method} was not implemented by subclass.`);
    }

    /**
     * Provides a short grace period to avoid scenarios where the layer is still getting created.
     * Not overly long, as the highlight layer is a local graphics layer so no server lag involved.
     *
     * @returns Promise resolving in the LayerInstace, or undefined if we could not locate the layer.
     */
    private layerFetcher(): Promise<LayerInstance | undefined> {
        // code duplication, but lets us avoid a 125ms delay on the initial check. Once layer
        // is loaded that's wasted time.
        const precheckLayer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);
        if (precheckLayer) {
            return Promise.resolve(precheckLayer);
        } else {
            return new Promise(resolve => {
                let timeElapsed = 0;

                const layerWatcher = setInterval(() => {
                    const layer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);
                    if (layer) {
                        clearInterval(layerWatcher);
                        resolve(layer);
                    } else {
                        // layer was not found, take a nap
                        timeElapsed += 125;
                        if (timeElapsed >= 1125) {
                            // to long, game over
                            clearInterval(layerWatcher);
                            resolve(undefined);
                            return;
                        }
                    }
                }, 125);
            });
        }
    }
}
