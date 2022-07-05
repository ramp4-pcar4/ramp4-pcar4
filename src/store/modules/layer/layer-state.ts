import type { RampLayerConfig } from '@/geo/api';
import type { LayerInstance } from '@/api/internal';

export class LayerState {
    layers: LayerInstance[];
    penaltyBox: LayerInstance[]; // layers in an error state - used by the legend to update entries
    layerConfigs: RampLayerConfig[];

    constructor(layers: LayerInstance[], configs: RampLayerConfig[]) {
        this.layers = layers;
        this.penaltyBox = [];
        this.layerConfigs = configs;
    }
}
