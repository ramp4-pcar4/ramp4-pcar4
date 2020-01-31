import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';

import { LayerState } from './layer-state';
import { RootState } from '@/store';
import { RampLayerConfig } from 'ramp-geoapi';
import FeatureLayer from 'ramp-geoapi/dist/layer/FeatureLayer';

// use for actions
type LayerContext = ActionContext<LayerState, RootState>;

const getters = {
    getLayerById: (state: LayerState) => (id: string): FeatureLayer | undefined => {
        return state.layers.find((layer: FeatureLayer) => layer.uid === id);
    }
};

const actions = {
    addLayers: (context: LayerContext, layerConfigs: RampLayerConfig[]) => {
        layerConfigs.forEach(layerConfig => {
            context.commit('ADD_LAYER', (window as any).RAMP.geoapi.layers.createFeatureLayer(layerConfig));
        });
    }
};

const mutations = {
    ADD_LAYER: (state: LayerState, value: FeatureLayer) => {
        state.layers.push(value);
    }
};

export enum LayerStore {
    /**
     * (Getter) getLayerById: (id: string) => Layer | undefined
     */
    getLayerById = 'layer/getLayerById',
    /**
     * (State) layers: Layer[]
     */
    layers = 'layer/layers',
    /**
     * (Action) addLayers: (layerConfigs: RampLayerConfig[])
     */
    addLayers = 'layer/addLayers!'
}

export function layer() {
    const state = new LayerState([]);

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
