import type { RampLayerConfig } from '@/geo/api';
import type { LayerInstance } from '@/api/internal';

export class LayerState {
    /** @property {LayerInstance[]} layers the layers that were initiated successfully */
    layers: LayerInstance[];
    /** @property {LayerInstance[]} penaltyBox the layers in an error state */
    penaltyBox: LayerInstance[];
    /** @property {LayerInstance[]} layerConfigs configs for layers */
    layerConfigs: RampLayerConfig[];

    constructor(layers: LayerInstance[], configs: RampLayerConfig[]) {
        this.layers = layers;
        this.penaltyBox = [];
        this.layerConfigs = configs;
    }
}
