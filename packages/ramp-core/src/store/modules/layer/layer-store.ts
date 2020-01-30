import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';

import { LayerState } from './layer-state';
import { RootState } from '@/store';
import { RampLayerConfig } from 'ramp-geoapi';
import FeatureLayer from 'ramp-geoapi/dist/layer/FeatureLayer';

// use for actions
type LayerContext = ActionContext<LayerState, RootState>;

interface actions {
    [key: string]: Action<LayerState, RootState>;
}

const state: LayerState = {
    layers: []
};

const getters = {
    getLayerById: (state: LayerState) => (id: string): FeatureLayer | undefined => {
        return state.layers.find((layer: FeatureLayer) => layer.uid === id);
    }
};

const actions: actions = {
    addLayers: (context: LayerContext, layerConfigs: RampLayerConfig[]) => {
        layerConfigs.forEach(layerConfig => {
            context.commit('ADD_LAYER', (window as any).RAMP.geoapi.layers.createFeatureLayer(layerConfig));
        });
    },

    ...make.actions(state)
};

const mutations = {
    ADD_LAYER: (state: LayerState, value: FeatureLayer) => {
        state.layers.push(value);
    },

    ...make.mutations(state)
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

export const layer = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
