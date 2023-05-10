/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    APIScope,
    CommonGraphicLayer,
    InstanceAPI,
    LayerInstance
} from '@/api';
import { HilightMode, HILIGHT_LAYER_NAME } from '../hilight-defs';
import type { Graphic } from '@/geo/api';

// This hilight mode does nothing
export class BaseHilightMode extends APIScope {
    config: any = {};
    mode: HilightMode = HilightMode.NONE;

    constructor(config: any, iApi: InstanceAPI) {
        super(iApi);
        this.config = config;
        this.mode = config.mode;
    }

    /**
     * Adds the given graphics to the hilight layer.
     */
    async add(graphics: Array<Graphic>) {
        this.notImplementedError('addGraphics');
    }

    /**
     * Removes the given graphics from the hilight layer.
     */
    async remove(graphics: Array<Graphic> | undefined) {
        this.notImplementedError('removeGraphics');
    }

    /**
     * Reload the hilighter's map elements.
     */
    async reloadHilight(graphics: Array<Graphic>) {
        this.notImplementedError('reloadHilight');
    }

    /**
     * Returns the Hilight layer.
     */
    async getHilightLayer(): Promise<CommonGraphicLayer | undefined> {
        const hilightLayer = await this.layerFetcher();
        if (hilightLayer) {
            if (
                hilightLayer.isLoaded &&
                hilightLayer instanceof CommonGraphicLayer
            ) {
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
        console.warn(
            `Hilight mode method ${method} was not implemented by subclass.`
        );
    }

    /**
     * Provides a short grace period to avoid scenarios where the layer is still getting created.
     * Not overly long, as the highlight layer is a local graphics layer so no server lag involved.
     *
     * @returns Promise resolving in the LayerInstace, or undefined if we could not locate the layer.
     */
    private layerFetcher(): Promise<LayerInstance | undefined> {
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
