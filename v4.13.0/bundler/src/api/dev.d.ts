import { APIScope, InstanceAPI, LayerInstance } from './internal';
import { RampLayerConfig } from '../geo/api';
/**
 * Contains endpoints useful for dev debugging and such
 */
export declare class DevAPI extends APIScope {
    constructor(iApi: InstanceAPI);
    /**
     * Add a layer to the map and legend (if legend exists)
     *
     * @param layerConfig a RAMP layer configuration object
     * @param [legendConfig] optional legend block configuration object. If not provided, a default layer block will be created
     * @returns resolves with the layer instance
     */
    easyLayer(layerConfig: RampLayerConfig, legendConfig?: any): Promise<LayerInstance>;
}
