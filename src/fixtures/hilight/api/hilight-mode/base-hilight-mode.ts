import { APIScope, CommonGraphicLayer, InstanceAPI } from '@/api';
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
     * Returns the Hilight layer.
     */
    getHilightLayer(): CommonGraphicLayer | undefined {
        const hilightLayer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);
        if (hilightLayer && hilightLayer instanceof CommonGraphicLayer) {
            return hilightLayer;
        } else {
            console.warn('hilight layer could not be fetched.');
            return undefined;
        }
    }

    private notImplementedError(method: string) {
        console.warn(
            'Hilight mode method {method} was not implemented by subclass.'
        );
    }
}
