import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';

import { LayerState } from './layer-state';
import { RootState } from '@/store';
import { RampLayerConfig } from 'ramp-geoapi';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';
import LayerBlueprint from './layer-blueprint.class';

import api from '@/api';

// use for actions
type LayerContext = ActionContext<LayerState, RootState>;

const getters = {
    getLayerByUid: (state: LayerState) => (uid: string): BaseLayer | undefined => {
        return state.layers.find((layer: BaseLayer) => layer.getLayerTree().findChildByUid(uid) !== undefined);
    },
    getLayerById: (state: LayerState) => (id: string): BaseLayer | undefined => {
        return state.layers.find((layer: BaseLayer) => layer.id === id);
    }
};

const actions = {
    addLayers: (context: LayerContext, layerConfigs: RampLayerConfig[]) => {
        // TODO we are getting frequent errors at startup; something passes in an
        //      undefined layerConfigs. kicking out for now to make demos work.
        //      possibly this is evil in vue state land. if so, then someone figure out
        //      the root cause and fix that.
        if (!Array.isArray(layerConfigs)) { return; }

        const blueprints: any = [];
        layerConfigs.forEach(layerConfig => {
            blueprints.push(LayerBlueprint.makeBlueprint(layerConfig));
        });
        blueprints.forEach((blueprint: any) => {
            blueprint.makeLayer().then((layer: BaseLayer) => {
                context.commit('ADD_LAYER', layer);
            });
        });
    }
};

const mutations = {
    ADD_LAYER: (state: LayerState, value: BaseLayer) => {
        // copy to new array so watchers will have a reference to the old value
        state.layers = [...state.layers, value]
    }
};

export enum LayerStore {
    /**
     * (Getter) getLayerByUid: (uid: string) => Layer | undefined
     */
    getLayerByUid = 'layer/getLayerByUid',
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
