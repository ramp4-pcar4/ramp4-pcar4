import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';
import merge from 'deepmerge';
import { RampMapConfig } from 'ramp-geoapi';

import { ConfigState } from './config-state';
import { RootState } from '@/store';
import { LayerStore } from '../layer';
import { RampConfig } from '@/types';

// use for actions
type ConfigContext = ActionContext<ConfigState, RootState>;

const getters = {
    getMapConfig: (state: ConfigState): RampMapConfig => {
        return state.config.map as RampMapConfig;
    }
};

const actions = {
    newConfig: function(this: any, context: ConfigContext, config: RampConfig): void {
        const newConfig = merge(context.state.config, config);
        this.set(LayerStore.addLayers, newConfig.layers);

        context.commit('SET_CONFIG', newConfig);
    }
};

const mutations = {};

/**
 * All string paths for config store Getters, Actions and state
 *
 * @enum {string}
 */
export enum ConfigStore {
    /**
     * `function newConfig(config: RampConfig) => void`
     *
     * Sets the config to be the merge of config and the default
     *
     * `@remarks` Action - use `@Call`
     *
     * `@param` config - The new RAMP config
     */
    newConfig = 'config/newConfig!',
    /**
     * getMapConfig
     *
     * `@remarks` Getter - use `@Get`
     *
     * `@returns` <RampMapConfig> The map portion of the current config
     */
    getMapConfig = 'config/getMapConfig'
}

export function config() {
    const state = new ConfigState({
        config: {
            map: {
                lods: [],
                extent: {
                    xmin: 0,
                    xmax: 0,
                    ymin: 0,
                    ymax: 0,
                    spatialReference: {}
                },
                basemaps: [],
                initialBasemapId: ''
            },
            layers: []
        }
    });

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
