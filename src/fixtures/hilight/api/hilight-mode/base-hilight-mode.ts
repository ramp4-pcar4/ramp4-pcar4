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
    async remove(graphics?: Array<Graphic>) {
        this.notImplementedError('removeGraphics');
    }

    /**
     * Reload the hilighter's map elements.
     */
    async reloadHilight(graphics: Array<Graphic>) {}

    /**
     * Returns the Hilight layer.
     */
    async getHilightLayer(): Promise<CommonGraphicLayer | undefined> {
        const hilightLayer = await this.layerGetterFuntime();
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
            'Hilight mode method {method} was not implemented by subclass.'
        );
    }

    private layerGetterFuntime(): Promise<LayerInstance | undefined> {
        // TODO rename and adapt below comment to jsdoc if we keep this.

        // Makes getting the layer async, and adds a bit of buffer incase things were slow.
        // But not a lot (1.1 seconds), since it's graphics layer it has no server call to wait on;
        // should be really snappy. If it's too slow we do the grouse

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
