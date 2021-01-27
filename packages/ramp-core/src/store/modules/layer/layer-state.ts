import { LayerInstance, RampLayerConfig } from '@/geo/internal';

export class LayerState {
    layers: LayerInstance[];
    layerConfigs: RampLayerConfig[];

    constructor(layers: LayerInstance[], configs: RampLayerConfig[]) {
        this.layers = layers;
        this.layerConfigs = configs;
    }
}
