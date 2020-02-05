import FeatureLayer from 'ramp-geoapi/dist/layer/FeatureLayer';

export class LayerState {
    layers: FeatureLayer[];

    constructor(layers: FeatureLayer[]) {
        this.layers = layers;
    }
}
