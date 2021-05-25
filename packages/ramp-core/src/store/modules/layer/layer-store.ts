import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';

import { LayerState } from './layer-state';
import { RootState } from '@/store';

import { RampLayerConfig } from '@/geo/api';
import { LayerInstance } from '@/api/internal';

import api from '@/api'; // this is the external ramp api, not the instance api

// TODO we have "Layer" referenced as a layer baseclass in a lot of comments. Update it to whatever is appropriate and accurate.

// NOTE
// on the wonkyness of new changes here.
// in old version, layer store would take layer configs, generate layers from layer blueprints, and store the layers.
// the layer blueprints were sort of stand alone hardcoded classes lurking inside the layer state folder.
// now that layer definitions are loaded like fixtures, we can't do this.
// also it appears we cant (or shouldn't) reference the $iApi from inside the state.
// the new approach (which might be wrong but is working for now) is the layer state
// handles both the layer configs and the layers.
// the esri-map module watches the layer configs, when it sees a new config, it then instantiates the layer
// (using $iApi), and stores the layer back into the store as well.
// possible changes by smarter people:
// - have the layer config store relocated to the config store
// - have a way for the layer store to access and run the layer definitions from the iApi
// - restructure the layer definitions manager on the iApi so that the definitions are inside the store.
//   might be tricky, as this part also needs to know to load new definitions on demand

// use for actions
type LayerContext = ActionContext<LayerState, RootState>;

const getters = {
    getLayerByUid: (state: LayerState) => (
        uid: string
    ): LayerInstance | undefined => {
        return state.layers.find(
            (layer: LayerInstance) =>
                layer.getLayerTree().findChildByUid(uid) !== undefined
        );
    },
    getLayerById: (state: LayerState) => (
        id: string
    ): LayerInstance | undefined => {
        return state.layers.find((layer: LayerInstance) => layer.id === id);
    }
};

const actions = {
    addLayerConfigs: (
        context: LayerContext,
        layerConfigs: RampLayerConfig[]
    ) => {
        // TODO we are getting frequent errors at startup; something passes in an
        //      undefined layerConfigs. kicking out for now to make demos work.
        //      possibly this is evil in vue state land. if so, then someone figure out
        //      the root cause and fix that.
        if (!Array.isArray(layerConfigs)) {
            return;
        }
        layerConfigs.forEach(lc => {
            context.commit('ADD_LAYER_CONFIG', lc);
        });
    },
    addLayers: (context: LayerContext, layers: LayerInstance[]) => {
        // TODO we are getting frequent errors at startup; something passes in an
        //      undefined layerConfigs. kicking out for now to make demos work.
        //      possibly this is evil in vue state land. if so, then someone figure out
        //      the root cause and fix that.
        if (!Array.isArray(layers)) {
            return;
        }

        layers.forEach(l => {
            context.commit('ADD_LAYER', l);
        });

        // TODO clean this up

        // plan for the moment.
        // looks like we can't access $iApi here in the store.
        // the old code used LayerBlueprint, which is a standalone factory and didn't need the api
        // suggesting the following:
        // have esrimap watch the layerconfig array as well.
        // when it sees the change, it does the layer registration and generation (might as well also add it to the map)
        // then it puts the new layer in the layer store (and we erase the existing listener). need to figure out how to do this.
        // something like this.$vApp.$store.set(ConfigStore.newConfig, defaultConfig !== undefined ? defaultConfig : undefined);

        /*
        const loadproms = [];
        layerConfigs.forEach(layerConfig => {
            if (api.)
            loadproms.push(LayerBlueprint.makeBlueprint(layerConfig));
        });
        */

        // old code
        /*
        const blueprints: any = [];
        layerConfigs.forEach(layerConfig => {
            blueprints.push(LayerBlueprint.makeBlueprint(layerConfig));
        });
        blueprints.forEach((blueprint: any) => {
            blueprint.makeLayer().then((layer: LayerBase) => {
                context.commit('ADD_LAYER', layer);
            });
        });
        */
    }
};

const mutations = {
    ADD_LAYER_CONFIG: (state: LayerState, value: RampLayerConfig) => {
        // copy to new array so watchers will have a reference to the old value
        state.layerConfigs = [...state.layerConfigs, value];
    },
    ADD_LAYER: (state: LayerState, value: LayerInstance) => {
        // copy to new array so watchers will have a reference to the old value
        state.layers = [...state.layers, value];
    }
};

export enum LayerStore {
    /**
     * (Getter) getLayerByUid: (uid: string) => LayerInstance | undefined
     */
    getLayerByUid = 'layer/getLayerByUid',
    /**
     * (Getter) getLayerById: (id: string) => LayerInstance | undefined
     */
    getLayerById = 'layer/getLayerById',
    /**
     * (State) layers: LayerInstance[]
     */
    layers = 'layer/layers',
    /**
     * (Action) addLayers: (layers: LayerInstance[])
     */
    addLayers = 'layer/addLayers!',
    /**
     * (State) layerConfigs: RampLayerConfig[]
     */
    layerConfigs = 'layer/layerConfigs',
    /**
     * (Action) addLayerConfigs: (layerConfigs: RampLayerConfig[])
     */
    addLayerConfigs = 'layer/addLayerConfigs!'
}

export function layer() {
    const state = new LayerState([], []);

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
